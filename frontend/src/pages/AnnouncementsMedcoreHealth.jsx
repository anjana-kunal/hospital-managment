import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function AnnouncementsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md antialiased overflow-hidden h-screen flex">

{/*  SideNavBar from JSON  */}
<nav className="fixed left-0 top-0 flex flex-col h-full z-40 bg-white dark:bg-gray-950 font-manrope text-sm font-medium h-screen w-64 border-r border-r border-gray-200 dark:border-gray-800 shrink-0">
<div className="px-6 py-8 border-b border-gray-200 dark:border-gray-800 flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>local_hospital</span>
</div>
<div>
<h1 className="text-lg font-black text-gray-900 dark:text-white leading-tight">Hospital Admin</h1>
<p className="font-body-sm text-body-sm text-gray-500">Clinical Excellence</p>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4 flex flex-col gap-sm">
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" to="/billing_finance_medcore_health">
<span className="material-symbols-outlined">payments</span>
<span>Finance</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" to="/bed_management_medcore_health">
<span className="material-symbols-outlined">hotel</span>
<span>Beds</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" to="/pharmacy_inventory_medcore_health">
<span className="material-symbols-outlined">medical_services</span>
<span>Pharmacy</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" to="/laboratory_management_medcore_health">
<span className="material-symbols-outlined">biotech</span>
<span>Lab</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 cursor-pointer transition-all duration-150 ease-in-out" to="/announcements_medcore_health">
<span className="material-symbols-outlined">campaign</span>
<span>News</span>
</Link>
</div>
<div className="border-t border-gray-200 dark:border-gray-800 py-4 flex flex-col gap-sm">
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" to="/admin_dashboard_medcore_health">
<span className="material-symbols-outlined">contact_support</span>
<span>Support</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" to="/login_medcore_health">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</Link>
</div>
</nav>
{/*  Main Content Wrapper  */}
<div className="flex-1 flex flex-col min-w-0 ml-64">
{/*  TopNavBar from JSON  */}
<header className="flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50 docked full-width top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md font-manrope antialiased border-b border-gray-200 dark:border-gray-800 shadow-sm shrink-0">
<div className="flex items-center gap-md w-1/3">
{/*  Search Bar on left  */}
<div className="relative w-full max-w-xs group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
<input className="w-full bg-surface-container-low border-transparent focus:bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary rounded-lg pl-10 pr-4 py-2 font-body-sm text-on-surface outline-none transition-colors" placeholder="Search records..." type="text" />
</div>
</div>
<div className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                MedAdmin Pro
            </div>
<div className="flex items-center justify-end gap-md w-1/3">
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md ml-sm cursor-pointer border border-outline-variant">
                    AD
                </div>
