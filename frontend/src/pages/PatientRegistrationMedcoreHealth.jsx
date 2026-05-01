import React from 'react';

export default function PatientRegistrationMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex overflow-hidden">

{/*  Left Hero Panel (Desktop Only)  */}
<div className="hidden lg:flex lg:w-5/12 relative flex-col justify-between p-xl overflow-hidden">
{/*  Background Image  */}
<div className="absolute inset-0 bg-cover bg-center" data-alt="A modern, high-end hospital corridor bathed in natural, cool light. The scene emphasizes clinical excellence and calm efficiency with clean architectural lines, expansive whitespace, and a sophisticated color palette of pristine whites, subtle grays, and soft blue accents. The atmosphere is professional, technologically advanced, and deeply reassuring." style={{"backgroundImage":"url('https"}}>
{/*  Overlay Gradients for readability  */}
<div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent"></div>
</div>
{/*  Branding  */}
<div className="relative z-10 flex items-center gap-sm">
<span className="material-symbols-outlined text-4xl text-primary-fixed" style={{"fontVariationSettings":"'FILL' 1"}}>health_and_safety</span>
<span className="font-h3 text-h3 text-on-primary font-bold tracking-tight">MedCore HMS</span>
</div>
{/*  Hero Copy  */}
<div className="relative z-10 mt-auto text-on-primary max-w-md pb-xl">
<h1 className="font-h1 text-h1 mb-md">Streamline your care experience.</h1>
<p className="font-body-lg text-body-lg opacity-90">Register for your secure patient portal to access medical records, manage appointments, and communicate directly with your clinical team.</p>
</div>
</div>
{/*  Right Form Panel  */}
<div className="w-full lg:w-7/12 h-screen overflow-y-auto bg-background px-6 py-xl sm:px-12 md:px-xl xl:px-24">
{/*  Mobile Branding (Hidden on lg)  */}
<div className="flex lg:hidden items-center gap-sm mb-xl">
<span className="material-symbols-outlined text-3xl text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>health_and_safety</span>
<span className="font-h3 text-h3 text-primary font-bold tracking-tight">MedCore HMS</span>
</div>
<div className="max-w-2xl mx-auto">
{/*  Form Header  */}
<div className="mb-xl">
<h2 className="font-h2 text-h2 text-on-surface mb-xs">Patient Registration</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Please provide your details below to create your secure account.</p>
</div>
<form className="flex flex-col gap-xl pb-xl">
{/*  Section 1: Personal Information  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
<div className="border-b border-surface-variant pb-sm">
<h3 className="font-h3 text-h3 text-on-surface">Personal Information</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
{/*  Full Name  */}
<div className="col-span-1 md:col-span-2 flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Full Name</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="e.g. Jane Doe" required="" type="text" />
</div>
{/*  DOB  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Date of Birth</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors text-on-surface-variant focus:text-on-surface" required="" type="date" />
</div>
{/*  Gender  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Gender</label>
<select className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors appearance-none cursor-pointer" required="">
<option disabled="" selected="" value="">Select gender</option>
<option value="female">Female</option>
<option value="male">Male</option>
<option value="non-binary">Non-binary</option>
<option value="prefer-not">Prefer not to say</option>
</select>
</div>
{/*  Phone  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Phone Number</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="(555) 000-0000" required="" type="tel" />
</div>
{/*  Email  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="jane.doe@example.com" required="" type="email" />
</div>
{/*  Address  */}
<div className="col-span-1 md:col-span-2 flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Home Address</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="123 Healthway Drive, Apt 4B, City, State, ZIP" required="" type="text" />
</div>
</div>
</div>
{/*  Section 2: Emergency Contact  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
<div className="border-b border-surface-variant pb-sm">
<h3 className="font-h3 text-h3 text-on-surface">Emergency Contact</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
{/*  Contact Name  */}
<div className="col-span-1 md:col-span-2 flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Contact Name</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="Full name of emergency contact" required="" type="text" />
</div>
{/*  Contact Phone  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Contact Phone</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="(555) 000-0000" required="" type="tel" />
</div>
{/*  Relationship  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Relationship</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="e.g. Spouse, Parent, Sibling" required="" type="text" />
</div>
</div>
</div>
{/*  Section 3: Insurance Details (Optional)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
<div className="border-b border-surface-variant pb-sm flex justify-between items-baseline">
<h3 className="font-h3 text-h3 text-on-surface">Insurance Details</h3>
<span className="font-label-sm text-label-sm text-outline">Optional</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
{/*  Provider Name  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Insurance Provider</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="e.g. BlueCross, Aetna" type="text" />
</div>
{/*  Policy Number  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Policy Number</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="Member ID or Policy #" type="text" />
</div>
</div>
</div>
{/*  Section 4: Security  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
<div className="border-b border-surface-variant pb-sm">
<h3 className="font-h3 text-h3 text-on-surface">Account Security</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
{/*  Password  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Create Password</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="••••••••" required="" type="password" />
</div>
{/*  Confirm Password  */}
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Confirm Password</label>
<input className="w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors" placeholder="••••••••" required="" type="password" />
</div>
</div>
</div>
{/*  Action Area  */}
<div className="pt-sm flex flex-col sm:flex-row items-center justify-between gap-md">
<p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
                        By creating an account, you agree to our <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                    </p>
<button className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center gap-2" type="submit">
                        Create Account
                        <span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 0"}}>arrow_forward</span>
</button>
</div>
</form>
</div>
</div>

</div>
    </>
  );
}
