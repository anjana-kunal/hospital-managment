import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function DoctorProfileMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md text-body-md flex h-screen overflow-hidden antialiased">

<aside className="fixed left-0 top-0 h-full flex flex-col p-4 h-screen w-64 border-r bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-40">
<div className="flex items-center gap-3 mb-8 px-4 mt-2">
<img alt="Patient Profile" className="w-10 h-10 rounded-full object-cover" data-alt="A professional headshot of a young male patient against a clean, light gray background. High-key studio lighting highlights natural features with a crisp, modern aesthetic. The mood is calm and trustworthy, perfectly fitting a secure medical portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAknOvO4ikg35XLfvSCjqs41jl-7aP3zPIR6X_D3CAm98Txqdk7QLJSPGQcWO8xkVJ_oZ9Ysmh3GDBoKEy17PX-VpK_fbOTbIwXvKknobhpfSOycOcwnRTMWSUa9bb8xpGtpx50iKhoA7QcZZJgeAvwGgr8Y1JwJWKVNEKMvLLmGtyYhA7IdS8ucMkIT968wJx30aEVgznFz0Zs27QCQ2QHPxawJeDSedJcO3YVJi2ZgWfZP67AqSUf8tuVJN2ip5ZLeIkfspZ1JSx2" />
<div>
<h2 className="font-h3 text-[16px] leading-[24px] tracking-normal font-semibold text-slate-900 dark:text-white">Alex Johnson</h2>
<p className="font-label-sm text-label-sm text-slate-500 dark:text-slate-400">Patient ID: #MC-9842</p>
</div>
</div>
<nav className="flex flex-col gap-2 font-manrope text-sm font-medium">
<Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200" to="/patient_dashboard_medcore_health">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </Link>
<Link className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg px-4 py-3 transition-all duration-200" to="/my_appointments_medcore_health">
<span className="material-symbols-outlined" data-icon="calendar_month" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>calendar_month</span>
                Appointments
            </Link>
<Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200" to="/medical_records_medcore_health">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
                Records
            </Link>
<Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200" to="/billing_payments_medcore_health">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Billing
            </Link>
<Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200" to="/settings_medcore_health">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </Link>
</nav>
</aside>
<main className="flex-1 ml-64 flex flex-col h-screen overflow-y-auto bg-background pb-16">
<header className="px-grid-margin py-lg border-b border-surface-variant bg-surface sticky top-0 z-30">
<nav className="flex text-on-surface-variant font-label-md text-label-md items-center gap-2">
<Link className="hover:text-primary transition-colors" to="/my_appointments_medcore_health">Appointments</Link>
<span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
<Link className="hover:text-primary transition-colors" to="/search_doctors_medcore_health">Find a Specialist</Link>
<span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
<span className="text-on-surface">Dr. Sarah Mitchell</span>
</nav>
</header>
<div className="px-grid-margin py-xl max-w-[1440px] mx-auto w-full">
<section className="bg-surface rounded-xl shadow-ambient-level-1 border border-outline-variant/30 p-lg flex flex-col md:flex-row gap-lg mb-grid-gutter relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
<div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 relative">
<img alt="Dr. Sarah Mitchell" className="w-full h-full object-cover rounded-lg shadow-sm border border-surface-variant" data-alt="A highly professional studio portrait of a confident female cardiologist in a crisp white medical coat with a stethoscope draped around her neck. The background is a clean, softly lit hospital corridor emphasizing clinical excellence. The lighting is bright and modern, conveying trust, expertise, and approachability inherent in premium healthcare settings." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmFYZidyLiGSeAXjCjf0IjYYFt4uatVlRH6PmckhpdgwUIpIofA2CTcM9kSXzNHq4GX1BVYZkkCJcKnouJ3-Mj4bwjza6SIZEHG47U7J_sbCoYSz5FAUhyYGKuUvgU_Uq05UY5W0e_lbHM-mkn9-WqEENkIgAFTnPdqtHSP6YGRzOvJRWiBXQiXHdmDqzgPprKVIbiYrwrUz6LDjJozZvm2S1-aCujdVwVPdUkekXeQKF8VifR03JvbI1SvgJMo00wIFj3DUEzb7S" />
</div>
<div className="flex-1 flex flex-col justify-center relative z-10">
<div className="flex items-center gap-sm mb-xs">
<span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">Cardiology</span>
<span className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]" data-icon="verified" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
                            Accepting New Patients
                        </span>
</div>
<h1 className="font-h1 text-h1 text-on-surface mb-2">Dr. Sarah Mitchell</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl">
                        Board-certified cardiologist specializing in advanced heart failure and heart rhythm disorders. Dedicated to patient-centered, comprehensive cardiovascular care.
                    </p>
