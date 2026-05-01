import React from 'react';

export default function PatientDashboardMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex">

{/*  SideNavBar  */}
<nav className="hidden md:flex bg-slate-50 border-r border-slate-200 h-screen w-64 flex-col p-4 shrink-0 transition-all duration-200 z-10 relative">
<div className="mb-8 px-4 mt-2">
<span className="font-h3 text-h3 text-primary-container font-extrabold tracking-tighter">MedCore HMS</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 mb-6 bg-surface-container-low rounded-lg border border-outline-variant/30">
<img alt="Patient Profile" className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="A professional headshot of a male patient in a clinical setting. He looks calm and trustworthy. The lighting is soft, natural, and highly professional, typical of modern corporate healthcare photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy3ZakSAsAzp8g9VXMTQTLrXkAf5QQtIeoK8EEX1HE8s6aXy3H-aePqiCyttdnepYNXWoDUhEMK1f-KuiZRRaysLTR0ZDJE3eSnv88nmHUW331USaXdNNnEdaimnXnpiT6wELV9-S_VOjQwt6c_ICfIHmn46MOJtU5Ce5jWtldSOGO5QeYqg0vvtajmYWAXvCV9O-VxtQfBfaS10c5vxZwk2De29WMn1t7yS8xJBhN30g7Cn4C7XhJc4YuddvAMXEuo_KC_OMAt64G" />
<div>
<p className="font-label-md text-label-md text-on-surface">Alex Johnson</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Patient ID: #MC-9842</p>
</div>
</div>
<ul className="flex-1 space-y-2">
<li>
<a className="flex items-center gap-3 bg-blue-50 text-blue-700 rounded-lg px-4 py-3 font-manrope text-sm font-medium" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" href="#">
<span className="material-symbols-outlined">calendar_month</span>
                    Appointments
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" href="#">
<span className="material-symbols-outlined">folder_shared</span>
                    Records
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
                    Billing
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
                    Settings
                </a>
</li>
</ul>
<div className="mt-auto pt-6 border-t border-slate-200">
<a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" href="#">
<span className="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</nav>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col h-screen overflow-hidden relative">
{/*  TopAppBar (Mobile Only for Shell, but we keep a header here for actions/notifications)  */}
<header className="bg-surface border-b border-slate-200 h-16 flex justify-between items-center px-6 md:px-lg shrink-0 z-20">
<div className="md:hidden flex items-center gap-4">
<button className="text-on-surface-variant p-2 rounded-md hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
<span className="font-h3 text-h3 text-primary-container font-extrabold tracking-tighter">MedCore HMS</span>
</div>
<div className="hidden md:flex items-center">
<h1 className="font-h3 text-h3 text-on-surface">Overview</h1>
</div>
<div className="flex items-center gap-4 ml-auto">
<button aria-label="Notifications" className="relative text-on-surface-variant p-2 rounded-md hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
</button>
<button className="hidden md:flex bg-surface-container-low text-primary-container font-label-md text-label-md px-4 py-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container-high transition-colors">
                    Patient Login
                </button>
