import React from 'react';

export default function NotificationsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background min-h-screen font-body-md text-body-md flex antialiased">

{/*  SideNavBar  */}
<nav className="fixed left-0 top-0 h-full flex flex-col w-64 border-r border-outline-variant shadow-sm z-50 bg-surface">
<div className="h-16 flex items-center px-lg border-b border-outline-variant">
<span className="material-symbols-outlined text-primary-container text-2xl mr-sm" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
<div>
<div className="font-h3 text-h3 text-primary-container font-bold leading-tight">MediPortal</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Patient Access</div>
</div>
</div>
<div className="flex-1 py-lg flex flex-col gap-sm overflow-y-auto">
<a className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">chat</span>
<span className="font-label-md text-label-md">Messages</span>
</a>
<a className="flex items-center gap-3 px-lg py-sm bg-primary-fixed text-on-primary-fixed-variant border-r-4 border-primary-container opacity-90 transition-all" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>notifications</span>
<span className="font-label-md text-label-md">Notifications</span>
</a>
<a className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span className="font-label-md text-label-md">Medical History</span>
</a>
<a className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
<a className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</nav>
{/*  Main Content Area  */}
<div className="flex-1 ml-64 flex flex-col min-h-screen">
{/*  TopAppBar  */}
<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm">
<div className="flex items-center gap-lg">
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-lg border-transparent focus:bg-surface focus:border-primary-container focus:ring-2 focus:ring-primary-fixed transition-colors font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search MediPortal HMS" type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-xs font-label-sm text-label-sm bg-surface-container px-3 py-1.5 rounded-full">
<span className="material-symbols-outlined text-[18px]">emergency</span>
                    Emergency Support
                </button>
<div className="h-6 w-px bg-outline-variant mx-sm"></div>
<button className="text-on-surface-variant hover:text-primary-container focus:ring-2 focus:ring-primary-fixed/50 rounded-full p-1 transition-colors">
<span className="material-symbols-outlined">help</span>
</button>
<button className="text-on-surface-variant hover:text-primary-container focus:ring-2 focus:ring-primary-fixed/50 rounded-full p-1 transition-colors">
<span className="material-symbols-outlined">apps</span>
</button>
<img alt="User profile" className="h-8 w-8 rounded-full ml-sm border border-outline-variant cursor-pointer object-cover" data-alt="A professional headshot of a female patient smiling gently against a neutral gray background. The lighting is soft and clinical, reflecting a modern healthcare environment. The mood is calm and trustworthy. High key lighting, modern corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjfpf7ky6zbusj9wC2SOxvgGY-IiakbybdVkzk1uHH3Safejf_TAKJFkOQq2lvdnQtUZoof_DjW7V_iEUn9Iy9jtZegOCUOhrgpW7Xh0lya1sE4oSdixZKbTM_Bll0Rv7ovaEZ4OwdsCnFE2qdwiP0kg6rDZXbeFjzkkZnuT8BPc27Ypkc34JD6TPdr7Qdka3mCS_r5HW1kz5gJrlAu39_6P-PeGSlvUKuO-8cT3lfvTkss4GD-lhTtgH9cqzn3tgJN4d6cQzRGWaw" />
</div>
</header>
{/*  Page Content  */}
<main className="flex-1 pt-24 px-grid-margin pb-xl max-w-7xl mx-auto w-full">
<div className="flex items-center justify-between mb-xl">
<div>
<h1 className="font-h2 text-h2 text-on-surface mb-xs">Notifications Center</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Manage your alerts and important updates.</p>
</div>
<button className="flex items-center gap-sm px-md py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg border border-outline-variant transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">done_all</span>
                    Mark all as read
                </button>
</div>
<div className="grid grid-cols-1 gap-md">
{/*  Notification Card 1 - High Priority  */}
<div className="bg-surface rounded-xl p-lg border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex gap-md items-start relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
<div className="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary-container" style={{"fontVariationSettings":"'FILL' 1"}}>calendar_month</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-h3 text-[18px] leading-6 text-on-surface">Appointment reminder for tomorrow</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">Just now</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">You have an upcoming consultation with Dr. Sarah Jenkins (Endocrinology) tomorrow at 10:30 AM. Please arrive 15 minutes early.</p>
<div className="flex gap-sm">
<button className="px-md py-2 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary transition-colors">View Details</button>
<button className="px-md py-2 bg-surface-container text-on-surface font-label-md text-label-md rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors">Reschedule</button>
</div>
</div>
<div className="h-3 w-3 bg-primary-container rounded-full mt-2 shrink-0"></div>
</div>
{/*  Notification Card 2  */}
<div className="bg-surface rounded-xl p-lg border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex gap-md items-start relative overflow-hidden">
<div className="h-12 w-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{"fontVariationSettings":"'FILL' 1"}}>prescriptions</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-h3 text-[18px] leading-6 text-on-surface">Prescription refill ready</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 hours ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Your prescription refill for Lisinopril (10mg) is ready for pickup at the Main Campus Pharmacy.</p>
</div>
</div>
{/*  Notification Card 3  */}
<div className="bg-surface rounded-xl p-lg border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex gap-md items-start relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>
<div className="h-12 w-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-tertiary-fixed-variant" style={{"fontVariationSettings":"'FILL' 1"}}>science</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-h3 text-[18px] leading-6 text-on-surface">Lab results available for Cardiology</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">New lab results from your recent Comprehensive Metabolic Panel have been uploaded by Dr. Robert Chen.</p>
<div className="flex gap-sm">
<button className="px-md py-2 bg-surface border border-primary-container text-primary-container font-label-md text-label-md rounded-lg hover:bg-primary-fixed transition-colors">View Results</button>
</div>
</div>
<div className="h-3 w-3 bg-tertiary-container rounded-full mt-2 shrink-0"></div>
</div>
{/*  Notification Card 4  */}
<div className="bg-surface rounded-xl p-lg border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex gap-md items-start relative overflow-hidden opacity-75">
<div className="h-12 w-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-surface-variant">receipt_long</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-h3 text-[18px] leading-6 text-on-surface">Payment reminder for Invoice #INV-2023-0891</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Oct 12</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">A payment of $150.00 is due on October 30th for your recent Telehealth Consultation.</p>
</div>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
