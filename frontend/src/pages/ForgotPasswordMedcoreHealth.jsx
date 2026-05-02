import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPasswordMedcoreHealth() {
  const navigate = useNavigate();
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!contact.trim()) { setError('Please enter your email or phone number.'); return; }
    setSubmitted(true);
    setTimeout(() => navigate('/otp_verification_medcore_health'), 1500);
  }

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-md antialiased text-on-background">
      <main className="w-full max-w-md">
        <div className="flex justify-center mb-xl">
          <div className="flex items-center gap-sm text-primary font-h3 text-h3 tracking-tight">
            <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings:"'FILL' 1"}}>medical_services</span>
            <span className="font-bold">MedCore HMS</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-[12px] shadow-level-1 border border-surface-variant overflow-hidden">
          <div className="p-xl border-b border-surface-variant">
            <h1 className="font-h2 text-h2 text-on-background mb-sm">Reset Your Password</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Enter your registered email or phone number to receive reset instructions.
            </p>
          </div>

          <div className="p-xl bg-surface-bright">
            {submitted ? (
              <div className="text-center py-4">
                <span className="material-symbols-outlined text-[48px] text-secondary block mb-3" style={{fontVariationSettings:"'FILL' 1"}}>mark_email_read</span>
                <p className="font-label-md text-label-md text-on-surface mb-1">Reset instructions sent!</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Redirecting to verification...</p>
              </div>
            ) : (
              <form className="space-y-lg" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="contact">Email or Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline">account_circle</span>
                    </div>
                    <input
                      className="block w-full pl-[44px] pr-md py-[12px] bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-surface placeholder-outline focus:bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      id="contact" name="contact" placeholder="e.g. user@medcore.com" type="text"
                      value={contact} onChange={e => { setContact(e.target.value); setError(''); }}
                    />
                  </div>
                  {error && <p className="mt-1 font-body-sm text-body-sm text-error">{error}</p>}
                </div>
                <button
                  className="w-full flex items-center justify-center py-[14px] px-lg bg-primary-container text-on-primary-container rounded-DEFAULT font-label-md text-label-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-container"
                  type="submit"
                >
                  Send Reset Link
                </button>
              </form>
            )}
          </div>

          <div className="px-xl py-lg bg-surface-container-lowest border-t border-surface-variant text-center">
            <Link
              className="inline-flex items-center gap-xs font-label-md text-label-md text-primary hover:text-primary-fixed-variant transition-colors group"
              to="/login_medcore_health"
            >
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Login
            </Link>
          </div>
        </div>

        <div className="mt-xl text-center">
          <p className="font-body-sm text-body-sm text-outline">© 2024 MedCore Health Systems.</p>
        </div>
      </main>
    </div>
  );
}
