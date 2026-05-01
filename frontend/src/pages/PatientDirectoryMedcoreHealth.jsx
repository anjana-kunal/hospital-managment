import React from 'react';

export default function PatientDirectoryMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background min-h-screen flex font-body-md antialiased">

{/*  SideNavBar Component  */}
<nav className="hidden md:flex flex-col bg-white dark:bg-slate-900 h-screen w-64 border-r border-slate-200 dark:border-slate-800 shadow-none rounded-none fixed left-0 top-0 bottom-0 z-40">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-h2 text-h2 font-bold overflow-hidden">
<img alt="Dr. Julian Bashir" className="h-full w-full object-cover" data-alt="A professional headshot of a male doctor in his 40s wearing a clean white lab coat over a blue button-down shirt. The background is a slightly blurred, bright, modern clinical setting with cool, daylight lighting. The doctor has a reassuring, confident expression. High resolution, clear focus, clinical corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDszlcBJG8gOCtLh84fwuG89_RKegr2o_p8r5P9_cccmr8_yi__HR7B9VkpwiOo3puvvJTS4SUmuC26riW-i5v3P6P7feyYZ_niNh_NRdX_TEK6KOMaeXrUF77JLtSobGMDDyyR40rFZ1BpfF-r3YCwfWAC9U2rX1ZRii3WZKGNbFwW14Z7orKrAGsTX3cTyTi_zh8crvUgpyF3Qjfjzk1ocITM8YoUbdxqFhMcxcmk4kusyE8qGSoMFCBkwfiGqx3Me6gc9M8CssZY" />
</div>
<div>
<h2 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">Dr. Julian Bashir</h2>
<p className="font-manrope text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">Chief Surgeon</p>
</div>
</div>
<div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto font-manrope text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#" title="Dashboard">
<span aria-hidden="true" className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#" title="Schedule">
<span aria-hidden="true" className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                Schedule
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#" title="Appointments">
<span aria-hidden="true" className="material-symbols-outlined" data-icon="event_note">event_note</span>
                Appointments
            </a>
{/*  Active Tab  */}
<a aria-current="page" className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 rounded-r-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#" title="Patients">
<span aria-hidden="true" className="material-symbols-outlined" data-icon="group" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>group</span>
                Patients
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#" title="Messages">
<span aria-hidden="true" className="material-symbols-outlined" data-icon="mail">mail</span>
                Messages
            </a>
</div>
<div className="mt-auto p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-1 font-manrope text-sm font-semibold tracking-wide">
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#" title="Settings">
<span aria-hidden="true" className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#" title="Logout">
<span aria-hidden="true" className="material-symbols-outlined" data-icon="logout">logout</span>
                Logout
            </a>
