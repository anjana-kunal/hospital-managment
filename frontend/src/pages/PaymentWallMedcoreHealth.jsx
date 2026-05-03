import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentWallMedcoreHealth() {
  const navigate = useNavigate();
  const location = useLocation();

  // Data passed from SelectSlot
  const bookingData = location.state || {
    doctor: 'Dr. Sarah Jenkins',
    specialty: 'Cardiology Specialist',
    date: 'May 10, 2025',
    time: '10:00 AM (EST)',
    type: 'Virtual Telehealth',
    fee: '$150.00',
  };

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const formatCardNumber = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2);
    return digits;
  };

  const validate = () => {
    const e = {};
    if (paymentMethod === 'card') {
      if (cardNumber.replace(/\s/g, '').length < 16) e.cardNumber = 'Enter a valid 16-digit card number.';
      if (!cardName.trim()) e.cardName = 'Cardholder name is required.';
      if (expiry.length < 5) e.expiry = 'Enter a valid expiry date (MM/YY).';
      if (cvv.length < 3) e.cvv = 'CVV must be 3–4 digits.';
    }
    return e;
  };

  const handlePay = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate('/booking_confirmed_medcore_health');
    }, 2000);
  };

  const cardBrand = (() => {
    const n = cardNumber.replace(/\s/g, '');
    if (n.startsWith('4')) return 'Visa';
    if (n.startsWith('5')) return 'Mastercard';
    if (n.startsWith('3')) return 'Amex';
    return null;
  })();

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Slot Selection
          </button>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">encrypted</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">256-bit SSL Secured</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {['Select Doctor', 'Choose Slot', 'Payment', 'Confirmed'].map((step, idx) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center gap-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  idx < 2 ? 'bg-secondary border-secondary text-on-secondary' :
                  idx === 2 ? 'bg-primary border-primary text-on-primary' :
                  'border-outline-variant text-on-surface-variant'
                }`}>
                  {idx < 2 ? <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings:"'FILL' 1"}}>check</span> : idx + 1}
                </div>
                <span className={`font-label-sm text-[11px] ${idx === 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{step}</span>
              </div>
              {idx < 3 && <div className={`h-0.5 w-16 mb-5 mx-1 ${idx < 2 ? 'bg-secondary' : 'bg-outline-variant'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-lg">
          {/* Payment Form */}
          <div className="lg:col-span-3">
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 overflow-hidden">
              <div className="p-6 border-b border-surface-variant">
                <h1 className="font-h2 text-h2 text-on-surface text-[22px]">Complete Payment</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Your appointment will be confirmed after payment.</p>
              </div>

              <div className="p-6">
                {/* Payment Method Tabs */}
                <div className="flex gap-2 mb-6">
                  {[
                    { id: 'card', label: 'Credit / Debit Card', icon: 'credit_card' },
                    { id: 'upi', label: 'UPI', icon: 'smartphone' },
                    { id: 'netbanking', label: 'Net Banking', icon: 'account_balance' },
                  ].map(m => (
                    <button
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-lg border-2 transition-all font-label-sm text-[11px] ${
                        paymentMethod === m.id
                          ? 'border-primary bg-primary-fixed/10 text-primary'
                          : 'border-outline-variant text-on-surface-variant hover:border-outline'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[22px]">{m.icon}</span>
                      {m.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handlePay} className="space-y-4">
                  {paymentMethod === 'card' && (
                    <>
                      {/* Card Number */}
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1.5">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            inputMode="numeric"
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={e => { setCardNumber(formatCardNumber(e.target.value)); setErrors(x => ({...x, cardNumber: ''})); }}
                            className={`w-full h-12 pl-4 pr-24 bg-surface-container-low border rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${errors.cardNumber ? 'border-error' : 'border-outline-variant/50'}`}
                          />
                          <div className="absolute inset-y-0 right-3 flex items-center gap-1">
                            {cardBrand ? (
                              <span className={`text-xs font-bold px-2 py-1 rounded ${cardBrand === 'Visa' ? 'bg-blue-100 text-blue-700' : cardBrand === 'Mastercard' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{cardBrand}</span>
                            ) : (
                              <span className="material-symbols-outlined text-outline text-[20px]">credit_card</span>
                            )}
                          </div>
                        </div>
                        {errors.cardNumber && <p className="mt-1 font-label-sm text-label-sm text-error flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">error</span>{errors.cardNumber}</p>}
                      </div>

                      {/* Cardholder Name */}
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1.5">Cardholder Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={cardName}
                          onChange={e => { setCardName(e.target.value); setErrors(x => ({...x, cardName: ''})); }}
                          className={`w-full h-12 px-4 bg-surface-container-low border rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${errors.cardName ? 'border-error' : 'border-outline-variant/50'}`}
                        />
                        {errors.cardName && <p className="mt-1 font-label-sm text-label-sm text-error flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">error</span>{errors.cardName}</p>}
                      </div>

                      {/* Expiry + CVV */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface mb-1.5">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={e => { setExpiry(formatExpiry(e.target.value)); setErrors(x => ({...x, expiry: ''})); }}
                            className={`w-full h-12 px-4 bg-surface-container-low border rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${errors.expiry ? 'border-error' : 'border-outline-variant/50'}`}
                          />
                          {errors.expiry && <p className="mt-1 font-label-sm text-label-sm text-error text-[11px]">{errors.expiry}</p>}
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface mb-1.5">CVV</label>
                          <div className="relative">
                            <input
                              type="password"
                              placeholder="•••"
                              maxLength={4}
                              value={cvv}
                              onChange={e => { setCvv(e.target.value.replace(/\D/g, '').slice(0, 4)); setErrors(x => ({...x, cvv: ''})); }}
                              className={`w-full h-12 px-4 pr-10 bg-surface-container-low border rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${errors.cvv ? 'border-error' : 'border-outline-variant/50'}`}
                            />
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">help_outline</span>
                          </div>
                          {errors.cvv && <p className="mt-1 font-label-sm text-label-sm text-error text-[11px]">{errors.cvv}</p>}
                        </div>
                      </div>
                    </>
                  )}

                  {paymentMethod === 'upi' && (
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1.5">UPI ID</label>
                      <input
                        type="text"
                        placeholder="yourname@upi"
                        className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                      <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">A payment request will be sent to your UPI app.</p>
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1.5">Select Bank</label>
                      <select className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none">
                        <option value="">Choose your bank...</option>
                        <option>State Bank of India</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Kotak Mahindra Bank</option>
                        <option>Other</option>
                      </select>
                      <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">You will be redirected to your bank's secure login page.</p>
                    </div>
                  )}

                  {/* Security note */}
                  <div className="flex items-center gap-2 bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[20px]" style={{fontVariationSettings:"'FILL' 1"}}>lock</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Your payment info is encrypted and never stored on our servers.</span>
                  </div>

                  {/* Pay Button */}
                  <button
                    type="submit"
                    disabled={processing}
                    className={`w-full h-14 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all mt-2 ${
                      processing
                        ? 'bg-outline-variant text-on-surface-variant cursor-not-allowed'
                        : 'bg-primary text-on-primary hover:bg-primary/90 hover:shadow-level-2 active:scale-[0.99]'
                    }`}
                  >
                    {processing ? (
                      <>
                        <span className="animate-spin material-symbols-outlined text-[20px]">progress_activity</span>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">payments</span>
                        Pay {bookingData.fee} & Confirm Appointment
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 p-6 flex flex-col gap-md sticky top-6">
              <h2 className="font-h3 text-h3 text-on-surface text-[18px] pb-sm border-b border-surface-variant">Booking Summary</h2>

              {/* Doctor info */}
              <div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-sm border border-surface-variant">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-[22px]">stethoscope</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">{bookingData.doctor}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{bookingData.specialty}</p>
                </div>
              </div>

              {/* Details */}
              <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface">
                {[
                  { icon: 'calendar_today', label: 'Date', value: bookingData.date },
                  { icon: 'schedule', label: 'Time', value: bookingData.time },
                  { icon: 'videocam', label: 'Type', value: bookingData.type },
                ].map(d => (
                  <li key={d.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">{d.icon}</span>
                      <span>{d.label}</span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface text-right">{d.value}</span>
                  </li>
                ))}
              </ul>

              <hr className="border-surface-variant" />

              {/* Fee breakdown */}
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

              {/* Cancellation policy */}
              <div className="bg-tertiary-fixed/10 rounded-lg p-sm border border-tertiary-fixed/30 flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5" style={{fontVariationSettings:"'FILL' 1"}}>info</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Free cancellation up to <strong className="text-on-surface">24 hours</strong> before the appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
