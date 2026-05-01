import React from 'react';

export default function PrescriptionsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md min-h-screen flex antialiased">

{/*  SideNavBar (Desktop Shell)  */}
<aside className="hidden md:flex bg-white dark:bg-slate-900 font-manrope text-sm font-medium h-screen w-64 border-r border-slate-200 dark:border-slate-800 no-shadow fixed left-0 top-0 flex-col py-4 z-40">
{/*  Header  */}
<div className="px-6 pb-6 pt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container flex items-center justify-center">
<img alt="Hospital Logo" className="w-full h-full object-cover" data-alt="A minimalist, modern corporate hospital logo featuring abstract geometric cross and leaf motifs in deep clinical blue and crisp white. The design is flat, sophisticated, and perfectly suited for a high-end medical portal interface, communicating trust and technological advancement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrKBGNs-056FrFm7LMuhCqgp-Yz5-Gx5RQqWq5xpVO_sBKD6F8dfKFGbue7yRy-onz6L3vWmTQIR6C7ASp8kIWdICZY52rEiF11aN9TUl0fmmgbLHzTKti61PpGHLBa4J9rvnKoz2QeBQl3UVNw9SKx_lhNG1AzIaGv8Ai_LD-T327_MifYI8vDkTMRam10lwMXw8bp4cmzJU0SGHiDJTg4ZCSmuden5VVdN3rbiSJ8m4kh2nXl6faTicDze1N5LXKki_oTofJgDnZ" />
</div>
<div>
<h2 className="text-blue-600 dark:text-blue-400 font-bold leading-tight">Patient Portal</h2>
<span className="text-xs text-slate-500 font-normal">Hospital Management</span>
</div>
</div>
</div>
{/*  Main Navigation  */}
<nav className="flex-1 flex flex-col gap-1 px-2 mt-4">
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                Appointments
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
                Medical Records
            </a>
{/*  Active Navigation Item  */}
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 rounded-r-lg cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined icon-fill" data-icon="medication">medication</span>
                Prescriptions
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Billing
            </a>
</nav>
{/*  Footer Navigation  */}
<div className="mt-auto px-2 pt-4 border-t border-slate-200 dark:border-slate-800 mx-4">
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
                Support
            </a>
</div>
</aside>
{/*  Main Wrapper  */}
<div className="flex-1 flex flex-col md:pl-64 w-full">
{/*  TopNavBar (Shell)  */}
<header className="bg-white dark:bg-slate-900 font-manrope antialiased docked full-width top-0 sticky z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-4">
{/*  Mobile Menu Trigger (Visible only on mobile)  */}
<button className="md:hidden text-slate-600 hover:bg-slate-50 p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white md:hidden">MedCore Portal</div>
</div>
{/*  Trailing Actions & Profile  */}
<div className="flex items-center gap-4">
<button className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:opacity-80 transition-opacity p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:opacity-80 transition-opacity p-2 rounded-full flex items-center justify-center hidden sm:flex">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-9 h-9 rounded-full overflow-hidden border-2 border-surface-container ml-2 cursor-pointer hover:opacity-80 transition-opacity">
<img alt="Patient Profile Avatar" className="w-full h-full object-cover" data-alt="A professional, high-resolution portrait photograph of a confident healthcare patient smiling subtly, set against a clean, bright minimalist background. The lighting is soft and natural, emphasizing a modern, reassuring, and approachable light-mode clinical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5t4tEHIZgHB86rODG3tc5RrRMd68KT8SfjQzss15avElgNyCBrMNaruDkVVRhNgamZqbzO1osLBt4d7yU58Y_76EUcodAZU-oo8KLddbRLyoFwoYD148wA5R2TmUgNq0oNTVA3eqTkzI2BVyzXP3dFVl6qlhYZh61XLkQcDDBgVXKT-W820f3SgSiF9A4NbPu7wsVMJxYS8y8Ej0T4cT_0HXWiHwrhp1zlQE3LKlvAnhAgdmqsg93JVEG3vZGbXDpmEIiVR_lA3D9" />
</div>
</div>
</header>
{/*  Main Canvas Content  */}
<main className="flex-1 p-4 md:p-grid-margin overflow-y-auto w-full max-w-[1400px] mx-auto">
{/*  Page Header  */}
<div className="mb-lg">
<h1 className="font-h1 text-h1 text-on-surface">Prescriptions</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Manage your active medications and view your prescription history.</p>
</div>
{/*  Active Medications Section (Bento Grid Layout)  */}
<section className="mb-xl">
<div className="flex items-center justify-between mb-md">
<h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary icon-fill" data-icon="local_pharmacy">local_pharmacy</span>
                        Active Medications
                    </h2>