<div className="flex flex-wrap gap-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline mb-1">Qualifications</span>
<span className="font-label-md text-label-md text-on-surface">MD, FACC</span>
</div>
<div className="w-px h-8 bg-surface-variant self-center"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline mb-1">Experience</span>
<span className="font-label-md text-label-md text-on-surface">15+ Years</span>
</div>
<div className="w-px h-8 bg-surface-variant self-center"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline mb-1">Hospital Affiliation</span>
<span className="font-label-md text-label-md text-on-surface">MedCore General</span>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-12 gap-grid-gutter">
<div className="col-span-12 lg:col-span-8 flex flex-col gap-grid-gutter">
<section className="bg-surface rounded-xl shadow-ambient-level-1 border border-outline-variant/30 p-lg">
<h2 className="font-h3 text-h3 text-on-surface mb-md pb-xs border-b border-surface-variant">About Dr. Mitchell</h2>
<div className="font-body-md text-body-md text-on-surface-variant space-y-4">
<p>Dr. Sarah Mitchell earned her medical degree from Johns Hopkins University School of Medicine and completed her residency in Internal Medicine followed by a fellowship in Cardiovascular Disease at the Mayo Clinic. She is a Fellow of the American College of Cardiology (FACC).</p>
<p>Her clinical focus encompasses preventative cardiology, management of complex arrhythmias, and non-invasive cardiovascular imaging. Dr. Mitchell is deeply committed to educating her patients, ensuring they are active participants in their treatment plans and long-term health strategies.</p>
</div>
</section>
<section className="bg-surface rounded-xl shadow-ambient-level-1 border border-outline-variant/30 p-lg">
<h2 className="font-h3 text-h3 text-on-surface mb-md pb-xs border-b border-surface-variant">Specializations</h2>
<div className="flex flex-wrap gap-sm">
<span className="bg-surface-container-low border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-full">Echocardiography</span>
<span className="bg-surface-container-low border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-full">Heart Failure Management</span>
<span className="bg-surface-container-low border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-full">Preventative Cardiology</span>
<span className="bg-surface-container-low border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-full">Arrhythmia</span>
<span className="bg-surface-container-low border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-full">Stress Testing</span>
</div>
</section>
<section className="bg-surface rounded-xl shadow-ambient-level-1 border border-outline-variant/30 p-lg">
<div className="flex items-center justify-between mb-md pb-xs border-b border-surface-variant">
<h2 className="font-h3 text-h3 text-on-surface">Patient Reviews</h2>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[20px] text-tertiary-container" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-md text-label-md text-on-surface">4.9</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(128 Reviews)</span>
</div>
</div>
<div className="space-y-6">
<div className="flex gap-md">
<div className="w-10 h-10 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-h3 text-[16px] flex-shrink-0">
                                    MJ
                                </div>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-label-md text-label-md text-on-surface">Michael J.</h4>
<div className="flex text-tertiary-container">
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">"Dr. Mitchell was incredibly thorough and took the time to explain my EKG results in a way I could actually understand. I felt completely at ease."</p>
<span className="font-label-sm text-label-sm text-outline">2 weeks ago</span>
</div>
</div>
<div className="w-full h-px bg-surface-variant"></div>
<div className="flex gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-h3 text-[16px] flex-shrink-0">
                                    ER
                                </div>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-label-md text-label-md text-on-surface">Elena R.</h4>
<div className="flex text-tertiary-container">
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[14px]" data-icon="star" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">"Highly recommend. The clinic was efficient, and Dr. Mitchell's bedside manner is exceptional. She genuinely cares about her patients' long-term wellbeing."</p>
<span className="font-label-sm text-label-sm text-outline">1 month ago</span>
</div>
</div>
</div>
</section>
</div>
<div className="col-span-12 lg:col-span-4">
<div className="sticky top-[100px] flex flex-col gap-md">
<section className="bg-surface rounded-xl shadow-ambient-level-1 border border-outline-variant/30 p-lg">
<div className="flex justify-between items-end mb-md">
<div>
<span className="font-label-sm text-label-sm text-outline block mb-1">Standard Consultation</span>
<span className="font-h2 text-h2 text-on-surface">$150</span>
</div>
<span className="bg-secondary-fixed-dim/20 text-on-secondary-fixed px-2 py-1 rounded font-label-sm text-label-sm">Self-Pay Rate</span>
</div>
<div className="mb-md pb-md border-b border-surface-variant">
<h3 className="font-label-md text-label-md text-on-surface mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="event_available">event_available</span>
                                    Availability This Week
                                </h3>
<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-low border border-primary text-center py-2 rounded-md cursor-pointer hover:bg-surface-container transition-colors">
<span className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Mon, 12th</span>
<span className="font-label-md text-label-md text-primary">2 Slots</span>
</div>
<div className="bg-surface-container-low border border-outline-variant/50 text-center py-2 rounded-md opacity-50 cursor-not-allowed">
<span className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Tue, 13th</span>
<span className="font-label-md text-label-md text-outline">Full</span>
</div>
<div className="bg-primary-fixed border border-primary text-center py-2 rounded-md cursor-pointer">
<span className="block font-label-sm text-label-sm text-on-primary-fixed mb-1">Wed, 14th</span>
<span className="font-label-md text-label-md text-primary">5 Slots</span>
</div>
</div>
</div>
<div className="space-y-2 mb-lg">
<div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="videocam">videocam</span>
                                    Telehealth appointments available
                                </div>
<div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="business">business</span>
                                    MedCore General, Suite 402
                                </div>
</div>
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2">
                                Book Appointment
                                <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</section>
</div>
</div>
</div>
</div>
</main>

</div>
    </>
  );
}
