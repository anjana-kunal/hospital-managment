import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OtpVerificationMedcoreHealth() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  function handleDigitChange(index, value) {
    const cleaned = value.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = cleaned;
    setDigits(next);
    setError('');
    if (cleaned && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index, e) {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const next = [...digits];
    for (let i = 0; i < 6; i++) next[i] = pasted[i] || '';
    setDigits(next);
    if (pasted.length > 0) inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  }

  function handleContinue() {
    const code = digits.join('');
    if (code.length < 6) { setError('Please enter all 6 digits.'); return; }
    navigate('/patient_dashboard_medcore_health');
  }

  function handleResend() {
    if (!canResend) return;
    setDigits(['', '', '', '', '', '']);
    setCountdown(59);
    setCanResend(false);
    inputRefs.current[0]?.focus();
  }

  const filled = digits.filter(Boolean).length;

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
      <main className="flex-grow flex items-center justify-center p-grid-margin">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-xl">
            <span className="font-h2 text-h2 text-primary font-extrabold tracking-tighter">MedCore HMS</span>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/30 overflow-hidden relative">
            <div className="h-xs bg-primary w-full"></div>
            <div className="p-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-lg text-primary">
                <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings:"'FILL' 1"}}>security</span>
              </div>
              <h1 className="font-h3 text-h3 text-on-surface mb-sm">Security Verification</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mb-xl">Enter the 6-digit code sent to your email/phone.</p>

              <div className="flex gap-sm justify-center mb-xl w-full" onPaste={handlePaste}>
                {digits.map((d, i) => (
                  <React.Fragment key={i}>
                    {i === 3 && <span className="text-outline flex items-center font-h3 text-h3 mx-1">-</span>}
                    <input
                      ref={el => inputRefs.current[i] = el}
                      aria-label={`Digit ${i + 1}`}
                      className={`w-12 h-14 text-center font-h3 text-h3 bg-surface-container-high border-2 rounded-lg text-on-surface focus:bg-surface-container-lowest focus:outline-none transition-colors ${
                        d ? 'border-primary bg-primary-fixed/10' : 'border-transparent'
                      } focus:border-primary`}
                      maxLength={1}
                      placeholder="•"
                      type="text"
                      inputMode="numeric"
                      value={d}
                      onChange={e => handleDigitChange(i, e.target.value)}
                      onKeyDown={e => handleKeyDown(i, e)}
                    />
                  </React.Fragment>
                ))}
              </div>

              {error && (
                <p className="text-error font-body-sm text-body-sm mb-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">error</span>{error}
                </p>
              )}

              {filled > 0 && filled < 6 && (
                <p className="text-on-surface-variant font-body-sm text-body-sm mb-sm">{filled} of 6 digits entered</p>
              )}

              <button
                onClick={handleContinue}
                disabled={filled < 6}
                className={`w-full font-label-md text-label-md py-3 px-6 rounded-lg transition-opacity mb-lg flex justify-center items-center gap-2 ${
                  filled === 6
                    ? 'bg-primary-container text-on-primary-container hover:opacity-90 cursor-pointer'
                    : 'bg-outline-variant text-on-surface-variant opacity-60 cursor-not-allowed'
                }`}
              >
                Continue
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <div className="flex flex-col gap-sm w-full">
                <div className="flex justify-between items-center font-body-sm text-body-sm">
                  <span className="text-on-surface-variant">Didn't receive the code?</span>
                  <button
                    onClick={handleResend}
                    disabled={!canResend}
                    className={`font-medium flex items-center gap-1 ${canResend ? 'text-primary hover:underline cursor-pointer' : 'text-outline cursor-not-allowed'}`}
                  >
                    Resend code
                    {!canResend && <span className="text-outline text-xs ml-1">({String(Math.floor(countdown / 60)).padStart(2, '0')}:{String(countdown % 60).padStart(2, '0')})</span>}
                  </button>
                </div>
                <button className="text-primary font-body-sm text-body-sm font-medium hover:underline mt-sm">
                  Try another method
                </button>
              </div>
            </div>
          </div>

          <div className="mt-lg flex items-center justify-center gap-2 text-outline font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            Secured by MedCore Health Systems
          </div>
        </div>
      </main>
    </div>
  );
}
