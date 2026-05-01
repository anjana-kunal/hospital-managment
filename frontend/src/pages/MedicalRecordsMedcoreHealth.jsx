import React from 'react';

export default function MedicalRecordsMedcoreHealth() {
  return (
    <>
      <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex">

{/*  SideNavBar  */}
<aside className="bg-white text-blue-600 font-manrope text-sm font-medium h-screen w-64 border-r border-slate-200 border-r no-shadow fixed left-0 top-0 h-full flex flex-col py-4 hidden md:flex z-40">
<div className="px-6 mb-8 flex flex-col gap-1 mt-4">
<span className="text-blue-600 font-bold text-h3 font-h3 tracking-tight">Patient Portal</span>
<span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Hospital Management</span>
</div>
<nav className="flex-1 flex flex-col gap-1 px-2">
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span>Appointments</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600 rounded-r-lg cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span>Medical Records</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined">medication</span>
<span>Prescriptions</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Billing</span>
</a>
</nav>
<div className="mt-auto px-2 flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" href="#">
<span className="material-symbols-outlined">contact_support</span>
<span>Support</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen">
{/*  TopNavBar  */}
<nav className="bg-white text-blue-600 font-manrope antialiased docked full-width top-0 sticky z-50 border-b border-slate-200 shadow-sm flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-4 md:hidden">
<span className="material-symbols-outlined cursor-pointer">menu</span>
<span className="text-lg font-extrabold tracking-tight text-slate-900">MedCore Portal</span>
</div>
<div className="hidden md:flex items-center bg-slate-50 rounded-full px-4 py-2 border border-slate-200 w-96">
<span className="material-symbols-outlined text-slate-400 mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none text-slate-700" placeholder="Search records, doctors..." type="text" />
</div>
<div className="flex items-center gap-4">
<button className="text-slate-600 hover:bg-slate-50 transition-colors p-2 rounded-full active:opacity-80 transition-opacity">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-slate-600 hover:bg-slate-50 transition-colors p-2 rounded-full active:opacity-80 transition-opacity">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden cursor-pointer border border-slate-300">
<img alt="Patient Profile Avatar" className="w-full h-full object-cover" data-alt="A small circular avatar placeholder image indicating a user profile. The image consists of a solid deep primary blue background with the crisp white initials 'PU' perfectly centered in a clean sans-serif font, representing 'Patient User'. The aesthetic is strictly modern corporate and minimal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnWxE3CO6tij_VNv0TcoZodGxanRxgjmqLNJW9crZgMY2smIe3gxGUDVbMYHE8JCF3fkjHfuIGtOzYln1VU06zvLZuTjkQmg-ha_dJ5qr7NOgIa5WMqAZB_rN2Y1V7c8OrouPo_dpDs-T7ZChVWr01UtW6469HOO_eWSvezX58vpcXOApQIaMtM73_AFFf8gRTHvh6Z3XrNlFG-hoMqw841F3AeQNN-alwsflSVyHPTvNWmchAzSaliO8S3JMwTfSEJEu_GYnNCLLA" />
</div>
</div>
</nav>
{/*  Page Content Canvas  */}
<main className="flex-1 p-xl max-w-5xl mx-auto w-full">
{/*  Header Section  */}
<header className="flex flex-col sm:flex-row sm:items-center justify-between mb-xl pb-md border-b border-surface-variant gap-4 sm:gap-0">
<div>
<h1 className="font-h1 text-h1 text-on-surface mb-xs">Medical Records</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Review your complete history of clinical visits, diagnostic reports, and test results.</p>
</div>
<button className="bg-primary text-on-primary px-lg py-[10px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm font-label-md text-label-md whitespace-nowrap self-start sm:self-auto">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>upload_file</span>
                    Upload Report
                </button>
</header>
{/*  Vertical Timeline Container  */}
<div className="relative pl-4 sm:pl-0">
{/*  Timeline Central Line  */}
<div className="absolute left-4 sm:left-[140px] top-4 bottom-0 w-[2px] bg-surface-variant z-0"></div>
{/*  Timeline Item 1: Cardiology  */}
<div className="relative flex flex-col sm:flex-row gap-6 mb-lg z-10 group">
{/*  Date Column  */}
<div className="sm:w-[120px] pt-4 sm:text-right flex items-center sm:items-start gap-4 sm:gap-0 pl-10 sm:pl-0">
<div className="font-label-md text-label-md text-on-surface">Oct 24, 2023</div>
</div>
{/*  Timeline Node  */}
<div className="absolute left-[9px] sm:left-[133px] top-5 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-sm group-hover:scale-125 transition-transform"></div>
{/*  Content Card  */}
<div className="flex-1 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant p-lg hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">monitor_heart</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface leading-tight">Cardiology Consultation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dr. Sarah Jenkins • Heart Center</p>
</div>
</div>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm whitespace-nowrap">Report Available</span>
</div>
<div className="mb-md">
<p className="font-body-md text-body-md text-on-surface">Comprehensive echocardiogram completed. Results indicate normal left ventricular systolic function. Blood pressure slightly elevated, dietary adjustments recommended.</p>
</div>
<div className="flex items-center gap-3 pt-md border-t border-surface-variant">
<button className="border border-outline text-primary hover:bg-surface-container-low px-md py-[6px] rounded font-label-md text-label-sm transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>download</span>
                                Download PDF
                            </button>
<button className="text-on-surface-variant hover:text-primary px-md py-[6px] rounded font-label-md text-label-sm transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>share</span>
                                Share
                            </button>
</div>
</div>
</div>
{/*  Timeline Item 2: Lab Results  */}
<div className="relative flex flex-col sm:flex-row gap-6 mb-lg z-10 group">
{/*  Date Column  */}
<div className="sm:w-[120px] pt-4 sm:text-right flex items-center sm:items-start gap-4 sm:gap-0 pl-10 sm:pl-0">
<div className="font-label-md text-label-md text-on-surface">Sep 15, 2023</div>
</div>
{/*  Timeline Node  */}
<div className="absolute left-[9px] sm:left-[133px] top-5 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface shadow-sm group-hover:scale-125 transition-transform group-hover:bg-primary"></div>
{/*  Content Card  */}
<div className="flex-1 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant p-lg hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">science</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface leading-tight">Comprehensive Blood Panel</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Clinical Lab Diagnostics</p>
</div>
</div>
</div>
<div className="mb-md">
<p className="font-body-md text-body-md text-on-surface">Routine annual blood work including lipid panel, CBC, and metabolic profile. All parameters are within normal ranges. Cholesterol levels show marked improvement since previous assessment.</p>
</div>
<div className="flex items-center gap-3 pt-md border-t border-surface-variant">
<button className="border border-outline text-primary hover:bg-surface-container-low px-md py-[6px] rounded font-label-md text-label-sm transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>download</span>
                                Download Results
                            </button>
</div>
</div>
</div>
{/*  Timeline Item 3: General Checkup  */}
<div className="relative flex flex-col sm:flex-row gap-6 z-10 group">
{/*  Date Column  */}
<div className="sm:w-[120px] pt-4 sm:text-right flex items-center sm:items-start gap-4 sm:gap-0 pl-10 sm:pl-0">
<div className="font-label-md text-label-md text-on-surface text-on-surface-variant">Jun 02, 2023</div>
</div>
{/*  Timeline Node  */}
<div className="absolute left-[9px] sm:left-[133px] top-5 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface shadow-sm group-hover:scale-125 transition-transform group-hover:bg-primary"></div>
{/*  Content Card  */}
<div className="flex-1 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant p-lg hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">stethoscope</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface leading-tight">Orthopedic Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dr. Mark Stevens • Orthopedics</p>
</div>
</div>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm whitespace-nowrap">Archived</span>
</div>
<div className="mb-md">
<p className="font-body-md text-body-md text-on-surface">Evaluation of persistent right knee pain following physical activity. X-ray imaging performed; negative for acute fractures or severe joint space narrowing. Prescribed a 6-week course of targeted physical therapy.</p>
</div>
<div className="flex items-center gap-3 pt-md border-t border-surface-variant">
<button className="border border-outline text-primary hover:bg-surface-container-low px-md py-[6px] rounded font-label-md text-label-sm transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>radiology</span>
                                View X-Rays
                            </button>
<button className="text-on-surface-variant hover:text-primary px-md py-[6px] rounded font-label-md text-label-sm transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>download</span>
                                Clinical Notes
                            </button>
</div>
</div>
</div>
</div>
{/*  Load More Indicator  */}
<div className="mt-xl flex justify-center pb-xl">
<button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-low px-lg py-2 rounded-full transition-colors">
                    Load Older Records
                    <span className="material-symbols-outlined">expand_more</span>
</button>
</div>
</main>
</div>

</div>
    </>
  );
}
