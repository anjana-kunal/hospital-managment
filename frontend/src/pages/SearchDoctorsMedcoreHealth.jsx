import React from 'react';

export default function SearchDoctorsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md text-body-md h-screen flex overflow-hidden">

{/*  SideNavBar (Shared Component)  */}
<nav className="hidden md:flex h-screen w-64 border-r border-outline-variant bg-surface-container-low font-label-md text-label-md flex-col p-4 fixed left-0 top-0 z-40 transition-all duration-200">
<div className="mb-xl px-4 mt-sm">
<h2 className="font-h3 text-h3 text-primary mb-sm">MedCore HMS</h2>
</div>
<div className="flex-1 space-y-sm">
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
{/*  Active State Navigation  */}
<a className="flex items-center gap-3 bg-primary-fixed-dim/30 text-primary rounded-lg px-4 py-3 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="calendar_month" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>calendar_month</span>
<span>Appointments</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="folder_shared">folder_shared</span>
<span>Records</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="payments">payments</span>
<span>Billing</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</div>
<div className="mt-auto border-t border-outline-variant pt-4 flex items-center gap-3 px-2">
<img alt="Patient Profile" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a young woman with a calm and approachable expression, softly lit against a neutral grey background. The lighting is studio quality, emphasizing clarity and professionalism suitable for a medical patient profile. She has dark hair tied back neatly, wearing a simple light blue blouse." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJqhiI1dugi9mu4EKWsyDzdUswo62UHMm0YBiK5SssV_qIn4j27x6POhz6MiC0Zy0UrK4gBEM_Llo5-q6CwGvr6M36CKO-7CkF78oJOGSXlUXjXY9saymuQ-9N7ZaHgK6b1Vro-LMYo1sxYGNqC-OM9Bffw0oaUiskwt_ns8DtDp_aocbzxhQydQJN0AWMyP1pzrRgZGnyDP0mFXSDC8d6a6SfFkKB5FFxRU52rXlT3AD_w4mC4GrxXzS9HtQT1-J_D2cvf090KYC6" />
<div>
<p className="font-label-md text-label-md text-on-surface">Alex Johnson</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Patient ID: #MC-9842</p>
</div>
</div>
</nav>
{/*  Main Content Area  */}
<main className="flex-1 md:ml-64 bg-background overflow-y-auto w-full">
{/*  Header / Top Bar  */}
<header className="bg-surface border-b border-surface-variant sticky top-0 z-30 px-lg py-md flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
<div>
<h1 className="font-h2 text-h2 text-on-surface">Find a Doctor</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Book your next consultation with our top specialists.</p>
</div>
<div className="flex gap-2">
<button className="bg-surface-variant text-on-surface px-4 py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-dim transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">history</span> History
                </button>
</div>
</header>
{/*  Search & Filter Section  */}
<section className="p-lg lg:p-xl max-w-7xl mx-auto space-y-md">
<div className="bg-surface shadow-level-1 rounded-lg p-lg border border-surface-variant">
{/*  Main Search Bar  */}
<div className="relative w-full mb-md">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">search</span>
</div>
<input className="block w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-outline" placeholder="Search by specialty, doctor name, hospital, or condition..." type="text" />
<div className="absolute inset-y-0 right-0 pr-2 flex items-center">
<button className="bg-primary-container text-on-primary-container px-6 py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container/90 transition-colors h-full my-1 mr-1">
                            Search
                        </button>
