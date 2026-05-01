import React from 'react';

export default function DoctorApprovalsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">

{/*  SideNavBar (Shared Component)  */}
<aside className="fixed left-0 top-0 h-screen w-64 rounded-none bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col gap-1 py-4 z-50 hidden md:flex">
{/*  Brand Header  */}
<div className="px-6 pb-6 mb-2 border-b border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">
<span className="material-symbols-outlined text-[20px]">medical_services</span>
</div>
<div>
<h1 className="text-xl font-black text-blue-700 dark:text-blue-400 font-h3 leading-tight tracking-tight">MedCore Health</h1>
<p className="font-label-sm text-label-sm text-slate-500">Admin Portal</p>
</div>
</div>
</div>
{/*  Navigation Links  */}
<nav className="flex-1 overflow-y-auto px-2">
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg mb-1 font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
                Dashboard
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg mb-1 font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">group</span>
                User Management
            </a>
{/*  Active State  */}
<a className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-600 px-4 py-3 flex items-center gap-3 transition-all tap-highlight-none active:scale-95 rounded-l-lg mb-1 font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined filled text-[20px]">verified_user</span>
                Doctor Approvals
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg mb-1 font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                Departments
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg mb-1 font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">event</span>
                Appointments
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg mb-1 font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">payments</span>
                Billing
            </a>
<div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
                    Settings
                </a>
</div>
</nav>
</aside>
{/*  Main Content Wrapper  */}
<div className="md:ml-64 flex flex-col min-h-screen">
{/*  TopNavBar (Shared Component)  */}
<header className="docked full-width top-0 sticky z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center h-16 px-6 w-full ml-auto font-manrope antialiased tracking-tight transition-colors">
{/*  Left: Search (Mobile Brand hidden on desktop since SideNav handles it)  */}
<div className="flex items-center gap-4 flex-1">
<div className="md:hidden text-lg font-extrabold text-blue-700 dark:text-blue-400 tracking-tighter">
                    MedCore Health
                </div>