</div>
</nav>
{/*  Main Content Wrapper  */}
<div className="flex-1 flex flex-col md:ml-64 w-full min-w-0">
{/*  TopAppBar Component  */}
<header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 bg-white dark:bg-slate-900 docked full-width top-0 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none text-blue-600 dark:text-blue-400 font-manrope text-sm font-medium antialiased">
{/*  Mobile Menu Toggle (Visible only on small screens)  */}
<button className="md:hidden mr-4 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 active:opacity-80 transition-all duration-150 p-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50">
<span className="material-symbols-outlined">menu</span>
</button>
{/*  Search Bar (on_left)  */}
<div className="flex-1 max-w-md relative hidden sm:block">
<span aria-hidden="true" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-none rounded-lg text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm h-10 outline-none" placeholder="Search patients, ID, or condition..." type="text" />
</div>
{/*  Brand Logo (Centered on mobile, right-aligned next to actions on desktop if no space)  */}
<div className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white md:hidden mx-auto">
                MedCore HMS
            </div>
{/*  Trailing Icon Actions  */}
<div className="flex items-center gap-2 ml-auto sm:ml-4">
<button aria-label="notifications" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 active:opacity-80 transition-all duration-150 p-2 rounded-full relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
</button>
<button aria-label="help" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 active:opacity-80 transition-all duration-150 p-2 rounded-full">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
{/*  Profile Avatar  */}
<div className="ml-2 h-8 w-8 rounded-full bg-slate-200 overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-700">
<img alt="Doctor Avatar" className="h-full w-full object-cover" data-alt="A professional headshot of a male doctor in his 40s wearing a clean white lab coat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVBf2Nmgs2dCnHYYl74612njph2ViIg7fCIqkd420HbyTndvsDrEk1UK72MZvATybq19KvkocJLZLE8miqDOF7zkLHrGp9VtHBMwVSt7g7vbsFMbEfpYLIaPx_fv-SDEXqQ_WsHxXtK_g-95IpoD_GIzPnneQa8SLvP0gNp8dNBhuQVDJPNNiqJbMblRuOa8DQnwdr0Kk-HZXT__zpuvU3cirhfoyJ3ynjJmzN5PgHX_amH78Ual0TCE-YUY5TrGVzc4rZsLVkN94_" />
</div>
</div>
</header>
{/*  Main Canvas Content  */}
<main className="flex-1 p-6 md:p-xl flex flex-col gap-lg max-w-7xl mx-auto w-full">
{/*  Page Header  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="font-h1 text-h1 text-on-surface">Patient Directory</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage and monitor patient records, appointments, and treatment plans.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2.5 rounded-lg shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap self-start sm:self-auto">
<span className="material-symbols-outlined text-[20px]">add</span>
                    New Patient
                </button>
</div>
{/*  Filtering & Action Bar  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant p-4 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
{/*  Quick Search  */}
<div className="relative w-full lg:max-w-xs">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-surface-variant rounded-lg text-on-surface placeholder-on-surface-variant focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-body-sm font-body-sm outline-none" placeholder="Search by name or ID..." type="text" />
</div>
{/*  Filters  */}
<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
{/*  Filter: Appointment Status  */}
<div className="relative min-w-[140px]">
<select className="w-full appearance-none bg-surface-container-low border border-surface-variant rounded-lg px-3 py-2 pr-8 text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none cursor-pointer">
<option value="">All Statuses</option>
<option value="scheduled">Scheduled</option>
<option value="in-queue">In-Queue</option>
<option value="completed">Completed</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
{/*  Filter: Primary Condition  */}
<div className="relative min-w-[160px]">
<select className="w-full appearance-none bg-surface-container-low border border-surface-variant rounded-lg px-3 py-2 pr-8 text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none cursor-pointer">
<option value="">Condition: All</option>
<option value="cardiology">Cardiology</option>
<option value="neurology">Neurology</option>
<option value="orthopedics">Orthopedics</option>
<option value="general">General</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
{/*  Filter: Age Range  */}
<div className="relative min-w-[120px]">
<select className="w-full appearance-none bg-surface-container-low border border-surface-variant rounded-lg px-3 py-2 pr-8 text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none cursor-pointer">
<option value="">Age: All</option>
<option value="0-18">0 - 18 yrs</option>
<option value="19-40">19 - 40 yrs</option>
<option value="41-65">41 - 65 yrs</option>
<option value="65+">65+ yrs</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
{/*  Clear Filters  */}
<button className="text-primary font-label-sm text-label-sm hover:underline px-2 py-2 flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">close</span>
                        Clear
                    </button>
