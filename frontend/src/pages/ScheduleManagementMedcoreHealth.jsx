import React from 'react';

export default function ScheduleManagementMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex">

{/*  SideNavBar (From JSON)  */}
<nav className="bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-manrope text-sm font-semibold tracking-wide h-screen w-64 border-r rounded-none border-slate-200 dark:border-slate-800 shadow-none fixed left-0 top-0 bottom-0 flex flex-col z-40">
{/*  Brand Header  */}
<div className="px-6 py-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">
                DB
            </div>
<div>
<h2 className="text-lg font-bold text-slate-900 dark:text-white">Dr. Julian Bashir</h2>
<p className="text-xs text-slate-500 font-medium">Chief Surgeon</p>
</div>
</div>
{/*  Navigation Links  */}
<div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
{/*  Dashboard (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
{/*  Schedule (Active State based on Semantic Mapping)  */}
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 rounded-r-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined fill" data-icon="calendar_today">calendar_today</span>
                Schedule
            </a>
{/*  Appointments (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="event_note">event_note</span>
                Appointments
            </a>
{/*  Patients (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                Patients
            </a>
{/*  Messages (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
                Messages
            </a>
</div>
{/*  Footer Links  */}
<div className="border-t border-slate-200 dark:border-slate-800 py-4 flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Logout
            </a>
