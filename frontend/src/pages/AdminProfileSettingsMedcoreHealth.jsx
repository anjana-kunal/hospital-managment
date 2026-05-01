import React from 'react';

export default function AdminProfileSettingsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md min-h-screen flex">

<aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-surface border-r border-outline-variant flex flex-col py-6 z-30">
<div className="px-6 mb-8 flex items-center gap-3">
<img alt="Hospital Logo" className="w-8 h-8 rounded bg-primary-container object-cover" data-alt="A minimalist, geometric hospital logo symbol rendered in crisp primary blue and pristine white. The design is abstract, evoking feelings of health, connectivity, and modern clinical efficiency, set against a clean white background in a corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNBaKcj7kQqM59Srve6WEV__sSirIvzuDcFndtU9PbY6abLVxHrlyoYnFpbYwzs7PFNzkzAb4tvz6QrBXqMWe-OBMJw2Wwk6SSk08cOTlF26f3du7xlxQaXs2sXicNQWK43n_14gyKljhPgB5NddWISZlLQ9QrZQm8uNOpwnX1bk-D2AAFbyBrmLrOTwWPn4GYgk2cYDrS7accgUx9gCXtsmzm1_N-GSIau9gFYtLQFGPinn4hGvcFTN99hRyJsGiBkJ4ULI6wo0R4" />
<div>
<h1 className="font-h3 text-h3 text-primary text-[18px] leading-tight">MedAdmin</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant">Central Command</p>
</div>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-md py-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">monitoring</span>
                Analytics
            </a>
<a className="flex items-center gap-3 px-md py-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">history_edu</span>
                Audit Logs
            </a>
<a className="flex items-center gap-3 px-md py-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                Permissions
            </a>
<a className="flex items-center gap-3 px-md py-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
                System Settings
            </a>
<a className="flex items-center gap-3 px-md py-sm rounded-lg font-label-md text-label-md bg-primary-container text-on-primary-container border-l-4 border-primary transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>person</span>
                Profile
            </a>
</nav>
<div className="px-6 mt-auto">
<div className="px-md py-sm bg-surface-container-low rounded-lg border border-outline-variant flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">System Status: Optimal</span>
</div>
</div>
</aside>
<div className="flex-1 ml-64 flex flex-col min-h-screen">
<header className="flex justify-between items-center px-6 h-16 w-full bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-40">
<div className="flex items-center bg-surface-container-low border border-outline-variant rounded-full px-4 py-2 w-96">
<span className="material-symbols-outlined text-on-surface-variant mr-2 text-[20px]">search</span>
<input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface w-full placeholder:text-on-surface-variant focus:ring-0" placeholder="Search administrators, logs, settings..." type="text" />
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 border-r border-outline-variant pr-4">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">help_outline</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<div className="flex items-center gap-3 pl-2">
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A small, circular profile picture of a professional medical administrator. The portrait is sharply focused with soft, corporate lighting, set against a pristine, uncluttered background that reflects a high-end clinical precision aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUI607jwFsI-IexXVqePO0qKvBZk3WbUFNwFRgXywG9SXUtCuNuncGs3ySgi4gAI9CSj_h1rzUmToo3BPvGVkK43FXsTZktlDkbI41uZRC_q9eUwfPAg5MY9wr9LzcZriLFbjbchhrdBWGrSc8rKsCfhQa5aKuekKRZx5pxEP5VMPNBYRm96QxEvKoLmjsLuHuG2o_n_5V8g45sj52UC_eFgohkQ9AzPqwC-4cSvt4XjywfKndNETXx2hDTm0xKNdSGTacjddv0Qzu" />
<button className="font-label-md text-label-md text-error hover:bg-error-container/20 px-3 py-1.5 rounded transition-colors">
                        Logout
                    </button>
</div>
</div>
</header>
<main className="p-grid-margin w-full max-w-[1400px] mx-auto flex-1">
<div className="mb-lg">
<h2 className="font-h2 text-h2 text-on-surface">Personal Settings</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your administrator profile, security preferences, and system behavior.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
{/*  Profile Overview Card (Col 5)  */}
<section className="col-span-12 lg:col-span-5 bg-surface rounded-lg shadow-level-1 border border-outline-variant overflow-hidden flex flex-col">
<div className="p-lg border-b border-outline-variant bg-surface-bright flex items-center justify-between">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Profile Information</h3>
</div>
<div className="p-lg flex-1">
<div className="flex items-start gap-6 mb-8">
<div className="relative group">
<img alt="Profile Photo" className="w-24 h-24 rounded-full object-cover border border-outline-variant shadow-sm" data-alt="A professional, brightly lit headshot of a medical administrator in a modern corporate hospital setting. The lighting is soft and natural, emphasizing a calm, trustworthy demeanor. The background is slightly blurred, featuring clean architectural lines and a subtle, cool-toned color palette of pristine whites and primary blues, matching the overall high-stakes clinical precision design system aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO6muuIoz9bXTHfOH_oKlxPz_HR8KLQoXy_a0Y61Ktb7Q9AgFM6otDmgRTwcH5jnPtKFmz6kOMsS-FRtv-JbwNntmCisku3WSqrlBo3id-ocdcJ9gP3oaXR_9TgsdjsMtXdOHk85DPdY6x4F4npO79GWBn2st0uVsqKzZkxd_OTB3os1US9Rzshr_vdNj56Pv1UCrJuvwTMSJVyyBJU9-qEGNtHXEkHWSDW10xPIxcEJB2wJ5FffVQK91pUp4w3SRNo13BZG2koBSx" />
<button className="absolute bottom-0 right-0 bg-surface border border-outline-variant p-1.5 rounded-full shadow-sm text-primary hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-[16px]">edit</span>
</button>
</div>
<div className="pt-2">
<h4 className="font-h3 text-h3 text-on-surface">Dr. Sarah Jenkins</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px]">badge</span>
                                    Admin ID: ADM-88492
                                </p>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Full Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="text" value="Dr. Sarah Jenkins" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Professional Email</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="email" value="s.jenkins@medcore.hms" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Department</label>