</div>
</div>
{/*  Filters  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
{/*  Date Picker Placeholder  */}
<div className="relative">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-1">Availability</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">event</span>
</div>
<select className="block w-full pl-10 pr-10 py-2.5 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:bg-surface focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
<option>Any Date</option>
<option>Today</option>
<option>Tomorrow</option>
<option>This Week</option>
<option>Specific Date...</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">expand_more</span>
</div>
</div>
</div>
{/*  Time Filter  */}
<div className="relative">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-1">Time of Day</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">schedule</span>
</div>
<select className="block w-full pl-10 pr-10 py-2.5 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:bg-surface focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
<option>Any Time</option>
<option>Morning (8AM - 12PM)</option>
<option>Afternoon (12PM - 4PM)</option>
<option>Evening (4PM - 8PM)</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">expand_more</span>
</div>
</div>
</div>
{/*  Consultation Type  */}
<div className="relative">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-1">Consultation Type</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">medical_services</span>
</div>
<select className="block w-full pl-10 pr-10 py-2.5 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:bg-surface focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
<option>All Types</option>
<option>In-Person Visit</option>
<option>Video Consultation</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-sm">expand_more</span>
</div>
</div>
</div>
</div>
</div>
{/*  Results Summary  */}
<div className="flex justify-between items-end pb-sm pt-md border-b border-surface-variant">
<p className="font-body-sm text-body-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">12</span> doctors available</p>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Sort by:</span>
<select className="bg-transparent border-none font-label-md text-label-md text-primary cursor-pointer p-0 focus:ring-0">
<option>Recommended</option>
<option>Highest Rated</option>
<option>Earliest Available</option>
</select>
</div>
</div>
{/*  Doctor List Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg pb-xl">
{/*  Doctor Card 1  */}
<div className="bg-surface rounded-xl shadow-level-1 border border-surface-variant overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
<div className="p-md flex items-start gap-4 border-b border-surface-variant/50">
<div className="relative">
<img alt="Dr. Robert Chen" className="w-20 h-20 rounded-full object-cover border-2 border-surface-variant" data-alt="A professional portrait of a male doctor, Dr. Robert Chen, wearing a pristine white lab coat over a blue collared shirt. He has short black hair, glasses, and a warm, reassuring smile. The background is a brightly lit, modern hospital corridor with a soft, clinical aesthetic, utilizing a light, airy color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-CBmxmyvCufTlPD9uF9Sx43iIfGGQCIHkZSrcXiCNobcLytiOWdrOPCansK6pczkIOiz3WIiv9bD-RYdD7QPGwfGme3NBairwTEL5SDmETJ_De09CQ8b9ZeXCgKl0yohDAASzqljdre7wRyPa7HRs2w9WliGOs-Le14lMo1wCovgl8fMtHg-c9xfeGCWEe---CIyY-ugNs64u1kT5ixQMjF_WQesRv-GrNdNUt1s4oZBpdytU4WuMLEaKLvSjStqSBGYkXWa7zkEy" />
<div className="absolute bottom-0 right-0 bg-secondary text-on-secondary rounded-full w-5 h-5 flex items-center justify-center border-2 border-surface">
<span className="material-symbols-outlined text-[10px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-h3 text-body-lg font-bold text-on-surface">Dr. Robert Chen</h3>
<p className="font-body-sm text-body-sm text-primary font-medium">Internal Medicine</p>
</div>
</div>
<div className="flex items-center gap-3 mt-2 font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
<span className="material-symbols-outlined text-tertiary-container text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-bold text-on-surface">4.8/5</span>
<span>(124 reviews)</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">work</span>
<span>12 yrs exp.</span>
</div>
</div>
</div>
</div>
<div className="p-md flex-1 flex flex-col gap-3 bg-surface-bright">
<div className="flex items-start gap-2 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-outline mt-0.5 text-base">location_on</span>
<div>
<p className="text-on-surface font-medium">MedCore Central Hospital</p>
<p className="text-on-surface-variant">Floor 3, Wing A - Downtown</p>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Next Available</span>
<span className="font-label-md text-label-md text-secondary">Tomorrow, 10:00 AM</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant">Consultation Fee</span>
<span className="font-h3 text-body-lg text-on-surface">$100</span>
</div>
</div>
</div>
<div className="p-md pt-0 bg-surface-bright flex gap-2">
<button className="flex-1 bg-primary-container text-on-primary-container py-2.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container/90 transition-colors shadow-sm">
                            Book Now
                        </button>
