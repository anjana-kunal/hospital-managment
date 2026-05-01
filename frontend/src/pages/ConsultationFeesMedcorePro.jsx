import React from 'react';

export default function ConsultationFeesMedcorePro() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">

{/*  TopAppBar  */}
<header className="bg-white dark:bg-gray-900 font-manrope antialiased tracking-tight docked full-width top-0 border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none sticky top-0 z-50 flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-4">
<div className="text-xl font-extrabold text-blue-700 dark:text-blue-400">MedCore Pro</div>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:opacity-80 transition-all duration-200 cursor-pointer p-2 rounded-full">notifications</span>
<span className="material-symbols-outlined text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:opacity-80 transition-all duration-200 cursor-pointer p-2 rounded-full">help_outline</span>
<img alt="Doctor profile avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" data-alt="A close-up, professional headshot of a diverse medical doctor wearing a white lab coat and a stethoscope. The background is a clean, softly blurred modern hospital corridor with bright, even clinical lighting. The image projects a calming, trustworthy, and expert demeanor appropriate for a premium healthcare application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVxuenVgQ3XN1Mzk3_s13kMXF34pMujmQmbcGiEBadkCO3T1Fd5xu4qggRjFf_Vdh-Z65ETKZzo75a2ZHXOeTMsakE3pmixyitBHL3CBP14OdYIBdPfk7YY0kbbiG31mIS7S0HStjiWMhADVM78AbsTb2Nn9FT1QhdW0EEvmPitiwEtaYCp9guL6BNa8bWs7JOBM1jPIU_Xd2qQy9HS6VTi637NpbTsklt9OFxUMlt-5ltIsaSiYPuoF47vy6rkAIjz_sNuy8mFIS4" />
</div>
</header>
<div className="flex flex-1 overflow-hidden">
{/*  SideNavBar  */}
<aside className="bg-white dark:bg-gray-900 font-manrope text-sm font-medium fixed left-0 top-0 h-full w-64 border-r border-gray-100 dark:border-gray-800 flat no shadows hidden md:flex flex-col h-screen fixed left-0 top-0 pt-20 z-40">
<div className="px-6 pb-6 border-b border-gray-100 dark:border-gray-800">
<div className="flex items-center gap-3 mb-4">
<img alt="Doctor identity" className="w-12 h-12 rounded-full object-cover border border-gray-200" data-alt="A close-up, professional headshot of a diverse medical doctor wearing a white lab coat and a stethoscope. The background is a clean, softly blurred modern hospital corridor with bright, even clinical lighting. The image projects a calming, trustworthy, and expert demeanor appropriate for a premium healthcare application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNpkcSkxZMPO9QUbjYln8kRydTWQ4eqFNXyamKS4kBFvvUaIGTostC-jb_nlg9XsaMcZeTOG7Le1Zq2oq8m0mvH2wg4WgL6vV0KGCywgritJF9e2GIliB5aJV-lxAgY6iPfk-ePpxhPkQ-OREEyVtpSHWAFuHXIXzSVaxzeYvbUcr9enpZOwqn6_L3JZwvqLguSvr-MZXwtIUmupcXFLDFdanDEP6ASPCqYjNbD9_AIG7HwW_AUXUogM4--74bRNKSyanS6MOaEAnm" />
<div>
<div className="font-bold text-gray-900 dark:text-white">Dr. James Wilson</div>
<div className="text-xs text-gray-500">Cardiology Specialist</div>
</div>
</div>
<button className="w-full bg-primary text-on-primary py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">New Appointment</button>
</div>
<nav className="flex-1 overflow-y-auto py-4">
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform" href="#">
<span className="material-symbols-outlined">person</span>
                    Profile
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform" href="#">
<span className="material-symbols-outlined">calendar_today</span>
                    Availability
                </a>
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform" href="#">
<span className="material-symbols-outlined">payments</span>
                    Consultation Fees
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform" href="#">
<span className="material-symbols-outlined">notifications_active</span>
                    Notifications
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform" href="#">
<span className="material-symbols-outlined">verified_user</span>
                    Security
                </a>