<span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full">3 Active</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-grid-gutter auto-rows-min">
{/*  Featured / Priority Card (Spans 2 columns on large screens)  */}
<div className="bg-surface rounded-xl elevation-1 border border-outline-variant/30 p-lg flex flex-col xl:col-span-2 relative overflow-hidden group">
{/*  Decorative subtle gradient accent  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
<div className="flex justify-between items-start mb-md relative z-10">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="font-h2 text-h2 text-on-surface">Atorvastatin</h3>
<span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">Refill Due</span>
</div>
<p className="font-body-lg text-body-lg text-primary font-medium">40mg <span className="text-on-surface-variant font-normal">· Film-coated tablet</span></p>
</div>
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant/20">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="pill">pill</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-lg relative z-10 flex-1">
<div>
<p className="font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">Instructions</p>
<p className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="routine">routine</span>
                                    1 tablet daily at bedtime
                                </p>
</div>
<div>
<p className="font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">Prescribed By</p>
<p className="font-body-md text-body-md text-on-surface">Dr. Sarah Jenkins, Cardiology</p>
</div>
</div>
<div className="flex items-center justify-between pt-md border-t border-surface-container relative z-10">
<p className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-medium text-on-surface">0 refills remaining.</span> Contacting doctor required.
                            </p>
<button className="bg-primary text-on-primary font-label-md text-label-md px-lg py-2.5 rounded-lg hover:bg-primary-fixed-variant transition-colors shadow-sm flex items-center gap-2">
                                Request Refill
                                <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/*  Standard Card 1  */}
<div className="bg-surface rounded-xl elevation-1 border border-outline-variant/30 p-lg flex flex-col">
<div className="flex justify-between items-start mb-md">
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-1">Lisinopril</h3>
<p className="font-body-md text-body-md text-primary font-medium bg-surface-container px-2 py-0.5 rounded inline-block">20mg</p>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
<div className="space-y-4 mb-lg flex-1">
<div>
<p className="font-label-sm text-label-sm text-outline mb-0.5">TIMING</p>
<p className="font-body-md text-body-md text-on-surface">1 tablet every morning</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-outline mb-0.5">DOCTOR</p>
<p className="font-body-md text-body-md text-on-surface">Dr. Michael Chen</p>
</div>
</div>
<div className="pt-md border-t border-surface-container flex items-center justify-between mt-auto">
<span className="font-body-sm text-body-sm text-on-surface-variant">2 refills left</span>
<button className="border-2 border-primary text-primary font-label-md text-label-md px-md py-2 rounded-lg hover:bg-primary/5 transition-colors">
                                Refill
                            </button>
</div>
</div>
{/*  Standard Card 2  */}
<div className="bg-surface rounded-xl elevation-1 border border-outline-variant/30 p-lg flex flex-col">
<div className="flex justify-between items-start mb-md">
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-1">Metformin</h3>
<p className="font-body-md text-body-md text-primary font-medium bg-surface-container px-2 py-0.5 rounded inline-block">500mg</p>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
<div className="space-y-4 mb-lg flex-1">
<div>
<p className="font-label-sm text-label-sm text-outline mb-0.5">TIMING</p>
<p className="font-body-md text-body-md text-on-surface">1 tablet twice daily with meals</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-outline mb-0.5">DOCTOR</p>
<p className="font-body-md text-body-md text-on-surface">Dr. Emily Stone</p>
</div>
</div>
<div className="pt-md border-t border-surface-container flex items-center justify-between mt-auto">
<span className="font-body-sm text-body-sm text-on-surface-variant">4 refills left</span>
<button className="border-2 border-primary text-primary font-label-md text-label-md px-md py-2 rounded-lg hover:bg-primary/5 transition-colors">
                                Refill
                            </button>
</div>
</div>
</div>
</section>
{/*  Past Medications Section  */}
<section>
<div className="flex items-center gap-3 mb-md mt-xl border-b border-surface-container pb-4">
<span className="material-symbols-outlined text-outline" data-icon="history">history</span>
<h2 className="font-h3 text-h3 text-on-surface">Past Medications</h2>
</div>
{/*  List/Compact Grid for past items  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
{/*  Past Card 1  */}
<div className="bg-surface-container-lowest rounded-lg border border-outline-variant/40 p-md flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center mt-1">
<span className="material-symbols-outlined text-outline" data-icon="prescriptions">prescriptions</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface line-through decoration-outline/50">Amoxicillin</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">500mg · 1 capsule every 8 hours</p>
<p className="font-label-sm text-label-sm text-outline">Prescribed by Dr. R. Gupta · Completed Mar 12, 2023</p>
</div>
</div>
</div>
{/*  Past Card 2  */}
<div className="bg-surface-container-lowest rounded-lg border border-outline-variant/40 p-md flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center mt-1">
<span className="material-symbols-outlined text-outline" data-icon="prescriptions">prescriptions</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface line-through decoration-outline/50">Ibuprofen</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">400mg · As needed for pain</p>
<p className="font-label-sm text-label-sm text-outline">Prescribed by Dr. M. Chen · Stopped Jan 05, 2023</p>
</div>
</div>
</div>
</div>
</section>
</main>
</div>

</div>
    </>
  );
}
