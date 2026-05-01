import React from 'react';

export default function OtpVerificationMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">

{/*  TopAppBar suppressed as this is a transactional page (OTP Verification)  */}
<main className="flex-grow flex items-center justify-center p-grid-margin">
<div className="w-full max-w-md">
{/*  Brand Logo for Transactional Context  */}
<div className="flex justify-center mb-xl">
<span className="font-h2 text-h2 text-primary font-extrabold tracking-tighter">MedCore HMS</span>
</div>
{/*  OTP Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/30 overflow-hidden relative">
{/*  Decorative Top Bar  */}
<div className="h-xs bg-primary w-full"></div>
<div className="p-xl flex flex-col items-center text-center">
{/*  Icon  */}
<div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-lg text-primary">
<span className="material-symbols-outlined text-[32px]" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
</div>
{/*  Header  */}
<h1 className="font-h3 text-h3 text-on-surface mb-sm">Security Verification</h1>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl">Enter the 6-digit code sent to your email/phone.</p>
{/*  OTP Inputs  */}
<div className="flex gap-sm justify-center mb-xl w-full">
<input aria-label="Digit 1" className="w-12 h-14 text-center font-h3 text-h3 bg-surface-container-high border-2 border-transparent rounded-lg text-on-surface focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-colors" maxLength="1" placeholder="•" type="text" />
<input aria-label="Digit 2" className="w-12 h-14 text-center font-h3 text-h3 bg-surface-container-high border-2 border-transparent rounded-lg text-on-surface focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-colors" maxLength="1" placeholder="•" type="text" />
<input aria-label="Digit 3" className="w-12 h-14 text-center font-h3 text-h3 bg-surface-container-high border-2 border-transparent rounded-lg text-on-surface focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-colors" maxLength="1" placeholder="•" type="text" />
<span className="text-outline flex items-center font-h3 text-h3 mx-1">-</span>
<input aria-label="Digit 4" className="w-12 h-14 text-center font-h3 text-h3 bg-surface-container-high border-2 border-transparent rounded-lg text-on-surface focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-colors" maxLength="1" placeholder="•" type="text" />
<input aria-label="Digit 5" className="w-12 h-14 text-center font-h3 text-h3 bg-surface-container-high border-2 border-transparent rounded-lg text-on-surface focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-colors" maxLength="1" placeholder="•" type="text" />
<input aria-label="Digit 6" className="w-12 h-14 text-center font-h3 text-h3 bg-surface-container-high border-2 border-transparent rounded-lg text-on-surface focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-colors" maxLength="1" placeholder="•" type="text" />
</div>
{/*  CTA Button  */}
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 px-6 rounded-lg hover:opacity-90 transition-opacity mb-lg flex justify-center items-center gap-2">
                        Continue
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
{/*  Links  */}
<div className="flex flex-col gap-sm w-full">
<div className="flex justify-between items-center font-body-sm text-body-sm">
<span className="text-on-surface-variant">Didn't receive the code?</span>
<button className="text-primary font-medium hover:underline flex items-center gap-1">
                                Resend code <span className="text-outline text-xs ml-1">(0:59)</span>
</button>
</div>
<button className="text-primary font-body-sm text-body-sm font-medium hover:underline mt-sm">
                            Try another method
                        </button>
</div>
</div>
</div>
{/*  Trust Badge (Optional but fits MedCore)  */}
<div className="mt-lg flex items-center justify-center gap-2 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">lock</span>
                Secured by MedCore Health Systems
            </div>
</div>
</main>
{/*  Footer suppressed as this is a transactional page (OTP Verification) to maintain focus  */}

</div>
    </>
  );
}