<input className="w-full bg-surface-container border border-outline-variant rounded px-md py-sm font-body-sm text-body-sm text-on-surface-variant cursor-not-allowed" disabled="" type="text" value="Central Administration" />
</div>
</div>
</div>
<div className="p-md bg-surface-container-lowest border-t border-outline-variant flex justify-end">
<button className="bg-primary text-on-primary px-lg py-sm rounded font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
                            Save Changes
                        </button>
</div>
</section>
{/*  Security Card (Col 7)  */}
<section className="col-span-12 lg:col-span-7 bg-surface rounded-lg shadow-level-1 border border-outline-variant overflow-hidden flex flex-col">
<div className="p-lg border-b border-outline-variant bg-surface-bright flex items-center gap-2">
<span className="material-symbols-outlined text-primary">shield_lock</span>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Security & Authentication</h3>
</div>
<div className="p-lg flex-1 grid grid-cols-1 md:grid-cols-2 gap-xl">
<div className="space-y-5">
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-4">Update Password</h4>
<div className="space-y-4">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Current Password</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="password" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">New Password</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="password" />
</div>
<button className="border border-primary text-primary px-md py-sm rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors w-full mt-2">
                                        Update Password
                                    </button>
</div>
</div>
</div>
<div className="border-t md:border-t-0 md:border-l border-outline-variant md:pl-xl pt-6 md:pt-0 flex flex-col">
<h4 className="font-label-md text-label-md text-on-surface mb-2">Two-Factor Authentication</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Enhance your account security by requiring a verification code upon login.</p>
<div className="bg-surface-container-low border border-outline-variant rounded-lg p-md mb-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-secondary-fixed-dim/20 p-2 rounded text-secondary">
<span className="material-symbols-outlined text-[20px]">phonelink_lock</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Authenticator App</p>
<p className="font-label-sm text-label-sm text-secondary">Currently Active</p>
</div>
</div>
<button className="text-primary font-label-md text-label-md hover:underline">Manage</button>
</div>
<div className="mt-6 flex items-center justify-between p-md border border-outline-variant rounded-lg">
<div>
<p className="font-label-md text-label-md text-on-surface">Require 2FA</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value="" />
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</section>
{/*  Danger Zone (Col 5)  */}
<section className="col-span-12 lg:col-span-5 bg-error-container/10 rounded-lg shadow-level-1 border border-error-container overflow-hidden flex flex-col">
<div className="p-lg border-b border-error-container/30 bg-surface-bright flex items-center gap-2">
<span className="material-symbols-outlined text-error">warning</span>
<h3 className="font-label-md text-label-md text-error uppercase tracking-wider">Account Control</h3>
</div>
<div className="p-lg flex-1 space-y-6">
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Active Sessions</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Terminate all other active browser sessions across devices.</p>
<button className="border border-outline-variant text-on-surface px-md py-sm rounded font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center gap-2 w-full justify-center">
<span className="material-symbols-outlined text-[18px]">logout</span>
                                Terminate Other Sessions
                            </button>
</div>
<div className="pt-6 border-t border-error-container/30">
<h4 className="font-label-md text-label-md text-error mb-1">Delete Account</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Permanently remove your administrative profile. This action cannot be undone.</p>
<button className="bg-error text-on-error px-md py-sm rounded font-label-md text-label-md hover:bg-on-error-container transition-colors flex items-center gap-2 w-full justify-center shadow-sm">
<span className="material-symbols-outlined text-[18px]">delete_forever</span>
                                Delete Account Permanently
                            </button>
</div>
</div>
</section>
{/*  Preferences Card (Col 7)  */}
<section className="col-span-12 lg:col-span-7 bg-surface rounded-lg shadow-level-1 border border-outline-variant overflow-hidden flex flex-col">
<div className="p-lg border-b border-outline-variant bg-surface-bright flex items-center gap-2">
<span className="material-symbols-outlined text-primary">tune</span>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">System Preferences</h3>
</div>
<div className="p-lg flex-1 grid grid-cols-1 md:grid-cols-2 gap-xl">
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-4">Interface Theme</h4>
<div className="grid grid-cols-2 gap-4">
<button className="border-2 border-primary bg-primary-container/10 rounded-lg p-md flex flex-col items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[28px] text-primary">light_mode</span>
<span className="font-label-md text-label-md text-primary">Light Mode</span>
</button>
<button className="border border-outline-variant bg-surface-container-lowest hover:bg-surface-container rounded-lg p-md flex flex-col items-center gap-2 transition-all opacity-70">
<span className="material-symbols-outlined text-[28px] text-on-surface-variant">dark_mode</span>
<span className="font-label-md text-label-md text-on-surface-variant">Dark Mode</span>
</button>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-3 text-center">Currently locked to Light Mode per hospital protocol.</p>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-4">Regional Settings</h4>
<div className="space-y-4">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">System Language</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
<option>English (United States)</option>
<option>English (United Kingdom)</option>
<option>Spanish (Medical)</option>
<option>French</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Timezone</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded px-md py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
<option>(UTC-05:00) Eastern Time (US & Canada)</option>
<option>(UTC-06:00) Central Time (US & Canada)</option>
<option>(UTC-08:00) Pacific Time (US & Canada)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

</div>
    </>
  );
}