</div>
</header>
{/*  Page Canvas  */}
<main className="flex-1 overflow-y-auto p-grid-margin bg-background">
<div className="max-w-[1440px] mx-auto flex flex-col gap-xl">
{/*  Header Section  */}
<div className="flex justify-between items-end">
<div>
<h2 className="font-h2 text-h2 text-on-surface">Announcements & Notices</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Broadcast critical updates and manage hospital communications.</p>
</div>
</div>
{/*  Emergency Alert Banner Preview  */}
<div className="bg-error-container border border-error rounded-xl p-lg flex items-start gap-md shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<span className="material-symbols-outlined text-error text-3xl mt-1" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-h3 text-h3 text-on-error-container">Active Protocol: Severe Weather Warning</h3>
<span className="bg-error text-on-error px-2 py-1 rounded-md font-label-sm uppercase tracking-wider">High Priority</span>
</div>
<p className="font-body-md text-body-md text-on-error-container mt-sm max-w-3xl">Level 3 storm protocol in effect. All non-essential outpatient appointments are canceled for the next 24 hours. Staff should refer to departmental contingencies.</p>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-grid-gutter items-start">
{/*  Left Column: Create Notice Form  */}
<div className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant flex flex-col">
<div className="p-lg border-b border-outline-variant flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">add_circle</span>
<h3 className="font-h3 text-h3 text-on-surface">Create Notice</h3>
</div>
<form className="p-lg flex flex-col gap-lg">
{/*  Title Input  */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface">Notice Title</label>
<input className="w-full bg-surface-container-low border border-transparent focus:bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm font-body-sm text-on-surface outline-none transition-colors" placeholder="e.g., Q3 Mandatory Compliance Training" type="text" />
</div>
{/*  Content Textarea  */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface">Content</label>
<textarea className="w-full bg-surface-container-low border border-transparent focus:bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm font-body-sm text-on-surface outline-none transition-colors resize-none" placeholder="Enter notice details here..." rows="4"></textarea>
</div>
{/*  Targeting Options  */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface">Target Audience</label>
<div className="flex flex-wrap gap-sm">
<label className="flex items-center gap-2 cursor-pointer bg-primary-fixed text-on-primary-fixed px-md py-sm rounded-lg border border-primary transition-colors">
<input checked="" className="text-primary focus:ring-primary border-outline-variant" name="targeting" type="radio" />
<span className="font-label-sm text-label-sm">All Personnel</span>
</label>
<label className="flex items-center gap-2 cursor-pointer bg-surface-container-low text-on-surface-variant hover:bg-surface-variant px-md py-sm rounded-lg border border-transparent transition-colors">
<input className="text-primary focus:ring-primary border-outline-variant" name="targeting" type="radio" />
<span className="font-label-sm text-label-sm">Clinical Staff Only</span>
</label>
<label className="flex items-center gap-2 cursor-pointer bg-surface-container-low text-on-surface-variant hover:bg-surface-variant px-md py-sm rounded-lg border border-transparent transition-colors">
<input className="text-primary focus:ring-primary border-outline-variant" name="targeting" type="radio" />
<span className="font-label-sm text-label-sm">Patients (Portal)</span>
</label>
</div>
</div>
{/*  Scheduling Options  */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface">Publish Date & Time</label>
<div className="grid grid-cols-2 gap-sm">
<input className="w-full bg-surface-container-low border border-transparent focus:bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm font-body-sm text-on-surface outline-none transition-colors" type="date" />
<input className="w-full bg-surface-container-low border border-transparent focus:bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm font-body-sm text-on-surface outline-none transition-colors" type="time" />
</div>
</div>
<div className="border-t border-outline-variant pt-lg flex justify-end gap-md">
<button className="px-lg py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors" type="button">Save Draft</button>
<button className="bg-primary text-white px-lg py-sm font-label-md text-label-md rounded-lg shadow-sm hover:opacity-90 transition-opacity" type="button">Publish Notice</button>
</div>
</form>
</div>
{/*  Right Column: History Table  */}
<div className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant flex flex-col overflow-hidden">
<div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest z-10 relative">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant">history</span>
<h3 className="font-h3 text-h3 text-on-surface">Broadcast History</h3>
</div>
<button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-lowest border-b border-outline-variant sticky top-0">
<tr>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant w-1/2">Title</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant">Target</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant">Date</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant text-right">Engagement</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-md px-md">
<p className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Updated Visition Hours</p>
</td>
<td className="py-md px-md">
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-md font-label-sm">Patients</span>
</td>
<td className="py-md px-md font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">Oct 24, 09:00</td>
<td className="py-md px-md text-right">
<div className="flex items-center justify-end gap-1 text-on-secondary-fixed-variant">
<span className="material-symbols-outlined text-sm">visibility</span>
<span className="font-label-md text-label-md">84%</span>
</div>
</td>
</tr>
<tr className="border-b border-outline-variant bg-surface hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-md px-md">
<p className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">System Maintenance - EMR</p>
</td>
<td className="py-md px-md">
<span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-md font-label-sm">All Personnel</span>
</td>
<td className="py-md px-md font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">Oct 22, 22:00</td>
<td className="py-md px-md text-right">
<div className="flex items-center justify-end gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">visibility</span>
<span className="font-label-md text-label-md">92%</span>
</div>
</td>
</tr>
<tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-md px-md">
<p className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">New Infection Control Guidelines</p>
</td>
<td className="py-md px-md">
<span className="bg-primary-fixed-dim text-on-primary-fixed-variant px-2 py-1 rounded-md font-label-sm">Clinical Staff</span>
</td>
<td className="py-md px-md font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">Oct 18, 14:30</td>
<td className="py-md px-md text-right">
<div className="flex items-center justify-end gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">visibility</span>
<span className="font-label-md text-label-md">67%</span>
</div>
</td>
</tr>
<tr className="bg-surface hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-md px-md">
<p className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Q3 Town Hall Recording</p>
</td>
<td className="py-md px-md">
<span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-md font-label-sm">All Personnel</span>
</td>
<td className="py-md px-md font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">Oct 15, 10:00</td>
<td className="py-md px-md text-right">
<div className="flex items-center justify-end gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">visibility</span>
<span className="font-label-md text-label-md">45%</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md border-t border-outline-variant flex justify-center bg-surface-container-lowest">
<button className="font-label-md text-label-md text-primary hover:underline">View All Records</button>
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
