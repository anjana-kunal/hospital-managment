import React from 'react';

export default function DoctorDashboardMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden flex">

{/*  Shared Component: SideNavBar  */}
<nav className="fixed left-0 top-0 bottom-0 flex flex-col z-40 h-screen w-64 border-r rounded-none bg-white border-slate-200 shadow-none font-manrope text-sm font-semibold tracking-wide">
{/*  Header  */}
<div className="flex flex-col items-center justify-center p-lg border-b border-slate-200">
<img alt="Dr. Julian Bashir" className="w-20 h-20 rounded-full mb-md object-cover border-2 border-primary-container/20" data-alt="A professional headshot of a mature male chief surgeon with grey hair, wearing a crisp white medical coat over a blue shirt, smiling warmly against a clean, light clinical background. Lighting is bright, soft, and modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB-SEkmyKlVaV5a3wi78B5xbFob5bCCSh4q5U1iqUFYVxAHY2I8x2Xtx564dTpFbP85tSWd_KeYE6fObsG3ewNpQwmLQMGD_9B7V1T_gZCAKUnpVEGLG8jOqv2NKMenJt0WfHZfiSGmtRqsf_yk1tuaFqU2vk82Y_5kbMkoTfsI_bAw1GDCUn9YREw6I1ADw660M4wKEy9kzMI4F4mIkBOQBf8iM8plIvPGAI1i8Klbn9fAMeouPV5fFrItKSHv47JkOCY0T-sgEu-" />
<h2 className="text-lg font-bold text-slate-900">Dr. Julian Bashir</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Chief Surgeon</p>
</div>
{/*  Navigation Tabs  */}
<div className="flex-1 overflow-y-auto py-md flex flex-col gap-xs">
{/*  Active Tab: Dashboard  */}
<a className="nav-link-active flex items-center gap-3 px-4 py-3 active:scale-95" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span>Dashboard</span>
</a>
{/*  Inactive Tabs  */}
<a className="nav-link flex items-center gap-3 px-4 py-3 active:scale-95" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span>Schedule</span>
</a>
<a className="nav-link flex items-center gap-3 px-4 py-3 active:scale-95" href="#">
<span className="material-symbols-outlined">event_note</span>
<span>Appointments</span>
</a>
<a className="nav-link flex items-center gap-3 px-4 py-3 active:scale-95" href="#">
<span className="material-symbols-outlined">group</span>
<span>Patients</span>
</a>
<a className="nav-link flex items-center justify-between px-4 py-3 active:scale-95" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined">mail</span>
<span>Messages</span>
</div>
<span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded-full">3</span>
</a>
</div>
{/*  Footer Tabs  */}
<div className="p-md border-t border-slate-200 flex flex-col gap-xs">
<a className="nav-link flex items-center gap-3 px-4 py-3 active:scale-95" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<a className="nav-link flex items-center gap-3 px-4 py-3 active:scale-95" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</a>
</div>
</nav>
{/*  Main Content Area  */}
<main className="ml-64 flex-1 flex flex-col min-h-screen">
{/*  Shared Component: TopAppBar  */}
<header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 z-30 docked full-width border-b bg-white border-slate-200 shadow-sm font-manrope text-sm font-medium antialiased text-blue-600 active:opacity-80 transition-all duration-150">
{/*  Left: Search & Brand  */}
<div className="flex items-center gap-lg">
<div className="text-xl font-extrabold tracking-tight text-slate-900">MedCore HMS</div>
{/*  Search Bar  */}
<div className="relative hidden md:block w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-[#F1F3F4] border-transparent focus:bg-white focus:border-primary-container focus:ring-0 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline transition-colors" placeholder="Search patients, ID, or records..." type="text" />
</div>
</div>
{/*  Right: Actions & Profile  */}
<div className="flex items-center gap-md">
<button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors duration-200 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors duration-200">
<span className="material-symbols-outlined">help</span>
</button>
<img alt="Doctor Avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-sm" data-alt="A small circular avatar of a mature male chief surgeon with grey hair, identical to the sidebar portrait but scaled down." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHcinjQzsDo8JKviJw8463kGNXa6LASnyKZm2Xs94o7sMh21R_Cn2EnnVUSgjf19Jr77ASFgpTaGwt6L6U8e4LqurheECTL0wsG55l_bH7sHuSfo7pv2BHPpHNHd5hUTsB5dY98G-u2_F2qdm0SKqm6J9Z5ZCHphTpWV55H0b6QAwEbjP5EDXvvS35Wv9gYj_pn1PRMiXOCvF43q97ZQi3EiAjt8KBogkuk23vwElEKfDm3h_RwAY9Efq5pbvywfgsdad7G4xDTOVM" />
</div>
</header>
{/*  Dashboard Canvas  */}
<div className="p-grid-margin space-y-grid-gutter">
{/*  Page Header  */}
<div className="flex justify-between items-end">
<div>
<h1 className="font-h2 text-h2 text-on-surface">Good Morning, Dr. Bashir</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Here is your clinical overview for today.</p>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
                    Oct 24, 2023 • 08:45 AM
                </div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-grid-gutter">
{/*  Quick Stats (Cols 1-8)  */}
<div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-grid-gutter">
{/*  Stat 1  */}
<div className="bento-card p-lg">
<div className="flex justify-between items-start mb-md">
<div className="p-2 bg-primary-fixed rounded-lg text-primary">
<span className="material-symbols-outlined">group</span>
</div>
</div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Patients</h3>
<div className="font-h1 text-h1 text-on-surface">1,248</div>
<div className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +12 this week
                        </div>
