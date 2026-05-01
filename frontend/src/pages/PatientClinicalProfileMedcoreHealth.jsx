import React from 'react';

export default function PatientClinicalProfileMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md text-body-md antialiased overflow-hidden flex h-screen">

{/*  SideNavBar (Shared Component)  */}
<nav className="fixed left-0 top-0 bottom-0 flex flex-col z-40 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-manrope text-sm font-semibold tracking-wide h-screen w-64 border-r rounded-none border-slate-200 dark:border-slate-800 shadow-none">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<img alt="Dr. Julian Bashir" className="w-10 h-10 rounded-full object-cover" data-alt="A professional headshot of Dr. Julian Bashir, a Chief Surgeon. He is wearing a crisp white medical coat over a light blue collared shirt. The background is a slightly blurred, modern clinical setting with soft, cool lighting. His expression is confident yet approachable, embodying clinical excellence and trustworthiness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2YVfGMdcKw8sVBYWrpyxt5RIBAJRY0vkUZ0UTQJtt-g5TAXs5q2Z1gY85ALZRMg2VlKEiuhM_qYelqpJB2V43rPxf4q8EO6W_9EGJ4Jr-pBN5yZXoFfyNxSPvhnfBxGk6Eeg4Ybh9MOeAkxClgdbTshHJZAJjQqeqG9ZdyD89hKZBsB9ODqARSCeeVgYQvFqjNQGjJDde5VpPNm6i-1hjzL5KtUZafjHsJh7SVkvimqabQV7QQqmW0T8rmuiqz2ZT9QDwJbAM9K3_" />
<div>
<h2 className="text-lg font-bold text-slate-900 dark:text-white">Dr. Julian Bashir</h2>
<p className="text-slate-500 dark:text-slate-400 font-label-sm text-label-sm">Chief Surgeon</p>
</div>
</div>
</div>
<div className="flex-1 py-4 overflow-y-auto">
{/*  Dashboard (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
{/*  Schedule (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span>Schedule</span>
</a>
{/*  Appointments (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="event_note">event_note</span>
<span>Appointments</span>
</a>
{/*  Patients (Active)  */}
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 rounded-r-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="group" style={{"fontVariationSettings":"'FILL' 1"}}>group</span>
<span>Patients</span>
</a>
{/*  Messages (Inactive)  */}
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
<span>Messages</span>
</a>
</div>
<div className="p-4 border-t border-slate-200 dark:border-slate-800">
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Logout</span>
</a>
</div>
</nav>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col ml-64 overflow-hidden relative">
{/*  TopAppBar (Shared Component)  */}
<header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-manrope text-sm font-medium antialiased docked full-width border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">MedCloud HMS</span>
<div className="relative hidden md:block ml-8 text-slate-500">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px]">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-64 transition-all duration-150" placeholder="Search records..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 rounded-full active:opacity-80 relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 rounded-full active:opacity-80">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<img alt="Doctor Avatar" className="w-8 h-8 rounded-full border border-slate-200 ml-2 object-cover" data-alt="Doctor Avatar. A small, circular thumbnail image of Dr. Julian Bashir in clinical attire." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXWmgYVKpOI6zT7uj9FHFrvwczP2jKRbQj8KJgh9FSDQpvIdhDfJvDMDji2gUl6-KuPjHSSnXm8bVISgScthWAKVymFKQBbNmuGizjjsS4auak2Z4QcWa8hJQu3Hz0wCguud11weO68JHAUGEqP3jdY0jHYADj1Inn6t-C8q23hPFd_t-mqT-Q0vr8oKT0m92C_UwKGUgPWKerrSUWrRs82a2is2IgiZSo7g-qUn4jd_VwG0j4vfMn_tQewirBo3ENGMuAaHl_Ia4B" />
</div>
</header>
{/*  Scrollable Canvas  */}
<main className="flex-1 overflow-y-auto p-grid-margin bg-background">
<div className="max-w-[1400px] mx-auto space-y-grid-gutter">
{/*  Demographics Header  */}
<div className="bg-surface-container-lowest rounded-xl p-lg ambient-shadow-level-1 border border-surface-variant flex items-center justify-between">
<div className="flex items-center gap-lg">
<img alt="Patient Portrait" className="w-24 h-24 rounded-full object-cover border-4 border-surface" data-alt="A portrait of a female patient in her mid-40s. She has a neutral, calm expression. The lighting is soft and natural, suggesting a clinical yet comfortable environment. The background is a muted, out-of-focus gray." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAePnrH_-fT5w-Yeu4pf3AdYklv0CNbnb-m9J7ejBmC5Pi0JJPZPo4LWwbLaHgRRrnKqHcH622TNm1zuC5Kk95n3qMSZo9EZzzcjoC6l7Vgu7Ckk6WoIWyBCIA8BVY9Ck6YuWCVrdgqVGbE8blT_PCnQEBoVCUwW1PA3Y9rQHjXJNTE6fXZadZQ6Yfprb0hj3eCLAAXyTJRg14sKeIvXq9yEFXMH0dNaSOufw49SgTQMyZOose4MxAPpRYjPyF2mpXnIOvM8J4sG2nT" />
<div>
<div className="flex items-center gap-sm mb-xs">
<h1 className="font-h1 text-h1 text-on-surface">Eleanor Vance</h1>
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full ml-sm">Stable</span>
</div>
<div className="flex gap-lg font-body-sm text-body-sm text-on-surface-variant">
<span><strong className="font-label-md text-label-md text-on-surface">DOB:</strong> Oct 14, 1978 (45y)</span>
<span><strong className="font-label-md text-label-md text-on-surface">MRN:</strong> #MC-88392-A</span>
<span><strong className="font-label-md text-label-md text-on-surface">Blood:</strong> O+</span>
<span><strong className="font-label-md text-label-md text-on-surface">Sex:</strong> Female</span>
</div>
</div>
</div>
<div className="flex gap-sm">
<button className="px-4 py-2 border border-outline-variant text-primary font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">Edit Profile</button>
<button className="px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-90 transition-opacity">Schedule Consult</button>
</div>
</div>
{/*  Main Bento Grid  */}
<div className="grid grid-cols-12 gap-grid-gutter">
{/*  Left Column (8 cols)  */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-grid-gutter">
{/*  Top Row: Vitals & Allergies  */}
<div className="grid grid-cols-12 gap-grid-gutter">
{/*  Vitals  */}
<div className="col-span-12 md:col-span-7 bg-surface-container-lowest rounded-xl p-md ambient-shadow-level-1 border border-surface-variant">
<h3 className="font-h3 text-h3 text-on-surface mb-md pb-xs border-b border-surface-variant">Recent Vitals</h3>
<div className="grid grid-cols-3 gap-sm">
<div className="p-sm bg-surface rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">monitor_heart</span> BP</p>
<p className="font-h2 text-h2 text-on-surface">118/76</p>
<p className="font-label-sm text-label-sm text-secondary">Normal</p>
</div>
<div className="p-sm bg-surface rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">ecg_heart</span> Heart Rate</p>
<p className="font-h2 text-h2 text-on-surface">72 <span className="font-body-sm text-body-sm text-on-surface-variant">bpm</span></p>
<p className="font-label-sm text-label-sm text-secondary">Normal</p>
</div>
<div className="p-sm bg-surface rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">device_thermostat</span> Temp</p>
<p className="font-h2 text-h2 text-on-surface">98.4 <span className="font-body-sm text-body-sm text-on-surface-variant">°F</span></p>
<p className="font-label-sm text-label-sm text-secondary">Normal</p>
</div>
</div>
</div>
{/*  Allergies (Highlighted)  */}
<div className="col-span-12 md:col-span-5 bg-error-container rounded-xl p-md ambient-shadow-level-1 border border-error/20">
<h3 className="font-h3 text-h3 text-on-error-container mb-md flex items-center gap-2">
<span className="material-symbols-outlined">warning</span> Allergies
                                </h3>
<ul className="space-y-2">
<li className="flex items-start gap-2 font-body-md text-body-md text-on-error-container bg-white/40 p-2 rounded">
<span className="material-symbols-outlined text-[20px] mt-0.5">medication</span>
<div>
<strong className="block font-label-md text-label-md">Penicillin</strong>
<span className="font-body-sm text-body-sm opacity-80">Anaphylaxis - High Severity</span>
</div>
</li>
<li className="flex items-start gap-2 font-body-md text-body-md text-on-error-container bg-white/40 p-2 rounded">
<span className="material-symbols-outlined text-[20px] mt-0.5">eco</span>
<div>
<strong className="block font-label-md text-label-md">Latex</strong>
<span className="font-body-sm text-body-sm opacity-80">Contact Dermatitis - Moderate</span>
</div>
</li>
</ul>
</div>
</div>
{/*  Bottom Row: Meds & Notes  */}
<div className="grid grid-cols-12 gap-grid-gutter">
{/*  Medications  */}
<div className="col-span-12 md:col-span-5 bg-surface-container-lowest rounded-xl p-md ambient-shadow-level-1 border border-surface-variant">
<h3 className="font-h3 text-h3 text-on-surface mb-md pb-xs border-b border-surface-variant flex justify-between items-center">
                                    Current Medications
                                    <button className="text-primary hover:underline font-label-sm text-label-sm">Manage</button>
</h3>
<ul className="space-y-sm">
<li className="flex items-center gap-3 p-2 hover:bg-surface rounded transition-colors">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">pill</span>
</div>
<div className="flex-1">
<p className="font-label-md text-label-md text-on-surface">Lisinopril 10mg</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">1 tablet daily (Morning)</p>
</div>
</li>
<li className="flex items-center gap-3 p-2 hover:bg-surface rounded transition-colors">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">pill</span>
</div>
<div className="flex-1">
<p className="font-label-md text-label-md text-on-surface">Atorvastatin 20mg</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">1 tablet daily (Bedtime)</p>
</div>
</li>
</ul>
</div>
{/*  Clinical Notes  */}
<div className="col-span-12 md:col-span-7 bg-surface-container-lowest rounded-xl p-md ambient-shadow-level-1 border border-surface-variant flex flex-col">
<h3 className="font-h3 text-h3 text-on-surface mb-md pb-xs border-b border-surface-variant">Latest Clinical Note</h3>
<div className="flex-1 bg-surface rounded-lg p-sm font-body-sm text-body-sm text-on-surface leading-relaxed">
<p className="mb-2"><strong className="font-label-sm text-label-sm text-on-surface-variant">Date: Oct 24, 2023 | Author: Dr. J. Bashir</strong></p>
<p>Patient presents for a follow-up regarding occasional mild chest discomfort. ECG performed today shows normal sinus rhythm. Patient reports compliance with current medication regimen. No acute distress noted during examination.</p>
<p className="mt-2">Plan: Continue current meds. Schedule routine lipid panel for next month. Advised patient to return if symptoms worsen.</p>
</div>
<div className="mt-sm text-right">
<button className="text-primary font-label-md text-label-md hover:underline">View All Notes</button>
</div>
</div>
</div>
</div>
{/*  Right Column (4 cols) - History & Labs  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-grid-gutter">
{/*  Previous Visits Timeline  */}
<div className="bg-surface-container-lowest rounded-xl p-md ambient-shadow-level-1 border border-surface-variant flex-1">
<h3 className="font-h3 text-h3 text-on-surface mb-md pb-xs border-b border-surface-variant">Visit History</h3>
<div className="ml-4 pl-4 border-l-2 border-surface-variant relative space-y-lg mt-sm">
<div className="relative">
<div className="timeline-dot"></div>
<p className="font-label-sm text-label-sm text-primary mb-1">Oct 24, 2023</p>
<p className="font-label-md text-label-md text-on-surface">Cardiology Follow-up</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dr. J. Bashir - Dept. of Cardiology</p>
</div>
<div className="relative">
<div className="timeline-dot bg-outline-variant"></div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Aug 12, 2023</p>
<p className="font-label-md text-label-md text-on-surface">Annual Physical</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dr. A. Smith - General Practice</p>
</div>
<div className="relative">
<div className="timeline-dot bg-outline-variant"></div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Feb 05, 2023</p>
<p className="font-label-md text-label-md text-on-surface">Initial Consult</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dr. J. Bashir - Dept. of Cardiology</p>
</div>
</div>
</div>
{/*  Lab Reports  */}
<div className="bg-surface-container-lowest rounded-xl p-md ambient-shadow-level-1 border border-surface-variant">
<h3 className="font-h3 text-h3 text-on-surface mb-md pb-xs border-b border-surface-variant">Lab Reports</h3>
<div className="space-y-sm">
<a className="flex items-center justify-between p-2 rounded hover:bg-surface transition-colors border border-transparent hover:border-outline-variant group" href="#">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary">science</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Comprehensive Metabolic Panel</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 20, 2023</p>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary">download</span>
</a>
<a className="flex items-center justify-between p-2 rounded hover:bg-surface transition-colors border border-transparent hover:border-outline-variant group" href="#">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary">science</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Lipid Panel</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Aug 10, 2023</p>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary">download</span>
</a>
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
