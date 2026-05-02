import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function PharmacyInventoryMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col md:flex-row">

{/*  SideNavBar (Web)  */}
<aside className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant bg-surface-container-lowest z-40 fixed left-0 top-0">
<div className="p-lg border-b border-outline-variant">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-h3 text-h3 shrink-0">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>local_hospital</span>
</div>
<div>
<h1 className="font-h3 text-h3 text-on-surface tracking-tight">Hospital Admin</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant">Clinical Excellence</p>
</div>
</div>
</div>
<nav className="flex-1 py-md overflow-y-auto">
<ul className="space-y-base px-md">
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-150 ease-in-out rounded-lg font-label-md text-label-md" to="/billing_finance_medcore_health">
<span className="material-symbols-outlined">payments</span>
<span>Finance</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-150 ease-in-out rounded-lg font-label-md text-label-md" to="/bed_management_medcore_health">
<span className="material-symbols-outlined">hotel</span>
<span>Beds</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-4 py-3 bg-primary-fixed text-on-primary-fixed border-r-4 border-primary rounded-l-lg font-label-md text-label-md" to="/pharmacy_inventory_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
<span>Pharmacy</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-150 ease-in-out rounded-lg font-label-md text-label-md" to="/laboratory_management_medcore_health">
<span className="material-symbols-outlined">biotech</span>
<span>Lab</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-150 ease-in-out rounded-lg font-label-md text-label-md" to="/announcements_medcore_health">
<span className="material-symbols-outlined">campaign</span>
<span>News</span>
</Link>
</li>
</ul>
</nav>
<div className="p-md border-t border-outline-variant">
<ul className="space-y-base">
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-150 ease-in-out rounded-lg font-label-md text-label-md" to="/admin_dashboard_medcore_health">
<span className="material-symbols-outlined">contact_support</span>
<span>Support</span>
</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-error transition-all duration-150 ease-in-out rounded-lg font-label-md text-label-md" to="/login_medcore_health">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</Link>
</li>
</ul>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 md:ml-64 flex flex-col min-w-0">
{/*  TopNavBar (Web)  */}
<header className="hidden md:flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm">
<div className="flex items-center gap-lg">
<h2 className="font-h3 text-h3 text-on-surface hidden lg:block">MedAdmin Pro</h2>
{/*  Search Bar  */}
<div className="relative w-64 lg:w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full h-10 pl-10 pr-4 bg-surface-container-low border-0 rounded-lg text-on-surface font-body-sm text-body-sm focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors placeholder:text-on-surface-variant/60" placeholder="Search pharmacy records..." type="text" />
</div>
</div>
<div className="flex items-center gap-sm">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="w-px h-6 bg-outline-variant mx-2"></div>
<button className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant shrink-0">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional healthcare administrator wearing a crisp white coat over a light blue shirt. The background is a brightly lit, modern hospital corridor with soft, out-of-focus clinical lighting. The mood is confident and reliable, reflecting the clinical excellence of the medical management system. The color palette emphasizes clean whites and calming blues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA8j0nlXh7lg2bTXN_ZoK8gYprjU50Hp_1lW63EoafAoOkjp_-MjIgIjbhHPUkY6GlohzvG6WLpcd7TlhnXxdRlSSNMsZjGYg4EgT8CmfSZRWhZTPFG2PzjL6y8HpnzlBXO5lcBJTLm5WCdqQW1xM2VQt09nybr8RXkOO0m07MRpH0J8lQVrpENmtHFKLl6s34emdjKuJVBl3I2O5K_Y3OPjq4YoAlp3E4ZWweLyZ_7Y85NTj2wFu3ZuhhaNFLLip51V5-JdDpchXC" />
</button>
</div>
</header>
{/*  Mobile Header (Visible only on md:hidden)  */}
<header className="md:hidden flex items-center justify-between px-md h-16 bg-surface border-b border-outline-variant sticky top-0 z-50">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings":"'FILL' 1"}}>local_hospital</span>
</div>
<h1 className="font-h3 text-h3 text-on-surface tracking-tight text-[18px]">MedAdmin Pro</h1>
</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
{/*  Content Canvas  */}
<main className="flex-1 p-md md:p-xl overflow-y-auto">
{/*  Page Header  */}
<div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h2 className="font-h2 text-h2 text-on-surface mb-xs">Pharmacy Dashboard</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Manage inventory, prescriptions, and supplier relations.</p>
</div>
<div className="flex gap-sm">
<button className="px-md py-sm bg-surface-container-lowest border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
<button className="px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:bg-primary-container/90 transition-colors shadow-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">add</span>
                        New Order
                    </button>
