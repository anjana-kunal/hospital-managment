import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function LaboratoryManagementMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md font-body-md min-h-screen flex antialiased">

{/*  SideNavBar  */}
<nav className="hidden md:flex bg-white text-on-surface h-screen w-64 border-r border-surface-variant fixed left-0 top-0 flex-col z-40">
<div className="px-6 py-8 border-b border-surface-variant flex items-center gap-4">
<img alt="Hospital Logo" className="w-10 h-10 rounded-full object-cover" data-alt="A clean, modern medical cross logo in clinical blue set against a stark white background. The image should be highly professional, well-lit, and convey trust and healthcare excellence in a minimal corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_1flostEHAz15FpZIXZlARNLjrYQ543yyXlnRPcuNoksf6VtDKND7ZGyH7zXVlnOXQo8Nw0Afvq1aGf6BRJzY0BPgMd259f-zzXPE296p3JVGddJTS80lPIS8uUU1gg_vInjQxLADLrSYvGGRzseuQ3m0G9zoow3oT9fgCxcvPWTsC5xcOQCnv57LK2RCEVE2-yr2KvMWxGSWZKyiTKBgtaT-zVtGIbLzO-M6L1Bbmx_Kk7MZ86B1jC1AEF5VE6-naOgX9VXboG3J" />
<div>
<div className="font-h3 text-h3 text-on-surface">Hospital Admin</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Clinical Excellence</div>
</div>
</div>
<div className="flex-1 overflow-y-auto py-6">
<ul className="space-y-2">
<li>
<Link className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-150 ease-in-out cursor-pointer font-label-md text-label-md" to="/billing_finance_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>payments</span>
                        Finance
                    </Link>
</li>
<li>
<Link className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-150 ease-in-out cursor-pointer font-label-md text-label-md" to="/bed_management_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>hotel</span>
                        Beds
                    </Link>
</li>
<li>
<Link className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-150 ease-in-out cursor-pointer font-label-md text-label-md" to="/pharmacy_inventory_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>medical_services</span>
                        Pharmacy
                    </Link>
</li>
<li>
<Link className="flex items-center gap-3 px-6 py-3 bg-surface-container-low text-primary border-r-4 border-primary font-label-md text-label-md" to="/laboratory_management_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>biotech</span>
                        Lab
                    </Link>
</li>
<li>
<Link className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-150 ease-in-out cursor-pointer font-label-md text-label-md" to="/announcements_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>campaign</span>
                        News
                    </Link>
</li>
</ul>
</div>
<div className="border-t border-surface-variant p-4">
<ul className="space-y-2">
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary rounded-lg transition-all duration-150 ease-in-out cursor-pointer font-label-md text-label-md" to="/admin_dashboard_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>contact_support</span>
                        Support
                    </Link>
</li>
<li>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary rounded-lg transition-all duration-150 ease-in-out cursor-pointer font-label-md text-label-md" to="/login_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>logout</span>
                        Logout
                    </Link>
