import React from 'react';

export default function MessagesMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-surface font-body-md h-screen overflow-hidden flex">

{/*  SideNavBar  */}
<nav className="fixed left-0 top-0 h-full flex flex-col bg-white dark:bg-slate-900 w-64 border-r border-slate-200 dark:border-slate-800 z-50">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="local_hospital">local_hospital</span>
</div>
<div>
<h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 font-h3 text-h3 tracking-tight">MediPortal</h1>
<p className="font-label-sm text-label-sm text-outline">Patient Access</p>
</div>
</div>
</div>
<div className="flex-1 py-4 flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 opacity-90 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="chat" style={{"fontVariationSettings":"'FILL' 1"}}>chat</span>
<span className="font-manrope text-sm font-medium">Messages</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="font-manrope text-sm font-medium">Notifications</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span className="font-manrope text-sm font-medium">Medical History</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-manrope text-sm font-medium">Profile</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mt-auto" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-manrope text-sm font-medium">Settings</span>
</a>
</div>
</nav>
{/*  TopAppBar  */}
<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-4 w-96">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-body-sm font-body-sm focus:bg-white focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-on-surface" placeholder="Search messages..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container Focus: ring-2 ring-blue-500/50">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container Focus: ring-2 ring-blue-500/50">
<span className="material-symbols-outlined" data-icon="apps">apps</span>
</button>
<div className="h-8 w-px bg-outline-variant mx-2"></div>
<button className="text-error font-label-md text-label-md hover:bg-error-container/20 px-4 py-2 rounded-full transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="emergency">emergency</span>
                Emergency Support
            </button>
