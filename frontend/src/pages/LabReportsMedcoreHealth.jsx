import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function LabReportsMedcoreHealth() {
  return (
    <>
      <div className="bg-background min-h-screen flex flex-col font-body-md text-body-md text-on-surface antialiased">

{/*  TopNavBar  */}
<header className="bg-white dark:bg-slate-900 font-manrope antialiased docked full-width top-0 sticky z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between px-6 h-16 w-full">
{/*  Search Bar (on_left) & Brand  */}
<div className="flex items-center gap-6">
<span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">MedCore Portal</span>
<div className="relative hidden md:block w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{"fontSize":"20px"}}>search</span>
<input className="w-full pl-10 pr-4 py-2 bg-[#F1F3F4] border-transparent focus:border-primary focus:bg-white rounded-lg text-sm text-slate-900 placeholder-slate-500 outline-none transition-all" placeholder="Search..." type="text" />
</div>
</div>
{/*  Trailing Actions & Profile  */}
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full active:opacity-80 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full active:opacity-80 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>
<div className="w-px h-6 bg-slate-200 mx-2"></div>
<img alt="Patient Profile Avatar" className="w-9 h-9 rounded-full object-cover border border-slate-200" data-alt="A close-up, high-resolution portrait photograph of a confident professional woman in a bright, modern corporate setting. She is wearing a soft beige blazer over a crisp white shirt. The lighting is soft and natural, casting gentle highlights that emphasize a clean, approachable, and trustworthy aesthetic consistent with high-end healthcare services." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ2s4wTqNsJ3n2GRussFN9uytSczfqyiRmB7RLN2f4TP2Jn1a08M1Ip48LUCsuyRLEQGI9ybHygC8aNtYt4eNhBQ0j5Z2k3lQZ85ETe-yyc4Psi3Q58N-FDrA8dRXnaTJ46GwWUSRFbIGU-HazYdI_m2x8W4xSveYqeGWQN_eFzJUXG_cgVe9-42IXdOmlcllCnw4WxlB4vKRLGyCBM-iqXBsObt9t23qo8BuAciORxCzzE28aqZyupFcbzSWUWXwasxhcQhHcoFoT" />
</div>
</header>
<div className="flex flex-1 overflow-hidden">
{/*  SideNavBar  */}
<aside className="bg-white dark:bg-slate-900 font-manrope text-sm font-medium h-screen w-64 border-r border-slate-200 dark:border-slate-800 border-r no-shadow fixed left-0 top-0 h-full flex flex-col py-4 z-40 pt-20"> {/*  Added pt-20 to offset sticky header visually in this layout setup  */}
<div className="px-6 mb-6 mt-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined" data-weight="fill" style={{"fontSize":"20px"}}>local_hospital</span>
</div>
<div>
<h2 className="text-blue-600 dark:text-blue-400 font-bold text-base leading-tight">Patient Portal</h2>
<p className="text-xs text-slate-500">Hospital Management</p>
</div>
</div>
</div>
<nav className="flex-1 px-2 space-y-1">
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" to="/patient_dashboard_medcore_health">
<span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" to="/my_appointments_medcore_health">
<span className="material-symbols-outlined">calendar_today</span>
                    Appointments
                </Link>
{/*  Active Tab: Medical Records (Maps to Lab Reports intent)  */}
<Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 rounded-r-lg cursor-pointer active:scale-95 transition-transform" to="/medical_records_medcore_health">
<span className="material-symbols-outlined">history_edu</span>
                    Medical Records
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" to="/prescriptions_medcore_health">
<span className="material-symbols-outlined">medication</span>
                    Prescriptions
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" to="/billing_payments_medcore_health">
<span className="material-symbols-outlined">payments</span>
                    Billing
                </Link>
</nav>
<div className="px-2 mt-auto space-y-1 pt-4 border-t border-slate-200 dark:border-slate-800">
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" to="/settings_medcore_health">
<span className="material-symbols-outlined">settings</span>
                    Settings
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95 transition-transform rounded-lg" to="/patient_dashboard_medcore_health">
<span className="material-symbols-outlined">contact_support</span>
                    Support
                </Link>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 ml-64 p-xl overflow-y-auto">
{/*  Page Header  */}
<div className="flex items-end justify-between mb-lg">
<div>
<h1 className="font-h2 text-h2 text-on-surface mb-2">Lab Reports</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Review your recent diagnostic tests and laboratory results.</p>
</div>
{/*  Quick Filters  */}
<div className="flex items-center gap-sm">
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md py-2 pl-4 pr-10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
<option>Last 6 Months</option>
<option>Last Year</option>
<option>All Time</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" style={{"fontSize":"18px"}}>expand_more</span>
</div>
</div>
</div>
{/*  Data Table Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-lowest border-b border-surface-variant">
<tr>
<th className="px-md py-4 font-label-md text-label-md text-on-surface whitespace-nowrap w-[35%]">Test Name & Result</th>
<th className="px-md py-4 font-label-md text-label-md text-on-surface whitespace-nowrap">Ordering Physician</th>
<th className="px-md py-4 font-label-md text-label-md text-on-surface whitespace-nowrap">Date Collection</th>
<th className="px-md py-4 font-label-md text-label-md text-on-surface whitespace-nowrap">Status</th>
<th className="px-md py-4 font-label-md text-label-md text-on-surface text-right whitespace-nowrap">Action</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
{/*  Row 1: Abnormal  */}
<tr className="border-b border-surface-variant/50 even:bg-surface hover:bg-surface-container-low transition-colors group">
<td className="px-md py-4">
<div className="flex flex-col gap-1">
<span className="font-medium text-on-surface">Comprehensive Metabolic Panel (CMP)</span>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 bg-error-container/50 text-on-error-container font-label-sm text-label-sm px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined" style={{"fontSize":"12px","fontVariationSettings":"'FILL' 1"}}>error</span>
                                                High Glucose
                                            </span>
</div>
</div>
</td>
<td className="px-md py-4 text-on-surface-variant">Dr. Sarah Jenkins</td>
<td className="px-md py-4 text-on-surface-variant">Oct 26, 2023</td>
<td className="px-md py-4">
<span className="font-label-md text-label-md text-secondary flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Final
                                    </span>
</td>
<td className="px-md py-4 text-right">
<button aria-label="Download Report" className="inline-flex items-center justify-center p-2 text-primary hover:bg-surface-container-high rounded-lg transition-colors group-hover:opacity-100 opacity-80">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>download</span>
</button>
</td>
</tr>
{/*  Row 2: Normal  */}
<tr className="border-b border-surface-variant/50 even:bg-surface hover:bg-surface-container-low transition-colors group">
<td className="px-md py-4">
<div className="flex flex-col gap-1">
<span className="font-medium text-on-surface">Lipid Panel Standard</span>
<div className="flex items-center gap-2">
<span className="inline-flex items-center bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">
                                                In Range
                                            </span>
</div>
</div>
</td>
<td className="px-md py-4 text-on-surface-variant">Dr. Sarah Jenkins</td>
<td className="px-md py-4 text-on-surface-variant">Oct 20, 2023</td>
<td className="px-md py-4">
<span className="font-label-md text-label-md text-secondary flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Final
                                    </span>
</td>
<td className="px-md py-4 text-right">
<button aria-label="Download Report" className="inline-flex items-center justify-center p-2 text-primary hover:bg-surface-container-high rounded-lg transition-colors group-hover:opacity-100 opacity-80">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>download</span>
</button>
</td>
</tr>
{/*  Row 3: Pending  */}
<tr className="border-b border-surface-variant/50 even:bg-surface hover:bg-surface-container-low transition-colors group">
<td className="px-md py-4">
<div className="flex flex-col gap-1">
<span className="font-medium text-on-surface">Thyroid Stimulating Hormone (TSH)</span>
<span className="text-on-surface-variant text-xs italic">Awaiting analysis</span>
</div>
</td>
<td className="px-md py-4 text-on-surface-variant">Dr. Michael Lee</td>
<td className="px-md py-4 text-on-surface-variant">Nov 01, 2023</td>
<td className="px-md py-4">
<span className="font-label-md text-label-md text-outline flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full border-2 border-outline"></span> Pending
                                    </span>
</td>
<td className="px-md py-4 text-right">
<button aria-label="Report Not Ready" className="inline-flex items-center justify-center p-2 text-outline-variant cursor-not-allowed rounded-lg" disabled="">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>download</span>
</button>
</td>
</tr>
{/*  Row 4: Abnormal Low  */}
<tr className="even:bg-surface hover:bg-surface-container-low transition-colors group">
<td className="px-md py-4">
<div className="flex flex-col gap-1">
<span className="font-medium text-on-surface">Vitamin D, 25-Hydroxy</span>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined" style={{"fontSize":"12px","fontVariationSettings":"'FILL' 1"}}>arrow_downward</span>
                                                Low Level
                                            </span>
</div>
</div>
</td>
<td className="px-md py-4 text-on-surface-variant">Dr. Emily Chen</td>
<td className="px-md py-4 text-on-surface-variant">Sep 15, 2023</td>
<td className="px-md py-4">
<span className="font-label-md text-label-md text-secondary flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Final
                                    </span>
</td>
<td className="px-md py-4 text-right">
<button aria-label="Download Report" className="inline-flex items-center justify-center p-2 text-primary hover:bg-surface-container-high rounded-lg transition-colors group-hover:opacity-100 opacity-80">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>download</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Contextual Information / Footer  */}
<div className="mt-lg flex items-start gap-4 p-4 bg-surface-container-low rounded-xl border border-surface-variant">
<span className="material-symbols-outlined text-outline mt-0.5" style={{"fontSize":"20px"}}>info</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Test results are securely transmitted from the laboratory. "Pending" status indicates the sample is currently being processed. If you have questions regarding highlighted values, please send a message to your ordering physician through the secure messaging portal.
                </p>
</div>
</main>
</div>

</div>
    </>
  );
}
