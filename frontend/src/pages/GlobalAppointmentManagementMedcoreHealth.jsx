import React from 'react';

export default function GlobalAppointmentManagementMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex">

{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-screen w-64 rounded-none border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-manrope text-sm font-medium flex flex-col gap-1 py-4 z-50">
{/*  Header  */}
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-weight="fill">medical_services</span>
</div>
<div>
<h1 className="text-xl font-black text-blue-700 dark:text-blue-400 leading-tight">MedCore Health</h1>
<p className="text-xs text-slate-500 font-medium tracking-wide">Admin Portal</p>
</div>
</div>
{/*  Navigation Links  */}
<nav className="flex-1 flex flex-col gap-1">
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">group</span>
                User Management
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">verified_user</span>
                Doctor Approvals
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">corporate_fare</span>
                Departments
            </a>
{/*  Active Tab  */}
<a className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined" data-weight="fill">event</span>
                Appointments
            </a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">payments</span>
                Billing
            </a>
</nav>
<div className="mt-auto flex flex-col gap-1">
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
</aside>
{/*  Main Content Wrapper  */}
<div className="flex-1 flex flex-col ml-64 min-w-0 bg-background">
{/*  TopNavBar  */}
<header className="bg-white dark:bg-slate-900 font-manrope antialiased tracking-tight text-blue-600 dark:text-blue-400 docked full-width top-0 sticky z-40 border-b border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center h-16 px-6 w-full ml-auto">
<div className="flex-1 flex items-center">
{/*  Search Bar Placeholder based on search_bar: "on_left"  */}
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-slate-700 outline-none placeholder:text-slate-400" placeholder="Search portal..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-full relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors p-1 pr-3 rounded-full border border-transparent hover:border-slate-200">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 overflow-hidden">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A professional, brightly lit headshot of a mature male hospital administrator wearing a tailored dark navy suit and light blue tie. He has a calm, authoritative expression and short graying hair. The background is a clean, minimalist corporate office setting with subtle white and gray tones, perfectly aligning with a modern corporate clinical UI style. The lighting is high-key and flattering, conveying trust and leadership." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYhfXD5sAGR5tXynZ_GRjVPM8dy9b_KHKsLQZhNst3bvwrsjkPb_O7DY1KjdlwUFFvFmOK5Yh7McEtl5UroefxoSAV4caEId-FxkHiJC157zzQ5HybY8yMlVBYWzLQPJGX2-mIy98WXXa3dpWLotF-d-DX5ZgtIHLfm7y3zq6f5ja6Hd2Qn_s9D_lH3zpni7Ura8mMxwpdT-rZ6XEIVJ-1fSTLhiSgs7LyonsLs4rKGJaFD-aylQr7KbKecISxAlt0FC4Ve55QGzEy" />
</div>
</button>
</div>
</header>
{/*  Main Canvas  */}
<main className="flex-1 overflow-y-auto p-grid-margin">
<div className="max-w-[1400px] mx-auto flex flex-col gap-grid-gutter">
{/*  Page Header & Controls  */}
<section className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
<div>
<h1 className="font-h2 text-h2 text-on-surface mb-2">Global Appointment Management</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Monitor, manage, and resolve scheduling across all departments.</p>
</div>
<div className="flex flex-wrap items-center gap-sm">
<button className="flex items-center gap-2 px-md py-sm rounded border border-outline-variant text-on-surface-variant font-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">download</span>
                            Export
                        </button>
<button className="flex items-center gap-2 px-md py-sm rounded border border-outline-variant text-error font-label-md hover:bg-error-container transition-colors">
<span className="material-symbols-outlined text-sm">cancel</span>
                            Cancel
                        </button>
<button className="flex items-center gap-2 px-md py-sm rounded bg-primary-container text-on-primary-container font-label-md hover:opacity-90 transition-opacity shadow-sm">
<span className="material-symbols-outlined text-sm">calendar_clock</span>
                            Reschedule
                        </button>
</div>
</section>
{/*  Filters & Search Bar  */}
<section className="bg-surface-container-lowest p-sm rounded-lg border border-outline-variant shadow-sm flex flex-col md:flex-row items-center gap-md">
<div className="flex-1 relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface border-none rounded text-on-surface font-body-sm focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors outline-none placeholder:text-on-surface-variant/60" placeholder="Search by Patient ID, Name, or Doctor..." type="text" />
</div>
<div className="h-8 w-px bg-outline-variant hidden md:block"></div>
<div className="flex items-center gap-sm w-full md:w-auto">
<div className="relative flex-1 md:w-48">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">calendar_today</span>
<select className="w-full pl-9 pr-8 py-2.5 bg-surface border-none rounded text-on-surface font-body-sm appearance-none cursor-pointer focus:ring-2 focus:ring-primary outline-none">
<option>Today</option>
<option>Tomorrow</option>
<option>Next 7 Days</option>
<option>Custom Range</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-sm">expand_more</span>
</div>
<div className="relative flex-1 md:w-48">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">corporate_fare</span>
<select className="w-full pl-9 pr-8 py-2.5 bg-surface border-none rounded text-on-surface font-body-sm appearance-none cursor-pointer focus:ring-2 focus:ring-primary outline-none">
<option>All Departments</option>
<option>Cardiology</option>
<option>Neurology</option>
<option>Pediatrics</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-sm">expand_more</span>
</div>
</div>
</section>
{/*  Conflict Detection Alert (Bento Style)  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
{/*  Critical Alert Card  */}
<div className="md:col-span-8 bg-error-container rounded-xl p-lg border border-error/20 flex gap-md items-start shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-error opacity-5 rounded-bl-full pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-error" data-weight="fill">warning</span>
</div>
<div className="flex-1">
<h3 className="font-h3 text-h3 text-on-error-container mb-1">Double Booking Detected</h3>
<p className="font-body-sm text-body-sm text-on-error-container/80 mb-4 max-w-xl">
                                Dr. Sarah Jenkins has overlapping appointments scheduled for 10:30 AM in Cardiology Room A. Immediate reassignment is required to prevent patient wait times.
                            </p>
<div className="flex gap-sm">
<button className="px-md py-sm bg-error text-on-error font-label-md rounded shadow-sm hover:opacity-90 transition-opacity">
                                    Resolve Conflict
                                </button>
<button className="px-md py-sm bg-transparent border border-error text-error font-label-md rounded hover:bg-error/5 transition-colors">
                                    View Details
                                </button>
</div>
</div>
</div>
{/*  Metric Summary  */}
<div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm flex flex-col justify-center">
<div className="flex items-center justify-between mb-4">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Today's Load</span>
<span className="material-symbols-outlined text-outline">analytics</span>
</div>
<div className="flex items-end gap-3">
<span className="font-h1 text-h1 text-on-surface leading-none">142</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mb-1">Total Appointments</span>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">In Progress</span>
<span className="font-body-md text-body-md font-semibold text-secondary">24</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Pending</span>
<span className="font-body-md text-body-md font-semibold text-primary">118</span>
</div>
</div>
</div>
</section>
{/*  Data Table Section  */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
<div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
<h2 className="font-h3 text-h3 text-on-surface">Master Schedule</h2>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1-10 of 142</span>
<button className="p-1 rounded hover:bg-surface-variant text-outline transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="p-1 rounded hover:bg-surface-variant text-outline transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface border-b border-outline-variant">
<th className="w-12 px-md py-sm text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</th>
<th className="px-md py-sm font-label-md text-label-md text-on-surface-variant">Patient Details</th>
<th className="px-md py-sm font-label-md text-label-md text-on-surface-variant">Assigned Doctor</th>
<th className="px-md py-sm font-label-md text-label-md text-on-surface-variant">Department & Time</th>
<th className="px-md py-sm font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="px-md py-sm font-label-md text-label-md text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface">
{/*  Row 1: Conflict  */}
<tr className="border-b border-outline-variant/50 hover:bg-surface/50 transition-colors bg-error-container/10">
<td className="px-md py-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="px-md py-md">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center font-label-md text-on-surface-variant">MR</div>
<div>
<div className="font-medium">Marcus Reynolds</div>
<div className="text-on-surface-variant text-xs">ID: PT-88342</div>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-2">
<img alt="Doctor Avatar" className="w-7 h-7 rounded-full object-cover" data-alt="A professional headshot of a female doctor in her mid-40s, wearing a crisp white medical coat over a light blue dress shirt. She has dark, neatly styled hair and a reassuring, competent expression. The background is a soft, blurred modern hospital corridor with light-mode aesthetic, utilizing bright whites and subtle cool grays. The lighting is even and high-key, conveying a sense of clinical precision, trustworthiness, and corporate professionalism suitable for a high-end medical software interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB134tiPij0V9ArM3p_E5aXqil_ashUMQ6p03LlQAiYmFFcEoPIREOLswBDHtwog4H9h1AT7FoMCkv-LJaKNg_Zdc6EuVyKhztWr39M3i5VwAc5tcrjtxDNEClvdmBrum_U7Cj0YkGg1HBoVlkz7ajhhXhV0Ecc0Y6L7qBBiQnRNEHfJrauRTmZ3kB0GL_VW2hdu9yzwgrS1behQ2-yACA0vtlPTs62UxsU_tQSBk8iXo7gHv5_usleKrtQm8SuyqM1HuQRRLDmeexm" />
<div>
<div className="font-medium text-error">Dr. Sarah Jenkins</div>
<div className="text-error/80 text-xs flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">warning</span> Conflict</div>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="font-medium">Cardiology - Room A</div>
<div className="text-on-surface-variant text-xs">Today, 10:30 AM - 11:00 AM</div>
</td>
<td className="px-md py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-[11px] bg-primary-fixed text-on-primary-fixed">
                                            Scheduled
                                        </span>
</td>
<td className="px-md py-md text-right">
<button className="px-sm py-1 border border-primary text-primary font-label-sm rounded hover:bg-primary/5 transition-colors">
                                            Reassign Doctor
                                        </button>
<button className="p-1 ml-1 text-outline hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
</td>
</tr>
{/*  Row 2: In Progress  */}
<tr className="border-b border-outline-variant/50 hover:bg-surface/50 transition-colors">
<td className="px-md py-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="px-md py-md">
<div className="flex items-center gap-3">
<img alt="Patient Avatar" className="w-9 h-9 rounded-full object-cover" data-alt="A clean, modern portrait of a young adult female patient looking calm and composed. She is wearing a simple, neutral-toned sweater. The portrait is taken in a brightly lit room with soft, diffused natural light creating gentle ambient shadows. The background is completely out of focus, consisting of soft white and pale blue tones that perfectly match a modern corporate, minimalist healthcare design system. The overall mood is serene and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6O7ck0JRp0RvIUyDRPC7m1kUX26tD9dHOaPI8vLGPOmu2UmS1BDEGCnzk3UppBzyIyi7NhH3HY7fXF0WguwU8rWwLXX7lWIF1-JcwlTULJ_vkKt4Nh3u_psjQSyKJANsiTjNEfGSm4X8VAca3uvAGDSqok3UFMLfkIujwIQExx1vwMk1jCyfxZGBXnOU5NhBMFVH7v-a64i8nBYA-6v6mN1VQE1oueTXEOghmJpE9wX7_MjKevABgXGMYR6K7da3nyEOXTc3QaAN6" />
<div>
<div className="font-medium">Elena Rostova</div>
<div className="text-on-surface-variant text-xs">ID: PT-99120</div>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center font-label-sm text-on-surface-variant text-[10px]">AP</div>
<div>
<div className="font-medium">Dr. Alan Park</div>
<div className="text-on-surface-variant text-xs">Neurology</div>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="font-medium">Neurology - Ward 3</div>
<div className="text-on-surface-variant text-xs">Today, 09:00 AM - 10:00 AM</div>
</td>
<td className="px-md py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-[11px] bg-secondary-fixed text-on-secondary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1 animate-pulse"></span>
                                            In-Progress
                                        </span>
</td>
<td className="px-md py-md text-right">
<button className="p-1 text-outline hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-sm">visibility</span></button>
<button className="p-1 text-outline hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
</td>
</tr>
{/*  Row 3: Scheduled  */}
<tr className="border-b border-outline-variant/50 hover:bg-surface/50 transition-colors bg-surface">
<td className="px-md py-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="px-md py-md">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center font-label-md text-on-surface-variant">DJ</div>
<div>
<div className="font-medium">David Jenkins</div>
<div className="text-on-surface-variant text-xs">ID: PT-11094</div>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="flex items-center gap-2">
<img alt="Doctor Avatar" className="w-7 h-7 rounded-full object-cover" data-alt="A professional headshot of a male doctor in his late 30s, wearing teal scrubs and a stethoscope around his neck. He has a warm, approachable smile and short hair. The background is a clean, bright clinical setting with a light-mode aesthetic, utilizing bright whites and subtle cool grays. The lighting is even and high-key, conveying a sense of approachability, trustworthiness, and corporate professionalism suitable for a high-end medical software interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyIt9mJsVGe2XfNQtkWja_HkeU6md1oCkf3AfAacyVx2YXUbHa4Vbhc6gU2sUa5xu31FbLPsDJpfcPO6FKA8YMHz_xKtaCeHkb7DboJoDoHv6GGgUohX-vZJ5VLyfeAckk1qZM0w52YrcAbeYE4lnxY1DWKReGMYyTOz_hNfw1Z0YzpRWQn9aIZiZqwzw9RpZ4qcc8IpWa8EylaPtlUsufBnIXFog474YBGmMiJs2JQDlXcdGGUNtvU4vxMkk7ZoWOhYyG9CFOadqy" />
<div>
<div className="font-medium">Dr. Michael Chen</div>
<div className="text-on-surface-variant text-xs">Pediatrics</div>
</div>
</div>
</td>
<td className="px-md py-md">
<div className="font-medium">Pediatrics - Clinic B</div>
<div className="text-on-surface-variant text-xs">Today, 11:15 AM - 11:45 AM</div>
</td>
<td className="px-md py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-[11px] bg-primary-fixed text-on-primary-fixed">
                                            Scheduled
                                        </span>
</td>
<td className="px-md py-md text-right">
<button className="px-sm py-1 border border-outline-variant text-on-surface-variant font-label-sm rounded hover:bg-surface-container transition-colors">
                                            Modify
                                        </button>
<button className="p-1 ml-1 text-outline hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
</td>
</tr>
{/*  Row 4: Cancelled  */}
<tr className="hover:bg-surface/50 transition-colors">
<td className="px-md py-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="px-md py-md">
<div className="flex items-center gap-3 opacity-60">
<div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center font-label-md text-on-surface-variant">ST</div>
<div>
<div className="font-medium line-through">Sarah Thompson</div>
<div className="text-on-surface-variant text-xs">ID: PT-55219</div>
</div>
</div>
</td>
<td className="px-md py-md opacity-60">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center font-label-sm text-on-surface-variant text-[10px]">RW</div>
<div>
<div className="font-medium">Dr. Robert Wong</div>
<div className="text-on-surface-variant text-xs">Orthopedics</div>
</div>
</div>
</td>
<td className="px-md py-md opacity-60">
<div className="font-medium">Orthopedics - Wing E</div>
<div className="text-on-surface-variant text-xs">Today, 02:00 PM - 03:00 PM</div>
</td>
<td className="px-md py-md">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-[11px] bg-error-container/50 text-error">
                                            Cancelled
                                        </span>
</td>
<td className="px-md py-md text-right">
<button className="p-1 text-outline hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</main>
</div>

</div>
    </>
  );
}
