import React from 'react';

export default function AuditLogsMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background font-body-md text-body-md h-screen w-full overflow-hidden flex">

{/*  SideNavBar Component  */}
<aside className="bg-white dark:bg-gray-900 h-screen w-64 fixed left-0 top-0 overflow-y-auto border-r border-gray-200 dark:border-gray-800 shadow-none flex flex-col h-full py-6 z-50">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="local_hospital">local_hospital</span>
</div>
<div>
<div className="text-lg font-extrabold text-blue-600 font-h3">MedAdmin</div>
<div className="font-label-sm text-label-sm text-outline">Central Command</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1">
{/*  Inactive Tab  */}
<div className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:pl-2 transition-all duration-200 flex items-center gap-3 px-6 py-4 cursor-pointer">
<span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
<span>Analytics</span>
</div>
{/*  Active Tab  */}
<div className="font-manrope text-sm font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 flex items-center gap-3 px-6 py-4 cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="history_edu" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>history_edu</span>
<span>Audit Logs</span>
</div>
{/*  Inactive Tab  */}
<div className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:pl-2 transition-all duration-200 flex items-center gap-3 px-6 py-4 cursor-pointer">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span>Permissions</span>
</div>
{/*  Inactive Tab  */}
<div className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:pl-2 transition-all duration-200 flex items-center gap-3 px-6 py-4 cursor-pointer">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>System Settings</span>
</div>
{/*  Inactive Tab  */}
<div className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:pl-2 transition-all duration-200 flex items-center gap-3 px-6 py-4 cursor-pointer">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span>Profile</span>
</div>
</nav>
<div className="px-6 mt-auto pt-6 border-t border-outline-variant/30">
<div className="flex items-center gap-2 text-secondary-fixed font-label-md text-label-md">
<div className="w-2 h-2 rounded-full bg-secondary-fixed"></div>
                System Status: Optimal
            </div>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 ml-64 flex flex-col h-screen min-w-0 bg-background">
{/*  TopAppBar Component  */}
<header className="bg-white dark:bg-gray-900 docked full-width top-0 z-40 border-b border-gray-200 dark:border-gray-800 shadow-sm flex justify-between items-center px-6 h-16 w-full flex-shrink-0">
<div className="flex items-center gap-6">
{/*  Search Bar on left  */}
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full bg-surface-container pl-10 pr-4 py-2 rounded border-none text-on-surface font-body-sm text-body-sm focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors" placeholder="Search logs..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</div>
<div className="flex items-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</div>
<div className="flex items-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</div>
<div className="h-6 w-px bg-outline-variant mx-2"></div>
<button className="font-manrope text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 px-4 py-2 rounded">
                    Logout
                </button>
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A professional headshot of a mature male healthcare administrator in a bright, modern office setting. He is wearing a dark suit with a subtle blue tie. The lighting is soft and clinical, evoking trust, authority, and modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHAWGTTKVYbFMYfTyf9jbF99yBvG0uaDQIsjVhA8FqrAYYtxvMOwDWbEt62UPbi-7K73U7jBMJr-OtDIKe2tjWdUCk7N_oBMsLF28cZsoA8AYMGI-oVee94SLI068mL7GGVVr2vARaK4olP-jRfPzOGCnAxS9SDMcWJRMQTvqeplr07MmuY_8DKN8CwWJhCStBfeVIb5p8AsiZEFZVFJujKSQ0Zh-HZzQpAhb6haKVxhmdRa8z_K2n4le85O_lmoqBYNlqkVThITc_" />
</div>
</header>
{/*  Canvas  */}
<main className="flex-1 overflow-y-auto p-grid-margin space-y-grid-gutter">
{/*  Page Header  */}
<div className="flex justify-between items-end">
<div>
<h1 className="font-h2 text-h2 text-on-surface mb-1">Audit Logs</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Immutable record of system access and modifications.</p>
</div>
<button className="bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low text-on-surface font-label-md text-label-md px-md py-sm rounded flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined" data-icon="download">download</span>
                    Export CSV
                </button>
</div>
{/*  Security Counters (Bento Grid)  */}
<div className="grid grid-cols-4 gap-grid-gutter">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm flex flex-col gap-sm relative overflow-hidden">
<div className="w-1 h-full bg-primary absolute left-0 top-0"></div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Total Events (24h)</span>
<span className="material-symbols-outlined" data-icon="data_usage">data_usage</span>
</div>
<div className="font-h2 text-h2 text-on-surface">12,408</div>
<div className="font-body-sm text-body-sm text-secondary-fixed flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span> +2.4%
                    </div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm flex flex-col gap-sm relative overflow-hidden">
<div className="w-1 h-full bg-error absolute left-0 top-0"></div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">High Severity</span>
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
</div>
<div className="font-h2 text-h2 text-on-surface">4</div>
<div className="font-body-sm text-body-sm text-outline flex items-center gap-1">
                        Requires immediate review
                    </div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm flex flex-col gap-sm relative overflow-hidden">
<div className="w-1 h-full bg-tertiary absolute left-0 top-0"></div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Failed Logins</span>
<span className="material-symbols-outlined" data-icon="gpp_bad">gpp_bad</span>
</div>
<div className="font-h2 text-h2 text-on-surface">42</div>
<div className="font-body-sm text-body-sm text-tertiary flex items-center gap-1">
                        Across 12 unique IPs
                    </div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm flex flex-col gap-sm relative overflow-hidden">
<div className="w-1 h-full bg-secondary absolute left-0 top-0"></div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Active Sessions</span>
<span className="material-symbols-outlined" data-icon="people">people</span>
</div>
<div className="font-h2 text-h2 text-on-surface">156</div>
<div className="font-body-sm text-body-sm text-outline flex items-center gap-1">
                        Standard baseline
                    </div>
