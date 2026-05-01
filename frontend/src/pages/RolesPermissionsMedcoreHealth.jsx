import React from 'react';

export default function RolesPermissionsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md h-screen flex overflow-hidden antialiased">

{/*  Shared Component: SideNavBar  */}
<aside className="hidden md:flex bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 h-screen w-64 fixed left-0 top-0 overflow-y-auto border-r border-gray-200 dark:border-gray-800 shadow-none flex flex-col h-full py-6 z-50">
{/*  Header / Brand  */}
<div className="px-6 pb-lg mb-sm border-b border-surface-variant flex items-center gap-sm">
<img alt="Hospital Logo" className="w-10 h-10 rounded-lg object-cover" data-alt="A sleek, modern, minimalist logo design for a high-tech corporate hospital network, featuring geometric abstract shapes in deep corporate blue and sterile white. The logo conveys trust, clinical precision, and advanced medical care. It is set against a clean, flat light-mode background, emphasizing sharp lines and professional healthcare branding without any clutter or distraction." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDtERQbdRYcMi_geTXh-BXQO9E-AE-CmwLLQLhSkVp05pGM_6-Jn1Mx6_DlmqN8EnadiPEhi-NJH7VvKtvGkKUCtgWjjRc9EWiHA46dpSGhctJyH92UKBPol3IT4rlaBvBYSEfLYsR3liGqdLV2JaWPpc_4_uacnT9fcjWy5Egl8hcP7Lou_T6qwi449yZN6aiU8jXIR64B_eAoaUEOMCrvcfDEZHVZnweGN-75tostSrFOPHDku3VnD5fErtFIaE-_ndRCZIaSkMw" />
<div>
<h1 className="font-h1 text-lg font-extrabold text-blue-600 tracking-tight leading-none">MedAdmin</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Central Command</p>
</div>
</div>
{/*  Navigation Links  */}
<nav className="flex-1 flex flex-col gap-base mt-md">
<a className="font-manrope text-sm font-semibold flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">monitoring</span>
<span>Analytics</span>
</a>
<a className="font-manrope text-sm font-semibold flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span>Audit Logs</span>
</a>
{/*  ACTIVE TAB  */}
<a className="font-manrope text-sm font-semibold flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600" href="#">
<span className="material-symbols-outlined icon-fill">admin_panel_settings</span>
<span>Permissions</span>
</a>
<a className="font-manrope text-sm font-semibold flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">settings</span>
<span>System Settings</span>
</a>
<a className="font-manrope text-sm font-semibold flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">person</span>
<span>Profile</span>
</a>
</nav>
{/*  CTA / Footer  */}
<div className="px-6 mt-auto">
<div className="bg-surface-container-low rounded-lg p-md border border-outline-variant flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">System Status: Optimal</span>
</div>
</div>
</aside>
{/*  Main Content Wrapper  */}
<div className="flex-1 flex flex-col ml-0 md:ml-64 w-full relative">
{/*  Shared Component: TopAppBar  */}
<header className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 docked full-width top-0 z-40 border-b border-gray-200 dark:border-gray-800 shadow-sm flex justify-between items-center px-6 h-16 w-full sticky">
<div className="flex items-center gap-md">
{/*  Search Bar Placeholder  */}
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input className="font-body-sm text-body-sm pl-10 pr-4 py-2 bg-surface-container border-none rounded-full focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors w-64 placeholder:text-outline" placeholder="Search resources..." type="text" />
</div>
</div>
<div className="flex items-center gap-sm">
<button className="font-manrope text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full flex items-center justify-center relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="font-manrope text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">help_outline</span>
</button>
<button className="font-manrope text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-6 w-px bg-outline-variant mx-2"></div>
<div className="flex items-center gap-sm pl-2 cursor-pointer hover:opacity-80 transition-opacity">
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-surface-variant object-cover" data-alt="A professional corporate headshot of a confident, diverse medical administrator wearing smart business attire. The lighting is bright, soft, and high-key, creating a pristine light-mode aesthetic typical of an advanced clinical environment. The background is a slightly blurred, modern, sterile white hospital corridor, emphasizing a tone of calm efficiency, authority, and medical professionalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmzbBWZKWCpAIZrBPwnVPZ8-3KttL11aCIESnuKl9Oeo1tHtY0zWfPheq7smT-KQLm9dUu-KpxFUlZwwTz4Lg-Pyj69xaAX9RQflnxr93w9hp6wspML1rpDNB2Lf8SXh3dTnb8rC32tJmh4pYHulFG__nyfzpkotMVLB5wZfzGbPGKVp4kSIUoBdBw42LS9D1zfXHxCp1YgmloZV7kBqyReK8hgX1FEfUDRLjDsEUbthaVHNQHMDg67_ntmIXbrjyDFd-BBj2Ah-Kh" />
</div>
</div>
</header>
{/*  Canvas / Page Content  */}
<main className="flex-1 overflow-y-auto p-grid-margin w-full max-w-7xl mx-auto">
{/*  Page Header  */}
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md mb-xl">
<div>
<h2 className="font-h1 text-h1 text-on-surface mb-xs">Roles & Permissions</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage systemic access controls and operational boundaries.</p>
</div>
<button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Add Custom Role
                </button>
