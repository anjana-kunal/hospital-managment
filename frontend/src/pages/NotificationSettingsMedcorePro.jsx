import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function NotificationSettingsMedcorePro() {
  return (
    <>
      <div className="bg-background text-on-background min-h-screen font-body-md text-body-md antialiased flex flex-col md:flex-row">

{/*  TopAppBar JSON Executed  */}
<header className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-manrope antialiased tracking-tight docked full-width top-0 border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none sticky top-0 z-50 flex items-center justify-between px-6 h-16 w-full fixed w-full bg-surface-container-lowest">
<div className="flex items-center gap-4">
<div className="text-xl font-extrabold text-blue-700 dark:text-blue-400 font-h3 text-h3 tracking-tight">MedCore Pro</div>
</div>
<div className="flex items-center gap-md">
{/*  Search on_right  */}
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-full font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all w-64 text-on-surface" placeholder="Search..." type="text" />
</div>
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-fixed overflow-hidden ml-2 border border-outline-variant">
<img alt="Doctor profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a mature male doctor in a crisp white lab coat, standing in a brightly lit, modern clinical corridor. The lighting is soft and neutral, reinforcing a clean, modern corporate medical aesthetic with a cool color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0tQNMtg47SmU8JECeuOwPoPf6979zTAfN681QK8bowBb-xv0O25FaqGexv05L6uqat_TZXnCo4dXNXjmA_Qa3lpwJhEdfR0qHWo2dsZk7fIGHuRMA3U7oj8WRVSATYf341-ZEKEvekd_DDB8ZH8wEYBSO4pojVBgM0eeSO_Ygy4jxxK6E1qDK2RXFTgWlVPLA9iQS9qNqFPOFEjuLc0zzS6EYU8MjzEesQ4GX0kcR1zWe5JKlwIqg0vW3SnrPf3njC5WlS34TwTA2" />
</div>
</div>
</header>
{/*  SideNavBar JSON Executed  */}
<nav className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-manrope text-sm font-medium fixed left-0 top-0 h-full w-64 border-r border-gray-100 dark:border-gray-800 flat no shadows hidden md:flex flex-col h-screen fixed left-0 top-0 pt-20 z-40 bg-surface-container-lowest border-outline-variant/50">
<div className="px-6 py-lg border-b border-gray-100 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-primary-fixed overflow-hidden mb-3 border-2 border-surface-container">
<img alt="Doctor identity" className="w-full h-full object-cover" data-alt="A professional headshot of a mature male doctor in a crisp white lab coat, standing in a brightly lit, modern clinical corridor. The lighting is soft and neutral, reinforcing a clean, modern corporate medical aesthetic with a cool color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHlRb5_VuD5FDaUhClhAZMXYP-DrpNqvl_GkUotyGL9XYHwGMfGdvrNKFVM37zCfBt4AftinT8j7ui2JMr-yBZSnGvwxs8JvROfxp3ppjSdx4nqyksnvPeTZ5FhXC4xrBjhuI1z1oRxKpSFKDl0SXuzDjB5pq8_qnTJBXyQSs9TYhFxntquwl2ZEHDUGN0hyqRn2iyss1Da7qV7yBVA6IwNo6ZDwo77Y1wOVh4ZhD03xAmuWTM0oIP3qT35W6-uTtfaqI9sNnC8srs" />
</div>
<h2 className="font-label-md text-label-md text-on-surface font-bold">Dr. James Wilson</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cardiology Specialist</p>
</div>
<div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
{/*  Profile  */}
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform mx-2 rounded-lg" to="/doctor_profile_medcore_pro">
<span className="material-symbols-outlined text-xl" data-icon="person">person</span>
<span>Profile</span>
</Link>
{/*  Availability  */}
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform mx-2 rounded-lg" to="/availability_settings_medcore_pro">
<span className="material-symbols-outlined text-xl" data-icon="calendar_today">calendar_today</span>
<span>Availability</span>
</Link>
{/*  Consultation Fees  */}
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform mx-2 rounded-lg" to="/consultation_fees_medcore_pro">
<span className="material-symbols-outlined text-xl" data-icon="payments">payments</span>
<span>Consultation Fees</span>
</Link>
{/*  Notifications (ACTIVE)  */}
<Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 transition-all cursor-pointer active:scale-98 transition-transform mx-2 rounded-lg bg-primary-fixed/50 text-primary font-bold" to="/notification_settings_medcore_pro">
<span className="material-symbols-outlined text-xl icon-fill" data-icon="notifications_active">notifications_active</span>
<span>Notifications</span>
</Link>
{/*  Security  */}
<Link className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer active:scale-98 transition-transform mx-2 rounded-lg" to="/account_settings_medcore_pro">
<span className="material-symbols-outlined text-xl" data-icon="verified_user">verified_user</span>
<span>Security</span>
</Link>
</div>
<div className="p-4 border-t border-gray-100">
<button className="w-full bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">add</span>
                New Appointment
            </button>
</div>
</nav>
{/*  Main Content Canvas  */}
<main className="flex-1 md:ml-64 pt-16 min-h-screen bg-background">
<div className="max-w-[1200px] mx-auto p-grid-margin">
{/*  Page Header  */}
<div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="font-h2 text-h2 text-on-surface mb-2">Notification Preferences</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                        Manage your alert delivery methods to minimize disruption while ensuring you never miss critical patient updates or schedule changes.
                    </p>
</div>
<div className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-1 shadow-sm">
<button className="px-4 py-2 font-label-md text-label-md rounded-lg bg-surface-container text-on-surface transition-colors">Global Settings</button>
<button className="px-4 py-2 font-label-md text-label-md rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">Quiet Hours</button>
</div>
</div>
{/*  Global DND Toggle  */}
<div className="mb-grid-gutter bg-surface-container-lowest rounded-xl p-lg border border-outline-variant/30 shadow-level-1 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">do_not_disturb_on</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface text-lg">Do Not Disturb</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mute all non-emergency notifications across all devices.</p>
</div>
</div>
{/*  Toggle Off state  */}
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="toggle_dnd" name="toggle_dnd" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle_dnd"></label>
</div>
</div>
{/*  Bento Grid Layout for Alert Types  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter">
{/*  1. Appointment Alerts  */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-level-1 overflow-hidden flex flex-col">
<div className="p-md border-b border-outline-variant/20 flex items-center gap-3 bg-surface-bright">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-sm icon-fill">event</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface text-base">Appointment Alerts</h3>
</div>
<div className="p-lg flex-1 flex flex-col gap-6">
<p className="font-body-sm text-body-sm text-on-surface-variant">Notifications for new bookings, cancellations, and schedule changes.</p>
<div className="space-y-4 mt-auto">
{/*  In-App Push  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">App Push</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer z-10 top-0 right-0 transition-transform duration-200 ease-in-out" id="appt_push" name="appt_push" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" htmlFor="appt_push"></label>
</div>
</div>
{/*  Email  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">Email</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer z-10 top-0 right-0 transition-transform duration-200 ease-in-out" id="appt_email" name="appt_email" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" htmlFor="appt_email"></label>
</div>
</div>
{/*  SMS  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">SMS Text</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="appt_sms" name="appt_sms" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="appt_sms"></label>
</div>
</div>
</div>
</div>
</section>
{/*  2. Patient Message Alerts  */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-level-1 overflow-hidden flex flex-col">
<div className="p-md border-b border-outline-variant/20 flex items-center gap-3 bg-surface-bright">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-sm icon-fill">forum</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface text-base">Patient Message Alerts</h3>
</div>
<div className="p-lg flex-1 flex flex-col gap-6">
<p className="font-body-sm text-body-sm text-on-surface-variant">Direct communications, prescription renewal requests, and portal inquiries.</p>
<div className="space-y-4 mt-auto">
{/*  In-App Push  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">App Push</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer z-10 top-0 right-0 transition-transform duration-200 ease-in-out" id="msg_push" name="msg_push" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" htmlFor="msg_push"></label>
</div>
</div>
{/*  Email  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">Email (Daily Digest)</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer z-10 top-0 right-0 transition-transform duration-200 ease-in-out" id="msg_email" name="msg_email" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" htmlFor="msg_email"></label>
</div>
</div>
{/*  SMS  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">SMS Text</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="msg_sms" name="msg_sms" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="msg_sms"></label>
</div>
</div>
</div>
</div>
</section>
{/*  3. Lab Result Alerts  */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-level-1 overflow-hidden flex flex-col">
<div className="p-md border-b border-outline-variant/20 flex items-center gap-3 bg-surface-bright">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-sm icon-fill">science</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface text-base">Lab Result Alerts</h3>
</div>
<div className="p-lg flex-1 flex flex-col gap-6">
<p className="font-body-sm text-body-sm text-on-surface-variant">Notifications when new diagnostic reports, imaging, or pathology results are available.</p>
<div className="space-y-4 mt-auto">
{/*  In-App Push  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">App Push</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer z-10 top-0 right-0 transition-transform duration-200 ease-in-out" id="lab_push" name="lab_push" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" htmlFor="lab_push"></label>
</div>
</div>
{/*  Email  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">Email</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="lab_email" name="lab_email" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="lab_email"></label>
</div>
</div>
{/*  SMS  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">SMS Text</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="lab_sms" name="lab_sms" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="lab_sms"></label>
</div>
</div>
</div>
</div>
</section>
{/*  4. Emergency Notifications (Highlighted)  */}
<section className="bg-surface-container-lowest rounded-xl border-2 border-error-container shadow-level-1 overflow-hidden flex flex-col relative">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-error-container/30 to-transparent pointer-events-none"></div>
<div className="p-md border-b border-error-container/30 flex items-center gap-3 bg-error-container/10">
<div className="w-8 h-8 rounded-full bg-error text-on-error flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-sm icon-fill">warning</span>
</div>
<h3 className="font-label-md text-label-md text-error text-base">Emergency Notifications</h3>
</div>
<div className="p-lg flex-1 flex flex-col gap-6">
<p className="font-body-sm text-body-sm text-on-surface-variant">Critical patient vitals alerts, code blue calls, and overriding urgent hospital broadcasts.</p>
<div className="space-y-4 mt-auto">
{/*  In-App Push  */}
<div className="flex items-center justify-between opacity-70">
<div>
<div className="font-label-md text-label-md text-on-surface">App Push (Mandatory)</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-error appearance-none z-10 top-0 right-0" disabled="" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-error"></label>
</div>
</div>
{/*  Email  */}
<div className="flex items-center justify-between opacity-70">
<div>
<div className="font-label-md text-label-md text-on-surface">Email (Mandatory)</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-error appearance-none z-10 top-0 right-0" disabled="" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-error"></label>
</div>
</div>
{/*  SMS  */}
<div className="flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface">SMS Text</div>
</div>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-error appearance-none cursor-pointer z-10 top-0 right-0 transition-transform duration-200 ease-in-out" id="em_sms" name="em_sms" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-error cursor-pointer" htmlFor="em_sms"></label>
</div>
</div>
</div>
</div>
</section>
</div>
{/*  Action Bar  */}
<div className="mt-xl pt-lg border-t border-outline-variant/30 flex justify-end gap-4">
<button className="px-6 py-2.5 font-label-md text-label-md rounded-lg text-on-surface border border-outline-variant hover:bg-surface-container transition-colors">
                    Discard Changes
                </button>
<button className="px-6 py-2.5 font-label-md text-label-md rounded-lg bg-primary text-on-primary shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">save</span>
                    Save Preferences
                </button>
</div>
</div>
</main>

</div>
    </>
  );
}