</div>
</div>
{/*  Dashboard Grid (Bento Style)  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-xl">
{/*  Stock Summary Widget (Col Span 8)  */}
<div className="md:col-span-8 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden">
<div className="p-lg border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-low/30">
<h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">monitoring</span>
                            Stock Summary
                        </h3>
<button className="text-primary font-label-sm text-label-sm hover:underline">View All</button>
</div>
<div className="p-lg flex-1 grid grid-cols-2 md:grid-cols-4 gap-md">
{/*  Stat Item 1  */}
<div className="p-md rounded-lg bg-surface-container-low/50 border border-outline-variant/20 flex flex-col justify-center">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Total Items</p>
<p className="font-h2 text-[28px] text-on-surface">4,285</p>
<div className="flex items-center gap-1 mt-xs text-secondary">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
<span className="font-label-sm text-label-sm text-[11px]">+2.4%</span>
</div>
</div>
{/*  Stat Item 2  */}
<div className="p-md rounded-lg bg-surface-container-low/50 border border-outline-variant/20 flex flex-col justify-center">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Critical Stock</p>
<p className="font-h2 text-[28px] text-error">12</p>
<div className="flex items-center gap-1 mt-xs text-error">
<span className="material-symbols-outlined text-[14px]">warning</span>
<span className="font-label-sm text-label-sm text-[11px]">Action Req.</span>
</div>
</div>
{/*  Stat Item 3  */}
<div className="p-md rounded-lg bg-surface-container-low/50 border border-outline-variant/20 flex flex-col justify-center">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Pending Rx</p>
<p className="font-h2 text-[28px] text-on-surface">148</p>
<div className="flex items-center gap-1 mt-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="font-label-sm text-label-sm text-[11px]">Today</span>
</div>
</div>
{/*  Stat Item 4  */}
<div className="p-md rounded-lg bg-surface-container-low/50 border border-outline-variant/20 flex flex-col justify-center">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Expiring Soon</p>
<p className="font-h2 text-[28px] text-tertiary-container">34</p>
<div className="flex items-center gap-1 mt-xs text-tertiary-container">
<span className="material-symbols-outlined text-[14px]">event_busy</span>
<span className="font-label-sm text-label-sm text-[11px]">&lt; 30 days</span>
</div>
</div>
</div>
</div>
{/*  Low Stock Alerts (Col Span 4)  */}
<div className="md:col-span-4 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden relative">
{/*  Subtle gradient background for visual interest  */}
<div className="absolute inset-0 bg-gradient-to-br from-error-container/20 to-transparent pointer-events-none"></div>
<div className="p-lg border-b border-outline-variant/50 flex justify-between items-center relative z-10">
<h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-error">error_outline</span>
                            Low Stock Alerts
                        </h3>
</div>
<div className="p-0 flex-1 overflow-y-auto relative z-10">
<ul className="divide-y divide-outline-variant/30">
{/*  Alert Item  */}
<li className="p-md hover:bg-surface-container-low/50 transition-colors flex justify-between items-center">
<div>
<p className="font-label-md text-label-md text-on-surface">Amoxicillin 500mg</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Antibiotics</p>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm text-[11px] mb-1">
                                        5 units left
                                    </span>
<button className="block w-full text-primary font-label-sm text-label-sm hover:underline">Reorder</button>
</div>
</li>
{/*  Alert Item  */}
<li className="p-md hover:bg-surface-container-low/50 transition-colors flex justify-between items-center">
<div>
<p className="font-label-md text-label-md text-on-surface">Epinephrine Auto-Inj.</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Emergency</p>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm text-[11px] mb-1">
                                        2 units left
                                    </span>