</li>
</ul>
</div>
</nav>
{/*  Main Content Area  */}
<div className="flex-1 md:ml-64 flex flex-col min-h-screen relative w-full">
{/*  TopNavBar  */}
<header className="flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-variant shadow-sm transition-all duration-200">
<div className="flex items-center gap-4">
<div className="md:hidden font-h3 text-h3 text-primary tracking-tight">MedAdmin Pro</div>
<div className="hidden md:flex relative text-on-surface-variant focus-within:text-primary">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2" style={{"fontVariationSettings":"'FILL' 0"}}>search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-0 w-64 text-body-sm font-body-sm transition-colors placeholder-outline-variant" placeholder="Search test results, patients..." type="text" />
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-full transition-colors active:opacity-80">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-full transition-colors active:opacity-80">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>settings</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-full transition-colors active:opacity-80">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>help_outline</span>
</button>
<div className="ml-4 h-8 w-8 rounded-full bg-surface-container overflow-hidden border border-surface-variant">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a medical administrator wearing a clean white lab coat, smiling subtly. The background is a blurred hospital corridor with bright, cool lighting. The aesthetic is modern corporate healthcare." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvare8WE5QlkNT3o4Bi_1Q8kA-lM2UP189OAeSU7jEWjZYGgOF99yoOa0dnoD-x5fPbY9LrItlM7J6PocAAXDynnfzD3HCYBYj_kmZdDzTZkW6CIhyNGIwfN9NeAawh1rhtnNr0QTzycLnbVNSf7IYjXFDSjRZoR4RhZn0vyRWrx41iCg2umhvqR1rL2q5hkX29rkG9HT-JZ61UVxYgMTCrN9T7vhgIUcKU0udJNcgWiXDp1_oY8SzMYrytCMQo-ch0CPxDW6htD6W" />
</div>
</div>
</header>
{/*  Page Canvas  */}
<main className="flex-1 p-4 md:p-8 w-full max-w-7xl mx-auto flex flex-col gap-8">
{/*  Header Section  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 className="font-h2 text-h2 text-on-surface">Laboratory Management</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time oversight of diagnostic workflows and test approvals.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export Report
                    </button>
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                        New Order
                    </button>
</div>
</div>
{/*  Dashboard Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Left Column: Test Queue (Span 8)  */}
<div className="md:col-span-8 flex flex-col gap-6">
{/*  Stats Row  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white p-4 rounded-xl ambient-shadow-sm border border-surface-variant">
<div className="flex items-center gap-2 text-on-surface-variant mb-2">
<span className="material-symbols-outlined text-tertiary">science</span>
<span className="font-label-md text-label-md">Pending Tests</span>
</div>
<div className="font-h2 text-h2 text-on-surface">142</div>
</div>
<div className="bg-white p-4 rounded-xl ambient-shadow-sm border border-surface-variant">
<div className="flex items-center gap-2 text-on-surface-variant mb-2">
<span className="material-symbols-outlined text-secondary">check_circle</span>
<span className="font-label-md text-label-md">Results Ready</span>
</div>
<div className="font-h2 text-h2 text-on-surface">28</div>
</div>
<div className="bg-white p-4 rounded-xl ambient-shadow-sm border border-surface-variant">
<div className="flex items-center gap-2 text-on-surface-variant mb-2">
<span className="material-symbols-outlined text-error">warning</span>
<span className="font-label-md text-label-md">Critical Value</span>
</div>
<div className="font-h2 text-h2 text-on-surface">3</div>
</div>
</div>
{/*  Test Queue Table Card  */}
<div className="bg-white rounded-xl ambient-shadow-sm border border-surface-variant overflow-hidden flex flex-col flex-1">
<div className="p-4 border-b border-surface-variant flex justify-between items-center bg-white">
<h2 className="font-h3 text-h3 text-on-surface">Live Test Queue</h2>
<button className="text-primary font-label-sm text-label-sm hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface font-label-md text-label-md text-on-surface-variant border-b border-surface-variant">
<th className="py-3 px-4 font-semibold">Test Name</th>
<th className="py-3 px-4 font-semibold">Patient</th>
<th className="py-3 px-4 font-semibold">Ordered By</th>
<th className="py-3 px-4 font-semibold">Status</th>
<th className="py-3 px-4 font-semibold text-right">Action</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface">
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<td className="py-3 px-4 font-medium">Complete Blood Count (CBC)</td>
<td className="py-3 px-4">John Doe <span className="text-outline text-[12px] block">MRN-9281A</span></td>
<td className="py-3 px-4">Dr. Sarah Jenkins</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[12px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5"></span>
                                                Processing
                                            </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-outline hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
</td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors bg-surface">
<td className="py-3 px-4 font-medium">Lipid Panel</td>
<td className="py-3 px-4">Jane Smith <span className="text-outline text-[12px] block">MRN-4429C</span></td>
<td className="py-3 px-4">Dr. Emily Chen</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[12px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span>
                                                Sample Collected
                                            </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-outline hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
</td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<td className="py-3 px-4 font-medium">Comprehensive Metabolic</td>
<td className="py-3 px-4">Robert King <span className="text-outline text-[12px] block">MRN-1102B</span></td>
<td className="py-3 px-4">Dr. Michael Ross</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[12px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                                                Results Ready
                                            </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-outline hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
</td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors bg-surface">
<td className="py-3 px-4 font-medium">Urinalysis</td>
<td className="py-3 px-4">Alice Wong <span className="text-outline text-[12px] block">MRN-7734D</span></td>
<td className="py-3 px-4">Dr. Sarah Jenkins</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[12px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5"></span>
                                                Processing
                                            </span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-outline hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Right Column: Approvals & Technicians (Span 4)  */}
<div className="md:col-span-4 flex flex-col gap-6">
{/*  Results Approval Card  */}
<div className="bg-white rounded-xl ambient-shadow-sm border border-surface-variant flex flex-col">
<div className="p-4 border-b border-surface-variant bg-surface-container-low rounded-t-xl flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">fact_check</span>
                                Pending Approvals
                            </h3>
<span className="bg-error text-on-error text-label-sm font-label-sm px-2 py-0.5 rounded-full">2</span>
</div>
<div className="p-4 flex flex-col gap-4">
{/*  Approval Item 1  */}
<div className="border border-surface-variant rounded-lg p-3 bg-surface hover:border-primary transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<div className="font-label-md text-label-md text-on-surface">HbA1c</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Patient: Mark Evans</div>
</div>
<span className="text-error font-label-sm text-label-sm font-bold">9.2% (High)</span>
</div>
<div className="flex gap-2 mt-3">
<button className="flex-1 bg-surface-variant text-on-surface font-label-sm text-label-sm py-1.5 rounded hover:bg-outline-variant transition-colors">Reject</button>
<button className="flex-1 bg-secondary text-on-secondary font-label-sm text-label-sm py-1.5 rounded hover:bg-on-secondary-fixed-variant transition-colors">Approve</button>
</div>
</div>
{/*  Approval Item 2  */}
<div className="border border-surface-variant rounded-lg p-3 bg-surface hover:border-primary transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<div className="font-label-md text-label-md text-on-surface">Thyroid Panel</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Patient: Linda Gomez</div>
</div>
<span className="text-secondary font-label-sm text-label-sm font-bold">Normal</span>
</div>
<div className="flex gap-2 mt-3">
<button className="flex-1 bg-surface-variant text-on-surface font-label-sm text-label-sm py-1.5 rounded hover:bg-outline-variant transition-colors">Reject</button>
<button className="flex-1 bg-secondary text-on-secondary font-label-sm text-label-sm py-1.5 rounded hover:bg-on-secondary-fixed-variant transition-colors">Approve</button>
</div>
</div>
</div>
</div>
{/*  Technician Workload Panel  */}
<div className="bg-white rounded-xl ambient-shadow-sm border border-surface-variant flex flex-col flex-1">
<div className="p-4 border-b border-surface-variant">
<h3 className="font-label-md text-label-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">group</span>
                                Active Technicians
                            </h3>
</div>
<div className="p-4 flex flex-col gap-3">
{/*  Tech 1  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Tech Profile" className="w-8 h-8 rounded-full object-cover" data-alt="A small, circular headshot of a female lab technician wearing safety goggles and a white coat, focused expression, clinical lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0t1iFT3a0bSuWMnKe8DZXKupZNauDNKcaeYSnvHX8Q0PJBg4MILPlJj4hJ_2m2tWxstlUe770WjEuJp39B4QibZIBCqhGyTQrcnwZMqg6gd_2wiJEvec9gYhKD3Z2dtchJLwnNIXaXIxGdd214ZanmRlSrjtWfP-EoNULy8LffNb1wp1NmDjz5NNopLkAqims8Y1dN3hEbRN4HVEGtK9PA5Edscsao9z7C3bAQwT81SBGF-h2dob1xkTh9VaOZYmXkSSn-AqbuB3i" />
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary border-2 border-white rounded-full"></div>
</div>
<div>
<div className="font-label-sm text-label-sm text-on-surface">T. Barnes</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Chemistry</div>
</div>
</div>
<div className="text-right">
<div className="font-label-sm text-label-sm text-on-surface">12 Samples</div>
<div className="w-16 h-1.5 bg-surface-variant rounded-full mt-1 overflow-hidden">
<div className="bg-primary h-full w-[80%] rounded-full"></div>
</div>
</div>
</div>
{/*  Tech 2  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-label-md text-label-md">MR</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary border-2 border-white rounded-full"></div>
</div>
<div>
<div className="font-label-sm text-label-sm text-on-surface">M. Reyes</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Hematology</div>
</div>
</div>
<div className="text-right">
<div className="font-label-sm text-label-sm text-on-surface">5 Samples</div>
<div className="w-16 h-1.5 bg-surface-variant rounded-full mt-1 overflow-hidden">
<div className="bg-primary h-full w-[40%] rounded-full"></div>
</div>
</div>
</div>
{/*  Tech 3  */}
<div className="flex items-center justify-between opacity-60">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-surface-variant text-outline flex items-center justify-center font-label-md text-label-md">KL</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-outline border-2 border-white rounded-full"></div>
</div>
<div>
<div className="font-label-sm text-label-sm text-on-surface">K. Lee</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Microbiology</div>
</div>
</div>
<div className="text-right">
<div className="font-label-sm text-label-sm text-on-surface">0 Samples</div>
<div className="w-16 h-1.5 bg-surface-variant rounded-full mt-1 overflow-hidden">
<div className="bg-outline h-full w-[0%] rounded-full"></div>
</div>
</div>
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
