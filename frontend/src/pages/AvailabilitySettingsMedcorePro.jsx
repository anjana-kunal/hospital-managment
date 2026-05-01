import React from 'react';

export default function AvailabilitySettingsMedcorePro() {
  return (
    <>
      <div className="bg-background text-on-background min-h-screen flex flex-col md:flex-row antialiased">

{/*  SideNavBar (WEB)  */}
<nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 pt-20 bg-white dark:bg-gray-900 font-manrope text-sm font-medium fixed left-0 top-0 h-full w-64 border-r border-r border-gray-100 dark:border-gray-800 z-40">
<div className="px-6 pb-8 border-b border-gray-100 dark:border-gray-800 mb-4 flex flex-col items-center">
<img alt="Doctor profile avatar" className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-surface-container" data-alt="A professional headshot of a mature male doctor wearing a white lab coat over a light blue shirt. He has a warm, confident smile. The background is a brightly lit, modern clinical office with soft, out-of-focus medical equipment. The overall aesthetic is clean, trustworthy, and brightly lit, conveying clinical excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuGkjLtoPYGaVGuI98NHFpkYrDqT_6nUVLyDGEmh1Y_BdnO-_Zp5ptT8_VIKLhjo4zaMafbL3ZRe448z8GywMRARyQ2HC1NakGkCJEo6z-15WeADAdGKw4u64wRB5ylHNYOmFOjSE-NQthVmSzJOsGRFTPBmNbE3hRQ3H6_0Z6iXDiRF7DUi54ZoA5X2oDz9R-bEWuDw_C4GUmkSHD1dBjxHdv9FLAgqF45Td2DI5MkzRGMZzpUuxdC0HU00V_OaYO4NjUynpyh-eY" />
<h2 className="font-h3 text-h3 text-on-surface text-center">Dr. James Wilson</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-1">Cardiology Specialist</p>
<button className="mt-6 w-full py-2 px-4 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>add</span>
                New Appointment
            </button>
</div>
<div className="flex-1 overflow-y-auto w-full">
<ul className="flex flex-col w-full">
<li>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98" href="#">
<span className="material-symbols-outlined">person</span>
                        Profile
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 transition-all cursor-pointer active:scale-98" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>calendar_today</span>
                        Availability
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98" href="#">
<span className="material-symbols-outlined">payments</span>
                        Consultation Fees
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98" href="#">
<span className="material-symbols-outlined">notifications_active</span>
                        Notifications
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98" href="#">
<span className="material-symbols-outlined">verified_user</span>
                        Security
                    </a>
</li>
</ul>
</div>
</nav>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col md:ml-64 w-full min-h-screen">
{/*  TopAppBar  */}
<header className="sticky top-0 z-50 flex items-center justify-between px-6 h-16 w-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-manrope antialiased tracking-tight border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none">
<div className="flex items-center gap-4">
{/*  Mobile Menu Button  */}
<button className="md:hidden p-2 -ml-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="text-xl font-extrabold text-blue-700 dark:text-blue-400">MedCore Pro</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="ml-2 h-8 w-8 rounded-full overflow-hidden border border-outline-variant md:hidden cursor-pointer">
<img alt="Doctor profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a mature male doctor wearing a white lab coat over a light blue shirt. He has a warm, confident smile. The background is a brightly lit, modern clinical office with soft, out-of-focus medical equipment. The overall aesthetic is clean, trustworthy, and brightly lit, conveying clinical excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnNt-VozC66zNch23hcUBMSTRgb7N8XRE8MBfMAuxXU4u8C_ZS6k2sx7BHiGVtggrpZ5Pv9GdlIT0ePWobNXCoK0TR3ls-KPo07POWFUbUY9VIEcLK57WNBsQ3XinIYQXBapguCFeu62Se7VPUhO4JD9xFdtOg-a928QQJiirrAFWNsKYPJ0VMufpn5AXMdk7mbGwUDK0ayywVI2A8YoBi2KOjmIq6Cfn5SAGiL-gRQ2_KJeHMEuB9KB7EHkUNDiUcj8dOnmukJ2DA" />
</div>
</div>
</header>
{/*  Canvas  */}
<main className="flex-1 p-6 md:p-8 xl:p-10 w-full max-w-[1440px] mx-auto pb-24 md:pb-12">
<div className="mb-8">
<h1 className="font-h1 text-h1 text-on-surface mb-2">Availability Settings</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage your regular working hours, breaks, and consultation slot durations.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
{/*  Left Column: Weekly Schedule  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*  Weekly Schedule Card  */}
<section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-highest p-6 md:p-8 flex flex-col">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container-highest">
<div>
<h2 className="font-h2 text-h2 text-on-surface">Weekly Schedule</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Set your regular working hours for each day.</p>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Timezone:</span>
<span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-label-md text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>public</span>
                                    EST (UTC-5)
                                </span>
</div>
</div>
<div className="space-y-4">
{/*  Day Row: Monday  */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-container-highest">
<div className="flex items-center gap-3 w-40">
<input checked="" className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Monday</span>
</div>
<div className="flex-1 flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="09:00" />
</div>
<span className="text-on-surface-variant font-body-md text-body-md">-</span>
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="17:00" />
</div>
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors ml-auto sm:ml-0" title="Add split shift">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
{/*  Day Row: Tuesday  */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-container-highest">
<div className="flex items-center gap-3 w-40">
<input checked="" className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Tuesday</span>
</div>
<div className="flex-1 flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="09:00" />
</div>
<span className="text-on-surface-variant font-body-md text-body-md">-</span>
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="17:00" />
</div>
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors ml-auto sm:ml-0" title="Add split shift">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
{/*  Day Row: Wednesday (Split Shift Example)  */}
<div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-lg bg-surface border border-surface-container-highest">
<div className="flex items-center gap-3 w-40 pt-2">
<input checked="" className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Wednesday</span>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="09:00" />
</div>
<span className="text-on-surface-variant font-body-md text-body-md">-</span>
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="12:00" />
</div>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-full transition-colors ml-auto sm:ml-0" title="Remove shift">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="13:30" />
</div>
<span className="text-on-surface-variant font-body-md text-body-md">-</span>
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="18:00" />
</div>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-full transition-colors ml-auto sm:ml-0" title="Remove shift">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
</div>
{/*  Day Row: Thursday  */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-container-highest">
<div className="flex items-center gap-3 w-40">
<input checked="" className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Thursday</span>
</div>
<div className="flex-1 flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="09:00" />
</div>
<span className="text-on-surface-variant font-body-md text-body-md">-</span>
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="17:00" />
</div>
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors ml-auto sm:ml-0" title="Add split shift">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
{/*  Day Row: Friday  */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-container-highest">
<div className="flex items-center gap-3 w-40">
<input checked="" className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Friday</span>
</div>
<div className="flex-1 flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="09:00" />
</div>
<span className="text-on-surface-variant font-body-md text-body-md">-</span>
<div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<input className="bg-transparent border-none p-0 text-on-surface font-body-md text-body-md focus:ring-0 w-[110px]" type="time" value="14:00" />
</div>
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors ml-auto sm:ml-0" title="Add split shift">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
{/*  Day Row: Saturday (Disabled)  */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-surface-container-low border border-transparent opacity-60">
<div className="flex items-center gap-3 w-40">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Saturday</span>
</div>
<div className="flex-1">
<span className="font-body-md text-body-md text-on-surface-variant italic">Unavailable</span>
</div>
</div>
{/*  Day Row: Sunday (Disabled)  */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-surface-container-low border border-transparent opacity-60">
<div className="flex items-center gap-3 w-40">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Sunday</span>
</div>
<div className="flex-1">
<span className="font-body-md text-body-md text-on-surface-variant italic">Unavailable</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-container-highest flex justify-end">
<button className="py-2.5 px-6 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors shadow-sm">
                                Save Schedule
                            </button>
</div>
</section>
</div>
{/*  Right Column: Settings & Overrides  */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/*  Slot Duration Card  */}
<section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-highest p-6 flex flex-col">
<div className="mb-5 pb-4 border-b border-surface-container-highest">
<h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>timer</span>
                                Slot Duration
                            </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Default length for standard consultations.</p>
</div>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer relative">
<input className="peer sr-only" name="duration" type="radio" value="15" />
<div className="p-3 rounded-lg border border-outline-variant text-center font-label-md text-label-md text-on-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed transition-all">
                                    15 min
                                </div>
</label>
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="duration" type="radio" value="30" />
<div className="p-3 rounded-lg border border-outline-variant text-center font-label-md text-label-md text-on-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed transition-all">
                                    30 min
                                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="duration" type="radio" value="60" />
<div className="p-3 rounded-lg border border-outline-variant text-center font-label-md text-label-md text-on-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed transition-all">
                                    60 min
                                </div>
</label>
</div>
<div className="mt-5 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Buffer time between slots</span>
<select className="bg-surface border border-outline-variant rounded-md py-1.5 pl-3 pr-8 font-body-sm text-body-sm focus:border-primary focus:ring-primary text-on-surface">
<option value="0">None</option>
<option selected="" value="5">5 min</option>
<option value="10">10 min</option>
<option value="15">15 min</option>
</select>
</div>
</section>
{/*  Blocked Dates / Vacation  */}
<section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-highest p-6 flex flex-col flex-1">
<div className="mb-5 pb-4 border-b border-surface-container-highest flex justify-between items-center">
<div>
<h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>event_busy</span>
                                    Time Off
                                </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Block specific dates from booking.</p>
</div>
<button className="p-2 text-primary hover:bg-primary-fixed rounded-full transition-colors" title="Add time off">
<span className="material-symbols-outlined">add</span>
</button>
</div>
<div className="flex-1 flex flex-col gap-3">
{/*  Blocked Item  */}
<div className="p-3 rounded-lg bg-surface border border-surface-container-highest flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>flight_takeoff</span>
</div>
<div className="flex-1 min-w-0 pt-0.5">
<p className="font-label-md text-label-md text-on-surface truncate">Medical Conference</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Oct 12 - Oct 15, 2024</p>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors p-1">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>close</span>
</button>
</div>
{/*  Blocked Item  */}
<div className="p-3 rounded-lg bg-surface border border-surface-container-highest flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>personal_injury</span>
</div>
<div className="flex-1 min-w-0 pt-0.5">
<p className="font-label-md text-label-md text-on-surface truncate">Personal Leave</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Nov 23, 2024 (Half Day)</p>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors p-1">
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>close</span>
</button>
</div>
{/*  Empty State (Hidden)  */}
{/* 
                            <div class="flex-1 flex flex-col items-center justify-center py-8 text-center">
                                <span class="material-symbols-outlined text-outline-variant mb-2" style="font-size: 32px;">calendar_month</span>
                                <p class="font-body-sm text-body-sm text-on-surface-variant">No upcoming time off scheduled.</p>
                            </div>
                             */}
</div>
</section>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
