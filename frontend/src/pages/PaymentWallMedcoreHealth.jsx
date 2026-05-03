import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

const DEFAULT_BOOKING = {
  doctor: 'Dr. Sarah Jenkins',
  specialty: 'Cardiology Specialist',
  date: 'May 10, 2026',
  time: '10:00 AM',
  type: 'Virtual Telehealth',
  fee: '$150.00',
};

function parseAmountCents(fee) {
  const numeric = Number(String(fee || '').replace(/[^0-9.]/g, ''));
  return Number.isFinite(numeric) && numeric > 0 ? Math.round(numeric * 100) : 15000;
}

export default function PaymentWallMedcoreHealth() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || DEFAULT_BOOKING;
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState('');

  const checkoutCancelled = useMemo(
    () => new URLSearchParams(location.search).get('checkout') === 'cancelled',
    [location.search],
  );

  async function handleStripeCheckout() {
    setIsRedirecting(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/stripe/checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amountCents: parseAmountCents(bookingData.fee),
          currency: 'usd',
          description: `Appointment with ${bookingData.doctor}`,
          bookingData,
        }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success || !payload.data?.url) {
        throw new Error(payload.message || 'Unable to start Stripe checkout');
      }

      window.location.assign(payload.data.url);
    } catch (err) {
      setError(err.message || 'Unable to start Stripe checkout');
      setIsRedirecting(false);
    }
  }

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Slot Selection
          </button>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
            <span className="font-label-sm text-label-sm">Hosted checkout by Stripe</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-0 mb-10">
          {['Select Doctor', 'Choose Slot', 'Stripe Checkout', 'Confirmed'].map((step, idx) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center gap-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  idx < 2 ? 'bg-secondary border-secondary text-on-secondary' :
                  idx === 2 ? 'bg-primary border-primary text-on-primary' :
                  'border-outline-variant text-on-surface-variant'
                }`}>
                  {idx < 2 ? <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> : idx + 1}
                </div>
                <span className={`font-label-sm text-[11px] ${idx === 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{step}</span>
              </div>
              {idx < 3 && <div className={`h-0.5 w-16 mb-5 mx-1 ${idx < 2 ? 'bg-secondary' : 'bg-outline-variant'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-lg">
          <div className="lg:col-span-3">
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 overflow-hidden">
              <div className="p-6 border-b border-surface-variant">
                <h1 className="font-h2 text-h2 text-on-surface text-[22px]">Continue to secure Stripe checkout</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Card details are collected on Stripe&apos;s hosted payment page, not inside MedCore.
                </p>
              </div>

              <div className="p-6 space-y-5">
                {checkoutCancelled && (
                  <div className="rounded-lg border border-tertiary-fixed/30 bg-tertiary-fixed/10 px-4 py-3 text-on-surface">
                    <div className="flex items-center gap-2 font-label-md text-label-md">
                      <span className="material-symbols-outlined text-tertiary">info</span>
                      Checkout was cancelled
                    </div>
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                      No payment was taken. You can review the appointment details and try again.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="rounded-lg border border-error/30 bg-error-container/40 px-4 py-3 text-on-surface">
                    <div className="flex items-center gap-2 font-label-md text-label-md text-error">
                      <span className="material-symbols-outlined">error</span>
                      Stripe checkout could not start
                    </div>
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{error}</p>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      icon: 'encrypted',
                      title: 'Stripe-hosted',
                      body: 'Patients pay on Stripe’s own checkout page, which improves trust and reduces PCI scope.',
                    },
                    {
                      icon: 'credit_card_off',
                      title: 'No card storage',
                      body: 'This app no longer renders card number, expiry, or CVV inputs in your UI.',
                    },
                    {
                      icon: 'shield_lock',
                      title: 'Clear verification',
                      body: 'After payment, the app checks the Stripe session and shows the verified result.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-4">
                      <span className="material-symbols-outlined text-primary text-[22px]">{item.icon}</span>
                      <h2 className="mt-3 font-label-md text-label-md text-on-surface">{item.title}</h2>
                      <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-11 h-11 rounded-xl bg-primary-fixed/15 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">open_in_new</span>
                    </div>
                    <div>
                      <h2 className="font-h3 text-h3 text-on-surface text-[18px]">What happens next</h2>
                      <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                        You will leave this screen, land on Stripe Checkout, and return here only after Stripe confirms or cancels the payment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Trusted payment experience powered by Stripe.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleStripeCheckout}
                  disabled={isRedirecting}
                  className={`w-full h-14 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all ${
                    isRedirecting
                      ? 'bg-outline-variant text-on-surface-variant cursor-not-allowed'
                      : 'bg-primary text-on-primary hover:bg-primary/90 hover:shadow-level-2 active:scale-[0.99]'
                  }`}
                >
                  {isRedirecting ? (
                    <>
                      <span className="animate-spin material-symbols-outlined text-[20px]">progress_activity</span>
                      Redirecting to Stripe...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">payments</span>
                      Pay {bookingData.fee} on Stripe
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 p-6 flex flex-col gap-md sticky top-6">
              <h2 className="font-h3 text-h3 text-on-surface text-[18px] pb-sm border-b border-surface-variant">Booking Summary</h2>

              <div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-sm border border-surface-variant">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-[22px]">stethoscope</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">{bookingData.doctor}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{bookingData.specialty}</p>
                </div>
              </div>

              <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface">
                {[
                  { icon: 'calendar_today', label: 'Date', value: bookingData.date },
                  { icon: 'schedule', label: 'Time', value: bookingData.time },
                  { icon: 'videocam', label: 'Type', value: bookingData.type },
                ].map((detail) => (
                  <li key={detail.label} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">{detail.icon}</span>
                      <span>{detail.label}</span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface text-right">{detail.value}</span>
                  </li>
                ))}
              </ul>

              <hr className="border-surface-variant" />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span>Consultation Fee</span>
                  <span className="text-on-surface">{bookingData.fee}</span>
                </div>
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span>Platform Fee</span>
                  <span className="text-on-surface">$0.00</span>
                </div>
                <div className="flex justify-between font-label-md text-label-md text-on-surface pt-2 border-t border-surface-variant">
                  <span>Total Due</span>
                  <span className="text-primary text-[18px] font-bold">{bookingData.fee}</span>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-lg p-sm border border-secondary/20 flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Patients are redirected to Stripe instead of entering sensitive card data directly in the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