</div>
</div>
{/*  Data Table Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
<thead className="bg-surface-container-low border-b border-surface-variant">
<tr>
<th className="px-md py-3 font-label-md text-label-md text-on-surface-variant w-[250px]">Patient Name</th>
<th className="px-md py-3 font-label-md text-label-md text-on-surface-variant">Patient ID</th>
<th className="px-md py-3 font-label-md text-label-md text-on-surface-variant">Age</th>
<th className="px-md py-3 font-label-md text-label-md text-on-surface-variant">Last Visit</th>
<th className="px-md py-3 font-label-md text-label-md text-on-surface-variant">Primary Condition</th>
<th className="px-md py-3 font-label-md text-label-md text-on-surface-variant text-center">Status</th>
<th className="px-md py-3 font-label-md text-label-md text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-surface-variant/50">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-md py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-label-md font-bold shrink-0">ER</div>
<div>
<p className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">Eleanor Roosevelt</p>
<p className="text-[12px] text-on-surface-variant">F • DOB: 10/11/1954</p>
</div>
</div>
</td>
<td className="px-md py-3 text-outline">MC-84729</td>
<td className="px-md py-3">69</td>
<td className="px-md py-3">Oct 12, 2023</td>
<td className="px-md py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface border border-surface-variant text-on-surface-variant text-label-sm font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        Hypertension
                                    </span>
</td>
<td className="px-md py-3 text-center">
<span className="inline-flex px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_available</span>
                                        Scheduled
                                    </span>
</td>
<td className="px-md py-3 text-right">
<div className="flex justify-end gap-1">
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]">chat_bubble</span>
</button>
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="View Profile">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-md py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed flex items-center justify-center font-label-md font-bold shrink-0">JW</div>
<div>
<p className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">James Watson</p>
<p className="text-[12px] text-on-surface-variant">M • DOB: 04/06/1982</p>
</div>
</div>
</td>
<td className="px-md py-3 text-outline">MC-99214</td>
<td className="px-md py-3">41</td>
<td className="px-md py-3">Nov 02, 2023</td>
<td className="px-md py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface border border-surface-variant text-on-surface-variant text-label-sm font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Asthma
                                    </span>
</td>
<td className="px-md py-3 text-center">
<span className="inline-flex px-2.5 py-0.5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                        Completed
                                    </span>
</td>
<td className="px-md py-3 text-right">
<div className="flex justify-end gap-1">
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]">chat_bubble</span>
</button>
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="View Profile">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-md py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed flex items-center justify-center font-label-md font-bold shrink-0">SM</div>
<div>
<p className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">Sarah Miller</p>
<p className="text-[12px] text-on-surface-variant">F • DOB: 08/22/1995</p>
</div>
</div>
</td>
<td className="px-md py-3 text-outline">MC-10542</td>
<td className="px-md py-3">28</td>
<td className="px-md py-3">Today, 09:15 AM</td>
<td className="px-md py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface border border-surface-variant text-on-surface-variant text-label-sm font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        Acute Migraine
                                    </span>
</td>
<td className="px-md py-3 text-center">
<span className="inline-flex px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm items-center gap-1 relative overflow-hidden">
<span className="absolute inset-0 bg-error opacity-10 animate-pulse"></span>
<span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                                        In-Queue
                                    </span>
</td>
<td className="px-md py-3 text-right">
<div className="flex justify-end gap-1">
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]">chat_bubble</span>
</button>
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="View Profile">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-md py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md font-bold shrink-0">DT</div>
<div>
<p className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">David Thompson</p>
<p className="text-[12px] text-on-surface-variant">M • DOB: 02/14/1960</p>
</div>
</div>
</td>
<td className="px-md py-3 text-outline">MC-33019</td>
<td className="px-md py-3">63</td>
<td className="px-md py-3">Sep 28, 2023</td>
<td className="px-md py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface border border-surface-variant text-on-surface-variant text-label-sm font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        Type 2 Diabetes
                                    </span>
</td>
<td className="px-md py-3 text-center">
<span className="inline-flex px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_available</span>
                                        Scheduled
                                    </span>
</td>
<td className="px-md py-3 text-right">
<div className="flex justify-end gap-1">
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]">chat_bubble</span>
</button>
<button className="p-1.5 text-outline hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="View Profile">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination Footer  */}
<div className="bg-surface-container-lowest border-t border-surface-variant px-4 py-3 flex items-center justify-between sm:px-6">
<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                                Showing <span className="font-label-md text-on-surface">1</span> to <span className="font-label-md text-on-surface">4</span> of <span className="font-label-md text-on-surface">128</span> results
                            </p>
</div>
<div>
<nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
<a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-surface-variant bg-surface-container-lowest text-sm font-medium text-outline hover:bg-surface-container-low transition-colors" href="#">
<span className="sr-only">Previous</span>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</a>
<a aria-current="page" className="z-10 bg-primary-fixed border-primary-container text-on-primary-fixed relative inline-flex items-center px-4 py-2 border text-sm font-label-md" href="#">
                                    1
                                </a>
<a className="bg-surface-container-lowest border-surface-variant text-on-surface-variant hover:bg-surface-container-low relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors" href="#">
                                    2
                                </a>
<a className="bg-surface-container-lowest border-surface-variant text-on-surface-variant hover:bg-surface-container-low relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors" href="#">
                                    3
                                </a>
<span className="relative inline-flex items-center px-4 py-2 border border-surface-variant bg-surface-container-lowest text-sm font-medium text-outline">
                                    ...
                                </span>
<a className="bg-surface-container-lowest border-surface-variant text-on-surface-variant hover:bg-surface-container-low relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors" href="#">
                                    10
                                </a>
<a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-surface-variant bg-surface-container-lowest text-sm font-medium text-outline hover:bg-surface-container-low transition-colors" href="#">
<span className="sr-only">Next</span>
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</a>
</nav>
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