<button className="px-3 py-2.5 border border-outline text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-xl">videocam</span>
</button>
</div>
</div>
{/*  Doctor Card 2  */}
<div className="bg-surface rounded-xl shadow-level-1 border border-surface-variant overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
<div className="p-md flex items-start gap-4 border-b border-surface-variant/50">
<div className="relative">
<img alt="Dr. Sarah Jenkins" className="w-20 h-20 rounded-full object-cover border-2 border-surface-variant" data-alt="A professional portrait of a female doctor, Dr. Sarah Jenkins, with blonde hair tied back, wearing a white coat and a stethoscope around her neck. She has a confident, caring expression. The background is a softly blurred clinic office setting with natural light, maintaining a modern, clean, clinical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd_hGGomS7Wzmkl_KJ31HIBF8j9W6ClReVGYIAkQfPirPyqSJ8yD3atRkcLf4Q2FVuIP9kyg1BVHMSq_KvDzhNDHOJnxnCqm1O7sp2Jxqcvg-9mOh_N2jXhQH_6DHj-_aquFZXybaJRsWLjUTcFK6yN5ihOuCKTMwg0E4KrvtCMDWxVaFUJfxCw6OFtuor477eTNkcHgtN7J1MTsJu5ckCyQg9nUyxEp_UiCmgxz03Trjt1kH9Wa5wCE_LuWZnGWE7fQXTxAYgvXgQ" />
<div className="absolute bottom-0 right-0 bg-secondary text-on-secondary rounded-full w-5 h-5 flex items-center justify-center border-2 border-surface">
<span className="material-symbols-outlined text-[10px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-h3 text-body-lg font-bold text-on-surface">Dr. Sarah Jenkins</h3>
<p className="font-body-sm text-body-sm text-primary font-medium">Cardiology</p>
</div>
</div>
<div className="flex items-center gap-3 mt-2 font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
<span className="material-symbols-outlined text-tertiary-container text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-bold text-on-surface">4.9/5</span>
<span>(210 reviews)</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">work</span>
<span>15 yrs exp.</span>
</div>
</div>
</div>
</div>
<div className="p-md flex-1 flex flex-col gap-3 bg-surface-bright">
<div className="flex items-start gap-2 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-outline mt-0.5 text-base">location_on</span>
<div>
<p className="text-on-surface font-medium">Heart & Vascular Institute</p>
<p className="text-on-surface-variant">Building B, Level 2 - Westside</p>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Next Available</span>
<span className="font-label-md text-label-md text-tertiary-container">Today, 2:30 PM</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant">Consultation Fee</span>
<span className="font-h3 text-body-lg text-on-surface">$150</span>
</div>
</div>
</div>
<div className="p-md pt-0 bg-surface-bright flex gap-2">
<button className="flex-1 bg-primary-container text-on-primary-container py-2.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container/90 transition-colors shadow-sm">
                            Book Now
                        </button>
</div>
</div>
{/*  Doctor Card 3  */}
<div className="bg-surface rounded-xl shadow-level-1 border border-surface-variant overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
<div className="p-md flex items-start gap-4 border-b border-surface-variant/50">
<div className="relative">
<div className="w-20 h-20 rounded-full border-2 border-surface-variant bg-surface-container flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-3xl">person</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-h3 text-body-lg font-bold text-on-surface">Dr. Michael Torres</h3>
<p className="font-body-sm text-body-sm text-primary font-medium">Neurology</p>
</div>
</div>
<div className="flex items-center gap-3 mt-2 font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
<span className="material-symbols-outlined text-tertiary-container text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-bold text-on-surface">4.7/5</span>
<span>(89 reviews)</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">work</span>
<span>8 yrs exp.</span>
</div>
</div>
</div>
</div>
<div className="p-md flex-1 flex flex-col gap-3 bg-surface-bright">
<div className="flex items-start gap-2 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-outline mt-0.5 text-base">location_on</span>
<div>
<p className="text-on-surface font-medium">NeuroCare Center</p>
<p className="text-on-surface-variant">Suite 400 - North Park</p>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Next Available</span>
<span className="font-label-md text-label-md text-on-surface">Thursday, 9:15 AM</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant">Consultation Fee</span>
<span className="font-h3 text-body-lg text-on-surface">$120</span>
</div>
</div>
</div>
<div className="p-md pt-0 bg-surface-bright flex gap-2">
<button className="flex-1 bg-primary-container text-on-primary-container py-2.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container/90 transition-colors shadow-sm">
                            Book Now
                        </button>
<button className="px-3 py-2.5 border border-outline text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-xl">videocam</span>
</button>
</div>
</div>
</div>
</section>
</main>

</div>
    </>
  );
}
