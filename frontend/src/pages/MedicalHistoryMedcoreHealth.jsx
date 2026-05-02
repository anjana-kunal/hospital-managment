import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function MedicalHistoryMedcoreHealth() {
  return (
    <>
      <div className="antialiased selection:bg-primary-container selection:text-on-primary-container">

{/*  TopAppBar  */}
<header className="fixed top-0 right-0 left-0 md:left-64 h-16 flex justify-between items-center px-8 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm w-full">
<div className="flex items-center gap-4">
<h1 className="hidden font-h3 text-h3 text-blue-600 dark:text-blue-400">MediPortal HMS</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors focus:ring-2 focus:ring-blue-500/50 rounded-full">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors focus:ring-2 focus:ring-blue-500/50 rounded-full">
<span className="material-symbols-outlined" data-icon="apps">apps</span>
</button>
<button className="hidden md:flex items-center gap-2 px-4 py-2 bg-error/10 text-error rounded-lg hover:bg-error/20 transition-colors focus:ring-2 focus:ring-error/50">
<span className="font-label-md text-label-md">Emergency Support</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a doctor or medical administrator in a bright, modern clinical setting. Soft, diffuse lighting emphasizing a clean, trustworthy corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1MxSdB6KoKho8iGK9FvznM428hRTpUMFQYLirtkTkn3mJLnVEu8VPkn08TiXWia_bOFUMkBbduk7ulh7z1MnJRh34RB1nnRkJCTuVaHl6v1lEalAWoAyJ6inOCCEsqQ4siqX-4j4sQ-n9qNzPCPZt5BlO3fcM5Yu9RjGLNSCi2B91R3zePc_wFdgB4gUuh18PxBRStgDHIxeZFjI3duorv8S4D9tpvgI2rWIFIuDuWmQ5wCDPUlMWFC48ZtZIq0p2CGU6A0qrwBJJ" />
</div>
</div>
</header>
{/*  SideNavBar (Hidden on Mobile)  */}
<nav className="hidden md:flex fixed left-0 top-0 h-full flex-col h-screen w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm z-50">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400" data-icon="local_hospital">local_hospital</span>
</div>
<div>
<div className="text-xl font-bold text-blue-600 dark:text-blue-400">MediPortal</div>
<div className="font-label-sm text-label-sm text-outline">Patient Access</div>
</div>
</div>
<div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-manrope text-sm font-medium transition-colors opacity-90 transition-all" to="/messages_medcore_health">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                Messages
            </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-manrope text-sm font-medium transition-colors opacity-90 transition-all" to="/notifications_medcore_health">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                Notifications
            </Link>
<Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 font-manrope text-sm font-medium transition-colors opacity-90 transition-all" to="/medical_history_medcore_health">
<span className="material-symbols-outlined" data-icon="history_edu" style={{"fontVariationSettings":"'FILL' 1"}}>history_edu</span>
                Medical History
            </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-manrope text-sm font-medium transition-colors opacity-90 transition-all" to="/my_profile_medcore_health">
<span className="material-symbols-outlined" data-icon="person">person</span>
                Profile
            </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-manrope text-sm font-medium transition-colors opacity-90 transition-all" to="/settings_medcore_health">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </Link>
</div>
</nav>
{/*  Main Canvas  */}
<main className="md:ml-64 pt-16 min-h-screen p-4 md:p-8">
<div className="max-w-[1400px] mx-auto space-y-grid-margin">
{/*  Page Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-h2 text-h2 text-on-surface">Medical History</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Comprehensive overview of patient medical records and ongoing treatments.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                        Export PDF
                    </button>
</div>
</div>
{/*  Vitals Summary Cards (Bento style)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
<div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1 border border-surface-variant flex flex-col gap-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Blood Type</span>
<span className="material-symbols-outlined text-[20px] text-error" data-icon="water_drop">water_drop</span>
</div>
<div className="font-h2 text-h2 text-on-surface">O+</div>
<div className="font-body-sm text-body-sm text-outline mt-auto pt-sm border-t border-surface-variant">Verified 12 Oct 2023</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1 border border-surface-variant flex flex-col gap-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Height / Weight</span>
<span className="material-symbols-outlined text-[20px] text-primary" data-icon="accessibility_new">accessibility_new</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-h2 text-h2 text-on-surface">178<span className="font-body-md text-body-md text-on-surface-variant ml-1">cm</span></span>
<span className="font-body-lg text-body-lg text-outline">/</span>
<span className="font-h2 text-h2 text-on-surface">75<span className="font-body-md text-body-md text-on-surface-variant ml-1">kg</span></span>
</div>
<div className="font-body-sm text-body-sm text-outline mt-auto pt-sm border-t border-surface-variant">BMI: 23.7 (Normal)</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1 border border-surface-variant flex flex-col gap-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Blood Pressure</span>
<span className="material-symbols-outlined text-[20px] text-tertiary" data-icon="favorite">favorite</span>
</div>
<div className="font-h2 text-h2 text-on-surface">120/80</div>
<div className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-auto pt-sm border-t border-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="check_circle">check_circle</span>
                        Stable
                    </div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1 border border-surface-variant flex flex-col gap-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Last Checkup</span>
<span className="material-symbols-outlined text-[20px] text-primary" data-icon="calendar_today">calendar_today</span>
</div>
<div className="font-h2 text-h2 text-on-surface">15 Nov</div>
<div className="font-body-sm text-body-sm text-outline mt-auto pt-sm border-t border-surface-variant">Dr. Sarah Jenkins</div>
</div>
</div>
{/*  Main Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-grid-gutter">
{/*  Left Column (Wider)  */}
<div className="lg:col-span-2 space-y-grid-gutter">
{/*  Chronic Conditions  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
<div className="px-lg py-md border-b border-surface-variant bg-surface flex justify-between items-center">
<h3 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary" data-icon="monitor_heart">monitor_heart</span>
                                Chronic Conditions
                            </h3>
</div>
<div className="p-lg space-y-md">
<div className="flex flex-col md:flex-row gap-md p-md rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-surface-variant">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h4 className="font-label-md text-label-md text-on-surface text-lg">Type 2 Diabetes</h4>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">Managed</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Diagnosed 2018. Currently managed with diet, exercise, and Metformin.</p>
<div className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="person">person</span>
                                        Primary Physician: Dr. Alan Grant
                                    </div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-md p-md rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-surface-variant">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h4 className="font-label-md text-label-md text-on-surface text-lg">Hypertension</h4>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">Managed</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Diagnosed 2020. Blood pressure readings consistently within target range for past 6 months.</p>
<div className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="person">person</span>
                                        Primary Physician: Dr. Alan Grant
                                    </div>
</div>
</div>
</div>
</div>
{/*  Past Surgeries Timeline  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
<div className="px-lg py-md border-b border-surface-variant bg-surface flex justify-between items-center">
<h3 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="healing">healing</span>
                                Past Surgeries & Procedures
                            </h3>
</div>
<div className="p-lg">
<div className="relative border-l-2 border-surface-variant ml-4 space-y-lg pb-4">
<div className="relative pl-6">
<div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-surface-container-lowest"></div>
<div className="font-label-sm text-label-sm text-primary mb-1">March 2015</div>
<div className="bg-surface p-md rounded-lg border border-surface-variant">
<h4 className="font-label-md text-label-md text-on-surface mb-1">Appendectomy</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Laparoscopic removal of appendix. No complications reported during recovery.</p>
<div className="mt-2 font-label-sm text-label-sm text-outline">Facility: City General Hospital</div>
</div>
</div>
<div className="relative pl-6">
<div className="absolute w-3 h-3 bg-outline rounded-full -left-[7px] top-1.5 ring-4 ring-surface-container-lowest"></div>
<div className="font-label-sm text-label-sm text-outline mb-1">August 2008</div>
<div className="bg-surface p-md rounded-lg border border-surface-variant">
<h4 className="font-label-md text-label-md text-on-surface mb-1">Tonsillectomy</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Routine outpatient procedure. Standard recovery period.</p>
<div className="mt-2 font-label-sm text-label-sm text-outline">Facility: Westside Pediatric Center</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column (Narrower)  */}
<div className="space-y-grid-gutter">
{/*  Allergies Alert Card  */}
<div className="bg-error/5 rounded-xl shadow-level-1 border border-error/20 overflow-hidden">
<div className="px-lg py-md border-b border-error/10 flex items-center gap-2">
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
<h3 className="font-h3 text-h3 text-error">Allergies</h3>
</div>
<div className="p-lg space-y-3">
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-error/10">
<span className="font-label-md text-label-md text-on-surface">Penicillin</span>
<span className="px-2 py-1 rounded text-error bg-error/10 font-label-sm text-label-sm">Severe</span>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-error/10">
<span className="font-label-md text-label-md text-on-surface">Latex</span>
<span className="px-2 py-1 rounded text-tertiary bg-tertiary/10 font-label-sm text-label-sm">Moderate</span>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-error/10">
<span className="font-label-md text-label-md text-on-surface">Peanuts</span>
<span className="px-2 py-1 rounded text-outline bg-surface-variant font-label-sm text-label-sm">Mild</span>
</div>
</div>
</div>
{/*  Ongoing Medication  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
<div className="px-lg py-md border-b border-surface-variant bg-surface flex justify-between items-center">
<h3 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="medication">medication</span>
                                Medications
                            </h3>
</div>
<div className="p-0">
{/*  Table-like structure for density  */}
<div className="flex flex-col">
<div className="p-md border-b border-surface-variant flex justify-between items-center hover:bg-surface-container-low transition-colors cursor-pointer">
<div>
<div className="font-label-md text-label-md text-on-surface">Metformin</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">500mg, Twice Daily</div>
</div>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
</div>
<div className="p-md border-b border-surface-variant flex justify-between items-center hover:bg-surface-container-low transition-colors cursor-pointer">
<div>
<div className="font-label-md text-label-md text-on-surface">Lisinopril</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">10mg, Once Daily</div>
</div>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
</div>
<div className="p-md flex justify-between items-center hover:bg-surface-container-low transition-colors cursor-pointer">
<div>
<div className="font-label-md text-label-md text-on-surface">Atorvastatin</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">20mg, At Bedtime</div>
</div>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<div className="p-md bg-surface border-t border-surface-variant">
<button className="w-full py-2 text-primary font-label-md text-label-md hover:bg-primary/5 rounded-lg transition-colors flex justify-center items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                                    Add Medication
                                </button>
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
