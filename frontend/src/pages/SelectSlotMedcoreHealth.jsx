import React from 'react';

export default function SelectSlotMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex">

{/*  SideNavBar (from JSON)  */}
<nav className="fixed left-0 top-0 h-full flex flex-col p-4 w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-manrope text-sm font-medium transition-all duration-200 z-10">
{/*  Profile Header  */}
<div className="mb-8 px-4 mt-4 flex flex-col items-start">
<div className="h-12 w-12 rounded-full overflow-hidden mb-3 border-2 border-primary-fixed">
<img alt="Patient Profile" className="h-full w-full object-cover" data-alt="A professional, brightly lit headshot of a male patient in his 30s. He has short dark hair and a neutral, calm expression. The background is a soft, solid light gray, fitting perfectly into a clean, modern medical UI aesthetic. The image conveys trust and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1tYvfPFzvhlFzxyFh-gbdMYA0a50PF3mpI381QczKijWtqqBL5ZvidBMm87BuJ5AcFKnqMOrZbCIQepXFFWVHF2lbuMPmbwrPNlHC5NSgQjDIdt8oF8klXDSXWQzhbJJuFLMqVvBcoleFTr28w8dt52OXIS9p3jByC5s5Wt--RJ7Rkop4Lyc6zkbaRwd1q-XgDEs4GeTrr-2EyV_2eGNfe-ktN-bmEAw_tEYe6jeqlcMd3M3Bzrc9k7OeL7icWVB4B2r-FndijSz2" />
</div>
<div className="font-h3 text-h3 text-on-surface leading-tight">Alex Johnson</div>
<div className="font-label-sm text-label-sm text-outline mt-1">Patient ID: #MC-9842</div>
</div>
<ul className="flex flex-col gap-2 w-full">
{/*  Inactive  */}
<li>
<a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
</li>
{/*  Active  */}
<li>
<a className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg px-4 py-3" href="#">
<span className="material-symbols-outlined fill" data-icon="calendar_month" data-weight="fill">calendar_month</span>
                    Appointments
                </a>
</li>
{/*  Inactive  */}
<li>
<a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
                    Records
                </a>
</li>
{/*  Inactive  */}
<li>
<a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                    Billing
                </a>
</li>
{/*  Inactive  */}
<li>
<a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </a>
</li>
</ul>
</nav>
{/*  Main Content Canvas  */}
<main className="ml-64 flex-1 p-grid-margin w-full max-w-[1400px] mx-auto">
{/*  Header  */}
<header className="mb-lg flex justify-between items-end">
<div>
<h1 className="font-h2 text-h2 text-on-surface">Book an Appointment</h1>
<p className="font-body-md text-body-md text-outline mt-xs">Select a date and time for your consultation.</p>
</div>
<button className="text-outline hover:text-on-surface transition-colors flex items-center gap-sm font-label-md text-label-md">
<span className="material-symbols-outlined text-[20px]" data-icon="arrow_back">arrow_back</span>
                Back to Directory
            </button>