<img alt="User profile" className="w-8 h-8 rounded-full border-2 border-surface-container-high ml-2 cursor-pointer object-cover" data-alt="A close up professional headshot of a young woman with a soft smile. The lighting is bright and even, casting subtle shadows to give depth to her face. The background is a clean, neutral white, typical of modern corporate photography. The image is crisp, high-resolution, and perfectly suited for a user profile avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClLywAW0AHaDA-cqt33zGP3-UwivGdLbPeL0R4_hkz0ZrbMGCG1BqBgYlsicF1FgwbWRnMkoKT9_mPIUbfkv_OdNwIYWeDMsWKDZhHjlG4leRLa_tu0obRNMtoTUoJnfZLo7xtr9923fAfZPqgAXAZzwynJA6n2y-u8ZM-K9qL4s5w3eeI9tk5mMSIe-q-ZUo9wXDlDr8YZsx0Q2_in_6RlCQ3PFwpF34xRkrnH4-H13L2THi4uEGuV_vaJ3vJrXH4VIPGJ2hpBHMx" />
</div>
</header>
{/*  Main Content Area  */}
<main className="ml-64 mt-16 flex-1 flex h-[calc(100vh-64px)] bg-surface">
{/*  Conversations List (Left Sidebar)  */}
<aside className="w-80 border-r border-outline-variant bg-white flex flex-col z-10 shadow-[4px_0_12px_rgba(0,0,0,0.02)]">
<div className="p-4 border-b border-outline-variant">
<div className="flex justify-between items-center mb-4">
<h2 className="font-h3 text-h3 text-on-surface">Inbox</h2>
<button className="p-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-primary-container">
<span className="material-symbols-outlined" data-icon="edit_square">edit_square</span>
</button>
</div>
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full bg-primary-container text-white font-label-sm text-label-sm shadow-[0_2px_8px_rgba(26,115,232,0.2)]">All</button>
<button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">Unread</button>
</div>
</div>
<div className="flex-1 overflow-y-auto">
{/*  Active Conversation  */}
<div className="p-4 border-b border-surface-dim bg-primary-fixed/20 cursor-pointer relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
<div className="flex items-start gap-3">
<div className="relative">
<img alt="Dr. Sarah Jenkins" className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="A professional headshot of a female doctor wearing a white lab coat over a blue scrub top. She has a stethoscope around her neck and is smiling warmly. The background is a slightly blurred hospital corridor with cool, clinical lighting. The image conveys trust, expertise, and a modern healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbZ6CVGCdbQrpmwLNEsyEjmBeBoA8y4LkXC_9w2z-MIMlZLSy_Q_vVtRlvzZjPY9TjWKx1mX0KwcLjlHf-FTf3SjRuIz7w4KB869iJWslAumcwULCiyMnraB9_aPq5jqyjwLMlbZxoMvQ7N75W9egLW7G4djptVRQxs-00VuH1sW8n185cFCd8mBvfNCa861lf1ZH0T-OEAbxs1HLsX1LO8Q1meBX4kf6hBLAYRieSIoejz9I5eUNlk25tywrxQtL8I7R0BqhbrHXD" />
<div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary-fixed-dim border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Dr. Sarah Jenkins</h3>
<span className="font-label-sm text-label-sm text-outline shrink-0">10:42 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Your recent ECG results look much better.</p>
<div className="mt-2 flex gap-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant uppercase tracking-wider">Cardiology</span>
</div>
</div>
</div>
</div>
{/*  Inactive Conversation 1  */}
<div className="p-4 border-b border-surface-dim hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="relative">
<img alt="Dr. Robert Chen" className="w-12 h-12 rounded-full object-cover" data-alt="A confident male doctor of Asian descent looking directly at the camera. He is wearing a blue shirt and a crisp white lab coat. The setting is a bright, modern medical office with soft, diffused daylight coming from a window. The overall tone is professional, reassuring, and clinically precise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQqUx1IjGqawOxneUbf6qI3zb1Lk_gdjc-xRZgYlLz0_EjDl9C0IyVcuPbbQylVzBodIrQPGCbyKlAkgIp8hL9m2_Vqmj966LhCOUKrd1vShQanQr4k9yz9ELU0PQF3x2awd4BPF5CgLnYzhVutZpQTMQabHClXJgV0S1QdsGzq-odHx-a2UxLkbJO4go9QRfNeuUpgFxbPLdzw-MasL5EFW1YpBR0-67djkcOBKLJTuGBSZ5zfz-qpAqKMQXCRQg7c-FnjTQ8vN81" />
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Dr. Robert Chen</h3>
<span className="font-label-sm text-label-sm text-outline shrink-0">Yesterday</span>
</div>
<p className="font-body-sm text-body-sm text-outline truncate">Please schedule a follow-up for next week.</p>
<div className="mt-2 flex gap-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-surface-variant text-on-surface-variant uppercase tracking-wider">Primary Care</span>
</div>
</div>
</div>
</div>
{/*  Inactive Conversation 2  */}
<div className="p-4 border-b border-surface-dim hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-h3 text-h3">
<span className="material-symbols-outlined" data-icon="domain">domain</span>
</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-error text-white rounded-full flex items-center justify-center text-[10px] font-bold">1</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-label-md text-on-surface truncate pr-2 font-bold">Billing Department</h3>
<span className="font-label-sm text-label-sm text-primary-container font-bold shrink-0">Oct 24</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium truncate">Invoice #8842 is ready for review.</p>
<div className="mt-2 flex gap-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-surface-variant text-on-surface-variant uppercase tracking-wider">Admin</span>
</div>
</div>
</div>
</div>
</div>
</aside>
{/*  Chat Window  */}
<section className="flex-1 flex flex-col bg-surface-container-lowest relative z-0">
{/*  Chat Header  */}
<div className="h-20 border-b border-outline-variant bg-white px-6 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-4">
<img alt="Dr. Sarah Jenkins" className="w-12 h-12 rounded-full object-cover" data-alt="A professional headshot of a female doctor wearing a white lab coat over a blue scrub top. She has a stethoscope around her neck and is smiling warmly. The background is a slightly blurred hospital corridor with cool, clinical lighting. The image conveys trust, expertise, and a modern healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxFDU3Y7ktGW7TYbU7-lMZhL7Vruy--ONZ205Ug0zwqBpJNzJTnSqkIcCz_jl5eQa7kpMp0Y0Ge8QIFQxctKo_56g3tus-aBK7UNNYp3ZJzGpl6N-s-NKWx6OF4WM883nFE1jyVTJqrAPzoedL6QxSiIl7N-Iwg2ahZqs2IgcIwLt2K0nXBKCw0EzzltjQREpV-JWAzokz12rw9XVsc-V83MZ0S6Jyu5avWHe_eWqXoXIq28DmHE5voFTGF79wTh8wRmQKsCVZh9YS" />
<div>
<h2 className="font-h3 text-h3 text-on-surface">Dr. Sarah Jenkins</h2>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
<span className="font-label-sm text-label-sm text-outline">Active Now • Cardiology Dept</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-outline hover:text-primary-container hover:bg-primary-fixed rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="videocam">videocam</span>
</button>
<button className="p-2 text-outline hover:text-primary-container hover:bg-primary-fixed rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="call">call</span>
</button>
<button className="p-2 text-outline hover:text-primary-container hover:bg-primary-fixed rounded-full transition-colors ml-2">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/*  Chat Context Banner  */}
<div className="bg-surface-container px-6 py-3 border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="calendar_today">calendar_today</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Regarding appointment on <strong className="text-on-surface">Oct 26, 2023</strong></span>
</div>
<button className="font-label-sm text-label-sm text-primary-container hover:underline">View Details</button>
</div>
{/*  Messages Area  */}
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-[#f8f9fa]">
<div className="text-center">
<span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm rounded-full">Today</span>
</div>
{/*  Patient Message  */}
<div className="flex flex-col items-end gap-1">
<div className="max-w-[70%] bg-primary-container text-white p-4 rounded-2xl rounded-tr-sm shadow-[0_4px_12px_rgba(26,115,232,0.1)]">
<p className="font-body-md text-body-md">Good morning Dr. Jenkins. I've been feeling much better since we adjusted the medication on Tuesday. The slight dizziness I mentioned is completely gone.</p>
</div>
<span className="font-label-sm text-label-sm text-outline pr-1">10:15 AM</span>
</div>
{/*  Doctor Message  */}
<div className="flex flex-col items-start gap-1">
<div className="flex items-end gap-2">
<img alt="Dr. Sarah Jenkins" className="w-6 h-6 rounded-full object-cover mb-1" data-alt="A professional headshot of a female doctor wearing a white lab coat over a blue scrub top. She has a stethoscope around her neck and is smiling warmly. The background is a slightly blurred hospital corridor with cool, clinical lighting. The image conveys trust, expertise, and a modern healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcKaD-dHNl5rN9rRljLqmowtldIk2zgcC5WLeX9pu2FSj3CGqFC019kffrAJ7aoOYFTueLaIJYKA6iy-CTvNiEis3_-FLVzzNVfmkw5JdNY_Ep9MszygvitlbHthssTNozcMGBOySP0EBZUDzfTmkFQdwsgwbR4TrsIdyRVPaFJGdJF9yFEv2_6By_wLLGkvctqLMHHvHfgtX8D-jwC9BJG_E_NuRzsHJ0l5MSzOJ6WZGE7q6tbOw35KeOtURbUzJy9v3F1rghYIaE" />
<div className="max-w-[70%] bg-white border border-outline-variant text-on-surface p-4 rounded-2xl rounded-tl-sm shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<p className="font-body-md text-body-md">That's excellent news! I reviewed your latest remote monitor logs this morning, and your heart rate has stabilized perfectly.</p>
</div>
</div>
<span className="font-label-sm text-label-sm text-outline pl-9">10:30 AM</span>
</div>
{/*  Doctor Message with Attachment  */}
<div className="flex flex-col items-start gap-1">
<div className="flex items-end gap-2">
<img alt="Dr. Sarah Jenkins" className="w-6 h-6 rounded-full object-cover mb-1 opacity-0" data-alt="A professional headshot of a female doctor wearing a white lab coat over a blue scrub top. She has a stethoscope around her neck and is smiling warmly. The background is a slightly blurred hospital corridor with cool, clinical lighting. The image conveys trust, expertise, and a modern healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFBgzqv_2B6gF3816IX-LkClOz6WnlmR4xE__vu4RYLED3CsNiJdnuxXWjXx2zMRSyYAc2sOlTmRI4tjQi61RBVyplPupm-Y0sF7AghwzWASiew_8kBtF4z-WvlRrOj8zB2ws91aTEdTcooaeLn0O3W--yVXIoox3FuULwAeTb9zaiKja5VmabsmbvwRIJcPdmTj1T67Td-G1Z2VRcBUX4PO8QtL_h99J_XNS4KfNC3geT8nWvb9myp2Q8pHzk7l4_mG8q-WE665dK" />
<div className="max-w-[70%] bg-white border border-outline-variant text-on-surface p-4 rounded-2xl rounded-tl-sm shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<p className="font-body-md text-body-md mb-3">Your recent ECG results look much better. I've attached the summary report for your records. Please continue with the current dosage and we'll check in again in two weeks.</p>
{/*  Attachment Card  */}
<div className="flex items-center gap-3 p-3 bg-surface-container-low border border-surface-dim rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
<div className="w-10 h-10 bg-error-container text-error rounded flex items-center justify-center shrink-0">
<span className="material-symbols-outlined" data-icon="picture_as_pdf">picture_as_pdf</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface truncate">ECG_Summary_Oct26.pdf</h4>
<p className="font-body-sm text-body-sm text-outline">1.2 MB</p>
</div>
<span className="material-symbols-outlined text-outline hover:text-primary-container" data-icon="download">download</span>
</div>
</div>
</div>
<span className="font-label-sm text-label-sm text-outline pl-9">10:42 AM</span>
</div>
</div>
{/*  Input Area  */}
<div className="bg-white p-4 border-t border-outline-variant">
<div className="flex items-end gap-3 bg-surface-container-low p-2 rounded-xl border border-outline-variant focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all">
<button className="p-2 text-outline hover:text-primary-container rounded-full transition-colors shrink-0">
<span className="material-symbols-outlined" data-icon="attach_file">attach_file</span>
</button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 resize-none font-body-md text-body-md text-on-surface max-h-32 min-h-[44px] py-2.5 placeholder:text-outline" placeholder="Type a message to Dr. Jenkins..." rows="1"></textarea>
<button className="p-3 bg-primary-container text-white rounded-lg hover:bg-primary transition-colors shrink-0 shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="send" style={{"fontVariationSettings":"'FILL' 1"}}>send</span>
</button>
</div>
<p className="text-center font-label-sm text-label-sm text-outline mt-2">
                    For medical emergencies, please call 911 or visit the nearest emergency room immediately.
                </p>
</div>
</section>
</main>

</div>
    </>
  );
}