</nav>
</aside>
{/*  Main Canvas  */}
<main className="flex-1 md:ml-64 p-grid-margin overflow-y-auto bg-surface">
<div className="max-w-4xl mx-auto">
<div className="mb-xl">
<h1 className="font-h1 text-h1 text-on-surface mb-xs">Consultation Fees</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Set and manage your standard billing rates across different consultation types.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
{/*  Fee Configuration Cards  */}
<div className="col-span-1 md:col-span-8 flex flex-col gap-lg">
{/*  In-Person  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 p-lg">
<div className="flex items-start justify-between mb-md pb-md border-b border-outline-variant/20">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-2xl">meeting_room</span>
<div>
<h2 className="font-h3 text-h3 text-on-surface">In-person Consultation</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Standard clinic visits.</p>
</div>
</div>
</div>
<div className="flex items-center gap-md">
<div className="relative w-full max-w-xs">
<label className="absolute -top-2 left-3 bg-surface-container-lowest px-1 font-label-sm text-label-sm text-on-surface-variant z-10" htmlFor="fee-in-person">Fee (USD)</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant font-body-md">$</span>
<input className="w-full bg-surface-container-low focus:bg-surface-container-lowest border-outline-variant text-on-surface rounded-lg py-3 pl-8 pr-4 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="fee-in-person" name="fee-in-person" type="number" value="150" />
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">per session (est. 30m)</span>
</div>
</div>
{/*  Telehealth  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 p-lg">
<div className="flex items-start justify-between mb-md pb-md border-b border-outline-variant/20">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-2xl">video_camera_front</span>
<div>
<h2 className="font-h3 text-h3 text-on-surface">Online/Telehealth Consultation</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Remote video or phone calls.</p>
</div>
</div>
</div>
<div className="flex items-center gap-md">
<div className="relative w-full max-w-xs">
<label className="absolute -top-2 left-3 bg-surface-container-lowest px-1 font-label-sm text-label-sm text-on-surface-variant z-10" htmlFor="fee-telehealth">Fee (USD)</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant font-body-md">$</span>
<input className="w-full bg-surface-container-low focus:bg-surface-container-lowest border-outline-variant text-on-surface rounded-lg py-3 pl-8 pr-4 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="fee-telehealth" name="fee-telehealth" type="number" value="100" />
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">per session (est. 20m)</span>
</div>
</div>
{/*  Emergency  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 p-lg">
<div className="flex items-start justify-between mb-md pb-md border-b border-outline-variant/20">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-error text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>emergency</span>
<div>
<h2 className="font-h3 text-h3 text-on-surface">Emergency/After-hours Consultation</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Urgent requests outside regular hours.</p>
</div>
</div>
</div>
<div className="flex items-center gap-md">
<div className="relative w-full max-w-xs">
<label className="absolute -top-2 left-3 bg-surface-container-lowest px-1 font-label-sm text-label-sm text-on-surface-variant z-10" htmlFor="fee-emergency">Fee (USD)</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant font-body-md">$</span>
<input className="w-full bg-surface-container-low focus:bg-surface-container-lowest border-outline-variant text-on-surface rounded-lg py-3 pl-8 pr-4 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors" id="fee-emergency" name="fee-emergency" type="number" value="250" />
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">per session</span>
</div>
</div>
<div className="flex justify-end pt-sm">
<button className="bg-primary-container text-on-primary-container font-label-md text-label-md py-3 px-8 rounded-lg shadow-sm hover:bg-primary-fixed transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-sm">save</span>
                                Save Changes
                            </button>
</div>
</div>
{/*  Side Info Area  */}
<div className="col-span-1 md:col-span-4">
<div className="bg-surface-container-low rounded-xl p-lg border border-outline-variant/20 sticky top-24">
<h3 className="font-h3 text-h3 text-on-surface flex items-center gap-xs mb-md">
<span className="material-symbols-outlined text-primary">info</span>
                                Fee Policy
                            </h3>
<div className="space-y-md font-body-sm text-body-sm text-on-surface-variant">
<p>These rates will be displayed to patients prior to booking an appointment on your public profile.</p>
<p>Platform fees (if applicable) are deducted automatically from these listed prices during payouts.</p>
<div className="bg-surface-container p-md rounded-lg border border-outline-variant/30 mt-lg">
<p className="font-label-md text-label-md text-on-surface mb-xs">Current Payout Rate</p>
<p className="font-body-md text-body-md font-bold text-primary">95% of listed fee</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