</div>
</header>
{/*  Scrollable Dashboard Content  */}
<div className="flex-1 overflow-y-auto p-4 md:p-xl no-scrollbar bg-[#F8F9FA]">
<div className="max-w-7xl mx-auto space-y-grid-margin">
{/*  Welcome & Quick Actions Row  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
{/*  Welcome Card (Spans 8 cols)  */}
<div className="lg:col-span-8 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] p-lg flex flex-col justify-between relative overflow-hidden">
{/*  Decorative Background Blob  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="relative z-10 mb-6">
<h2 className="font-h2 text-h2 text-on-surface mb-2">Welcome back, Alex!</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Here is your latest health overview.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
{/*  Stat 1  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex flex-col gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">favorite</span>
<span className="font-label-sm text-label-sm">Heart Rate</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-h3 text-h3 text-on-surface">72</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">bpm</span>
</div>
</div>
{/*  Stat 2  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex flex-col gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">blood_pressure</span>
<span className="font-label-sm text-label-sm">Blood Pressure</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-h3 text-h3 text-on-surface">118/75</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">mmHg</span>
</div>
</div>
{/*  Stat 3  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex flex-col gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">monitor_weight</span>
<span className="font-label-sm text-label-sm">Weight</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-h3 text-h3 text-on-surface">165</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">lbs</span>
</div>
</div>
{/*  Stat 4  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex flex-col gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">thermostat</span>
<span className="font-label-sm text-label-sm">Temperature</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-h3 text-h3 text-on-surface">98.6</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">°F</span>
</div>
</div>
</div>
</div>
{/*  Quick Actions (Spans 4 cols)  */}
<div className="lg:col-span-4 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] p-lg flex flex-col">
<div className="border-b border-[#E9ECEF] pb-3 mb-4">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Quick Actions</h3>
</div>
<div className="grid grid-cols-2 gap-3 flex-1">
<button className="bg-primary-container text-on-primary font-label-md text-label-md py-3 px-2 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined">event</span>
<span className="text-center text-xs">Book Appointment</span>
</button>
<button className="bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-2 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant/20 flex flex-col items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined">upload_file</span>
<span className="text-center text-xs">Upload Records</span>
</button>
<button className="bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-2 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant/20 flex flex-col items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined">payments</span>
<span className="text-center text-xs">Pay Bill</span>
</button>
<button className="bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-2 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant/20 flex flex-col items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined">chat</span>
<span className="text-center text-xs">Message Doctor</span>
</button>
</div>
</div>
</section>
{/*  Middle Row: Appointments & Lab Reports  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter">
{/*  Upcoming Appointments  */}
<div className="bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
<div className="border-b border-[#E9ECEF] px-lg py-4 flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Upcoming Appointments</h3>
<a className="font-label-sm text-label-sm text-primary-container hover:underline" href="#">View All</a>
</div>
<div className="p-4 space-y-3">
{/*  Appointment Card  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/20 gap-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-fixed">stethoscope</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Dr. Sarah Mitchell</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cardiologist</p>
<div className="flex items-center gap-2 mt-1 text-on-surface-variant font-label-sm text-label-sm bg-surface rounded px-2 py-1 border border-outline-variant/30 w-fit">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                            Oct 12, 10:30 AM
                                        </div>
</div>
</div>
<div className="flex gap-2 sm:flex-col w-full sm:w-auto">
<button className="flex-1 sm:flex-none bg-surface border border-primary-container text-primary-container font-label-md text-label-md py-2 px-4 rounded hover:bg-primary-fixed-dim/10 transition-colors text-center">Reschedule</button>
</div>
</div>
</div>
</div>
{/*  Recent Lab Reports  */}
<div className="bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
<div className="border-b border-[#E9ECEF] px-lg py-4 flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Recent Lab Reports</h3>
<a className="font-label-sm text-label-sm text-primary-container hover:underline" href="#">View All</a>
</div>
<div className="p-4 space-y-3">
{/*  Lab Report Item  */}
<div className="flex items-center justify-between p-3 hover:bg-surface-container-lowest rounded-lg transition-colors group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined">science</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Full Blood Count</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sep 28, 2024</p>
</div>
</div>
<button aria-label="Download Full Blood Count Report" className="text-primary-container hover:bg-primary-fixed p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined">download</span>
</button>
</div>
{/*  Lab Report Item  */}
<div className="flex items-center justify-between p-3 hover:bg-surface-container-lowest rounded-lg transition-colors group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined">science</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Lipid Panel</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sep 15, 2024</p>
</div>
</div>
<button aria-label="Download Lipid Panel Report" className="text-primary-container hover:bg-primary-fixed p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
</div>
</section>
{/*  Bottom Row: Prescriptions & Billing  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
{/*  Recent Prescriptions (Spans 8 cols)  */}
<div className="lg:col-span-8 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
<div className="border-b border-[#E9ECEF] px-lg py-4 flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Active Prescriptions</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#F8F9FA] border-b border-[#E9ECEF]">
<th className="font-label-md text-label-md text-outline px-4 py-3 font-semibold w-1/2">Medication</th>
<th className="font-label-md text-label-md text-outline px-4 py-3 font-semibold">Status</th>
<th className="font-label-md text-label-md text-outline px-4 py-3 font-semibold text-right">Action</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
<tr className="border-b border-surface-container-high hover:bg-surface-container-lowest transition-colors">
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">pill</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Atorvastatin</p>
<p className="text-on-surface-variant">20mg • 1 tablet daily</p>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-container/20 text-on-secondary-container">
                                                Active
                                            </span>
</td>
<td className="px-4 py-4 text-right">
<button className="font-label-sm text-label-sm text-primary-container hover:underline">Order Refill</button>
</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-container-lowest transition-colors bg-[#F8F9FA]">
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">pill</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Lisinopril</p>
<p className="text-on-surface-variant">10mg • 1 tablet daily</p>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-container/20 text-on-secondary-container">
                                                Active
                                            </span>
</td>
<td className="px-4 py-4 text-right">
<button className="font-label-sm text-label-sm text-primary-container hover:underline">Order Refill</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Bills Summary (Spans 4 cols)  */}
<div className="lg:col-span-4 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col p-lg justify-between">
<div className="mb-6">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary-container">receipt_long</span>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Outstanding Balance</h3>
</div>
<p className="font-h1 text-h1 text-on-surface">$145.00</p>
<p className="font-body-sm text-body-sm text-error mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">info</span>
                                Due in 5 days
                            </p>
</div>
<div className="space-y-3 border-t border-[#E9ECEF] pt-4 mb-6">
<div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Consultation (Oct 1)</span>
<span>$120.00</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Lab Co-pay</span>
<span>$25.00</span>
</div>
</div>
<button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 px-4 rounded-lg hover:bg-primary-fixed-dim transition-colors shadow-sm text-center">
                            Pay Now
                        </button>
</div>
</section>
</div>
{/*  Footer Component Mapping  */}
<footer className="mt-12 w-full py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-center max-w-7xl mx-auto gap-8">
<div className="flex items-center gap-4">
<span className="text-sm font-bold text-slate-900 dark:text-white">MedCore HMS</span>
<span className="font-manrope text-xs text-slate-500 dark:text-slate-400">© 2024 MedCore Health Systems. Clinical Excellence & Reliability.</span>
</div>
<div className="flex gap-4 font-manrope text-xs text-slate-500 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#">Terms of Service</a>
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#">HIPAA Compliance</a>
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#">Cookie Policy</a>
</div>
</footer>
</div>
</main>

</div>
    </>
  );
}
