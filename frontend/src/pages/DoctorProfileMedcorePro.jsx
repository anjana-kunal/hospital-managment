import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function DoctorProfileMedcorePro() {
  return (
    <>
      <div className="bg-background text-on-background antialiased min-h-screen flex flex-col">

{/*  TopAppBar  */}
<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none sticky top-0 z-50 flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold text-blue-700 dark:text-blue-400 font-manrope antialiased tracking-tight">MedCore Pro</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
<input className="pl-9 pr-4 py-2 bg-[#F1F3F4] border-transparent focus:border-primary focus:bg-white rounded-lg text-sm w-64 transition-all focus:ring-0" placeholder="Search..." type="text" />
</div>
<button aria-label="notifications" className="text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors p-2 rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button aria-label="help_outline" className="text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors p-2 rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-variant overflow-hidden ml-2 border border-outline-variant">
<img alt="Doctor profile avatar" className="w-full h-full object-cover" data-alt="A professional, brightly lit corporate headshot of a male doctor in his late 40s. He is wearing a crisp white medical coat over a light blue shirt. The background is a clean, modern hospital corridor softly out of focus. The lighting is high-key and studio-quality, conveying trust, expertise, and clinical excellence within a modern healthcare environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh5WNmzYgJ0paHoBEujNG3XSLuLRCuFELRGsScmRFToS3zwakQ-8cQ6cWFpRWTFMvT2pvajhL4CpJjEBRCWSTzyHmROgsIvLDQ_oE3P7iyYWCLEJJrFhTgDvjVk6dQPrNfNclx2b1dnssbxsTNIrA2O0w2TrVxypAlFvtc9IVrYJdGMd17I0gLKoAHC2O_MuTlXss1XaV19OOPjSO1uNKlR9bI5SSWjwaC44LdHqNv-PddjjJwcubFlMVM3mCx9ZyUVcYqtKGP044V" />
</div>
</div>
</header>
<div className="flex flex-1 relative">
{/*  SideNavBar  */}
<nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 pt-20 w-64 border-r bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 z-40">
<div className="px-6 pb-6 border-b border-gray-100 dark:border-gray-800 mb-4">
<div className="flex items-center gap-3">
<img alt="Doctor identity" className="w-12 h-12 rounded-full object-cover border border-outline-variant" data-alt="A professional, brightly lit corporate headshot of a male doctor in his late 40s. He is wearing a crisp white medical coat over a light blue shirt. The background is a clean, modern hospital corridor softly out of focus. The lighting is high-key and studio-quality, conveying trust, expertise, and clinical excellence within a modern healthcare environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Z9IXue0Vewy7eivtj3FOLcFyWHjTA4KBAPrvWQxfoLFFZsk83Edstxas6h8j87n1iZSWKyIXkf-YF_6xDgo6wbraxD_ZKQNAUL7aAQQBp4oyXhaFAutNpFnVozEYvEtt6YOiw629XMHgzGTwt3-WIu-mNcty9LumQMBETrBmtaIrX4IFXrY6fY93qgo0dWSf7-RVU2_a2nCX5ms53cd1CZ3IMYzIag6IeQhSpsJeuUq42FKOFyy8h7w5DIdWGOmE3i46Vxuq-AfY" />
<div>
<h3 className="font-manrope text-sm font-medium text-on-surface font-bold">Dr. James Wilson</h3>
<p className="font-inter text-xs text-on-surface-variant">Cardiology Specialist</p>
</div>
</div>
</div>
<div className="flex-1 flex flex-col gap-1 px-2">
<Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 rounded-lg cursor-pointer active:scale-98 transition-transform font-manrope text-sm font-medium" to="/doctor_profile_medcore_pro">
<span className="material-symbols-outlined fill" data-icon="person" data-weight="fill">person</span>
                    Profile
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer active:scale-98 transition-transform hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-manrope text-sm font-medium" to="/availability_settings_medcore_pro">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                    Availability
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer active:scale-98 transition-transform hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-manrope text-sm font-medium" to="/consultation_fees_medcore_pro">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                    Consultation Fees
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer active:scale-98 transition-transform hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-manrope text-sm font-medium" to="/notification_settings_medcore_pro">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
                    Notifications
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer active:scale-98 transition-transform hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-manrope text-sm font-medium" to="/account_settings_medcore_pro">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
                    Security
                </Link>
</div>
<div className="p-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
<button className="w-full bg-[#1A73E8] text-white py-2 px-4 rounded-lg font-manrope text-sm font-medium hover:bg-primary/90 transition-colors flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                    New Appointment
                </button>
</div>
</nav>
{/*  Main Content  */}
<main className="flex-1 md:ml-64 p-grid-margin w-full">
<div className="max-w-6xl mx-auto space-y-grid-gutter">
{/*  Hero Profile Bento  */}
<div className="bg-surface-container-lowest rounded-xl elevation-1 border border-outline-variant/20 overflow-hidden relative">
{/*  Subtle background accent  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-30 rounded-bl-full blur-3xl -z-0 pointer-events-none"></div>
<div className="p-xl relative z-10 flex flex-col md:flex-row gap-xl items-start">
<div className="shrink-0 relative">
<img alt="Dr. James Wilson" className="w-40 h-40 rounded-xl object-cover border-4 border-surface-container-lowest shadow-sm" data-alt="A highly detailed, professional portrait of a distinguished male doctor with graying hair. He is wearing a pristine white lab coat and a stethoscope around his neck. The lighting is studio-quality softbox, creating gentle highlights on his face against a clean, light-mode corporate medical background. The aesthetic projects authority, deep clinical experience, and approachability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw4ZCGXkuLlrj_JJSfi0pvVbWBKkCTvPYJYB1KZwKSqAwIPsQyZzjC4Wj-ijyMBhV0piG4WvnNHsqWU3bqPnJ2Phioxvns6utZNDolfBO5GkCrTqM64BaA7NuYUjwBPYfSsxnTS-y3-DNzY8LpALf5Zqkca2FP20MvyOskldq8aikRqA0wPDZP49dU0Gtws10EVKBopjLkPEbXNQ9ckiyPAnpn4o47KiK7TVKEYLv_elcMV18rbHJhBp3tTNVDIxnTxAvvyaWElgPb" />
<div className="absolute -bottom-3 -right-3 bg-surface-container-lowest p-1 rounded-full shadow-sm">
<div className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">medical_services</span>
</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 w-full">
<div>
<div className="flex items-center gap-3 mb-1">
<h1 className="font-h2 text-h2 text-on-surface">Dr. James Wilson</h1>
<span className="inline-flex items-center gap-1 bg-secondary-container/20 text-secondary-fixed-dim px-2.5 py-0.5 rounded-full font-label-sm text-label-sm border border-secondary-container/30">
<span className="material-symbols-outlined text-[14px]">verified</span>
                                            Verified Professional
                                        </span>
</div>
<h2 className="font-h3 text-h3 text-primary mb-4">Cardiology Specialist</h2>
<div className="flex flex-wrap gap-4 mt-6">
<div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/30">
<span className="material-symbols-outlined text-outline">school</span>
<span className="font-label-md text-label-md text-on-surface-variant">MD, FACC</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/30">
<span className="material-symbols-outlined text-outline">work</span>
<span className="font-label-md text-label-md text-on-surface-variant">15+ Years Experience</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/30">
<span className="material-symbols-outlined text-outline">local_hospital</span>
<span className="font-label-md text-label-md text-on-surface-variant">Cardiology Department</span>
</div>
</div>
</div>
<div className="shrink-0 flex gap-3">
<button className="bg-surface-container border border-[#1A73E8] text-[#1A73E8] px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-fixed/30 transition-colors">
                                        Message
                                    </button>
</div>
</div>
</div>
</div>
</div>
{/*  Bento Grid Lower Section  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-grid-gutter">
{/*  Bio Card  */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-xl elevation-1 border border-outline-variant/20 flex flex-col">
<div className="px-lg py-md border-b border-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary">description</span>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-gray-500">Professional Bio</h3>
</div>
<div className="p-lg flex-1">
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Dr. James Wilson is a board-certified cardiologist with over 15 years of dedicated experience in diagnosing and treating complex cardiovascular conditions. He completed his residency at Johns Hopkins Hospital and further specialized in interventional cardiology. 
                            </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-4">
                                Known for his patient-centric approach, Dr. Wilson integrates advanced diagnostic technology with personalized care plans. His primary focus areas include preventative cardiology, management of heart failure, and coronary artery disease. He is an active member of the American College of Cardiology and frequently contributes to peer-reviewed medical journals.
                            </p>
</div>
</div>
{/*  Side Info Card  */}
<div className="bg-surface-container-lowest rounded-xl elevation-1 border border-outline-variant/20 flex flex-col">
<div className="px-lg py-md border-b border-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary">award_star</span>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-gray-500">Qualifications</h3>
</div>
<div className="p-lg flex-1 space-y-6">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<h4 className="font-label-md text-label-md text-on-surface">Education</h4>
</div>
<ul className="pl-5 space-y-3 font-body-sm text-body-sm text-on-surface-variant border-l-2 border-surface-variant ml-1">
<li className="relative">
<span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-surface-container-lowest border-2 border-outline-variant"></span>
<span className="block font-medium text-on-surface">M.D. in Medicine</span>
<span className="block text-outline">Harvard Medical School (2004)</span>
</li>
<li className="relative">
<span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-surface-container-lowest border-2 border-outline-variant"></span>
<span className="block font-medium text-on-surface">Fellowship in Cardiology</span>
<span className="block text-outline">Johns Hopkins Hospital (2008)</span>
</li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<h4 className="font-label-md text-label-md text-on-surface">Certifications</h4>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container rounded-md font-label-sm text-label-sm text-on-surface border border-outline-variant/30">Board Certified Cardiologist</span>
<span className="px-3 py-1 bg-surface-container rounded-md font-label-sm text-label-sm text-on-surface border border-outline-variant/30">FACC</span>
<span className="px-3 py-1 bg-surface-container rounded-md font-label-sm text-label-sm text-on-surface border border-outline-variant/30">Advanced ACLS</span>
</div>
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