</div>
</nav>
{/*  Main Content Wrapper  */}
<div className="flex-1 ml-64 flex flex-col min-w-0">
{/*  TopAppBar (From JSON)  */}
<header className="bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-manrope text-sm font-medium antialiased docked full-width top-0 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 active:opacity-80 transition-all duration-150">
<div className="flex items-center gap-6">
<div className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">MedCloud HMS</div>
{/*  Search Bar (on_left)  */}
<div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-1.5 border border-transparent focus-within:border-blue-500 transition-colors">
<span className="material-symbols-outlined text-slate-400 text-sm mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-slate-700 dark:text-slate-200 text-sm w-64 placeholder-slate-400" placeholder="Search patients, appointments..." type="text" />
</div>
</div>
{/*  Trailing Icon Actions  */}
<div className="flex items-center gap-2">
<button className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="ml-4 h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
<img alt="Doctor Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_EFG8YnG3z-Y80kMIv13YQie1BbYazU4Qypo11NMxOUtneJJuQpFrCwsRZsCXi-XkfRD1OIMe3FLXF-TuK7bNXMe2z2Rcv3F5bpSLHhUjdQxqZYvdBAKZNaIRYkwYxrEDhqYZsxM4AHcHwgasQMbaxFSdv7Uemg_XDQ9M54J7Fe_6yn3Txbu-tdDUTwhvK0H77jNK9xNTvOWCWL3b8DDVAohzWsM7tfRWT-jG8Nq3MsEpFdZ3zfIg9qaDG4Dm6RvR4LskR28nPERq" />
</div>
</div>
</header>
{/*  Canvas Area  */}
<main className="flex-1 overflow-y-auto p-xl bg-surface-container-low">
<div className="max-w-[1600px] mx-auto">
{/*  Page Header & Controls  */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-lg gap-4">
<div>
<h1 className="font-h2 text-h2 text-on-surface mb-xs">Schedule Management</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Manage your availability, appointments, and leave time.</p>
</div>
<div className="flex items-center gap-md">
{/*  View Toggle  */}
<div className="flex p-xs bg-surface-variant rounded-lg">
<button className="px-md py-sm rounded-DEFAULT bg-surface text-on-surface font-label-md text-label-md shadow-sm border border-outline-variant transition-all">Weekly</button>
<button className="px-md py-sm rounded-DEFAULT text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-all">Monthly</button>
</div>
{/*  Primary Action  */}
<button className="flex items-center gap-sm px-md py-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                            New Appointment
                        </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-lg">
{/*  Main Calendar View (Col 8)  */}
<div className="col-span-12 xl:col-span-8 flex flex-col gap-md">
{/*  Calendar Header / Navigator  */}
<div className="bg-surface rounded-xl p-md shadow-sm border border-surface-variant flex items-center justify-between">
<div className="flex items-center gap-md">
<button className="p-sm rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<h3 className="font-h3 text-h3 text-on-surface">Oct 23 - Oct 29, 2023</h3>
<button className="p-sm rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
<button className="px-md py-sm border border-outline rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-variant transition-colors">
                                Today
                            </button>
</div>
{/*  Calendar Grid Canvas  */}
<div className="bg-surface rounded-xl shadow-sm border border-surface-variant overflow-hidden flex-1 min-h-[600px] flex flex-col">
{/*  Days Row  */}
<div className="grid grid-cols-6 border-b border-surface-variant bg-surface-container-lowest">
<div className="p-sm text-center border-r border-surface-variant">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mon</div>
<div className="font-h3 text-h3 text-on-surface mt-xs">23</div>
</div>
<div className="p-sm text-center border-r border-surface-variant bg-primary-fixed-dim/20">
<div className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Tue</div>
<div className="font-h3 text-h3 text-primary mt-xs">24</div>
</div>
<div className="p-sm text-center border-r border-surface-variant">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Wed</div>
<div className="font-h3 text-h3 text-on-surface mt-xs">25</div>
</div>
<div className="p-sm text-center border-r border-surface-variant">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Thu</div>
<div className="font-h3 text-h3 text-on-surface mt-xs">26</div>
</div>
<div className="p-sm text-center border-r border-surface-variant">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Fri</div>
<div className="font-h3 text-h3 text-on-surface mt-xs">27</div>
</div>
<div className="p-sm text-center bg-surface-container">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sat</div>
<div className="font-body-md text-body-md text-on-surface-variant mt-xs">Off</div>
</div>
</div>
{/*  Time Slots Body (Simplified for visual representation)  */}
<div className="flex-1 grid grid-cols-6 relative">
{/*  Time Labels Column (Overlay or pseudo) -> Skipping for cleaner layout, implying blocks  */}
{/*  Monday Col  */}
<div className="border-r border-surface-variant p-sm flex flex-col gap-sm">
{/*  Available Slot  */}
<div className="h-24 rounded-lg border-2 border-dashed border-outline-variant bg-transparent flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-[20px] opacity-50 group-hover:opacity-100" data-icon="add">add</span>
<span className="font-label-sm text-label-sm mt-1">09:00 - 10:00</span>
</div>
{/*  Booked Slot  */}
<div className="h-32 rounded-lg bg-primary-fixed p-sm border border-primary/20 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-1">
<span className="font-label-sm text-label-sm text-on-primary-fixed-variant font-bold">10:00 AM</span>
<span className="w-2 h-2 rounded-full bg-primary mt-1"></span>
</div>
<span className="font-label-md text-label-md text-on-primary-fixed truncate">Sarah Jenkins</span>
<span className="font-label-sm text-label-sm text-on-primary-fixed-variant opacity-80 truncate">Follow-up</span>
</div>
</div>
{/*  Tuesday Col (Active Day)  */}
<div className="border-r border-surface-variant p-sm flex flex-col gap-sm bg-surface-container-lowest relative">
{/*  Current Time Indicator  */}
<div className="absolute top-20 left-0 right-0 border-t-2 border-error z-10 flex items-center">
<span className="w-2 h-2 rounded-full bg-error -ml-1"></span>
</div>
<div className="h-24 rounded-lg bg-secondary-container p-sm border border-secondary/20 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-1">
<span className="font-label-sm text-label-sm text-on-secondary-container font-bold">09:00 AM</span>
</div>
<span className="font-label-md text-label-md text-on-secondary-container truncate">Michael Chang</span>
<span className="font-label-sm text-label-sm text-on-secondary-container opacity-80 truncate">Initial Consult</span>
</div>
{/*  Blocked Time  */}
<div className="h-20 rounded-lg bg-surface-variant p-sm flex flex-col justify-center items-center opacity-70 border border-outline border-dashed">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="coffee">coffee</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Break</span>
</div>
<div className="h-32 rounded-lg bg-error-container p-sm border border-error/20 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-1">
<span className="font-label-sm text-label-sm text-on-error-container font-bold">11:30 AM</span>
<span className="material-symbols-outlined text-[16px] text-error" data-icon="warning">warning</span>
</div>
<span className="font-label-md text-label-md text-on-error-container truncate">Emergency Ward</span>
<span className="font-label-sm text-label-sm text-on-error-container opacity-80 truncate">Surgery Consult</span>
</div>
</div>
{/*  Wednesday Col  */}
<div className="border-r border-surface-variant p-sm flex flex-col gap-sm">
<div className="h-full rounded-lg bg-surface-container-highest p-md flex flex-col items-center justify-center text-center opacity-80">
<span className="material-symbols-outlined text-[32px] text-on-surface-variant mb-2" data-icon="school">school</span>
<span className="font-label-md text-label-md text-on-surface-variant">Medical Seminar</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">All Day</span>
</div>
</div>
{/*  Thursday Col  */}
<div className="border-r border-surface-variant p-sm flex flex-col gap-sm">
<div className="h-24 rounded-lg border-2 border-dashed border-outline-variant bg-transparent flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-[20px] opacity-50 group-hover:opacity-100" data-icon="add">add</span>
</div>
<div className="h-24 rounded-lg bg-primary-fixed p-sm border border-primary/20 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-1">
<span className="font-label-sm text-label-sm text-on-primary-fixed-variant font-bold">10:00 AM</span>
</div>
<span className="font-label-md text-label-md text-on-primary-fixed truncate">Emily Clark</span>
</div>
</div>
{/*  Friday Col  */}
<div className="border-r border-surface-variant p-sm flex flex-col gap-sm">
<div className="h-32 rounded-lg bg-tertiary-container p-sm border border-tertiary/20 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-1">
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">09:00 AM</span>
</div>
<span className="font-label-md text-label-md text-on-tertiary-container truncate">Board Meeting</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container opacity-80 truncate">Conference Rm A</span>
</div>
</div>
{/*  Saturday Col (Off)  */}
<div className="bg-surface-container p-sm flex flex-col items-center justify-center opacity-50">
</div>
</div>
</div>
</div>
{/*  Side Panel Controls (Col 4)  */}
<div className="col-span-12 xl:col-span-4 flex flex-col gap-lg">
{/*  Quick Stats / Utilization  */}
<div className="bg-surface rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant">
<h3 className="font-h3 text-h3 text-on-surface mb-md">Weekly Utilization</h3>
<div className="flex items-end gap-md mb-xs">
<span className="font-h1 text-h1 text-primary">78%</span>
<span className="font-label-md text-label-md text-on-surface-variant mb-1">of available slots booked</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2 mb-md">
<div className="bg-primary h-2 rounded-full" style={{"width":"78%"}}></div>
</div>
<div className="grid grid-cols-2 gap-sm">
<div className="bg-surface-container-low p-sm rounded-lg border border-surface-variant">
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Total Appointments</span>
<span className="font-h3 text-h3 text-on-surface">24</span>
</div>
<div className="bg-surface-container-low p-sm rounded-lg border border-surface-variant">
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Available Hours</span>
<span className="font-h3 text-h3 text-on-surface">8.5</span>
</div>
</div>
</div>
{/*  Block Time & Leave Management Actions  */}
<div className="bg-surface rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant">
<h3 className="font-h3 text-h3 text-on-surface mb-md">Schedule Actions</h3>
<div className="flex flex-col gap-md">
{/*  Block Time Form/Action  */}
<div className="group border border-outline-variant rounded-lg p-md hover:border-primary transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex items-start gap-md">
<div className="p-sm bg-surface-variant text-on-surface rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined" data-icon="block">block</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-xs">Block Specific Time</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Reserve time for administrative work or personal tasks.</p>
</div>
</div>
</div>
{/*  Leave Management  */}
<div className="group border border-outline-variant rounded-lg p-md hover:border-tertiary transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex items-start gap-md">
<div className="p-sm bg-surface-variant text-on-surface rounded-lg group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
<span className="material-symbols-outlined" data-icon="flight_takeoff">flight_takeoff</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-xs">Manage Leave</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Submit PTO requests or log sick days to clear schedule.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Consultation Hours Settings  */}
<div className="bg-surface rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant flex-1">
<div className="flex items-center justify-between mb-md">
<h3 className="font-h3 text-h3 text-on-surface">Consultation Hours</h3>
<button className="p-xs rounded text-primary hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
</button>
</div>
<ul className="flex flex-col gap-sm">
<li className="flex items-center justify-between py-xs border-b border-surface-variant">
<span className="font-label-md text-label-md text-on-surface-variant">Mon - Thu</span>
<span className="font-body-md text-body-md text-on-surface">09:00 AM - 05:00 PM</span>
</li>
<li className="flex items-center justify-between py-xs border-b border-surface-variant">
<span className="font-label-md text-label-md text-on-surface-variant">Friday</span>
<span className="font-body-md text-body-md text-on-surface">09:00 AM - 01:00 PM</span>
</li>
<li className="flex items-center justify-between py-xs text-outline">
<span className="font-label-md text-label-md">Sat - Sun</span>
<span className="font-body-md text-body-md">Off</span>
</li>
</ul>
<div className="mt-md p-md bg-inverse-on-surface rounded-lg flex items-start gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5" data-icon="info">info</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Standard slot duration is set to <strong>30 minutes</strong>. Adjust in global settings.</p>
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
