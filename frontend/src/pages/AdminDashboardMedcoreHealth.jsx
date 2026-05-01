import React from 'react';

export default function AdminDashboardMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-surface font-body-md antialiased flex h-screen overflow-hidden">

{/*  Shared Component: SideNavBar  */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-outline-variant/40 bg-surface-container-lowest flex-col gap-1 py-4 z-50 hidden md:flex font-manrope text-sm font-medium">
<div className="px-6 pb-6 pt-2 flex items-center gap-2">
<span className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-level-1"><span className="material-symbols-outlined fill-icon text-[20px]">health_and_safety</span></span>
<div>
<h1 className="font-display text-base font-extrabold tracking-tight text-on-surface">MedCore Health</h1>
<p className="text-[10px] text-on-surface-variant font-semibold tracking-wider uppercase">Admin Portal</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto">
{/*  Active Tab  */}
<a className="nav-link-active px-4 py-3 flex items-center gap-3 tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined fill-icon">dashboard</span>
                Dashboard
            </a>
{/*  Inactive Tabs  */}
<a className="nav-link px-4 py-3 flex items-center gap-3 tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">group</span>
                User Management
            </a>
<a className="nav-link px-4 py-3 flex items-center gap-3 tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">verified_user</span>
                Doctor Approvals
            </a>
<a className="nav-link px-4 py-3 flex items-center gap-3 tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">corporate_fare</span>
                Departments
            </a>
<a className="nav-link px-4 py-3 flex items-center gap-3 tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">event</span>
                Appointments
            </a>
<a className="nav-link px-4 py-3 flex items-center gap-3 tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">payments</span>
                Billing
            </a>
<a className="nav-link px-4 py-3 flex items-center gap-3 tap-highlight-none active:scale-95 mt-auto" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</nav>
</aside>
{/*  Main Content Wrapper  */}
<div className="flex-1 flex flex-col md:ml-64 w-full h-full min-w-0">
{/*  Shared Component: TopNavBar  */}
<header className="docked full-width top-0 sticky z-40 border-b border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center h-16 px-6 w-full ml-auto bg-white dark:bg-slate-900 font-manrope antialiased tracking-tight">
{/*  Left Side / Search  */}
<div className="flex items-center">
<div className="md:hidden text-lg font-extrabold text-blue-700 dark:text-blue-400 tracking-tighter mr-4">MedCore Health</div>
<div className="hidden md:flex items-center bg-surface rounded-full px-4 py-2 border border-surface-variant w-80">
<span className="material-symbols-outlined text-outline">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm outline-none w-full ml-2 text-on-surface placeholder:text-outline-variant font-body-sm" placeholder="Search patients, doctors, or ID..." type="text" />
</div>
</div>
{/*  Right Actions  */}
<div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
<button className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors p-2 rounded-full relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors p-2 rounded-full ml-2">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/*  Canvas Area  */}
<main className="flex-1 overflow-y-auto p-grid-margin">
<div className="mb-xl">
<h2 className="font-h2 text-h2 text-on-surface">Dashboard Overview</h2>
<p className="font-body-md text-on-surface-variant mt-1">Real-time clinical and operational metrics.</p>
</div>
{/*  KPI Cards Grid  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-grid-gutter mb-grid-margin">
{/*  KPI 1  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/40 p-lg flex flex-col justify-between hover-lift">
<div className="flex justify-between items-start mb-4">
<div className="bg-primary-fixed text-primary p-2 rounded-lg">
<span className="material-symbols-outlined">group</span>
</div>
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +2.4%
                        </span>
</div>
<div>
<div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Total Patients</div>
<div className="font-h1 text-h1 text-on-surface stat-num">12,480</div>
</div>
</div>
{/*  KPI 2  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/40 p-lg flex flex-col justify-between hover-lift">
<div className="flex justify-between items-start mb-4">
<div className="bg-primary-fixed text-primary p-2 rounded-lg">
<span className="material-symbols-outlined">stethoscope</span>
</div>
<span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">horizontal_rule</span> 0%
                        </span>
</div>
<div>
<div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Total Doctors</div>
<div className="font-h1 text-h1 text-on-surface stat-num">450</div>
</div>
</div>
{/*  KPI 3  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/40 p-lg flex flex-col justify-between hover-lift">
<div className="flex justify-between items-start mb-4">
<div className="bg-primary-fixed text-primary p-2 rounded-lg">
<span className="material-symbols-outlined">calendar_today</span>
</div>
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
                        </span>
</div>
<div>
<div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Appointments Today</div>
<div className="font-h1 text-h1 text-on-surface stat-num">342</div>
</div>
</div>
{/*  KPI 4  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/40 p-lg flex flex-col justify-between hover-lift">
<div className="flex justify-between items-start mb-4">
<div className="bg-tertiary-fixed text-tertiary p-2 rounded-lg">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +5.8%
                        </span>
</div>
<div>
<div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Revenue (MTD)</div>
<div className="font-h1 text-h1 text-on-surface stat-num">$84.2k</div>
</div>
</div>
{/*  KPI 5  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant p-lg flex flex-col justify-between border-l-4 border-l-error">
<div className="flex justify-between items-start mb-4">
<div className="bg-error-container text-error p-2 rounded-lg">
<span className="material-symbols-outlined">pending_actions</span>
</div>
<span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2 py-1 rounded-full flex items-center gap-1">
                            Action Req.
                        </span>
</div>
<div>
<div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Pending Approvals</div>
<div className="font-h1 text-h1 text-on-surface stat-num">12</div>
</div>
</div>
</section>
{/*  Charts Section  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter mb-grid-margin">
{/*  Chart 1: Appointments  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant p-lg">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-variant">
<h3 className="font-h3 text-h3 text-on-surface">Appointment Trends</h3>
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="h-64 w-full flex items-end justify-between gap-2 relative">
{/*  Simulated Line Chart via SVG  */}
<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0,80 C20,60 40,90 60,40 C80,-10 100,50 100,50 L100,100 L0,100 Z" fill="url(#blue-gradient)" opacity="0.2" />
<path d="M0,80 C20,60 40,90 60,40 C80,-10 100,50 100,50" fill="none" stroke="#005bbf" strokeWidth="3" />
<defs>
<linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#005bbf"></stop>
<stop offset="100%" stop-color="#f9f9ff"></stop>
</linearGradient>
</defs>
</svg>
</div>
</div>
{/*  Chart 2: Revenue  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant p-lg">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-variant">
<h3 className="font-h3 text-h3 text-on-surface">Billing & Revenue</h3>
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="h-64 w-full flex items-end justify-around gap-2 px-4 pt-8 border-b border-surface-variant">
{/*  Simulated Bar Chart  */}
<div className="w-12 bg-surface-variant rounded-t-sm h-[40%] relative group hover:bg-primary-fixed transition-colors"></div>
<div className="w-12 bg-surface-variant rounded-t-sm h-[60%] relative group hover:bg-primary-fixed transition-colors"></div>
<div className="w-12 bg-surface-variant rounded-t-sm h-[35%] relative group hover:bg-primary-fixed transition-colors"></div>
<div className="w-12 bg-surface-variant rounded-t-sm h-[80%] relative group hover:bg-primary-fixed transition-colors"></div>
<div className="w-12 bg-primary rounded-t-sm h-[95%] relative shadow-[0_0_15px_rgba(0,91,191,0.3)]"></div>
<div className="w-12 bg-surface-variant rounded-t-sm h-[50%] relative group hover:bg-primary-fixed transition-colors"></div>
</div>
<div className="flex justify-around mt-2 text-xs text-outline font-label-sm">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span className="text-primary font-bold">Fri</span><span>Sat</span>
</div>
</div>
</section>
{/*  Lists Section  */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-grid-gutter">
{/*  Recent Activity Feed (Spans 2 cols)  */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant">
<div className="p-lg border-b border-surface-variant flex justify-between items-center">
<h3 className="font-h3 text-h3 text-on-surface">Recent Activity</h3>
<a className="font-label-md text-label-md text-primary hover:underline" href="#">View All</a>
</div>
<div className="p-0">
{/*  Activity Item  */}
<div className="flex items-start gap-4 p-md border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<div className="bg-primary-fixed text-primary p-2 rounded-full flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-[20px]">person_add</span>
</div>
<div className="flex-1">
<p className="font-body-md text-on-surface font-medium">New Doctor Application: Dr. Sarah Miller</p>
<p className="font-body-sm text-on-surface-variant">Cardiology Department • Pending Review</p>
</div>
<span className="font-label-sm text-label-sm text-outline-variant">10m ago</span>
</div>
{/*  Activity Item  */}
<div className="flex items-start gap-4 p-md border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<div className="bg-tertiary-fixed text-tertiary p-2 rounded-full flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
</div>
<div className="flex-1">
<p className="font-body-md text-on-surface font-medium">Payment Received: #INV-2023-0891</p>
<p className="font-body-sm text-on-surface-variant">$4,250.00 processed via Wire Transfer</p>
</div>
<span className="font-label-sm text-label-sm text-outline-variant">1h ago</span>
</div>
{/*  Activity Item  */}
<div className="flex items-start gap-4 p-md hover:bg-surface-container-low transition-colors">
<div className="bg-surface-variant text-on-surface-variant p-2 rounded-full flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-[20px]">event_available</span>
</div>
<div className="flex-1">
<p className="font-body-md text-on-surface font-medium">System Backup Completed</p>
<p className="font-body-sm text-on-surface-variant">Database cluster US-East-1</p>
</div>
<span className="font-label-sm text-label-sm text-outline-variant">3h ago</span>
</div>
</div>
</div>
{/*  Alerts Panel  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant flex flex-col">
<div className="p-lg border-b border-surface-variant flex justify-between items-center bg-surface-container-low rounded-t-xl">
<h3 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-error">warning</span>
                            Critical Alerts
                        </h3>
</div>
<div className="p-lg flex-1 flex flex-col gap-4">
{/*  Alert Item  */}
<div className="bg-error-container/30 border border-error-container rounded-lg p-md flex gap-3">
<span className="material-symbols-outlined text-error mt-0.5">memory</span>
<div>
<h4 className="font-label-md text-label-md text-on-error-container mb-1">Server Load High</h4>
<p className="font-body-sm text-on-surface-variant text-sm">Cluster A is operating at 92% capacity. Auto-scaling initiated.</p>
</div>
</div>
{/*  Alert Item  */}
<div className="bg-surface-container rounded-lg p-md flex gap-3 border border-outline-variant">
<span className="material-symbols-outlined text-tertiary mt-0.5">how_to_reg</span>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">5 Pending Doctor Verifications</h4>
<p className="font-body-sm text-on-surface-variant text-sm">Action required to clear the onboarding queue for this week.</p>
<button className="mt-3 font-label-sm text-label-sm text-primary hover:text-primary-fixed-variant transition-colors uppercase tracking-wider">Review Now</button>
</div>
</div>
</div>
</div>
</section>
<footer className="mt-xl pt-8 border-t border-surface-variant text-center pb-8">
<p className="font-body-sm text-outline font-medium">© 2024 MedCore Health Systems. Internal use only.</p>
</footer>
</main>
</div>

</div>
    </>
  );
}
