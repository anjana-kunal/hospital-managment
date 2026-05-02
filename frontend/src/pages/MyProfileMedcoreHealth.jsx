import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function MyProfileMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen">

{/*  TopAppBar  */}
<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm w-full md:w-[calc(100%-16rem)]">
<div className="flex items-center gap-md">
{/*  Search on left  */}
<div className="relative flex items-center bg-surface-container rounded-full px-md py-sm">
<span className="material-symbols-outlined text-outline text-body-md mr-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-sm text-on-surface placeholder-outline-variant w-64 p-0" placeholder="Search patient records..." type="text" />
</div>
</div>
<div className="flex items-center gap-lg">
{/*  Secondary Action  */}
<button className="text-error font-label-md text-label-md flex items-center gap-xs hover:bg-error-container/20 px-sm py-xs rounded transition-colors">
<span className="material-symbols-outlined text-body-md">emergency</span>
                Emergency Support
            </button>
{/*  Trailing Icons  */}
<div className="flex items-center gap-sm text-slate-600 dark:text-slate-400">
<button className="p-sm rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-blue-500/50">
<span className="material-symbols-outlined">help</span>
</button>
<button className="p-sm rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-blue-500/50">
<span className="material-symbols-outlined">apps</span>
</button>
</div>
{/*  Profile Image  */}
<div className="h-8 w-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a healthcare administrator in a clinical setting. The lighting is bright and clean, typical of a modern hospital environment. The subject appears approachable and competent. The overall aesthetic aligns with a pristine, modern medical UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyWYY6CP3Xr2Vs04tscIKNDouEEFNa3LNwzjdd6fcj8RUrvboykX1rBwwQFo7S2mAnpviLqViCGoYM5LNJkF-Vdu7aIka8RHq00RAtyhIZiP1Jh5bUXuLWuw8OwbR_xQxxGrMQhODLL_a7h6sBADo7bTLCYr1pukFGRWO6ErcwTQ_0F0RSziyBhQxTxdfKJOBDGAO5OyCxKTrtylXluYjHDxJQIoVBB08Ay4O6wx5qNjrJNuZKomWQs4dErSNIwBajxa-0WLyxnwLL" />
</div>
</div>
</header>
{/*  SideNavBar  */}
<nav className="fixed left-0 top-0 h-full flex flex-col h-screen w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm z-50 hidden md:flex">
{/*  Header  */}
<div className="p-lg border-b border-slate-200 dark:border-slate-800 flex items-center gap-sm">
<div className="w-8 h-8 bg-primary-container rounded flex items-center justify-center text-on-primary font-bold">
<span className="material-symbols-outlined text-body-lg">local_hospital</span>
</div>
<div>
<h1 className="font-h3 text-h3 text-blue-600 dark:text-blue-400 font-bold">MediPortal</h1>
<p className="font-label-sm text-label-sm text-outline">Patient Access</p>
</div>
</div>
{/*  Navigation Links  */}
<div className="flex-1 py-lg flex flex-col gap-xs font-manrope text-sm font-medium">
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/messages_medcore_health">
<span className="material-symbols-outlined">chat</span>
<span>Messages</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/notifications_medcore_health">
<span className="material-symbols-outlined">notifications</span>
<span>Notifications</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/medical_history_medcore_health">
<span className="material-symbols-outlined">history_edu</span>
<span>Medical History</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 opacity-90 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/my_profile_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>person</span>
<span>Profile</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/settings_medcore_health">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</Link>
</div>
</nav>
{/*  Main Content Canvas  */}
<main className="ml-0 md:ml-64 mt-16 p-grid-margin min-h-[calc(100vh-64px)]">
{/*  Page Header  */}
<div className="flex justify-between items-end mb-xl">
<div>
<p className="font-label-md text-label-md text-outline mb-sm uppercase tracking-wider">Patient Management</p>
<h2 className="font-h2 text-h2 text-on-surface">Alex Johnson</h2>
</div>
<button className="bg-primary-container text-on-primary font-label-md text-label-md px-lg py-sm rounded flex items-center gap-sm hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-body-md">edit</span>
                Edit Profile
            </button>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
{/*  Left Column: Profile Card & Quick Stats  */}
<div className="col-span-1 md:col-span-4 flex flex-col gap-grid-gutter">
{/*  Main Identity Card  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-1 border border-surface-variant overflow-hidden">
<div className="h-32 bg-primary-container/10 relative">
<div className="absolute -bottom-12 left-lg w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-surface-container">
<img alt="Patient Alex Johnson" className="w-full h-full object-cover" data-alt="A portrait of a male patient in his late 30s. The lighting is soft and natural, evoking a sense of calm and well-being. The background is a plain, light color to ensure focus is on the individual. The style is clean, modern, and suitable for a professional medical record." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCr6VxAP1KxlUziuKWNC5By7XdJYs3csMVSJH4IB6MTUnVjCS1Di2zeyuXGXxsEcT1cEmNSDbX1pmXzZyIGnPiPR3yBkFFUK3ai8gBPYei3lhNuTdhErRd7Elzj6EwfrmNxEarszSn1wPkixKyJCI-RzXF2kkeQBuVQ5E7wEXTGXFxzpLVo_XB8lrYfXKBHniC2idEr2w_pq07Q5vMLB7s3fzrxTJadLqnIbWqaGH193AyfBByph2-1wYtUPRTK4FVT_GbIt4oIknY" />
</div>
<div className="absolute top-md right-md">
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-sm py-xs rounded-full flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                Active
                            </span>
</div>
</div>
<div className="pt-16 pb-lg px-lg">
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Alex Johnson</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">MRN: #984-203-11</p>
<div className="flex flex-col gap-sm">
<div className="flex items-center gap-sm text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-outline">cake</span>
<span>May 14, 1985 (38 y/o)</span>
</div>
<div className="flex items-center gap-sm text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-outline">male</span>
<span>Male</span>
</div>
</div>
</div>
</div>
{/*  Quick Actions/Stats (Optional visual filler for realism)  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-1 border border-surface-variant p-lg">
<h4 className="font-label-md text-label-md text-outline mb-md uppercase tracking-wider border-b border-surface-variant pb-sm">Recent Activity</h4>
<ul className="flex flex-col gap-md">
<li className="flex items-start gap-sm">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mt-1">
<span className="material-symbols-outlined text-body-sm">event</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Annual Physical</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 12, 2023 - Dr. Smith</p>
</div>
</li>
</ul>
</div>
</div>
{/*  Right Column: Detailed Information  */}
<div className="col-span-1 md:col-span-8 flex flex-col gap-grid-gutter">
{/*  Contact Information Card  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-1 border border-surface-variant">
<div className="px-lg py-md border-b border-surface-variant flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-h3">contact_mail</span>
<h3 className="font-h3 text-h3 text-on-surface">Contact Information</h3>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg">
{/*  Input Field Simulation  */}
<div className="input-bg rounded p-sm border border-transparent input-focus transition-all relative">
<label className="font-label-sm text-label-sm text-outline absolute top-sm left-sm">Primary Phone</label>
<p className="font-body-md text-body-md text-on-surface pt-lg pb-xs px-xs">(555) 123-4567</p>
</div>
<div className="input-bg rounded p-sm border border-transparent input-focus transition-all relative">
<label className="font-label-sm text-label-sm text-outline absolute top-sm left-sm">Email Address</label>
<p className="font-body-md text-body-md text-on-surface pt-lg pb-xs px-xs">alex.johnson@example.com</p>
</div>
<div className="input-bg rounded p-sm border border-transparent input-focus transition-all relative md:col-span-2">
<label className="font-label-sm text-label-sm text-outline absolute top-sm left-sm">Home Address</label>
<p className="font-body-md text-body-md text-on-surface pt-lg pb-xs px-xs">1234 Maple Street, Apt 4B<br />Springfield, IL 62704</p>
</div>
</div>
</div>
{/*  Insurance & Emergency Contact (Split Grid)  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
{/*  Insurance Info  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-1 border border-surface-variant">
<div className="px-lg py-md border-b border-surface-variant flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-h3">health_and_safety</span>
<h3 className="font-h3 text-h3 text-on-surface">Insurance</h3>
</div>
<div className="p-lg flex flex-col gap-md">
<div className="input-bg rounded p-sm border border-transparent input-focus transition-all relative">
<label className="font-label-sm text-label-sm text-outline absolute top-sm left-sm">Primary Provider</label>
<p className="font-body-md text-body-md text-on-surface pt-lg pb-xs px-xs">BlueCross BlueShield</p>
</div>
<div className="input-bg rounded p-sm border border-transparent input-focus transition-all relative">
<label className="font-label-sm text-label-sm text-outline absolute top-sm left-sm">Policy Number</label>
<p className="font-body-md text-body-md text-on-surface pt-lg pb-xs px-xs font-mono">BCBS-889-442-X</p>
</div>
</div>
</div>
{/*  Emergency Contact  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-1 border border-surface-variant">
<div className="px-lg py-md border-b border-surface-variant flex items-center gap-sm">
<span className="material-symbols-outlined text-error text-h3">emergency_home</span>
<h3 className="font-h3 text-h3 text-on-surface">Emergency Contact</h3>
</div>
<div className="p-lg flex flex-col gap-md">
<div className="input-bg rounded p-sm border border-transparent input-focus transition-all relative">
<label className="font-label-sm text-label-sm text-outline absolute top-sm left-sm">Name & Relationship</label>
<p className="font-body-md text-body-md text-on-surface pt-lg pb-xs px-xs">Sarah Johnson (Spouse)</p>
</div>
<div className="input-bg rounded p-sm border border-transparent input-focus transition-all relative">
<label className="font-label-sm text-label-sm text-outline absolute top-sm left-sm">Contact Number</label>
<p className="font-body-md text-body-md text-on-surface pt-lg pb-xs px-xs">(555) 987-6543</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

</div>
    </>
  );
}