</div>
</div>
{/*  Filters Section  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-4 shadow-sm">
<div className="flex-1 flex gap-2">
{/*  Date Range  */}
<div className="relative group flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="calendar_today">calendar_today</span>
</div>
<input className="w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-body-sm rounded pl-10 pr-4 py-2 cursor-pointer hover:border-outline focus:outline-none" readOnly="" type="text" value="Last 24 Hours" />
</div>
{/*  User Role  */}
<div className="relative group flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="badge">badge</span>
</div>
<select className="w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-body-sm rounded pl-10 pr-8 py-2 cursor-pointer hover:border-outline appearance-none focus:outline-none">
<option>All Roles</option>
<option>Administrator</option>
<option>Physician</option>
<option>Nurse</option>
</select>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
</div>
{/*  Event Type  */}
<div className="relative group flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="filter_list">filter_list</span>
</div>
<select className="w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-body-sm rounded pl-10 pr-8 py-2 cursor-pointer hover:border-outline appearance-none focus:outline-none">
<option>All Event Types</option>
<option>Authentication</option>
<option>Record Access</option>
<option>Settings Modification</option>
</select>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
</div>
</div>
<button className="bg-surface-container text-on-surface hover:bg-surface-container-highest px-md py-2 rounded font-label-md text-label-md transition-colors border border-outline-variant">
                    Reset
                </button>
</div>
{/*  Data Table Card  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface border-b border-outline-variant text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
<th className="py-3 px-md w-48">Timestamp</th>
<th className="py-3 px-md">User</th>
<th className="py-3 px-md">Action / Event</th>
<th className="py-3 px-md w-40">IP Address</th>
<th className="py-3 px-md w-32">Status</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-outline-variant/50">
<tr className="hover:bg-surface-container-low transition-colors even:bg-surface">
<td className="py-3 px-md text-outline">Oct 24, 14:32:01</td>
<td className="py-3 px-md font-medium">Dr. Sarah Jenkins<br /><span className="text-outline font-normal text-[12px]">Physician</span></td>
<td className="py-3 px-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline" data-icon="visibility">visibility</span>
                                        Accessed Patient Record (ID: P-9942)
                                    </div>
</td>
<td className="py-3 px-md font-mono text-[12px] text-outline">192.168.1.45</td>
<td className="py-3 px-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-secondary-fixed text-on-secondary-fixed-variant">Success</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors even:bg-surface">
<td className="py-3 px-md text-outline">Oct 24, 14:30:15</td>
<td className="py-3 px-md font-medium">System Automated<br /><span className="text-outline font-normal text-[12px]">Service Account</span></td>
<td className="py-3 px-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline" data-icon="sync">sync</span>
                                        Database Backup Initiated
                                    </div>
</td>
<td className="py-3 px-md font-mono text-[12px] text-outline">10.0.0.5</td>
<td className="py-3 px-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-secondary-fixed text-on-secondary-fixed-variant">Success</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors even:bg-surface">
<td className="py-3 px-md text-outline">Oct 24, 14:28:44</td>
<td className="py-3 px-md font-medium">Unknown User<br /><span className="text-outline font-normal text-[12px]">Unauthenticated</span></td>
<td className="py-3 px-md text-on-error-container">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-error" data-icon="login">login</span>
                                        Failed Login Attempt (Invalid Password)
                                    </div>
</td>
<td className="py-3 px-md font-mono text-[12px] text-error">203.0.113.42</td>
<td className="py-3 px-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-error-container text-on-error-container">Failed</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors even:bg-surface">
<td className="py-3 px-md text-outline">Oct 24, 14:15:00</td>
<td className="py-3 px-md font-medium">Admin User<br /><span className="text-outline font-normal text-[12px]">Administrator</span></td>
<td className="py-3 px-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline" data-icon="manage_accounts">manage_accounts</span>
                                        Modified Role Permissions (Group: Nurses)
                                    </div>
</td>
<td className="py-3 px-md font-mono text-[12px] text-outline">192.168.1.10</td>
<td className="py-3 px-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-secondary-fixed text-on-secondary-fixed-variant">Success</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors even:bg-surface">
<td className="py-3 px-md text-outline">Oct 24, 14:02:11</td>
<td className="py-3 px-md font-medium">Nurse E. Thorne<br /><span className="text-outline font-normal text-[12px]">Nurse</span></td>
<td className="py-3 px-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline" data-icon="edit_document">edit_document</span>
                                        Updated Vitals Record (ID: P-8821)
                                    </div>
</td>
<td className="py-3 px-md font-mono text-[12px] text-outline">192.168.2.105</td>
<td className="py-3 px-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-secondary-fixed text-on-secondary-fixed-variant">Success</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors even:bg-surface">
<td className="py-3 px-md text-outline">Oct 24, 13:55:09</td>
<td className="py-3 px-md font-medium">Dr. M. Chen<br /><span className="text-outline font-normal text-[12px]">Physician</span></td>
<td className="py-3 px-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline" data-icon="login">login</span>
                                        Successful Authentication
                                    </div>
</td>
<td className="py-3 px-md font-mono text-[12px] text-outline">192.168.1.50</td>
<td className="py-3 px-md">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-secondary-fixed text-on-secondary-fixed-variant">Success</span>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="bg-surface border-t border-outline-variant p-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div className="pl-2">Showing 1 to 6 of 12,408 entries</div>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-surface-container-highest disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-medium">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-highest flex items-center justify-center font-medium">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-highest flex items-center justify-center font-medium">3</button>
<span className="w-8 h-8 flex items-center justify-center">...</span>
<button className="p-1 rounded hover:bg-surface-container-highest">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
<div className="h-8 w-full"></div> {/*  Bottom Spacer  */}
</main>
</div>

</div>
    </>
  );
}
