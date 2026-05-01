import React from 'react';

export default function BedManagementMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md min-h-screen flex antialiased">

{/*  SideNavBar  */}
<nav className="bg-white dark:bg-gray-950 text-blue-600 dark:text-blue-400 font-manrope text-sm font-medium h-screen w-64 border-r border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col z-40 fixed left-0 top-0">
<div className="p-6 border-b border-gray-200 dark:border-gray-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold">M</div>
<div>
<h1 className="text-lg font-black text-gray-900 dark:text-white">Hospital Admin</h1>
<p className="text-xs text-gray-500">Clinical Excellence</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">payments</span>
                Finance
            </a>
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>hotel</span>
                Beds
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">medical_services</span>
                Pharmacy
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">biotech</span>
                Lab
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">campaign</span>
                News
            </a>
</div>
<div className="p-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">contact_support</span>
                Support
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</nav>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col md:ml-64 min-h-screen">
{/*  TopNavBar  */}
<header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-blue-600 dark:text-blue-400 font-manrope antialiased docked full-width top-0 border-b border-gray-200 dark:border-gray-800 shadow-sm flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50">
<div className="flex items-center gap-4">
<div className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">MedAdmin Pro</div>
</div>
<div className="flex-1 max-w-md mx-6">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-full pl-10 pr-4 py-2 text-body-sm font-body-sm focus:outline-none focus:border-primary-container focus:bg-white transition-colors" placeholder="Search rooms, patients, or equipment..." type="text" />
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200 mr-4">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant border border-outline-variant">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a clinical hospital administrator in a brightly lit modern office setting. The person wears a crisp white coat over neat corporate attire, projecting an air of calm authority and expertise. The lighting is soft and even, highlighting a clean, high-tech environment consistent with a modern healthcare facility's light-mode aesthetic. Soft blue accents in the background reinforce the medical theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPfgmaWnF_8VLR154KcIQXXjoRKRqVUDQRYLGnqaavgxIlNbzg8zZCgoQPL8BdbbT4-4eT9hohrp7LIt5skiem3RKswLGa5grFLaMNHFBzR5ikgUxQIg-i41rOZNvjOLK50PcHpWgqPOvl1WTdak65fg0HzdGiipQd5vfXCYm4FMDq7LVTfs2SKA_G2P6aZhIeODm5hsU8UfRp0V6cS0cGi3KQyvX8eYh2Bq8_i3ALQ8d5hDwTpV-uM8cpub3cDvnGUCCgPpMmd4DU" />
</div>
</div>
</header>
{/*  Page Content  */}
<div className="p-grid-margin flex-1 flex flex-col gap-grid-gutter max-w-7xl mx-auto w-full">
{/*  Header Section  */}
<div className="flex justify-between items-end mb-4">
<div>
<h2 className="font-h2 text-h2 text-on-surface">Room & Bed Management</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time occupancy and clinical resource allocation.</p>
</div>
<div className="flex gap-sm">
<button className="bg-surface-container px-4 py-2 rounded-lg font-label-md text-label-md text-primary flex items-center gap-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filter
                    </button>
