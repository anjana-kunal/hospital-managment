import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function DepartmentManagementMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex">

{/*  SideNavBar  */}
<nav className="bg-surface-container-lowest text-primary font-body-sm font-medium fixed left-0 top-0 h-screen w-64 rounded-none border-r border-outline-variant shadow-none flex flex-col gap-sm py-md hidden md:flex z-50">
<div className="px-md mb-lg">
<h1 className="text-h3 font-h3 text-primary tracking-tighter">MedCore Health</h1>
<p className="text-label-sm font-label-sm text-on-surface-variant mt-base">Admin Portal</p>
</div>
<div className="flex flex-col gap-xs w-full">
<Link className="text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-md py-sm flex items-center gap-sm w-full" to="/admin_dashboard_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-md py-sm flex items-center gap-sm w-full" to="/user_management_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>group</span>
<span className="font-label-md text-label-md">User Management</span>
</Link>
<Link className="text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-md py-sm flex items-center gap-sm w-full" to="/doctor_approvals_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>verified_user</span>
<span className="font-label-md text-label-md">Doctor Approvals</span>
</Link>
<Link className="text-primary bg-surface-container-low border-r-4 border-primary px-md py-sm flex items-center gap-sm w-full" to="/department_management_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>corporate_fare</span>
<span className="font-label-md text-label-md">Departments</span>
</Link>
<Link className="text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-md py-sm flex items-center gap-sm w-full" to="/global_appointment_management_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>event</span>
<span className="font-label-md text-label-md">Appointments</span>
</Link>
<Link className="text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-md py-sm flex items-center gap-sm w-full" to="/billing_finance_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>payments</span>
<span className="font-label-md text-label-md">Billing</span>
</Link>
<Link className="text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all px-md py-sm flex items-center gap-sm w-full" to="/system_settings_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>settings</span>
<span className="font-label-md text-label-md">Settings</span>
</Link>
</div>
</nav>
{/*  Main Wrapper  */}
<div className="flex-1 flex flex-col md:ml-64 min-w-0">
{/*  TopNavBar  */}
<header className="bg-surface-container-lowest text-primary font-h2 antialiased tracking-tight docked full-width top-0 sticky z-40 border-b border-outline-variant shadow-level-1 flex justify-between items-center h-16 px-lg w-full">
<div className="flex items-center gap-md">
<div className="relative hidden md:flex items-center">
<span className="material-symbols-outlined absolute left-sm text-on-surface-variant">search</span>
<input className="pl-xl pr-md py-sm bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary text-body-sm font-body-sm text-on-surface w-64 placeholder:text-outline" placeholder="Search departments..." type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:bg-surface-container-low p-sm rounded-full transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A close-up, professional headshot of a female healthcare administrator in her late 30s. She is wearing a tailored navy blazer over a crisp white blouse. The lighting is soft and flattering, creating a modern, clinical, yet approachable mood. The background is a gently blurred, high-key white hospital corridor, adhering to a clean, trustworthy light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwzNpraTeF1YgWwaX8lSBwZ-qXl4A-me0zZKln1EoXzD2rNvGjAb4ESPAQ_BrHcmU3C-8BjliAT0Mei0MrQRsWbOwwAGCj48yR9QsYhl_ng4TL97iUys0x9fHAYUOorH1zKZblI7G8onmnGelhBA3ijp3zSG_zsWY__iqHsl-dyFdXEy1RIDnppajKwrkNo7aHlX88OeZmOGnzGOpDdl20DrpLMwsMsMVyJf5eZJPlyv-W_NVLLfBh1VKgyFITD4GoG7RDuyh9HG1B" />
</div>
</div>
</header>
{/*  Main Canvas  */}
<main className="flex-1 overflow-y-auto p-grid-margin">
{/*  Page Header & Actions  */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-xl">
<div>
<h2 className="font-h2 text-h2 text-on-surface">Departments</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage medical divisions, clinical staff, and operational metrics.</p>
</div>
<div className="flex items-center gap-md w-full sm:w-auto">
<button className="flex items-center gap-sm px-md py-sm border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container-lowest bg-surface transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filter
                    </button>
<button className="flex items-center gap-sm px-md py-sm bg-primary-container text-on-primary-container rounded-lg hover:opacity-90 transition-opacity shadow-sm font-label-md text-label-md whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Create New Department
                    </button>
</div>
</div>
{/*  Bento Grid - Department Cards  */}
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-grid-gutter">
{/*  Card 1: Cardiology  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden">
<div className="p-lg border-b border-outline-variant/30 flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-lg bg-error-container/30 text-error flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]" style={{"fontVariationSettings":"'FILL' 1"}}>favorite</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface">Cardiology</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Heart & Vascular</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="p-lg flex-1 flex flex-col gap-md">
<div>
<p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-xs">Head of Department</p>
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
<img alt="Dr. Sarah Jenkins" className="w-full h-full object-cover" data-alt="A professional portrait of a senior male doctor with silver hair and glasses, wearing a white lab coat over a light blue shirt. He exudes calm authority. The background is a pristine, minimalist white clinic setting with soft, ambient daylight to match the clinical precision theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVTuvGu7gvTQVW3Lm6fYZfTt1brJAJDPrhbvMrQVP9JHKYDaav48DbrmuMZZ-_tv4xJqfvjHh9oS1l50etJu29sBY3YFZ1G7dO9ZR_cgWem1drXyo0MztyWRObPvSCScxIOsLbl9yeJVesbuv6lLnpPOmpwThbWj_jNOFzXClwbK7pxN34Cf2SQ_nAJRWLBD9ruRK_0av-D_RKeW6SKX6k8Ux5yx4EtZ6l22_kDHxZiapDMPlgKHqeR5A3ceDzAC4f2NAfmM23VKwV" />
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Dr. Robert Chen</p>
</div>
</div>
<div className="grid grid-cols-2 gap-sm mt-sm">
<div className="bg-surface p-sm rounded-lg border border-outline-variant/20">
<p className="font-label-sm text-label-sm text-on-surface-variant">Active Patients</p>
<p className="font-h3 text-h3 text-on-surface mt-xs">1,248</p>
</div>
<div className="bg-surface p-sm rounded-lg border border-outline-variant/20">
<p className="font-label-sm text-label-sm text-on-surface-variant">Staff (Dr/Nr)</p>
<p className="font-h3 text-h3 text-on-surface mt-xs">42 / 85</p>
</div>
</div>
<div className="mt-auto pt-sm">
<div className="flex justify-between items-end mb-xs">
<p className="font-label-sm text-label-sm text-on-surface-variant">Bed Occupancy</p>
<p className="font-label-sm text-label-sm text-error font-semibold">92%</p>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error rounded-full" style={{"width":"92%"}}></div>
</div>
</div>
</div>
</div>
{/*  Card 2: Pediatrics  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden">
<div className="p-lg border-b border-outline-variant/30 flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-lg bg-tertiary-fixed/50 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]" style={{"fontVariationSettings":"'FILL' 1"}}>child_care</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface">Pediatrics</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Children's Health</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="p-lg flex-1 flex flex-col gap-md">
<div>
<p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-xs">Head of Department</p>
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
<img alt="Dr. Emily Torres" className="w-full h-full object-cover" data-alt="A warm, professional headshot of a female doctor in her 40s wearing dark scrubs and a stethoscope. She has a friendly, reassuring smile. The background is a clean, softly lit hospital environment with subtle white and light gray tones, ensuring a trustworthy and calm aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5WGfcJRF98dRAH4TEYf7qDbjn6OcrRkPwaABol3TuM0GS4CJ3b_jeRwFejk--utVIyJjcTjPm8UQZiD8zkDlsGwkRLGfe0UqDR9pK-XgWmNUjUBt-GCVAcP_AschCEjjCg5OUERM3GhzClFpGHvXvFD5YIrORO9DK5GeZEb6O1fqA54XOo8iI-5vnDI6Emgqm3VGvEM3HWUeAxMXeo3n_XUXZjjvrssG3WcXJlkxqWfh1aeYQcj7q4QIvkKteUkicSMZpcqFILtGG" />
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Dr. Emily Torres</p>
</div>
</div>
<div className="grid grid-cols-2 gap-sm mt-sm">
<div className="bg-surface p-sm rounded-lg border border-outline-variant/20">
<p className="font-label-sm text-label-sm text-on-surface-variant">Active Patients</p>
<p className="font-h3 text-h3 text-on-surface mt-xs">856</p>
</div>
<div className="bg-surface p-sm rounded-lg border border-outline-variant/20">
<p className="font-label-sm text-label-sm text-on-surface-variant">Staff (Dr/Nr)</p>
<p className="font-h3 text-h3 text-on-surface mt-xs">28 / 64</p>
</div>
</div>
<div className="mt-auto pt-sm">
<div className="flex justify-between items-end mb-xs">
<p className="font-label-sm text-label-sm text-on-surface-variant">Bed Occupancy</p>
<p className="font-label-sm text-label-sm text-primary font-semibold">64%</p>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width":"64%"}}></div>
</div>
</div>
</div>
</div>
{/*  Card 3: Neurology  */}
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden">
<div className="p-lg border-b border-outline-variant/30 flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-lg bg-secondary-fixed/50 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface">Neurology</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Brain & Nerves</p>
</div>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="p-lg flex-1 flex flex-col gap-md">
<div>
<p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-xs">Head of Department</p>
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden flex items-center justify-center text-on-surface-variant bg-surface-container-highest">
<span className="font-label-md text-label-md">AS</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Dr. Arthur Sterling</p>
</div>
</div>
<div className="grid grid-cols-2 gap-sm mt-sm">
<div className="bg-surface p-sm rounded-lg border border-outline-variant/20">
<p className="font-label-sm text-label-sm text-on-surface-variant">Active Patients</p>
<p className="font-h3 text-h3 text-on-surface mt-xs">412</p>
</div>
<div className="bg-surface p-sm rounded-lg border border-outline-variant/20">
<p className="font-label-sm text-label-sm text-on-surface-variant">Staff (Dr/Nr)</p>
<p className="font-h3 text-h3 text-on-surface mt-xs">18 / 32</p>
</div>
</div>
<div className="mt-auto pt-sm">
<div className="flex justify-between items-end mb-xs">
<p className="font-label-sm text-label-sm text-on-surface-variant">Bed Occupancy</p>
<p className="font-label-sm text-label-sm text-tertiary-container font-semibold">88%</p>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tertiary-container rounded-full" style={{"width":"88%"}}></div>
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