<button className="block w-full text-primary font-label-sm text-label-sm hover:underline">Reorder</button>
</div>
</li>
{/*  Alert Item  */}
<li className="p-md hover:bg-surface-container-low/50 transition-colors flex justify-between items-center">
<div>
<p className="font-label-md text-label-md text-on-surface">Lisinopril 10mg</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Cardiovascular</p>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm text-[11px] mb-1">
                                        15 units left
                                    </span>
<button className="block w-full text-primary font-label-sm text-label-sm hover:underline">Reorder</button>
</div>
</li>
</ul>
</div>
</div>
</div> {/*  End Grid  */}
{/*  Main Data Section (Inventory Table)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 mb-xl overflow-hidden">
<div className="p-lg border-b border-outline-variant/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md bg-surface-container-low/30">
<h3 className="font-h3 text-[20px] text-on-surface">Medicine Inventory</h3>
<div className="flex gap-sm w-full sm:w-auto">
<div className="relative flex-1 sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">filter_list</span>
<select className="w-full h-9 pl-10 pr-8 py-0 bg-surface border border-outline-variant rounded-lg text-on-surface font-body-sm text-body-sm focus:ring-1 focus:ring-primary appearance-none">
<option>All Categories</option>
<option>Antibiotics</option>
<option>Analgesics</option>
<option>Cardiovascular</option>
</select>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface border-b border-outline-variant/50 font-label-md text-label-md text-on-surface-variant">
<th className="py-3 px-4 font-semibold">Medicine Name</th>
<th className="py-3 px-4 font-semibold">Category</th>
<th className="py-3 px-4 font-semibold">Stock Level</th>
<th className="py-3 px-4 font-semibold">Expiry Date</th>
<th className="py-3 px-4 font-semibold">Status</th>
<th className="py-3 px-4 text-right font-semibold">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 font-body-sm text-body-sm">
{/*  Table Row 1  */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="py-3 px-4">
<p className="font-label-md text-on-surface">Ibuprofen 400mg</p>
<p className="text-[12px] text-on-surface-variant">ID: MED-001</p>
</td>
<td className="py-3 px-4 text-on-surface-variant">Analgesics</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[80%] rounded-full"></div>
</div>
<span className="text-on-surface">850</span>
</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 2025</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-secondary/10 text-secondary font-label-sm text-[11px] border border-secondary/20">
                                        Optimal
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded-md hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
{/*  Table Row 2  */}
<tr className="bg-surface-container-lowest hover:bg-surface-container-low/30 transition-colors">
<td className="py-3 px-4">
<p className="font-label-md text-on-surface">Atorvastatin 20mg</p>
<p className="text-[12px] text-on-surface-variant">ID: MED-042</p>
</td>
<td className="py-3 px-4 text-on-surface-variant">Cardiovascular</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary-container w-[40%] rounded-full"></div>
</div>
<span className="text-on-surface">120</span>
</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">Jan 2024</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-tertiary-container/10 text-tertiary-container font-label-sm text-[11px] border border-tertiary-container/20">
                                        Low Stock
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded-md hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
{/*  Table Row 3  */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="py-3 px-4">
<p className="font-label-md text-on-surface">Ceftriaxone 1g</p>
<p className="text-[12px] text-on-surface-variant">ID: MED-115</p>
</td>
<td className="py-3 px-4 text-on-surface-variant">Antibiotics</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-error w-[15%] rounded-full"></div>
</div>
<span className="text-on-surface">15</span>
</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">May 2024</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-error/10 text-error font-label-sm text-[11px] border border-error/20">
                                        Critical
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded-md hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
{/*  Table Row 4  */}
<tr className="bg-surface-container-lowest hover:bg-surface-container-low/30 transition-colors">
<td className="py-3 px-4">
<p className="font-label-md text-on-surface">Diazepam 5mg</p>
<p className="text-[12px] text-on-surface-variant">ID: MED-088</p>
</td>
<td className="py-3 px-4 text-on-surface-variant">Neurology</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[90%] rounded-full"></div>
</div>
<span className="text-on-surface">450</span>
</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">Dec 2026</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-secondary/10 text-secondary font-label-sm text-[11px] border border-secondary/20">
                                        Optimal
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-on-surface-variant hover:text-primary p-1 rounded-md hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="p-md border-t border-outline-variant/50 flex items-center justify-between bg-surface">
<p className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to 4 of 248 entries</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface hover:bg-surface-container font-label-sm text-label-sm">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface hover:bg-surface-container font-label-sm text-label-sm">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Two Column Layout for Rx and Suppliers  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter">
{/*  Prescription Fulfillment  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col">
<div className="p-lg border-b border-outline-variant/50 flex justify-between items-center">
<h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">prescriptions</span>
                            Prescription Fulfillment
                        </h3>
</div>
<div className="p-md flex-1">
<ul className="space-y-sm">
{/*  Rx Item: Pending  */}
<li className="p-md rounded-lg border border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-md">
                                        JD
                                    </div>
<div>
<p className="font-label-md text-label-md text-on-surface">John Doe - Rx #8821</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">Ward A • Ordered 10 mins ago</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-[12px]">
<span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span>
                                    Pending
                                </span>
</li>
{/*  Rx Item: Filled  */}
<li className="p-md rounded-lg border border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-md">
                                        MS
                                    </div>
<div>
<p className="font-label-md text-label-md text-on-surface">Mary Smith - Rx #8820</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">ICU • Ordered 45 mins ago</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[12px]">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Filled
                                </span>
</li>
{/*  Rx Item: Delivery  */}
<li className="p-md rounded-lg border border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-md">
                                        RJ
                                    </div>
<div>
<p className="font-label-md text-label-md text-on-surface">Robert Jones - Rx #8815</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">Ward C • Ordered 2 hrs ago</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[12px]">
<span className="material-symbols-outlined text-[14px]">local_shipping</span>
                                    Out for Delivery
                                </span>
</li>
</ul>
</div>
<div className="p-sm border-t border-outline-variant/30 text-center">
<button className="text-primary font-label-sm text-label-sm hover:underline py-2">View Fulfillment Queue</button>
</div>
</div>
{/*  Supplier Management  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col">
<div className="p-lg border-b border-outline-variant/50 flex justify-between items-center">
<h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">local_shipping</span>
                            Supplier Management
                        </h3>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
<div className="p-md flex-1">
<div className="space-y-md">
{/*  Supplier Card  */}
<div className="p-md rounded-lg border border-outline-variant/30 bg-surface flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded bg-surface-variant overflow-hidden shrink-0">
<img alt="PharmaCorp Logo" className="w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="A stylized, modern corporate logo for a pharmaceutical company, featuring an abstract blue and green geometric pill shape on a clean white background. The image is rendered with smooth gradients and soft shadows, projecting a professional and trustworthy clinical brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCGNn0Qhe-XvMQpjc_XOr5dy_Tett5WmndvxRuxLZnh0alWxusZuGPbHfoYt5juSEYf3gEe4OoXQYr_VNboxv--JQ99DvZM5cghm_PRLa_sD1CRehW3c9zqodrCpHqI1hep8DiQszKvrMIHrw1oh8IxQ5mtahIzhZMSSo_3m1bgBiGrheQMr11LThBuoG7Faq4Kmudn51OYrQkgbR_UZUZUk5AeF91bK8DoamwEcyYHN9l0j2J-uHEWZfwykuDteGKQkt0QAHgLYW0" />
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Global PharmaCorp</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Primary supplier • Rating: 4.8/5</p>
</div>
</div>
<button className="px-3 py-1.5 border border-outline text-on-surface rounded font-label-sm text-[12px] hover:bg-surface-container transition-colors">
                                    Contact
                                </button>
</div>
{/*  Supplier Card  */}
<div className="p-md rounded-lg border border-outline-variant/30 bg-surface flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded bg-surface-variant overflow-hidden shrink-0 flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">science</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">MedTech Supplies</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Specialty equipment • Rating: 4.5/5</p>
</div>
</div>
<button className="px-3 py-1.5 border border-outline text-on-surface rounded font-label-sm text-[12px] hover:bg-surface-container transition-colors">
                                    Contact
                                </button>
</div>
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
