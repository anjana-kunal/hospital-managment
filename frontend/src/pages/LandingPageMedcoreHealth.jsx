import { Link } from 'react-router-dom';

export default function LandingPageMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">

{/*  TopAppBar from JSON  */}
<header className="bg-white dark:bg-slate-900 font-manrope antialiased tracking-tight docked full-width top-0 z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
<div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
<div className="text-xl font-extrabold tracking-tighter text-blue-700 dark:text-blue-500">
                MedCore HMS
            </div>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 pb-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md Active: opacity-80 duration-150 ease-in-out" href="#features">Features</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md" href="#testimonials">Testimonials</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md" href="#about">About Us</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md" href="#support">Support</a>
</nav>
<div className="flex gap-4 items-center">
<Link className="font-label-md text-label-md text-primary bg-primary-fixed border border-primary-fixed-dim px-md py-sm rounded-lg hover:bg-primary-fixed-dim transition-colors hidden sm:block" to="/login_medcore_health">
                    Staff Portal
                </Link>
<Link className="font-label-md text-label-md text-on-primary bg-primary-container px-md py-sm rounded-lg hover:bg-primary hover:shadow-ambient-1 transition-all" to="/login_medcore_health">
                    Patient Login
                </Link>
</div>
</div>
</header>
<main className="flex-grow">
{/*  Hero Section  */}
<section className="relative pt-24 pb-32 px-6 lg:px-grid-gutter overflow-hidden">
<div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container via-surface to-background"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter relative z-10 items-center">
<div className="lg:col-span-6 flex flex-col gap-xl">
<div className="inline-flex items-center gap-sm bg-surface-container-low border border-surface-variant rounded-full px-4 py-2 w-fit">
<span className="material-symbols-outlined text-secondary text-[20px]" data-icon="health_and_safety">health_and_safety</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Next-Gen Hospital OS</span>
</div>
<h1 className="font-h1 text-h1 text-on-background">
                        Integrated Healthcare Management for the Modern Age
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        Streamline clinical workflows, enhance patient care, and optimize operational efficiency with MedCore Health's secure, cloud-native management platform.
                    </p>
<div className="flex flex-wrap gap-md pt-sm">
<Link className="font-label-md text-label-md text-on-primary bg-primary-container px-xl py-3 rounded-lg hover:bg-primary hover:shadow-ambient-2 transition-all flex items-center gap-sm" to="/search_doctors_medcore_health">
<span className="material-symbols-outlined text-[20px]" data-icon="event_available">event_available</span>
                            Book an Appointment
                        </Link>
<Link className="font-label-md text-label-md text-on-surface bg-surface border border-outline-variant px-xl py-3 rounded-lg hover:bg-surface-container-low hover:border-outline transition-all flex items-center gap-sm" to="/login_medcore_health">
                            Staff Portal
                        </Link>
</div>
<div className="flex items-center gap-4 pt-lg border-t border-surface-variant mt-sm">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
<img alt="Doctor profile" className="w-full h-full object-cover" data-alt="Close up portrait of a confident medical professional in a bright, modern hospital setting. They are wearing light blue scrubs and a stethoscope. Soft, natural lighting highlights a trustworthy and calm expression. Modern clinical background, slightly blurred out of focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArt4hiOHq6vbIQuJWHb0lb-vkM3kr6WWSXqZZ8jC1k2KQc0eyKH-8Wn511di30Jb5_bRMpXDuoATK97gc_k320yuN3783RZP_AgdwF03_L1aJX27IIYKY0I4A25J3iv49vAN0u-1vj7riHh4cltNMTjuDJ67AmxD13JPCKFvH1dtgUqXilk1QjIBpjJ2y8PXQSu8-hw1XvwFGjCn2uhCw3NWA5jkhDim41VgE9gYFYl6XIOFlVCIEciqWsCCFjQOI0BImLVQqWAaIV" />
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
<img alt="Doctor profile" className="w-full h-full object-cover" data-alt="Close up portrait of a confident female doctor in a pristine hospital corridor. She wears a crisp white coat over neat professional attire. The lighting is bright and cool, emphasizing a clean, sterile, yet welcoming medical environment. High contrast, professional SaaS photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAETs3PuE8t2T-TpRAuWWiApmFAngO6zqazJX0Z-HvqIZO_dzw2UvGa1STp6-K76n8qRUNYEyVwXl4xE1JJsb398xkMKVA7Ymxt-bCO5PuIcPD6g6pAKvwGYc6mmHyCJqYyFsU6Dyi2WrkpnMPJTP051px5Ltnp1JOXw-aBKzYHyepH0jSisnP0WQXNYrG0U1xphyKX1pI6Z2vqmm1Er0z0IL2gaUg7Dx9C7LdKxtH3dYfICWc9BvHmxftX8H_mzX-pPqa0JkT4LdHi" />
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface bg-primary-container flex items-center justify-center text-on-primary font-label-sm text-label-sm">
                                +2k
                            </div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Trusted by over 2,000 healthcare professionals.</p>
