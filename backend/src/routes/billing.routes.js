import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { makeCode } from '../utils/codes.js';
import { calculateInvoiceTotals } from '../utils/invoice.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

router.get('/invoices', authorize('PATIENT', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...(req.user.role === 'PATIENT' ? { patientId: req.user.patient?.id || '__none__' } : {}),
    ...(req.query.patientId ? { patientId: req.query.patientId } : {}),
    ...(req.query.status ? { status: req.query.status } : {}),
  };
  const [data, total] = await Promise.all([
    prisma.invoice.findMany({
      where,
      skip,
      take: limit,
      orderBy: { issuedAt: 'desc' },
      include: { patient: true, items: true, payments: true },
    }),
    prisma.invoice.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.post('/invoices', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const items = req.body.items || [];
  const { subtotal, total } = calculateInvoiceTotals(items, req.body.tax, req.body.discount);
  const data = await prisma.invoice.create({
    data: {
      invoiceNumber: makeCode('INV'),
      patientId: req.body.patientId,
      appointmentId: req.body.appointmentId,
      status: req.body.status || 'ISSUED',
      subtotal,
      tax: req.body.tax || 0,
      discount: req.body.discount || 0,
      total,
      dueDate: req.body.dueDate ? new Date(req.body.dueDate) : undefined,
      items: {
        create: items.map((item) => ({
          description: item.description,
          quantity: item.quantity || 1,
          unitPrice: item.unitPrice,
          total: Number(item.quantity || 1) * Number(item.unitPrice || 0),
        })),
      },
    },
    include: { patient: true, items: true },
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'Invoice', entityId: data.id, metadata: req.body });

  res.status(201).json({ success: true, data });
}));

router.post('/invoices/:id/payments', authorize('PATIENT', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const invoice = await prisma.invoice.findUnique({ where: { id: req.params.id } });
  const amountPaid = Number(invoice.amountPaid) + Number(req.body.amount);
  const total = Number(invoice.total);

  const data = await prisma.$transaction(async (tx) => {
    const payment = await tx.payment.create({
      data: {
        invoiceId: req.params.id,
        amount: req.body.amount,
        method: req.body.method,
        status: req.body.status || 'SUCCESS',
        transactionRef: req.body.transactionRef,
      },
    });

    await tx.invoice.update({
      where: { id: req.params.id },
      data: {
        amountPaid,
        status: amountPaid >= total ? 'PAID' : 'PARTIALLY_PAID',
        paidAt: amountPaid >= total ? new Date() : undefined,
      },
    });

    return payment;
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'Payment', entityId: data.id, metadata: req.body });

  res.status(201).json({ success: true, data });
}));

export default router;
