import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function SettingsMedcoreHealth() {
  return (
    <>
      <div className="bg-surface text-on-surface font-body-md min-h-screen">

{/*  TopAppBar  */}
<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-surface/80 backdrop-blur-md border-b border-surface-variant shadow-sm w-[calc(100%-16rem)]">
<div className="flex items-center gap-4">
{/*  Search bar omitted for brevity, but would go here if on_left  */}
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4 text-primary">
<button className="hover:text-primary-container focus:ring-2 ring-primary-container/50 rounded-full p-1"><span className="material-symbols-outlined">help</span></button>
<button className="hover:text-primary-container focus:ring-2 ring-primary-container/50 rounded-full p-1"><span className="material-symbols-outlined">apps</span></button>
</div>
<button className="text-secondary font-label-md hover:text-secondary-container">Emergency Support</button>
<div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="User profile" data-alt="A professional headshot of a person, well-lit against a neutral background, conveying trust and reliability suitable for a healthcare portal avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXKhhgeMEoUqkrO4FLSJLilAKG6IJ8Iwpy-kAan-xm3yofooULAjRfjeIGEsw60E7eR1Y7xlkxNBB4W4-uPtY-aLbRr29_eH3f3mb1ISkUvUz5Nksty0On5bny4oUC9dwCQYvRjBZw49PjRc8B2jZlyrkiNqo1tL-PVYjzoH3AA6ADCnC0QIB6EAiurwQLLbCVsOoObCVITBmH1N--JWBsfxNo1wZNFDYbxoMLiuh33RKDI6cxZSNd4dtk-tmqmkeP-JO7fhSi1jMn" />
</div>
</div>
</header>
{/*  SideNavBar  */}
<nav className="fixed left-0 top-0 h-full flex flex-col h-screen w-64 border-r border-surface-variant bg-surface shadow-sm z-50">
<div className="p-6 border-b border-surface-variant flex items-center gap-3">
<div className="h-10 w-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined">local_hospital</span>
</div>
<div>
<h1 className="font-h3 text-primary text-xl font-bold">MediPortal</h1>
<p className="font-label-sm text-on-surface-variant">Patient Access</p>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4">
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors" to="/messages_medcore_health">
<span className="material-symbols-outlined text-outline">chat</span>
<span className="font-label-md">Messages</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors" to="/notifications_medcore_health">
<span className="material-symbols-outlined text-outline">notifications</span>
<span className="font-label-md">Notifications</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors" to="/medical_history_medcore_health">
<span className="material-symbols-outlined text-outline">history_edu</span>
<span className="font-label-md">Medical History</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors" to="/my_profile_medcore_health">
<span className="material-symbols-outlined text-outline">person</span>
<span className="font-label-md">Profile</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 bg-surface-container-low text-primary border-r-4 border-primary-container opacity-90 transition-all" to="/settings_medcore_health">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>settings</span>
<span className="font-label-md">Settings</span>
</Link>
</div>
</nav>
{/*  Main Content  */}
<main className="ml-64 pt-16 min-h-screen p-grid-margin bg-background">
<div className="max-w-6xl mx-auto space-y-grid-gutter">
{/*  Header  */}
<div className="pb-md">
<h2 className="font-h2 text-on-surface">Patient Settings</h2>
<p className="font-body-md text-on-surface-variant mt-xs">Manage your account security, preferences, and privacy.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
{/*  Left Column: Security & Privacy (8 cols)  */}
<div className="md:col-span-8 space-y-grid-gutter">
{/*  Security Settings  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-sm border border-surface-variant p-lg">
<div className="flex items-center gap-3 border-b border-surface-variant pb-md mb-md">
<span className="material-symbols-outlined text-primary">security</span>
<h3 className="font-h3 text-on-surface">Security</h3>
</div>
{/*  2FA  */}
<div className="flex items-center justify-between py-md border-b border-surface-variant border-dashed">
<div>
<h4 className="font-label-md text-on-surface">Two-Factor Authentication</h4>
<p className="font-body-sm text-on-surface-variant mt-xs">Add an extra layer of security to your account.</p>
</div>
<button className="bg-primary-container text-on-primary font-label-md px-4 py-2 rounded-lg hover:bg-primary transition-colors">Enable 2FA</button>
</div>
{/*  Change Password  */}
<div className="py-md border-b border-surface-variant border-dashed space-y-md">
<h4 className="font-label-md text-on-surface">Change Password</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
<div className="space-y-sm">
<label className="font-label-sm text-on-surface-variant block">Current Password</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary font-body-sm" placeholder="••••••••" type="password" />
</div>
<div className="space-y-sm">
<label className="font-label-sm text-on-surface-variant block">New Password</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary font-body-sm" placeholder="••••••••" type="password" />
</div>
</div>
<button className="border border-primary-container text-primary-container font-label-md px-4 py-2 rounded-lg hover:bg-surface-container-low transition-colors mt-sm">Update Password</button>
</div>
{/*  Login History  */}
<div className="pt-md">
<h4 className="font-label-md text-on-surface mb-md">Recent Login History</h4>
<div className="space-y-sm">
<div className="flex items-center justify-between bg-surface-container-low p-3 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">devices</span>
<div>
<p className="font-label-sm text-on-surface">MacBook Pro - Safari</p>
<p className="font-body-sm text-on-surface-variant text-[11px]">New York, USA • Current Session</p>
</div>
</div>
<span className="bg-secondary-container text-on-secondary-container font-label-sm px-2 py-1 rounded-full text-[10px]">Active</span>
</div>
<div className="flex items-center justify-between bg-surface-container-low p-3 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">smartphone</span>
<div>
<p className="font-label-sm text-on-surface">iPhone 13 - MedCore App</p>
<p className="font-body-sm text-on-surface-variant text-[11px]">New York, USA • Oct 24, 10:30 AM</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Privacy Preferences  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-sm border border-surface-variant p-lg">
<div className="flex items-center gap-3 border-b border-surface-variant pb-md mb-md">
<span className="material-symbols-outlined text-primary">visibility_off</span>
<h3 className="font-h3 text-on-surface">Privacy Preferences</h3>
</div>
<div className="space-y-md">
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="mt-1 text-primary-container focus:ring-primary-container rounded border-outline-variant" type="checkbox" />
<div>
<p className="font-label-md text-on-surface">Share Health Data for Research</p>
<p className="font-body-sm text-on-surface-variant mt-xs">Allow anonymized data to be used for medical research studies.</p>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="mt-1 text-primary-container focus:ring-primary-container rounded border-outline-variant" type="checkbox" />
<div>
<p className="font-label-md text-on-surface">Profile Visibility to Care Team</p>
<p className="font-body-sm text-on-surface-variant mt-xs">Allow all affiliated doctors to view your complete medical history.</p>
</div>
</label>
</div>
</div>
</div>
{/*  Right Column: Notifications & Localization (4 cols)  */}
<div className="md:col-span-4 space-y-grid-gutter">
{/*  Notification Preferences  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-sm border border-surface-variant p-lg">
<div className="flex items-center gap-3 border-b border-surface-variant pb-md mb-md">
<span className="material-symbols-outlined text-primary">notifications_active</span>
<h3 className="font-h3 text-on-surface">Notifications</h3>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface">Email Alerts</p>
<p className="font-body-sm text-on-surface-variant text-[12px]">Updates & reports</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary-container" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary-container cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface">SMS Reminders</p>
<p className="font-body-sm text-on-surface-variant text-[12px]">Appointments</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary-container" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary-container cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface">App Push</p>
<p className="font-body-sm text-on-surface-variant text-[12px]">Real-time updates</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-surface-variant" id="toggle3" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle3"></label>
</div>
</div>
</div>
</div>
{/*  Language Settings  */}
<div className="bg-surface-container-lowest rounded-xl ambient-shadow-sm border border-surface-variant p-lg">
<div className="flex items-center gap-3 border-b border-surface-variant pb-md mb-md">
<span className="material-symbols-outlined text-primary">language</span>
<h3 className="font-h3 text-on-surface">Language</h3>
</div>
<div className="space-y-sm">
<label className="font-label-sm text-on-surface-variant block">Display Language</label>
<select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary font-body-sm text-on-surface">
<option>English (US)</option>
<option>Español (ES)</option>
</select>
</div>
</div>
{/*  Action Area  */}
<div className="pt-4 flex justify-end gap-3">
<button className="px-6 py-2 border border-outline-variant rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors">Discard</button>
<button className="px-6 py-2 bg-primary-container text-on-primary rounded-lg font-label-md hover:bg-primary transition-colors">Save Changes</button>
</div>
</div>
</div>
</div>
</main>
<style>
        .toggle-checkbox:checked &#123;
            right: 0;
            border-color: #1a73e8;
        &#125;
        .toggle-checkbox:checked + .toggle-label &#123;
            background-color: #1a73e8;
        &#125;
        .toggle-checkbox &#123;
            right: 0;
            z-index: 1;
            border-color: #e0e2ec;
            transition: all 0.3s;
        &#125;
        .toggle-label &#123;
            width: 2.5rem;
            background-color: #e0e2ec;
            transition: all 0.3s;
        &#125;
    </style>

</div>
    </>
  );
}
