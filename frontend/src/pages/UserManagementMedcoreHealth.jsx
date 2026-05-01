import React from 'react';

export default function UserManagementMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">

<aside className="bg-white dark:bg-slate-900 font-manrope text-sm font-medium fixed left-0 top-0 h-screen w-64 rounded-none border-r border-slate-200 dark:border-slate-800 flat no shadows z-50 flex flex-col hidden md:flex">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
<div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined fill">local_hospital</span>
</div>
<div>
<div className="text-xl font-black text-blue-700 dark:text-blue-400">MedCore Health</div>
<div className="font-label-sm text-outline">Admin Portal</div>
</div>
</div>
<nav className="flex flex-col gap-1 py-4 flex-1 overflow-y-auto px-2">
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md">Dashboard</span>
</a>
<a className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined fill">group</span>
<span className="font-label-md">User Management</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-label-md">Doctor Approvals</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined">corporate_fare</span>
<span className="font-label-md">Departments</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined">event</span>
<span className="font-label-md">Appointments</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md">Billing</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all tap-highlight-none active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md">Settings</span>
</a>
</nav>
</aside>
<div className="flex-1 flex flex-col md:ml-64 w-full h-full">
<header className="bg-white dark:bg-slate-900 font-manrope antialiased tracking-tight docked full-width top-0 sticky z-40 border-b border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center h-16 px-6 w-full ml-auto">
<div className="flex items-center gap-4 w-1/3">
<div className="relative w-full max-w-md hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-DEFAULT py-2 pl-10 pr-4 font-body-sm text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors" placeholder="Search..." type="text" />
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors Active: opacity-80 duration-150 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-white"></span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors Active: opacity-80 duration-150">
<span className="material-symbols-outlined">account_circle</span>
</button>
<div className="ml-2 pl-4 border-l border-slate-200 flex items-center gap-3 cursor-pointer">
<img alt="Administrator Profile" className="w-8 h-8 rounded-full object-cover" data-alt="A professional headshot of a confident male hospital administrator in his 40s. He is wearing a tailored navy blue suit with a subtle light blue tie. The lighting is bright, soft, and modern, reflecting a clinical yet welcoming environment. The background is slightly blurred but suggests a pristine, high-tech hospital corridor with light grey and white tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Btu9nQQTvWBNGy3YZEbtf3NUtHNJzelR8rLFWotc7IKaXEGKluqhrcZjY1o5rwg15hRmsqiQx0b8HDQJm4MLukJ8cOXwg31TlG_zwfTAv566yQvzGFeU3aL_FARKNvAY3Bp0bWsoy-9vILcLJcxa65Uqq4LHj2D_2_6zj4_IrdfqqQ4EgsWN7Zeksk9dkfoVqZV_iOl7tAHkY_t6LY3Ss_ZICdEw96_YbU0XMPTCmatl6SZ1DAlbDpB8zp9Ak55I-dGGXJNKWCUD" />
</div>
</div>
</header>
<main className="flex-1 overflow-y-auto p-grid-margin bg-background">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-xl">
<div>
<h1 className="font-h1 text-h1 text-on-surface mb-2">User Management</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage hospital staff, administrators, and patient records.</p>
</div>
<button className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-DEFAULT flex items-center gap-2 hover:bg-surface-tint transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
                    Invite New User
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter mb-grid-margin">
<div className="bg-surface-container-lowest rounded-xl p-lg shadow-level-1 border border-surface-variant flex items-center justify-between">
<div>
<p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Users</p>
<p className="font-h2 text-h2 text-on-surface">12,450</p>
</div>
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
<span className="material-symbols-outlined">group</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-lg shadow-level-1 border border-surface-variant flex items-center justify-between">
<div>
<p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Active Doctors</p>
<p className="font-h2 text-h2 text-on-surface">842</p>
</div>
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
<span className="material-symbols-outlined">stethoscope</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-lg shadow-level-1 border border-surface-variant flex items-center justify-between">
<div>
<p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Pending Approvals</p>
<p className="font-h2 text-h2 text-on-surface">34</p>
</div>
<div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined">pending_actions</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant flex flex-col">
<div className="p-lg border-b border-surface-variant">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
<div className="flex bg-surface-container-low p-1 rounded-lg">
<button className="px-4 py-2 rounded-DEFAULT bg-primary text-on-primary shadow-sm font-label-md transition-colors">Patients</button>
<button className="px-4 py-2 rounded-DEFAULT text-on-surface-variant hover:text-on-surface font-label-md transition-colors">Doctors</button>
<button className="px-4 py-2 rounded-DEFAULT text-on-surface-variant hover:text-on-surface font-label-md transition-colors">Staff</button>
<button className="px-4 py-2 rounded-DEFAULT text-on-surface-variant hover:text-on-surface font-label-md transition-colors">Admins</button>
</div>
<div className="flex items-center gap-3 w-full lg:w-auto">
<div className="relative flex-1 lg:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-low border border-transparent rounded-DEFAULT py-2 pl-10 pr-4 font-body-sm text-on-surface focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-colors" placeholder="Search users..." type="text" />
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-DEFAULT text-on-surface font-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                                Filters
                            </button>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface font-label-md text-on-surface-variant border-b border-surface-variant">
