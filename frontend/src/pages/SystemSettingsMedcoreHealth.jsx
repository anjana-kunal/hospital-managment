import React from 'react';

export default function SystemSettingsMedcoreHealth() {
  return (
    <>
      <div className="flex bg-background h-screen overflow-hidden text-on-surface">

{/*  SideNavBar (Shared Component)  */}
<nav className="bg-surface surface-container-lowest text-primary-fixed-variant font-manrope text-sm font-semibold h-screen w-64 fixed left-0 top-0 overflow-y-auto border-r border-outline-variant shadow-none flex flex-col h-full py-6 hidden md:flex z-30">
<div className="px-6 mb-8">
<h1 className="text-lg font-extrabold text-primary font-h2 text-h2 tracking-tight">MedAdmin</h1>
<p className="text-xs text-on-surface-variant font-body-sm text-body-sm mt-1">Central Command</p>
</div>
<ul className="flex flex-col gap-1 w-full">
<li className="flex items-center gap-3 px-6 py-4 cursor-pointer text-on-surface-variant hover:bg-surface-container-low transition-all duration-200 hover:pl-8">
<span className="material-symbols-outlined">monitoring</span>
<span className="font-label-md text-label-md">Analytics</span>
</li>
<li className="flex items-center gap-3 px-6 py-4 cursor-pointer text-on-surface-variant hover:bg-surface-container-low transition-all duration-200 hover:pl-8">
<span className="material-symbols-outlined">history_edu</span>
<span className="font-label-md text-label-md">Audit Logs</span>
</li>
<li className="flex items-center gap-3 px-6 py-4 cursor-pointer text-on-surface-variant hover:bg-surface-container-low transition-all duration-200 hover:pl-8">
<span className="material-symbols-outlined">admin_panel_settings</span>
<span className="font-label-md text-label-md">Permissions</span>
</li>
<li className="bg-primary-fixed dark:bg-blue-900/20 text-primary border-r-4 border-primary flex items-center gap-3 px-6 py-4 cursor-pointer transition-all duration-200">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>settings</span>
<span className="font-label-md text-label-md">System Settings</span>
</li>
<li className="flex items-center gap-3 px-6 py-4 cursor-pointer text-on-surface-variant hover:bg-surface-container-low transition-all duration-200 hover:pl-8">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md">Profile</span>
</li>
</ul>
<div className="mt-auto px-6 pt-8">
<div className="bg-secondary-container/20 rounded-lg p-4 border border-secondary-container/30">
<p className="font-label-sm text-label-sm text-secondary flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    System Status: Optimal
                </p>
</div>
</div>
</nav>
{/*  Main Content Wrapper  */}
<div className="flex-1 flex flex-col md:ml-64 relative w-full overflow-hidden">
{/*  TopAppBar (Shared Component)  */}
<header className="bg-surface surface-container-lowest text-primary font-manrope text-sm font-medium w-full top-0 z-40 border-b border-outline-variant shadow-sm flex justify-between items-center px-6 h-16 sticky">
<div className="flex items-center gap-4">
<h1 className="text-xl font-bold text-on-surface tracking-tight font-h3 text-h3 md:hidden">MedAdmin Pro</h1>
<div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant focus-within:border-primary focus-within:bg-surface transition-colors w-64">
<span className="material-symbols-outlined text-outline mr-2 text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full font-body-sm text-on-surface placeholder:text-outline p-0" placeholder="Search settings..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-full transition-colors active:opacity-80 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-full transition-colors active:opacity-80 hidden sm:block">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-6 w-px bg-outline-variant mx-2 hidden sm:block"></div>
<button className="flex items-center gap-2 text-primary font-label-md text-label-md hover:bg-surface-container-low px-3 py-1.5 rounded-lg transition-colors active:opacity-80">
<span className="hidden sm:inline">Logout</span>
<span className="material-symbols-outlined">logout</span>
</button>
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-outline-variant cursor-pointer ml-2" data-alt="A professional headshot of a middle-aged male administrator in a crisp white shirt and dark tie. The lighting is bright and even, casting soft shadows. The background is a blurred, modern office setting with cool, clinical tones of blue and gray. The mood is confident, approachable, and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBHjHvvpqJXRp6gmwY2MkfxGa_nDmdqSyjAkE21bplkpf2lKPSAzYlGHVDLUP2-74FaP4ovJVXfZazCA6OIPpPoyN3TgyP1SpTbXNFKa-8efAFLTjtZHw6HCg3TLHuRltmiefVxqQ6Hd1CsTDmz61SLraEUpT75Zk8B1c3RJXc5aB7zJmkre_4BG1T2nzNrjQBraKXKcq7Z00leowXB7fAe4ixwM8tOm5gaOLYqV2OjGI6_vMuDPBRki2sXe75e7o1cK34Bm2FHz4e" />
</div>
</header>
{/*  Main Canvas  */}
<main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-grid-margin bg-background">
<div className="max-w-7xl mx-auto space-y-grid-margin pb-24">
{/*  Page Header  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 className="font-h1 text-h1 text-on-surface">System Settings</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Configure global parameters for MedCore Health Admin.</p>
</div>
<button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-full md:w-auto justify-center">
<span className="material-symbols-outlined text-[20px]">save</span>
                        Save Changes
                    </button>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-grid-gutter">
{/*  Hospital Profile (Spans 8 cols)  */}
<section className="bg-surface rounded-xl card-shadow border border-outline-variant/30 lg:col-span-8 flex flex-col">
<div className="p-lg border-b border-outline-variant/50 flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">local_hospital</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface">Hospital Profile</h3>
</div>
<div className="p-lg flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
<div className="sm:col-span-2">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Facility Name</label>
<input className="w-full input-field rounded-lg px-4 py-2.5 font-body-md text-body-md text-on-surface" type="text" value="MedCore Central Hospital" />
</div>
<div className="sm:col-span-2">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Primary Address</label>
<input className="w-full input-field rounded-lg px-4 py-2.5 font-body-md text-body-md text-on-surface" type="text" value="1200 Clinical Avenue, Medical District" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Registration ID</label>
<input className="w-full input-field rounded-lg px-4 py-2.5 font-body-md text-body-md text-on-surface" readOnly="" type="text" value="REG-9942-TX-A" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Contact Phone</label>
<input className="w-full input-field rounded-lg px-4 py-2.5 font-body-md text-body-md text-on-surface" type="tel" value="+1 (555) 019-8372" />
</div>
</div>
</section>
{/*  Backup & Recovery (Spans 4 cols)  */}
<section className="bg-surface rounded-xl card-shadow border border-outline-variant/30 lg:col-span-4 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-0"></div>
<div className="p-lg border-b border-outline-variant/50 flex items-center gap-3 relative z-10">
<div className="bg-secondary/10 p-2 rounded-lg text-secondary">
<span className="material-symbols-outlined">cloud_sync</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface">Backup Status</h3>
</div>
<div className="p-lg flex-1 flex flex-col gap-6 relative z-10">
<div className="flex items-center justify-between bg-surface-container-lowest border border-outline-variant/50 p-4 rounded-lg">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Last Successful Backup</p>
<p className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Today, 04:00 AM</p>
</div>
<span className="material-symbols-outlined text-secondary text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Automated Schedule</label>
<select className="w-full input-field rounded-lg px-4 py-2.5 font-body-md text-body-md text-on-surface appearance-none cursor-pointer">
<option>Daily at 04:00 AM</option>
<option>Weekly on Sundays</option>
<option>Every 12 Hours</option>
</select>
</div>
<button className="mt-auto w-full border border-primary text-primary font-label-md text-label-md px-4 py-2.5 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
                                Run Manual Backup
                            </button>
</div>
</section>
{/*  Security (Spans 6 cols)  */}
<section className="bg-surface rounded-xl card-shadow border border-outline-variant/30 lg:col-span-6 flex flex-col">
<div className="p-lg border-b border-outline-variant/50 flex items-center gap-3">
<div className="bg-error/10 p-2 rounded-lg text-error">
<span className="material-symbols-outlined">security</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface">Security & Access</h3>
</div>
<div className="p-lg flex-1 space-y-6">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
<div>
<p className="font-body-md text-body-md text-on-surface font-medium">Require 2FA for Admins</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Enforce two-factor authentication for all administrative roles.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface-variant appearance-none cursor-pointer z-10" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
<div>
<p className="font-body-md text-body-md text-on-surface font-medium">Strict Password Complexity</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Require uppercase, lowercase, numbers, and symbols.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface-variant appearance-none cursor-pointer z-10" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 flex items-center justify-between">
<span>Idle Session Timeout (Minutes)</span>
<span className="text-primary font-medium">15 min</span>
</label>
<input className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary" max="60" min="5" type="range" value="15" />
<div className="flex justify-between mt-2 font-label-sm text-label-sm text-outline">
<span>5m</span>
<span>30m</span>
<span>60m</span>
</div>
</div>
</div>
</section>
{/*  Integrations & Branding Group (Spans 6 cols)  */}
<div className="lg:col-span-6 grid grid-rows-2 gap-grid-gutter">
{/*  Integrations  */}
<section className="bg-surface rounded-xl card-shadow border border-outline-variant/30 flex flex-col">
<div className="p-md border-b border-outline-variant/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-tertiary/10 p-2 rounded-lg text-tertiary">
<span className="material-symbols-outlined">api</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface text-[20px]">Integrations</h3>
</div>
<button className="text-primary font-label-sm text-label-sm hover:underline">Manage All</button>
</div>
<div className="p-md flex-1 grid grid-cols-2 gap-4">
<div className="border border-outline-variant/50 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-surface-container-lowest cursor-pointer transition-colors">
<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-blue-600">monitor_heart</span>
</div>
<p className="font-label-md text-label-md text-on-surface">Epic EHR Sync</p>
<span className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary/10 text-secondary">Connected</span>
</div>
<div className="border border-outline-variant/50 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-surface-container-lowest cursor-pointer transition-colors">
<div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-green-600">payments</span>
</div>
<p className="font-label-md text-label-md text-on-surface">Stripe Gateway</p>
<span className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-error/10 text-error">Action Required</span>
</div>
</div>
</section>
{/*  Notification Rules  */}
<section className="bg-surface rounded-xl card-shadow border border-outline-variant/30 flex flex-col">
<div className="p-md border-b border-outline-variant/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">campaign</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface text-[20px]">Global Alerts</h3>
</div>
</div>
<div className="p-md flex-1 space-y-3">
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error">warning</span>
<span className="font-body-sm text-body-sm text-on-surface">Critical Vitals Drop</span>
</div>
<span className="text-xs bg-surface-variant px-2 py-1 rounded text-on-surface-variant font-medium">All Staff</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">schedule</span>
<span className="font-body-sm text-body-sm text-on-surface">ER Wait &gt; 2 Hours</span>
</div>
<span className="text-xs bg-surface-variant px-2 py-1 rounded text-on-surface-variant font-medium">Admins Only</span>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