</div>
{/*  Content Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter items-start">
{/*  Left Column: Roles List  */}
<div className="lg:col-span-4 flex flex-col gap-md">
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
<div className="p-md border-b border-surface-variant bg-surface-container-low/50 flex justify-between items-center">
<h3 className="font-h3 text-h3 text-on-surface">System Roles</h3>
<span className="material-symbols-outlined text-outline">filter_list</span>
</div>
<ul className="flex flex-col">
{/*  Active Role List Item  */}
<li className="p-md border-l-4 border-primary bg-primary-fixed/20 flex items-center justify-between cursor-pointer transition-colors">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Admin</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Full system control</p>
</div>
<span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2 py-1 rounded">Full</span>
</li>
{/*  Inactive Role List Items  */}
<li className="p-md border-l-4 border-transparent hover:bg-surface-container-low flex items-center justify-between cursor-pointer transition-colors border-t border-surface-variant">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Doctor</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Clinical charting & orders</p>
</div>
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded">High</span>
</li>
<li className="p-md border-l-4 border-transparent hover:bg-surface-container-low flex items-center justify-between cursor-pointer transition-colors border-t border-surface-variant">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Nurse</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Vitals & medication administration</p>
</div>
<span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded">Medium</span>
</li>
<li className="p-md border-l-4 border-transparent hover:bg-surface-container-low flex items-center justify-between cursor-pointer transition-colors border-t border-surface-variant">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Pharmacist</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Inventory & dispensing</p>
</div>
<span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded">Medium</span>
</li>
<li className="p-md border-l-4 border-transparent hover:bg-surface-container-low flex items-center justify-between cursor-pointer transition-colors border-t border-surface-variant">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Patient</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Portal access only</p>
</div>
<span className="bg-surface-container text-outline font-label-sm text-label-sm px-2 py-1 rounded">Low</span>
</li>
</ul>
</div>
</div>
{/*  Right Column: Permission Matrix  */}
<div className="lg:col-span-8">
<div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant overflow-hidden flex flex-col h-full">
{/*  Matrix Header  */}
<div className="p-lg border-b border-surface-variant flex items-center justify-between bg-surface-bright">
<div>
<h3 className="font-h2 text-h2 text-on-surface mb-1">Admin Permissions Matrix</h3>
<p className="font-body-sm text-body-sm text-outline">Modifying access vectors for the Admin security group.</p>
</div>
<button className="font-label-md text-label-md text-primary border border-outline-variant hover:bg-surface-container-low px-4 py-2 rounded-lg transition-colors bg-surface-container-lowest">
                                Save Changes
                            </button>
</div>
{/*  Matrix Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-lowest sticky top-0 z-10 border-b-2 border-surface-variant shadow-sm">
<tr>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant w-1/3">Module Function</th>
<th className="py-md px-md font-label-md text-label-md text-on-surface-variant text-center">View</th>
<th className="py-md px-md font-label-md text-label-md text-on-surface-variant text-center">Create</th>
<th className="py-md px-md font-label-md text-label-md text-on-surface-variant text-center">Edit</th>
<th className="py-md px-md font-label-md text-label-md text-on-surface-variant text-center">Delete</th>
<th className="py-md px-md font-label-md text-label-md text-on-surface-variant text-center">Approve</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
{/*  Row 1  */}
<tr className="border-b border-surface-variant/50 hover:bg-surface-container-lowest bg-surface-container-low/30 transition-colors">
<td className="py-sm px-lg font-label-sm text-label-sm text-on-surface flex items-center gap-2 h-[60px]">
<span className="material-symbols-outlined text-outline text-[20px]">personal_injury</span>
                                            Patient Records
                                        </td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
</tr>
{/*  Row 2  */}
<tr className="border-b border-surface-variant/50 hover:bg-surface-container-low/50 bg-surface-container-lowest transition-colors">
<td className="py-sm px-lg font-label-sm text-label-sm text-on-surface flex items-center gap-2 h-[60px]">
<span className="material-symbols-outlined text-outline text-[20px]">receipt_long</span>
                                            Billing & Invoicing
                                        </td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
</tr>
{/*  Row 3  */}
<tr className="border-b border-surface-variant/50 hover:bg-surface-container-lowest bg-surface-container-low/30 transition-colors">
<td className="py-sm px-lg font-label-sm text-label-sm text-on-surface flex items-center gap-2 h-[60px]">
<span className="material-symbols-outlined text-outline text-[20px]">medication</span>
                                            Pharmacy Inventory
                                        </td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
</tr>
{/*  Row 4  */}
<tr className="border-b border-surface-variant/50 hover:bg-surface-container-low/50 bg-surface-container-lowest transition-colors">
<td className="py-sm px-lg font-label-sm text-label-sm text-on-surface flex items-center gap-2 h-[60px]">
<span className="material-symbols-outlined text-outline text-[20px]">groups</span>
                                            Staff Directory
                                        </td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
</tr>
{/*  Row 5  */}
<tr className="border-b border-surface-variant/50 hover:bg-surface-container-lowest bg-surface-container-low/30 transition-colors">
<td className="py-sm px-lg font-label-sm text-label-sm text-on-surface flex items-center gap-2 h-[60px]">
<span className="material-symbols-outlined text-outline text-[20px]">bar_chart</span>
                                            System Reports
                                        </td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
</tr>
{/*  Row 6  */}
<tr className="hover:bg-surface-container-low/50 bg-surface-container-lowest transition-colors">
<td className="py-sm px-lg font-label-sm text-label-sm text-on-surface flex items-center gap-2 h-[60px]">
<span className="material-symbols-outlined text-outline text-[20px]">settings_system_daydream</span>
                                            Core Configuration
                                        </td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-primary icon-fill cursor-pointer">check_box</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
<td className="py-sm px-md text-center"><span className="material-symbols-outlined text-outline cursor-pointer">check_box_outline_blank</span></td>
</tr>
</tbody>
</table>
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