</div>
</div>
<div className="lg:col-span-6 relative mt-12 lg:mt-0">
{/*  Bento Grid style hero imagery  */}
<div className="grid grid-cols-2 gap-4 relative">
<div className="col-span-2 bg-surface rounded-xl shadow-ambient-2 border border-surface-variant overflow-hidden h-[300px]">
<img alt="Hospital Management Dashboard" className="w-full h-full object-cover opacity-90" data-alt="A modern, sleek hospital management dashboard displayed on a large high-resolution monitor. The screen shows clear, structured patient data, vital signs graphs in teal and blue, and a clean white background UI. The monitor sits on a pristine white desk in a brightly lit clinical office. Professional, corporate medical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVM1meHU6hIk-pkYUI9H0ZIevelGs0Jt16fFi_hNz7y-rffTK43zosR9rHG5phP1_8VosPPN1IU2KgtRi6TXLkFYMsD_mTu8h2AUbKx9ak5PLRTK2o2VDWbCWRttlMzUY8BjdQTQY__NrfcwuYnWdnUYN3RaG3HFZPu3Xi1C-V5GrFZVpRmSUzUN83yy6re08MyraxuriLqwlNuGmwqQK_S7S9_drZi1cVyWSEMuPvQsDWF2qUtMg0UrbKK-cDeev6vMjFfdpnNyC8" />
</div>
<div className="bg-surface rounded-xl shadow-ambient-1 border border-surface-variant p-lg flex flex-col gap-sm">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-sm">
<span className="material-symbols-outlined" data-icon="monitor_heart" data-weight="fill">monitor_heart</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface text-[18px]">Real-time Vitals</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous monitoring integration.</p>
</div>
<div className="bg-primary rounded-xl shadow-ambient-1 p-lg flex flex-col justify-between text-on-primary">
<span className="material-symbols-outlined text-[32px] opacity-80" data-icon="shield_person">shield_person</span>
<div>
<h3 className="font-h3 text-h3 text-[18px] mb-1">HIPAA Compliant</h3>
<p className="font-body-sm text-body-sm opacity-90">Enterprise-grade security.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Features Section (Bento Grid Layout)  */}
<section className="py-24 px-6 lg:px-grid-gutter bg-surface-container-lowest border-y border-surface-variant">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-h2 text-h2 text-on-surface mb-md">Comprehensive Clinical Toolkit</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Everything your medical facility needs to operate at peak efficiency, designed to minimize cognitive load on healthcare providers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
{/*  Feature 1: EHR (Large Span)  */}
<div className="md:col-span-8 bg-surface rounded-xl shadow-ambient-1 border border-surface-variant p-xl flex flex-col md:flex-row gap-lg items-center overflow-hidden relative">
<div className="flex-1 z-10">
<div className="inline-block p-2 bg-primary-fixed rounded-lg text-on-primary-fixed-variant mb-md">
<span className="material-symbols-outlined" data-icon="folder_managed">folder_managed</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface mb-sm">Electronic Health Records</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg">A unified, secure patient history. Access past diagnoses, treatments, and comprehensive medical data instantly without leaving the canvas.</p>
<a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1 transition-colors" href="#learn-more">
                                Explore EHR capabilities <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="flex-1 w-full h-[200px] bg-surface-container-low rounded-lg border border-outline-variant/30 flex items-center justify-center relative shadow-inner">
{/*  Abstract UI representation  */}
<div className="w-3/4 h-3/4 bg-white rounded shadow-sm border border-surface-variant p-4 flex flex-col gap-2">
<div className="w-1/3 h-4 bg-surface-variant rounded"></div>
<div className="w-full h-2 bg-surface-variant/50 rounded mt-2"></div>
<div className="w-4/5 h-2 bg-surface-variant/50 rounded"></div>
<div className="w-full h-2 bg-surface-variant/50 rounded"></div>
</div>
</div>
</div>
{/*  Feature 2: Billing (Small Span)  */}
<div className="md:col-span-4 bg-surface rounded-xl shadow-ambient-1 border border-surface-variant p-xl flex flex-col justify-between">
<div>
<div className="inline-block p-2 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg mb-md">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface mb-sm text-[20px]">Automated Billing</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Seamless insurance claims processing, invoicing, and revenue cycle management built right in.</p>
</div>
</div>
{/*  Feature 3: Lab Results (Small Span)  */}
<div className="md:col-span-5 bg-surface rounded-xl shadow-ambient-1 border border-surface-variant p-xl">
<div className="inline-block p-2 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-lg mb-md">
<span className="material-symbols-outlined" data-icon="science">science</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface mb-sm text-[20px]">Real-time Lab Results</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Direct integration with diagnostic centers. Receive and review pathology and radiology reports instantly.</p>
</div>
{/*  Feature 4: Patient Portal (Medium Span)  */}
<div className="md:col-span-7 bg-surface rounded-xl shadow-ambient-1 border border-surface-variant p-xl relative overflow-hidden">
<div className="relative z-10 w-2/3">
<div className="inline-block p-2 bg-surface-variant text-on-surface-variant rounded-lg mb-md">
<span className="material-symbols-outlined" data-icon="person_check">person_check</span>
</div>
<h3 className="font-h3 text-h3 text-on-surface mb-sm">Patient Portal</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Empower patients with secure access to their own data, upcoming appointments, and direct messaging with their care team.</p>
</div>
<span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-surface-container-high z-0" data-icon="mobile_friendly">mobile_friendly</span>
</div>
</div>
</div>
</section>
</main>
{/*  Footer from JSON  */}
<footer className="bg-slate-50 dark:bg-slate-950 font-manrope text-xs text-slate-500 dark:text-slate-400 w-full py-12 px-6 border-t border-slate-200 dark:border-slate-800 flat no shadows mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-center max-w-7xl mx-auto gap-8">
<div className="text-sm font-bold text-slate-900 dark:text-white">
                MedCore HMS
            </div>
<div className="flex flex-wrap gap-6">
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#learn-more">Privacy Policy</a>
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#learn-more">Terms of Service</a>
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#hipaa">HIPAA Compliance</a>
<a className="hover:text-slate-900 dark:hover:text-slate-200 transition-opacity hover:opacity-75" href="#cookies">Cookie Policy</a>
</div>
<div className="text-center md:text-right">
                © 2024 MedCore Health Systems. Clinical Excellence & Reliability.
            </div>
</div>
</footer>

</div>
    </>
  );
}