</header>
{/*  Fixed Grid Layout  */}
<div className="grid grid-cols-12 gap-grid-gutter">
{/*  Left Column: Selection & Forms  */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
{/*  Date & Time Selection Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
{/*  Calendar Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 flex flex-col">
<div className="flex items-center justify-between mb-md pb-sm border-b border-surface-variant">
<h2 className="font-h3 text-h3 text-on-surface text-[20px]">Select Date</h2>
<div className="flex items-center gap-sm text-on-surface font-label-md text-label-md">
<button className="h-8 w-8 rounded-full hover:bg-surface-container flex items-center justify-center text-outline transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
</button>
                                October 2024
                                <button className="h-8 w-8 rounded-full hover:bg-surface-container flex items-center justify-center text-outline transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-outline mb-sm">
<div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm text-on-surface">
{/*  Empty days  */}
<div className="py-2 text-outline-variant">29</div>
<div className="py-2 text-outline-variant">30</div>
{/*  Active days  */}
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">1</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">2</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">3</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">4</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">5</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">6</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">7</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">8</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">9</div>
{/*  Selected Day  */}
<div className="py-2 cursor-pointer bg-primary text-on-primary rounded-full w-8 h-8 mx-auto flex items-center justify-center font-label-md shadow-sm">10</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">11</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">12</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">13</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">14</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">15</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">16</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center text-outline-variant line-through">17</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">18</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">19</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">20</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">21</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">22</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">23</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">24</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">25</div>
<div className="py-2 cursor-pointer hover:bg-surface-container rounded-full w-8 h-8 mx-auto flex items-center justify-center">26</div>
</div>
</div>
{/*  Time Slots Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 flex flex-col h-full">
<div className="flex items-center justify-between mb-md pb-sm border-b border-surface-variant">
<h2 className="font-h3 text-h3 text-on-surface text-[20px]">Available Times</h2>
<span className="font-label-sm text-label-sm text-primary bg-primary-fixed-dim/20 px-2 py-1 rounded">Oct 10</span>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-sm overflow-y-auto pr-2" style={{"maxHeight":"220px"}}>
{/*  Morning  */}
<div className="col-span-full font-label-sm text-label-sm text-outline mt-xs mb-1">Morning</div>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">09:00 AM</button>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-outline-variant font-body-sm text-body-sm bg-surface-container cursor-not-allowed line-through">09:30 AM</button>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">10:00 AM</button>
{/*  Selected State  */}
<button className="border-2 border-primary bg-primary-fixed text-on-primary-fixed rounded-DEFAULT py-2 px-3 text-center font-label-md text-label-md shadow-[0_0_0_2px_rgba(0,91,191,0.1)]">10:30 AM</button>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">11:00 AM</button>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">11:30 AM</button>
{/*  Afternoon  */}
<div className="col-span-full font-label-sm text-label-sm text-outline mt-sm mb-1">Afternoon</div>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">01:00 PM</button>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">01:30 PM</button>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">02:00 PM</button>
<button className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors bg-surface-container-lowest">03:30 PM</button>
</div>
</div>
</div>
{/*  Intake Form Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 mt-xs">
<h2 className="font-h3 text-h3 text-on-surface text-[20px] mb-md pb-sm border-b border-surface-variant">Consultation Details</h2>
<form className="flex flex-col gap-md">
{/*  Consultation Type  */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-sm">Consultation Type</label>
<div className="flex flex-wrap gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input className="form-radio text-primary border-outline-variant focus:ring-primary w-5 h-5" name="visitType" type="radio" />
<span className="font-body-md text-body-md text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-outline">business</span>
                                        In-person Visit
                                    </span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="form-radio text-primary border-primary focus:ring-primary w-5 h-5" name="visitType" type="radio" />
<span className="font-body-md text-body-md text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-primary">videocam</span>
                                        Virtual Telehealth
                                    </span>
</label>
</div>
</div>
{/*  Reason for Visit  */}
<div className="mt-sm">
<label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="reason">Reason for Visit <span className="text-error">*</span></label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-outline" id="reason" placeholder="Briefly describe your symptoms or reason for consultation..." rows="3"></textarea>
</div>
{/*  Additional Needs  */}
<div className="mt-xs">
<label className="flex items-start gap-3 cursor-pointer">
<input className="form-checkbox text-primary border-outline-variant focus:ring-primary w-5 h-5 mt-0.5 rounded-sm" type="checkbox" />
<div>
<span className="block font-label-md text-label-md text-on-surface">Require interpreter services</span>
<span className="block font-body-sm text-body-sm text-outline">Our staff will contact you to arrange translation.</span>
</div>
</label>
</div>
</form>
</div>
</div>
{/*  Right Column: Summary Sidebar  */}
<div className="col-span-12 lg:col-span-4">
{/*  Sticky Container  */}
<div className="sticky top-grid-margin bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 flex flex-col gap-md">
<h3 className="font-h3 text-h3 text-on-surface text-[20px] mb-xs">Booking Summary</h3>
{/*  Doctor Info  */}
<div className="flex items-center gap-md bg-surface p-sm rounded-lg border border-surface-variant">
<div className="h-16 w-16 rounded-full overflow-hidden bg-surface-dim flex-shrink-0">
<img alt="Dr. Sarah Jenkins" className="h-full w-full object-cover" data-alt="A professional headshot of a female doctor in her late 30s, wearing a crisp white clinical coat over a light blue shirt, with a subtle stethoscope around her neck. She has a warm, reassuring smile and is positioned against a clean, softly lit, light-mode hospital corridor background. The lighting is bright and even, conveying clinical excellence and trustworthiness in a modern healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1u7S1md2xGxXLn6O2b8HBVKgsyVKdI5qukJUwg3q14-0-sljAHduMEOFsotfqYchvmDpUiYojqP9IaStukfz6ZRwl4PFNMJQwuqratQ6Uk5WntyGNXCcQ_8AigS7jLv4WoglqifPU6Fd4v8FmUHpI4lvtpmS7tmIfoPKJoajvjY0HkuyV1jgQa62_M8LX8UleFYOP-0m1Q4aW9d33K_AO6yLm5W5n6kY-c1xL9bAfR5V0yfVF5Z7u8CXTeqFYp37DLGc3GTZy8WRK" />
</div>
<div>
<div className="font-h3 text-h3 text-on-surface text-[18px] leading-tight">Dr. Sarah Jenkins</div>
<div className="font-body-sm text-body-sm text-outline mt-0.5">Cardiology Specialist</div>
</div>
</div>
<hr className="border-surface-variant my-xs" />
{/*  Appointment Details  */}
<ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface">
<li className="flex items-start justify-between">
<div className="flex items-center gap-2 text-outline">
<span className="material-symbols-outlined text-[20px]">calendar_today</span>
<span>Date</span>
</div>
<span className="font-label-md text-label-md text-right">October 10, 2024</span>
</li>
<li className="flex items-start justify-between">
<div className="flex items-center gap-2 text-outline">
<span className="material-symbols-outlined text-[20px]">schedule</span>
<span>Time</span>
</div>
<span className="font-label-md text-label-md text-right">10:30 AM (EST)</span>
</li>
<li className="flex items-start justify-between">
<div className="flex items-center gap-2 text-outline">
<span className="material-symbols-outlined text-[20px]">videocam</span>
<span>Type</span>
</div>
<span className="font-label-md text-label-md text-right">Virtual Telehealth</span>
</li>
</ul>
<div className="bg-surface-container-low p-md rounded-lg mt-sm flex justify-between items-center border border-surface-variant">
<span className="font-body-md text-body-md text-on-surface">Consultation Fee</span>
<span className="font-h3 text-h3 text-primary text-[20px]">$150.00</span>
</div>
{/*  Action Button  */}
<button className="w-full bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 mt-sm">
                        Confirm Booking
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<p className="text-center font-body-sm text-body-sm text-outline mt-xs">
                        You will not be charged until the appointment is completed.
                    </p>
</div>
</div>
</div>
</main>

</div>
    </>
  );
}