<button className="bg-primary-container px-4 py-2 rounded-lg font-label-md text-label-md text-on-primary flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Assign Patient
                    </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-grid-gutter">
{/*  Occupancy Overview (Left Column, Span 8)  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/30 flex justify-between items-center bg-white">
<h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
                            Bed Occupancy Overview
                        </h3>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">Live Updates</span>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-3 gap-lg flex-1 bg-white">
{/*  ICU Gauge  */}
<div className="flex flex-col items-center justify-center p-md border border-outline-variant/20 rounded-lg bg-surface-bright">
<div className="relative w-32 h-32 mb-4">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" />
<path className="text-error stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="92, 100" strokeLinecap="round" strokeWidth="3" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-h2 text-[24px] text-error">92%</span>
</div>
</div>
<div className="text-center">
<h4 className="font-label-md text-label-md text-on-surface">Intensive Care (ICU)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">46 / 50 Beds Filled</p>
<span className="inline-block mt-2 font-label-sm text-label-sm text-error bg-error-container/30 px-2 py-1 rounded text-[10px]">CRITICAL LOAD</span>
</div>
</div>
{/*  Emergency Gauge  */}
<div className="flex flex-col items-center justify-center p-md border border-outline-variant/20 rounded-lg bg-surface-bright">
<div className="relative w-32 h-32 mb-4">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" />
<path className="text-tertiary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="78, 100" strokeLinecap="round" strokeWidth="3" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-h2 text-[24px] text-tertiary">78%</span>
</div>
</div>
<div className="text-center">
<h4 className="font-label-md text-label-md text-on-surface">Emergency Ward</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">78 / 100 Beds Filled</p>
<span className="inline-block mt-2 font-label-sm text-label-sm text-tertiary bg-tertiary-fixed-dim/30 px-2 py-1 rounded text-[10px]">HIGH CAPACITY</span>
</div>
</div>
{/*  General Gauge  */}
<div className="flex flex-col items-center justify-center p-md border border-outline-variant/20 rounded-lg bg-surface-bright">
<div className="relative w-32 h-32 mb-4">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" />
<path className="text-secondary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="45, 100" strokeLinecap="round" strokeWidth="3" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-h2 text-[24px] text-secondary">45%</span>
</div>
</div>
<div className="text-center">
<h4 className="font-label-md text-label-md text-on-surface">General Admission</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">90 / 200 Beds Filled</p>
<span className="inline-block mt-2 font-label-sm text-label-sm text-secondary bg-secondary-fixed-dim/30 px-2 py-1 rounded text-[10px]">STABLE</span>
</div>
</div>
</div>
</div>
{/*  Resource Usage Cards (Right Column, Span 4)  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-grid-gutter">
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 p-lg bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[64px]">air</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Critical Equipment</h4>
<div className="flex items-end gap-2 mb-4">
<span className="font-h2 text-[32px] text-on-surface leading-none">84%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mb-1">Ventilators Active</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 mb-2">
<div className="bg-primary-container h-2 rounded-full" style={{"width":"84%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex justify-between">
<span>In Use: 42</span>
<span>Available: 8</span>
</p>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 p-lg bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[64px]">monitor_heart</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Monitoring Units</h4>
<div className="flex items-end gap-2 mb-4">
<span className="font-h2 text-[32px] text-on-surface leading-none">62%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mb-1">Monitors Active</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 mb-2">
<div className="bg-secondary h-2 rounded-full" style={{"width":"62%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex justify-between">
<span>In Use: 124</span>
<span>Available: 76</span>
</p>
</div>
</div>
{/*  Room Allocation Grid (Full Width, Span 12)  */}
<div className="col-span-12 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col bg-white">
<div className="px-lg py-md border-b border-outline-variant/30 flex justify-between items-center">
<h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">grid_view</span>
                            Room Allocation Map - Floor 3 (Cardiology)
                        </h3>
<div className="flex gap-4 font-label-sm text-label-sm">
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-secondary"></span> Available</div>
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-error"></span> Occupied</div>
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-outline"></span> Maintenance</div>
</div>
</div>
<div className="p-lg">
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-sm">
{/*  Bed Cards  */}
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-error-container/10 cursor-pointer hover:border-error transition-colors">
<div className="font-label-md text-label-md text-on-surface mb-1">301-A</div>
<span className="material-symbols-outlined text-error text-[24px]">bed</span>
<div className="font-label-sm text-[10px] text-error mt-1 truncate">Doe, J.</div>
</div>
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-secondary-container/10 cursor-pointer hover:border-secondary transition-colors">
<div className="font-label-md text-label-md text-on-surface mb-1">301-B</div>
<span className="material-symbols-outlined text-secondary text-[24px]">bed</span>
<div className="font-label-sm text-[10px] text-secondary mt-1">Empty</div>
</div>
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-error-container/10 cursor-pointer hover:border-error transition-colors">
<div className="font-label-md text-label-md text-on-surface mb-1">302-A</div>
<span className="material-symbols-outlined text-error text-[24px]">bed</span>
<div className="font-label-sm text-[10px] text-error mt-1 truncate">Smith, A.</div>
</div>
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-surface-variant/30 cursor-not-allowed opacity-60">
<div className="font-label-md text-label-md text-on-surface mb-1">302-B</div>
<span className="material-symbols-outlined text-outline text-[24px]">build</span>
<div className="font-label-sm text-[10px] text-outline mt-1">Cleaning</div>
</div>
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-error-container/10 cursor-pointer hover:border-error transition-colors">
<div className="font-label-md text-label-md text-on-surface mb-1">303-A</div>
<span className="material-symbols-outlined text-error text-[24px]">bed</span>
<div className="font-label-sm text-[10px] text-error mt-1 truncate">Wong, P.</div>
</div>
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-error-container/10 cursor-pointer hover:border-error transition-colors">
<div className="font-label-md text-label-md text-on-surface mb-1">303-B</div>
<span className="material-symbols-outlined text-error text-[24px]">bed</span>
<div className="font-label-sm text-[10px] text-error mt-1 truncate">Garcia, M.</div>
</div>
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-secondary-container/10 cursor-pointer hover:border-secondary transition-colors">
<div className="font-label-md text-label-md text-on-surface mb-1">304-A</div>
<span className="material-symbols-outlined text-secondary text-[24px]">bed</span>
<div className="font-label-sm text-[10px] text-secondary mt-1">Empty</div>
</div>
<div className="border border-outline-variant/30 rounded-lg p-2 text-center bg-secondary-container/10 cursor-pointer hover:border-secondary transition-colors">
<div className="font-label-md text-label-md text-on-surface mb-1">304-B</div>
<span className="material-symbols-outlined text-secondary text-[24px]">bed</span>
<div className="font-label-sm text-[10px] text-secondary mt-1">Empty</div>
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