</div>
{/*  Stat 2  */}
<div className="bento-card p-lg">
<div className="flex justify-between items-start mb-md">
<div className="p-2 bg-secondary-container rounded-lg text-on-secondary-container">
<span className="material-symbols-outlined">stethoscope</span>
</div>
</div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Today's Consults</h3>
<div className="font-h1 text-h1 text-on-surface">14</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                            4 completed, 10 remaining
                        </div>
</div>
{/*  Stat 3  */}
<div className="bento-card p-lg">
<div className="flex justify-between items-start mb-md">
<div className="p-2 bg-tertiary-fixed rounded-lg text-tertiary">
<span className="material-symbols-outlined">edit_document</span>
</div>
</div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Pending Notes</h3>
<div className="font-h1 text-h1 text-on-surface">3</div>
<div className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-[16px]">warning</span> Action required
                        </div>
</div>
</div>
{/*  Alerts Panel (Cols 9-12)  */}
<div className="col-span-12 lg:col-span-4 bento-card border-error-container/50 bg-[#FFF9F9]">
<div className="p-lg border-b border-error-container/30 flex justify-between items-center">
<h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-error" style={{"fontVariationSettings":"'FILL' 1"}}>error</span>
                            Critical Alerts
                        </h2>
</div>
<div className="p-lg flex-1 overflow-y-auto">
<div className="p-md bg-white rounded-lg border border-error-container shadow-sm mb-md flex gap-md">
<div className="text-error mt-1"><span className="material-symbols-outlined text-[20px]">science</span></div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Lab Result: Abnormal</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Patient: <strong>Sarah Jenkins</strong><br />Troponin elevated.</p>
<button className="mt-2 text-primary font-label-md text-label-md hover:underline">Review Results</button>
</div>
</div>
<div className="p-md bg-white rounded-lg border border-[#E9ECEF] shadow-sm flex gap-md">
<div className="text-tertiary mt-1"><span className="material-symbols-outlined text-[20px]">medication</span></div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Prescription Renewal</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Patient: <strong>Michael Chang</strong></p>
<button className="mt-2 text-primary font-label-md text-label-md hover:underline">Approve</button>
</div>
</div>
</div>
</div>
{/*  Today's Appointments (Cols 1-8)  */}
<div className="col-span-12 lg:col-span-8 bento-card">
<div className="p-lg border-b border-[#E9ECEF] flex justify-between items-center">
<h2 className="font-h3 text-h3 text-on-surface">Today's Appointments</h2>
<button className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1">
                            View Schedule <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-[#E9ECEF] bg-[#F8F9FA]">
<th className="py-3 px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Time</th>
<th className="py-3 px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Patient</th>
<th className="py-3 px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Reason</th>
<th className="py-3 px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="py-3 px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
{/*  Row 1  */}
<tr className="border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-md font-label-md text-label-md text-on-surface whitespace-nowrap">09:00 AM</td>
<td className="py-4 px-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-label-md text-label-md">SJ</div>
<span className="font-medium text-on-surface">Sarah Jenkins</span>
</div>
</td>
<td className="py-4 px-md text-on-surface-variant">Post-Op Follow-up</td>
<td className="py-4 px-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-primary-container/10 text-primary-container">
                                            In-Queue
                                        </span>
</td>
<td className="py-4 px-md text-right">
<button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100">Start</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="border-b border-[#E9ECEF] bg-[#F8F9FA] hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-md font-label-md text-label-md text-on-surface whitespace-nowrap">09:30 AM</td>
<td className="py-4 px-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center font-label-md text-label-md">MC</div>
<span className="font-medium text-on-surface">Michael Chang</span>
</div>
</td>
<td className="py-4 px-md text-on-surface-variant">Routine Checkup</td>
<td className="py-4 px-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-[#E9ECEF] text-on-surface-variant">
                                            Waiting
                                        </span>
</td>
<td className="py-4 px-md text-right">
<button className="text-primary hover:underline font-label-sm text-label-sm">View Chart</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-md font-label-md text-label-md text-on-surface whitespace-nowrap">10:15 AM</td>
<td className="py-4 px-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-md text-label-md">ER</div>
<span className="font-medium text-on-surface">Emily Ross</span>
</div>
</td>
<td className="py-4 px-md text-on-surface-variant">MRI Results Review</td>
<td className="py-4 px-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-[#E9ECEF] text-on-surface-variant">
                                            Confirmed
                                        </span>
</td>
<td className="py-4 px-md text-right">
<button className="text-primary hover:underline font-label-sm text-label-sm">View Chart</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-md font-label-md text-label-md text-on-surface whitespace-nowrap">11:00 AM</td>
<td className="py-4 px-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface flex items-center justify-center font-label-md text-label-md">DL</div>
<span className="font-medium text-on-surface">David Lee</span>
</div>
</td>
<td className="py-4 px-md text-on-surface-variant">Surgical Consultation</td>
<td className="py-4 px-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-[#E9ECEF] text-on-surface-variant">
                                            Confirmed
                                        </span>
</td>
<td className="py-4 px-md text-right">
<button className="text-primary hover:underline font-label-sm text-label-sm">View Chart</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Secondary Column (Cols 9-12)  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-grid-gutter">
{/*  Pending Reports  */}
<div className="bento-card">
<div className="p-md border-b border-[#E9ECEF] flex justify-between items-center bg-[#F8F9FA] rounded-t-xl">
<h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Pending Reports</h2>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-medium">2 New</span>
</div>
<div className="p-md space-y-md">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-outline mt-0.5">description</span>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Pathology Report</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Patient: Robert King</p>
<p className="font-body-sm text-body-sm text-outline text-xs mt-1">Received 2h ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-outline mt-0.5">radiology</span>
<div>
<h4 className="font-label-md text-label-md text-on-surface">CT Scan Analysis</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Patient: Alice Wong</p>
<p className="font-body-sm text-body-sm text-outline text-xs mt-1">Received 4h ago</p>
</div>
</div>
</div>
</div>
{/*  Weekly Calendar Snapshot  */}
<div className="bento-card flex-1">
<div className="p-md border-b border-[#E9ECEF]">
<h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Weekly Overview</h2>
</div>
<div className="p-md">
<div className="grid grid-cols-5 gap-2 text-center mb-4">
<div className="font-label-sm text-label-sm text-on-surface-variant">M</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">T</div>
<div className="font-label-sm text-label-sm text-primary font-bold">W</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">T</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">F</div>
<div className="p-2 rounded-lg font-body-sm text-body-sm">22</div>
<div className="p-2 rounded-lg font-body-sm text-body-sm">23</div>
<div className="p-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm">24</div>
<div className="p-2 rounded-lg font-body-sm text-body-sm relative">
                                    25
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
</div>
<div className="p-2 rounded-lg font-body-sm text-body-sm">26</div>
</div>
<div className="bg-[#F8F9FA] rounded-lg p-3 text-center border border-[#E9ECEF]">
<p className="font-body-sm text-body-sm text-on-surface-variant">Next major block:</p>
<p className="font-label-md text-label-md text-on-surface mt-1">Surgery - 1:00 PM</p>
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