<div className="hidden md:flex relative max-w-md w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none transition-all placeholder:text-slate-400 text-slate-700 dark:text-slate-200" placeholder="Search applicants, departments..." type="text" />
</div>
</div>
{/*  Right: Actions  */}
<div className="flex items-center gap-2">
<button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors Active: opacity-80 duration-150 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
</button>
<div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
<button className="flex items-center gap-2 p-1 pl-2 pr-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
<img alt="Administrator Profile" className="w-8 h-8 rounded-full object-cover border border-slate-200" data-alt="A professional headshot of a middle-aged male administrator with short brown hair, wearing a dark navy suit and light blue shirt. He has a warm, confident expression. The background is a clean, softly lit, neutral light-gray corporate environment, reinforcing a trustworthy and clinical administrative aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLVdtmJDNUZT50Zyl0xljKR274dIPITxSKXTWS2SFncsmGqeBoVLZ7eAx9r73a48Nd9sfJyjisDP_5psi1xgDV9KUDudHFR4yXogR2Cx2Dv3F-jjUqi_qB_3O4PYDMFDCwtptb0pPYO4PY2tb9gVJpbFSNfJX0_7CF199pb44o77Y51A5Wl9O6Cco8Ib8xS2sQYQ9qw5-7RDZvv0aKuSB5PE-aYC7aDwc9DBZd51N9ZNHSDbbORozsBNHg0Md10waiG-d7PhcmSFan" />
<span className="text-sm font-semibold text-slate-700 dark:text-slate-200 hidden lg:block">Admin</span>
<span className="material-symbols-outlined text-[18px] text-slate-400">expand_more</span>
</button>
</div>
</header>
{/*  Main Canvas  */}
<main className="flex-1 p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full">
{/*  Page Header Section  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-label-sm text-label-sm border border-blue-100 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                            Live Queue
                        </span>
</div>
<h2 className="font-h2 text-h2 text-on-surface mb-1">Doctor Approvals</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Review and verify credentials for incoming medical professionals before finalizing system access and department routing.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filter: Pending
                    </button>
</div>
</div>
{/*  Application List (High-end Card Rows)  */}
<div className="flex flex-col gap-6">
{/*  Applicant Card 1  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-[#E9ECEF] p-6 transition-all hover:shadow-md relative overflow-hidden group">
{/*  Status Indicator Line  */}
<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
{/*  Col 1: Identity & Details  */}
<div className="flex-1 min-w-[300px]">
<div className="flex items-start gap-4">
<div className="relative">
<img alt="Dr. Elena Rostova" className="w-16 h-16 rounded-full object-cover border-2 border-surface-container-low shadow-sm" data-alt="A professional portrait of a female doctor in her mid-30s with dark hair tied back. She is wearing a crisp white lab coat over a light blue clinical top, with a stethoscope draped around her neck. The lighting is bright and even, set against a pristine, slightly blurred hospital corridor background, conveying clinical excellence and trustworthiness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZmwCiWtkknvBzZhte68MbZyOEKCOtmv-dXwgJe4m8TwOTBqlaeGffGR11ceu3bqTeJJruMJbTYy8oNN1L1epdWU8SFmuhJ3GD6SQuzQZf83LJhz0ZqA-1LUD2-rJ9n8OIgilPDGVM6JgnvyF50g1UlCMfSD6M6YzA91FKX3rKKiywQrBSveFqdPWot4EpG_wLl9yAGEaAnlMHgbVb1C5E0wSsWlLXwNSvX08ii1nbJbtOfMy6L7CctUNdKjyb8XQMzEKEuVSq3ggr" />
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-surface-container-lowest rounded-full flex items-center justify-center border border-[#E9ECEF] shadow-sm">
<span className="material-symbols-outlined text-[14px] text-tertiary">schedule</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-h3 text-[20px] text-on-surface leading-tight">Dr. Elena Rostova</h3>
<span className="px-2 py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] uppercase tracking-wider font-bold">Pending</span>
</div>
<p className="font-body-md text-on-surface-variant font-medium text-sm mb-3">Cardiothoracic Surgery</p>
<div className="flex flex-wrap gap-x-4 gap-y-2 font-body-sm text-on-surface-variant text-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">school</span>
<span>M.D., Harvard Medical</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">work_history</span>
<span>12 Years Exp.</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
<span>Relocating from Mass Gen</span>
</div>
</div>
</div>
</div>
</div>
{/*  Col 2: Verification Action  */}
<div className="lg:w-64 border-t lg:border-t-0 lg:border-l border-[#E9ECEF] pt-4 lg:pt-0 lg:pl-8 flex flex-col justify-center">
<p className="font-label-sm text-label-sm text-outline mb-2 uppercase tracking-wide">Required Documentation</p>
<div className="flex items-center justify-between bg-surface-container p-3 rounded-lg border border-[#E9ECEF] mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">description</span>
<span className="font-body-sm text-sm font-medium text-on-surface">Medical License</span>
</div>
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
</div>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-container-lowest border-2 border-primary-container text-primary-container rounded-lg font-label-md text-label-md hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
<span className="material-symbols-outlined text-[18px]">policy</span>
                                Verify Credentials
                            </button>
</div>
{/*  Col 3: Assignment & Final Action  */}
<div className="flex-1 border-t lg:border-t-0 lg:border-l border-[#E9ECEF] pt-4 lg:pt-0 lg:pl-8 flex flex-col justify-between">
<div className="space-y-3 mb-4 lg:mb-0">
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Assign Department</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-sm rounded-lg pl-3 pr-8 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer">
<option disabled="" selected="">Select Department...</option>
<option>Cardiology</option>
<option>Surgery</option>
<option>Emergency</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 flex justify-center items-center gap-1.5 px-4 py-2 bg-surface-container-lowest border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">close</span>
                                        Reject
                                    </button>
<button className="flex-[2] flex justify-center items-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:bg-blue-700 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">check</span>
                                        Approve Profile
                                    </button>
</div>
</div>
</div>
</div>
</div>
{/*  Applicant Card 2  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-[#E9ECEF] p-6 transition-all hover:shadow-md relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
<div className="flex-1 min-w-[300px]">
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-surface-container-low shadow-sm">
<span className="font-h3 text-h3 text-on-surface-variant">JD</span>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-surface-container-lowest rounded-full flex items-center justify-center border border-[#E9ECEF] shadow-sm">
<span className="material-symbols-outlined text-[14px] text-tertiary">schedule</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-h3 text-[20px] text-on-surface leading-tight">Dr. James Diaz</h3>
<span className="px-2 py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] uppercase tracking-wider font-bold">Pending</span>
</div>
<p className="font-body-md text-on-surface-variant font-medium text-sm mb-3">Pediatric Neurology</p>
<div className="flex flex-wrap gap-x-4 gap-y-2 font-body-sm text-on-surface-variant text-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">school</span>
<span>D.O., Johns Hopkins</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">work_history</span>
<span>8 Years Exp.</span>
</div>
</div>
</div>
</div>
</div>
<div className="lg:w-64 border-t lg:border-t-0 lg:border-l border-[#E9ECEF] pt-4 lg:pt-0 lg:pl-8 flex flex-col justify-center">
<p className="font-label-sm text-label-sm text-outline mb-2 uppercase tracking-wide">Required Documentation</p>
<div className="flex items-center justify-between bg-error-container/20 p-3 rounded-lg border border-error/20 mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-error">error</span>
<span className="font-body-sm text-sm font-medium text-on-surface">Board Cert. Missing</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-container-lowest border-2 border-primary-container text-primary-container rounded-lg font-label-md text-label-md hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
<span className="material-symbols-outlined text-[18px]">policy</span>
                                Verify Credentials
                            </button>
</div>
<div className="flex-1 border-t lg:border-t-0 lg:border-l border-[#E9ECEF] pt-4 lg:pt-0 lg:pl-8 flex flex-col justify-between opacity-60 pointer-events-none">
<div className="space-y-3 mb-4 lg:mb-0">
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Assign Department</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-sm rounded-lg pl-3 pr-8 py-2" disabled="">
<option selected="">Requires Verification...</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[20px]">expand_more</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 flex justify-center items-center gap-1.5 px-4 py-2 bg-surface-container-lowest border border-outline text-on-surface rounded-lg font-label-md text-label-md">
                                        Reject
                                    </button>
<button className="flex-[2] flex justify-center items-center gap-1.5 px-4 py-2 bg-outline text-surface rounded-lg font-label-md text-label-md">
                                        Approve Profile
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Pagination / Footer  */}
<div className="mt-8 flex items-center justify-between border-t border-[#E9ECEF] pt-4">
<span className="font-body-sm text-sm text-on-surface-variant">Showing 2 of 14 applications</span>
<div className="flex items-center gap-2">
<button className="p-2 rounded-md hover:bg-surface-container-low text-on-surface-variant transition-colors disabled:opacity-50">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-md bg-primary text-on-primary font-body-sm text-sm flex items-center justify-center font-medium">1</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container-low text-on-surface-variant font-body-sm text-sm flex items-center justify-center transition-colors">2</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container-low text-on-surface-variant font-body-sm text-sm flex items-center justify-center transition-colors">3</button>
<button className="p-2 rounded-md hover:bg-surface-container-low text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
