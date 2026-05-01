import React from 'react';

export default function AppointmentsQueueMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background flex min-h-screen">

{/*  Side Navigation  */}
<nav className="bg-white text-blue-600 font-manrope text-sm font-semibold tracking-wide h-screen w-64 border-r rounded-none border-slate-200 shadow-none fixed left-0 top-0 bottom-0 flex flex-col z-40 hidden md:flex">
<div className="p-6">
<span className="text-lg font-bold text-slate-900 font-h3 text-h3">MedCore HMS</span>
</div>
<div className="flex items-center gap-4 px-6 py-4 mb-4">
<img alt="Dr. Julian Bashir" className="w-12 h-12 rounded-full object-cover" data-alt="A professional headshot of a male doctor in his 40s wearing a clean white lab coat over a blue shirt. The lighting is bright and even, typical of a modern clinical setting. The doctor has a warm, confident expression. The background is a slightly blurred, sterile hospital corridor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqMaRcz2eko8IMTP_cS1SxWXSZbhECu2tCaBbIFgelsvV_9km7imn1kvNgzCVY5oOK4-7CTBEJ3OBEW1RbxC4Uy1JAITL-q5M7zWhjuZj5aEXbsrk54AWIq-oLsKDCP_FZP1zh5lfildFe50dViHJzPprr0LkuMlTRShZ9dNg6JbE3k4ZPMyH5nI1dthOcNMolkSxx1W_sPZ7fO6i9fbEWVNPRotEYJNWEjDgSz0mxHZIkcnpjcsVJ6wBgObEGjik-X0cI3-TigUz2" />
<div>
<p className="font-label-md text-label-md text-on-surface">Dr. Julian Bashir</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Chief Surgeon</p>
</div>
</div>
<ul className="flex flex-col gap-2 flex-grow mt-4">
<li>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-label-md text-label-md">Schedule</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600 rounded-r-none hover:bg-slate-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="event_note">event_note</span>
<span className="font-label-md text-label-md">Appointments</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-md text-label-md">Patients</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
<span className="font-label-md text-label-md">Messages</span>
</a>
</li>
</ul>
<div className="mt-auto border-t border-slate-200 pt-4 pb-6">
<ul className="flex flex-col gap-2">
<li>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Logout</span>
</a>
</li>
</ul>
</div>
</nav>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col md:ml-64 w-full">
{/*  Top App Bar  */}
<header className="bg-white text-blue-600 font-manrope text-sm font-medium antialiased docked full-width top-0 border-b border-slate-200 shadow-sm flex justify-between items-center w-full px-8 h-16 sticky z-50">
<div className="flex items-center md:hidden">
<span className="text-xl font-extrabold tracking-tight text-slate-900">MedCore HMS</span>
</div>
<div className="hidden md:flex flex-1 items-center max-w-md bg-[#F1F3F4] rounded-lg px-4 py-2 border border-transparent focus-within:bg-white focus-within:border-primary-container transition-colors">
<span className="material-symbols-outlined text-outline mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-body-sm text-body-sm text-on-surface outline-none" placeholder="Search patients, ID, or records..." type="text" />
</div>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors duration-200 p-2 rounded-full active:opacity-80">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors duration-200 p-2 rounded-full active:opacity-80">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<img alt="Doctor Avatar" className="w-8 h-8 rounded-full border border-slate-200 cursor-pointer md:hidden" data-alt="A small circular avatar of a male doctor in a white coat. Professional lighting, clinical setting background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwr2ggiPHV4dFp1YX595W0jEDnutALZPLXmmNQ8ajusgopuejzICoMu0gNO-doelrBODoE8ULv4fRFmyXH9humgwEEI93DUbghvbMqnNNwsmcbmFocSDT3GPBwVtT9YZrkkXzwOSrg1BSnwL_5zXAMRcqHVP0OEMh6cdVrSaJ0lz4ejN2TxLlBTaDLdCtMYNFBo9h1O_oy2qdEZXtUu4oxQG8PZxWa8zxBCWhNVovnldMV5zyRdxYGG8-Hxaq3DBJ0944P406aSlMS" />
</div>
</header>
<div className="p-8 flex-1 overflow-y-auto">
{/*  Page Header & Tabs  */}
<div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
<div>
<h1 className="font-h2 text-h2 text-on-surface mb-2">Appointments</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Manage your patient schedule and active queues.</p>
</div>
<div className="flex bg-surface-container-low rounded-lg p-1 border border-[#E9ECEF]">
<button className="px-6 py-2 rounded-md bg-white shadow-sm font-label-md text-label-md text-primary-container border border-slate-200">Today</button>
<button className="px-6 py-2 rounded-md hover:bg-surface-container-highest font-label-md text-label-md text-on-surface-variant transition-colors">Upcoming</button>
<button className="px-6 py-2 rounded-md hover:bg-surface-container-highest font-label-md text-label-md text-on-surface-variant transition-colors">Completed</button>
<button className="px-6 py-2 rounded-md hover:bg-surface-container-highest font-label-md text-label-md text-on-surface-variant transition-colors">Cancelled</button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
{/*  Main Queue Table (Spans 8 columns)  */}
<div className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
<div className="p-6 border-b border-[#E9ECEF] flex justify-between items-center">
<h2 className="font-h3 text-h3 text-on-surface">Today's Queue</h2>
<span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm">8 Patients Remaining</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-background border-b border-[#E9ECEF]">
<th className="p-4 font-label-md text-label-md text-on-surface-variant">Time</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant">Patient</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant">Type</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody>
{/*  Active Row  */}
<tr className="bg-primary-container/5 border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group cursor-pointer border-l-4 border-l-primary-container">
<td className="p-4 font-body-md text-body-md text-on-surface">09:00 AM</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim flex items-center justify-center font-label-md text-label-md text-on-tertiary-fixed">JS</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Sarah Jenkins</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">ID: PT-8921</p>
</div>
</div>
</td>
<td className="p-4">
<span className="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm">In-Waiting Room</span>
</td>
<td className="p-4 font-body-md text-body-md text-on-surface-variant">Follow-up</td>
<td className="p-4 text-right">
<button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-md font-label-md text-label-md hover:bg-primary transition-colors">Start Consultation</button>
</td>
</tr>
{/*  Row  */}
<tr className="border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group cursor-pointer border-l-4 border-l-transparent">
<td className="p-4 font-body-md text-body-md text-on-surface">09:30 AM</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center font-label-md text-label-md text-on-primary-fixed">MR</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Michael Ross</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">ID: PT-4432</p>
</div>
</div>
</td>
<td className="p-4">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Checking In</span>
</td>
<td className="p-4 font-body-md text-body-md text-on-surface-variant">Initial Consult</td>
<td className="p-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="border border-outline-variant text-on-surface px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-surface-variant transition-colors">Reschedule</button>
<button className="border border-error/50 text-error px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-error-container transition-colors">Mark No-show</button>
</div>
</td>
</tr>
{/*  Row  */}
<tr className="border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group cursor-pointer border-l-4 border-l-transparent">
<td className="p-4 font-body-md text-body-md text-on-surface">10:15 AM</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed-dim flex items-center justify-center font-label-md text-label-md text-on-secondary-fixed">EL</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Emma Lawson</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">ID: PT-1129</p>
</div>
</div>
</td>
<td className="p-4">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Scheduled</span>
</td>
<td className="p-4 font-body-md text-body-md text-on-surface-variant">Lab Review</td>
<td className="p-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="border border-outline-variant text-on-surface px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-surface-variant transition-colors">Reschedule</button>
<button className="border border-error/50 text-error px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-error-container transition-colors">Mark No-show</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-[#E9ECEF] flex justify-center">
<button className="text-primary-container font-label-md text-label-md flex items-center gap-2 hover:underline">
                            View Full Schedule <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/*  Quick Preview Drawer / Panel (Spans 4 columns)  */}
