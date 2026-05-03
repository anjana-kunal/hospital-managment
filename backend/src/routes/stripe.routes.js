import { Router } from 'express';
import Stripe from 'stripe';
import { z } from 'zod';
import { env } from '../config/env.js';
import { prisma } from '../config/prisma.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { HttpError } from '../utils/httpError.js';
import { writeAuditLog } from '../utils/audit.js';

const stripe = env.stripeSecretKey
  ? new Stripe(env.stripeSecretKey, { apiVersion: '2024-06-20' })
  : null;

const router = Router();

function requireStripe() {
  if (!stripe) {
    throw new HttpError(503, 'Stripe is not configured on the server');
  }

  return stripe;
}

function formatCurrencyAmount(cents, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

const checkoutSessionSchema = z.object({
  body: z.object({
    amountCents: z.number().int().min(50, 'Minimum charge is $0.50'),
    currency: z.string().trim().min(3).max(3).default('usd'),
    description: z.string().trim().min(1).max(160).optional(),
    appointmentId: z.string().trim().optional(),
    invoiceId: z.string().trim().optional(),
    bookingData: z.object({
      doctor: z.string().trim().optional(),
      specialty: z.string().trim().optional(),
      date: z.string().trim().optional(),
      time: z.string().trim().optional(),
      type: z.string().trim().optional(),
      fee: z.string().trim().optional(),
    }).optional(),
  }),
  query: z.object({}).passthrough(),
  params: z.object({}).passthrough(),
});

router.post(
  '/checkout-session',
  validate(checkoutSessionSchema),
  asyncHandler(async (req, res) => {
    const stripeClient = requireStripe();
    const { amountCents, currency, description, appointmentId, invoiceId, bookingData } = req.validated.body;
    const normalizedCurrency = currency.toLowerCase();
    const productName = description || 'MedCore Health appointment';
    const feeLabel = bookingData?.fee || formatCurrencyAmount(amountCents, normalizedCurrency);

    const session = await stripeClient.checkout.sessions.create({
      mode: 'payment',
      success_url: `${env.clientOrigin}/booking_confirmed_medcore_health?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.clientOrigin}/payment_wall_medcore_health?checkout=cancelled`,
      billing_address_collection: 'auto',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: normalizedCurrency,
            unit_amount: amountCents,
            product_data: {
              name: productName,
              description: [
                bookingData?.doctor,
                bookingData?.specialty,
                bookingData?.date && bookingData?.time
                  ? `${bookingData.date} at ${bookingData.time}`
                  : bookingData?.date || bookingData?.time,
                bookingData?.type,
              ].filter(Boolean).join(' | '),
            },
          },
        },
      ],
      metadata: {
        ...(appointmentId ? { appointmentId } : {}),
        ...(invoiceId ? { invoiceId } : {}),
        ...(bookingData?.doctor ? { doctor: bookingData.doctor } : {}),
        ...(bookingData?.specialty ? { specialty: bookingData.specialty } : {}),
        ...(bookingData?.date ? { appointmentDate: bookingData.date } : {}),
        ...(bookingData?.time ? { appointmentTime: bookingData.time } : {}),
        ...(bookingData?.type ? { appointmentType: bookingData.type } : {}),
        feeLabel,
      },
      payment_intent_data: {
        metadata: {
          ...(appointmentId ? { appointmentId } : {}),
          ...(invoiceId ? { invoiceId } : {}),
        },
      },
      custom_text: {
        submit: {
          message: 'You will complete payment on Stripe’s secure checkout page.',
        },
      },
    });

    res.json({
      success: true,
      data: {
        sessionId: session.id,
        url: session.url,
      },
    });
  })
);

router.get(
  '/checkout-session/:sessionId',
  asyncHandler(async (req, res) => {
    const stripeClient = requireStripe();
    const session = await stripeClient.checkout.sessions.retrieve(req.params.sessionId, {
      expand: ['payment_intent'],
    });

    res.json({
      success: true,
      data: {
        id: session.id,
        status: session.status,
        paymentStatus: session.payment_status,
        customerEmail: session.customer_details?.email || session.customer_email || null,
        amountTotal: session.amount_total,
        currency: session.currency,
        metadata: session.metadata,
      },
    });
  })
);

// ── Create PaymentIntent ────────────────────────────────────────────────────
const createIntentSchema = z.object({
  body: z.object({
    amountCents: z.number().int().min(50, 'Minimum charge is $0.50'), // Stripe minimum
    currency: z.string().default('usd'),
    description: z.string().optional(),
    appointmentId: z.string().optional(),
    invoiceId: z.string().optional(),
  }),
  query: z.object({}).passthrough(),
  params: z.object({}).passthrough(),
});

router.post(
  '/create-payment-intent',
  authenticate,
  validate(createIntentSchema),
  asyncHandler(async (req, res) => {
    const stripeClient = requireStripe();
    const { amountCents, currency, description, appointmentId, invoiceId } =
      req.validated.body;

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: amountCents,
      currency: currency || 'usd',
      description: description || 'MedCore Health – Appointment Fee',
      metadata: {
        userId: req.user.id,
        ...(appointmentId ? { appointmentId } : {}),
        ...(invoiceId ? { invoiceId } : {}),
      },
      automatic_payment_methods: { enabled: true },
    });

    res.json({ success: true, clientSecret: paymentIntent.client_secret });
  })
);

// ── Confirm payment recorded in DB (called after Stripe succeeds client-side) ─
const confirmPaymentSchema = z.object({
  body: z.object({
    paymentIntentId: z.string().min(1),
    invoiceId: z.string().optional(),
    amount: z.number(),
  }),
  query: z.object({}).passthrough(),
  params: z.object({}).passthrough(),
});

router.post(
  '/confirm-payment',
  authenticate,
  validate(confirmPaymentSchema),
  asyncHandler(async (req, res) => {
    const stripeClient = requireStripe();
    const { paymentIntentId, invoiceId, amount } = req.validated.body;

    // Verify with Stripe that the PaymentIntent truly succeeded
    const pi = await stripeClient.paymentIntents.retrieve(paymentIntentId);
    if (pi.status !== 'succeeded') {
      throw new HttpError(400, `Payment not confirmed by Stripe (status: ${pi.status})`);
    }

    let payment = null;

    if (invoiceId) {
      const invoice = await prisma.invoice.findUnique({ where: { id: invoiceId } });
      if (!invoice) throw new HttpError(404, 'Invoice not found');

      const amountPaid = Number(invoice.amountPaid) + Number(amount);
      const total = Number(invoice.total);

      payment = await prisma.$transaction(async (tx) => {
        const p = await tx.payment.create({
          data: {
            invoiceId,
            amount,
            method: 'CARD',
            status: 'SUCCESS',
            transactionRef: paymentIntentId,
          },
        });

        await tx.invoice.update({
          where: { id: invoiceId },
          data: {
            amountPaid,
            status: amountPaid >= total ? 'PAID' : 'PARTIALLY_PAID',
            paidAt: amountPaid >= total ? new Date() : undefined,
          },
        });

        return p;
      });

      await writeAuditLog({
        req,
        action: 'CREATE',
        entity: 'Payment',
        entityId: payment.id,
        metadata: { paymentIntentId, invoiceId, amount },
      });
    }

    res.json({
      success: true,
      message: 'Payment confirmed and recorded',
      data: { paymentIntentId, status: pi.status, payment },
    });
  })
);

export default router;
