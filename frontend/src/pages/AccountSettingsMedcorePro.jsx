import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function AccountSettingsMedcorePro() {
  return (
    <>
      <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md">

{/*  TopAppBar  */}
<header className="bg-white dark:bg-gray-900 font-manrope antialiased tracking-tight docked full-width top-0 border-b border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none sticky top-0 z-50 flex items-center justify-between px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold text-blue-700 dark:text-blue-400">MedCore Pro</span>
</div>
<div className="flex items-center gap-6">
{/*  Search Bar on Right  */}
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-transparent focus:bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary rounded-lg text-body-sm font-body-sm w-64 transition-colors text-on-surface placeholder:text-outline-variant" placeholder="Search..." type="text" />
</div>
{/*  Trailing Icons  */}
<div className="flex items-center gap-2">
<button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:opacity-80 transition-all duration-200 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:opacity-80 transition-all duration-200 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
</div>
{/*  Profile Image  */}
<div className="h-8 w-8 rounded-full overflow-hidden bg-surface-container-highest border border-outline-variant cursor-pointer active:opacity-80 transition-all duration-200">
<img alt="Doctor profile avatar" className="h-full w-full object-cover" data-alt="A professional headshot of a male cardiology specialist in his mid-40s, wearing a crisp white medical coat. He has a warm, confident expression. The lighting is bright and even, set against a pristine, minimalist white background typical of a modern clinical environment. The overall aesthetic is clean, trustworthy, and aligns with a modern corporate medical style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg2_ssdMcS_wnWsi_ljmkbOlr_sBLAgnu_Ed95A0eVhhdnmc4om4cpE4S7vM-u-7WqTwilSb6aTxLkeRh4uY4AHsofmKmb3swwE1ZOmwxQfwf01jzW6_Ay54oI8w8cij4-hfUGIEOnmdYT-O_If4jg68t8Cih_pbdSPUQ12Q5s-bzq_9Vd0f759ksBigW8T9CJ9_3-1P6e_4xjlsk1YXSDr-esuApitVI6NpE_36XrLLsuHObxoRZZk9BQbB29jUon_pC6TV-kfJ3E" />
</div>
</div>
</header>
<div className="flex flex-1 relative">
{/*  SideNavBar  */}
<aside className="bg-white dark:bg-gray-900 font-manrope text-sm font-medium fixed left-0 top-0 h-full w-64 border-r border-r border-gray-100 dark:border-gray-800 flat no shadows hidden md:flex flex-col h-screen fixed left-0 top-0 pt-20 z-40">
<div className="px-6 pb-6 pt-4 border-b border-gray-100 dark:border-gray-800 mb-4">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full overflow-hidden bg-surface-container-highest">
<img alt="Doctor identity" className="h-full w-full object-cover" data-alt="A professional headshot of a male cardiology specialist in his mid-40s, wearing a crisp white medical coat. He has a warm, confident expression. The lighting is bright and even, set against a pristine, minimalist white background typical of a modern clinical environment. The overall aesthetic is clean, trustworthy, and aligns with a modern corporate medical style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjn4_2YiNtjrMYyC-fOJNOcF8CiP1k1PYXuPQv6pXlEaWt4jonn6f-fkjH2GW2tneZzJmCqmDR5g37jtlN6ug-mWBPreUSY0EI9N4zTaJyzxFvtP5vXY_ksCdjWAUoA67NorE7zPM4Wew2GbzNHzzcRYb_RYxMJ7RLQzL-0iHBOjlwq3YBN3GanM3XmNOX1HXCbo5Cc0QOX5Eg95VmmNQl6ArKVpFs720G0h-HD0JEKgBFjwO1dsIQ9jp3dhtF264a97dT1cAGkDXX" />
</div>
<div>
<div className="font-h3 text-h3 !text-[16px] !leading-tight text-on-surface">Dr. James Wilson</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Cardiology Specialist</div>
</div>
</div>
<button className="w-full bg-primary-container text-on-primary-container py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity active:scale-98">
                    New Appointment
                </button>
</div>
<nav className="flex-1 flex flex-col gap-1 px-2">
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-lg cursor-pointer active:scale-98 transition-transform" to="/doctor_profile_medcore_pro">
<span className="material-symbols-outlined" data-icon="person">person</span>
                    Profile
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-lg cursor-pointer active:scale-98 transition-transform" to="/availability_settings_medcore_pro">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                    Availability
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-lg cursor-pointer active:scale-98 transition-transform" to="/consultation_fees_medcore_pro">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                    Consultation Fees
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-lg cursor-pointer active:scale-98 transition-transform" to="/notification_settings_medcore_pro">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
                    Notifications
                </Link>
{/*  Active Nav Item  */}
<Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 cursor-pointer active:scale-98 transition-transform" to="/account_settings_medcore_pro">
<span className="material-symbols-outlined icon-filled" data-icon="verified_user">verified_user</span>
                    Security
                </Link>
</nav>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 w-full md:ml-64 p-grid-margin lg:p-xl transition-all duration-300">
<div className="max-w-[1200px] mx-auto">
{/*  Page Header  */}
<div className="mb-grid-margin">
<h1 className="font-h1 text-h1 text-on-surface mb-2">Account Security</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage your credentials, authentication methods, and privacy preferences.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
{/*  Password Management Card (Spans 8 cols)  */}
<section className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-variant">
<div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="key">key</span>
</div>
<div>
<h2 className="font-h3 text-h3 text-on-surface">Change Password</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ensure your account is using a long, random password to stay secure.</p>
</div>
</div>
<form className="space-y-4 max-w-md">
<div>
<label className="block font-label-md text-label-md text-on-surface mb-sm">Current Password</label>
<input className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg px-md py-2 font-body-md text-body-md text-on-surface transition-colors" placeholder="••••••••" type="password" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-sm">New Password</label>
<input className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg px-md py-2 font-body-md text-body-md text-on-surface transition-colors" placeholder="••••••••" type="password" />
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Minimum 12 characters, including uppercase, lowercase, numbers, and symbols.</p>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-sm">Confirm New Password</label>
<input className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg px-md py-2 font-body-md text-body-md text-on-surface transition-colors" placeholder="••••••••" type="password" />
</div>
</form>
</div>
<div className="mt-8 pt-6 border-t border-surface-variant flex justify-end">
<button className="bg-primary text-on-primary font-label-md text-label-md px-lg py-2 rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
                                Update Password
                            </button>
</div>
</section>
{/*  2FA Card (Spans 4 cols)  */}
<section className="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-lg flex flex-col">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-variant">
<div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="shield_lock">shield_lock</span>
</div>
<div>
<h2 className="font-h3 text-h3 text-on-surface">Two-Factor Auth</h2>
</div>
</div>
<div className="flex-1 flex flex-col items-center text-center justify-center py-6">
<div className="h-16 w-16 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[32px] icon-filled" data-icon="check_circle">check_circle</span>
</div>
<h3 className="font-h3 text-h3 !text-[20px] text-on-surface mb-2">2FA is Enabled</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Your account is secured with an additional layer of verification.</p>
<button className="w-full border border-outline text-on-surface font-label-md text-label-md px-md py-2 rounded-lg hover:bg-surface-container transition-colors">
                                Manage Settings
                            </button>
</div>
</section>
{/*  Profile Visibility (Spans 6 cols)  */}
<section className="lg:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-lg">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-variant">
<div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</div>
<div>
<h2 className="font-h3 text-h3 text-on-surface">Profile Visibility</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Control who can view your professional profile.</p>
</div>
</div>
<div className="space-y-4">
<label className="flex items-start gap-4 p-4 rounded-lg border border-primary bg-primary-fixed/20 cursor-pointer transition-colors">
<input checked="" className="mt-1 text-primary focus:ring-primary" name="visibility" type="radio" />
<div>
<div className="font-label-md text-label-md text-on-surface mb-1">Public Profile</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Visible to patients and external partners. Recommended for doctors accepting new appointments.</div>
</div>
</label>
<label className="flex items-start gap-4 p-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
<input className="mt-1 text-primary focus:ring-primary" name="visibility" type="radio" />
<div>
<div className="font-label-md text-label-md text-on-surface mb-1">Internal Network Only</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Visible strictly to authorized hospital staff and administrators within MedCore Pro.</div>
</div>
</label>
</div>
</section>
{/*  System Preferences / Language (Spans 6 cols)  */}
<section className="lg:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-lg">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-variant">
<div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="language">language</span>
</div>
<div>
<h2 className="font-h3 text-h3 text-on-surface">System Preferences</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Customize your interface experience.</p>
</div>
</div>
<div className="mb-6">
<label className="block font-label-md text-label-md text-on-surface mb-sm">Interface Language</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg px-md py-3 font-body-md text-body-md text-on-surface cursor-pointer pr-10">
<option>English (United States)</option>
<option>English (United Kingdom)</option>
<option>Spanish (Español)</option>
<option>French (Français)</option>
<option>German (Deutsch)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-sm">Timezone</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg px-md py-3 font-body-md text-body-md text-on-surface cursor-pointer pr-10">
<option>(GMT-05:00) Eastern Time - New York</option>
<option>(GMT-06:00) Central Time - Chicago</option>
<option>(GMT-08:00) Pacific Time - Los Angeles</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
</section>
{/*  Active Sessions Card (Spans 12 cols)  */}
<section className="lg:col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-surface-variant">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="devices">devices</span>
</div>
<div>
<h2 className="font-h3 text-h3 text-on-surface">Active Sessions</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Review and manage devices currently logged into your account.</p>
</div>
</div>
<button className="bg-error-container text-on-error-container font-label-md text-label-md px-md py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="logout">logout</span>
                                Terminate All Other Sessions
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="bg-surface border-b border-outline-variant">
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant w-[30%]">Device</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant w-[25%]">Location</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant w-[25%]">Last Activity</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant text-right w-[20%]">Status</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
<tr className="border-b border-surface-variant hover:bg-surface/50 transition-colors">
<td className="py-4 px-4 flex items-center gap-3 text-on-surface">
<span className="material-symbols-outlined text-outline" data-icon="desktop_windows">desktop_windows</span>
<div>
<div className="font-medium">MacBook Pro 16"</div>
<div className="text-on-surface-variant text-[12px]">Chrome 120.0 (macOS)</div>
</div>
</td>
<td className="py-4 px-4 text-on-surface-variant">New York, USA</td>
<td className="py-4 px-4 text-on-surface-variant">Just now</td>
<td className="py-4 px-4 text-right">
<span className="inline-block bg-secondary-container/30 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm">Current Session</span>
</td>
</tr>
<tr className="hover:bg-surface/50 transition-colors">
<td className="py-4 px-4 flex items-center gap-3 text-on-surface">
<span className="material-symbols-outlined text-outline" data-icon="smartphone">smartphone</span>
<div>
<div className="font-medium">iPhone 14 Pro</div>
<div className="text-on-surface-variant text-[12px]">MedCore App (iOS 17)</div>
</div>
</td>
<td className="py-4 px-4 text-on-surface-variant">Boston, USA</td>
<td className="py-4 px-4 text-on-surface-variant">2 hours ago</td>
<td className="py-4 px-4 text-right text-on-surface-variant">
                                            IP: 192.168.1.45
                                        </td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