<div className="xl:col-span-4 bg-surface-container-lowest rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col relative overflow-hidden">
{/*  Top accent bar  */}
<div className="h-2 bg-primary-container w-full absolute top-0 left-0"></div>
<div className="p-6 border-b border-[#E9ECEF] mt-2">
<div className="flex justify-between items-start mb-4">
<h3 className="font-h3 text-h3 text-on-surface">Quick Preview</h3>
<button className="text-on-surface-variant hover:bg-surface-variant p-1 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim flex items-center justify-center font-h2 text-h2 text-on-tertiary-fixed">JS</div>
<div>
<h4 className="font-h3 text-h3 text-on-surface">Sarah Jenkins</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">34 yrs • Female • PT-8921</p>
</div>
</div>
</div>
<div className="p-6 flex-1 overflow-y-auto space-y-6 bg-background">
{/*  Reason for Visit  */}
<div className="bg-white p-4 rounded-lg border border-[#E9ECEF] shadow-sm">
<h5 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Reason for Visit</h5>
<p className="font-body-md text-body-md text-on-surface">Post-operative follow-up (Appendectomy 2 weeks ago). Reports mild discomfort around incision site.</p>
</div>
{/*  Vitals  */}
<div>
<h5 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Triage Vitals</h5>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-3 rounded-lg border border-[#E9ECEF] shadow-sm">
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-sm" data-icon="favorite">favorite</span>
<span className="font-label-sm text-label-sm">Heart Rate</span>
</div>
<div className="font-h3 text-h3 text-on-surface">78 <span className="font-body-sm text-body-sm text-on-surface-variant">bpm</span></div>
</div>
<div className="bg-white p-3 rounded-lg border border-[#E9ECEF] shadow-sm">
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-sm" data-icon="blood_pressure">blood_pressure</span>
<span className="font-label-sm text-label-sm">BP</span>
</div>
<div className="font-h3 text-h3 text-on-surface">120/80</div>
</div>
<div className="bg-white p-3 rounded-lg border border-[#E9ECEF] shadow-sm">
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-sm" data-icon="thermostat">thermostat</span>
<span className="font-label-sm text-label-sm">Temp</span>
</div>
<div className="font-h3 text-h3 text-on-surface">98.6 <span className="font-body-sm text-body-sm text-on-surface-variant">°F</span></div>
</div>
<div className="bg-white p-3 rounded-lg border border-error-container bg-error-container/10 shadow-sm">
<div className="flex items-center gap-2 text-error mb-1">
<span className="material-symbols-outlined text-sm" data-icon="air">air</span>
<span className="font-label-sm text-label-sm">SpO2</span>
</div>
<div className="font-h3 text-h3 text-error">94% <span className="font-body-sm text-body-sm text-error/80">↓</span></div>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-[#E9ECEF] bg-white mt-auto">
<button className="w-full bg-primary-container text-on-primary-container py-3 rounded-md font-label-md text-label-md shadow-sm hover:bg-primary transition-colors flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="stethoscope">stethoscope</span>
                            Open Full Chart & Start
                        </button>
</div>
</div>
</div>
</div>
</main>

</div>
    </>
  );
}