<th className="py-4 px-6 font-semibold">User</th>
<th className="py-4 px-6 font-semibold">Contact</th>
<th className="py-4 px-6 font-semibold">Role</th>
<th className="py-4 px-6 font-semibold">Status</th>
<th className="py-4 px-6 font-semibold">Last Login</th>
<th className="py-4 px-6 font-semibold w-16 text-center">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-on-surface">
<tr className="border-b border-surface-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center font-label-md">ES</div>
<div>
<div className="font-medium text-on-surface">Eleanor Sterling</div>
<div className="text-outline text-xs mt-0.5">ID: PT-84920</div>
</div>
</div>
</td>
<td className="py-3 px-6">e.sterling@example.com<br /><span className="text-outline text-xs">+1 (555) 293-4819</span></td>
<td className="py-3 px-6">Patient</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span> Active
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">Today, 09:41 AM</td>
<td className="py-3 px-6 text-center">
<button className="text-outline hover:text-on-surface transition-colors p-1 rounded-DEFAULT hover:bg-surface-variant">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="border-b border-surface-variant bg-background hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<img alt="Dr. Marcus Chen" className="w-10 h-10 rounded-full object-cover" data-alt="A professional medical headshot of an Asian male doctor in his mid-30s. He is wearing a clean white lab coat over a light blue scrub top. A stethoscope is draped around his neck. The lighting is pristine and clinical, casting soft highlights on his face. The background is a soft, out-of-focus hospital setting, emphasizing a modern corporate and trustworthy aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOiwZ-aHF-I00mKj60Sa_WqdiO9WAXtZYPnTYTNgMQOTwlRcIvk4N1oPPRJUSdVXnAOGYjRMNTKkeo5zbi96SGeIeWZhH5K-0ovmW5WVWvQh9uih7HsrLLn_xrttUnQ98kj6gtIH5afLIg4XcdecCk8jCLSI5FR4F8Yyyie270wodz-65bdt5f9PUCXKHrznSQV1JaHEWKdUGC1D08jTcyQ08goNAdBzLfV6AQu-t4y1rL4tf1QhiJ6G-wKIzAc09KiMRvx0N_-S3Y" />
<div>
<div className="font-medium text-on-surface">Dr. Marcus Chen</div>
<div className="text-outline text-xs mt-0.5">Cardiology Dept.</div>
</div>
</div>
</td>
<td className="py-3 px-6">m.chen@medcore.org<br /><span className="text-outline text-xs">Ext: 4092</span></td>
<td className="py-3 px-6">Attending Physician</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span> Active
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">Yesterday, 14:20 PM</td>
<td className="py-3 px-6 text-center">
<button className="text-outline hover:text-on-surface transition-colors p-1 rounded-DEFAULT hover:bg-surface-variant">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="border-b border-surface-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-dim text-on-surface-variant flex items-center justify-center font-label-md">JP</div>
<div>
<div className="font-medium text-on-surface">Jordan Pierce</div>
<div className="text-outline text-xs mt-0.5">ID: ST-11029</div>
</div>
</div>
</td>
<td className="py-3 px-6">j.pierce@medcore.org<br /><span className="text-outline text-xs">+1 (555) 837-1022</span></td>
<td className="py-3 px-6">Radiology Tech</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span> Pending
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">Never</td>
<td className="py-3 px-6 text-center">
<button className="text-outline hover:text-on-surface transition-colors p-1 rounded-DEFAULT hover:bg-surface-variant">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="border-b border-surface-variant bg-background hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-dim text-on-surface-variant flex items-center justify-center font-label-md">AW</div>
<div>
<div className="font-medium text-on-surface">Alicia Vance</div>
<div className="text-outline text-xs mt-0.5">ID: AD-0041</div>
</div>
</div>
</td>
<td className="py-3 px-6">a.vance@medcore.org<br /><span className="text-outline text-xs">Ext: 1004</span></td>
<td className="py-3 px-6">System Admin</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-error-container text-on-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error mr-1.5"></span> Suspended
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">Oct 12, 2023</td>
<td className="py-3 px-6 text-center">
<button className="text-outline hover:text-on-surface transition-colors p-1 rounded-DEFAULT hover:bg-surface-variant">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-surface-variant flex items-center justify-between bg-surface-container-lowest rounded-b-xl">
<span className="font-body-sm text-on-surface-variant">Showing 1 to 4 of 12,450 entries</span>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT border border-surface-variant text-outline hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT bg-primary text-on-primary font-label-sm transition-colors">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT border border-surface-variant text-on-surface hover:bg-surface-container-low font-label-sm transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT border border-surface-variant text-on-surface hover:bg-surface-container-low font-label-sm transition-colors">3</button>
<span className="w-8 h-8 flex items-center justify-center text-outline">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT border border-surface-variant text-outline hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
