import React from 'react';

export default function BillingFinanceMedcoreHealth() {
  return (
    <>
      <div className="bg-background text-on-background min-h-screen flex flex-col md:flex-row antialiased">

{/*  SideNavBar (Web)  */}
<nav className="hidden md:flex fixed left-0 top-0 flex-col h-full z-40 w-64 border-r bg-white dark:bg-gray-950 text-blue-600 dark:text-blue-400 font-manrope text-sm font-medium border-r border-gray-200 dark:border-gray-800">
<div className="p-6">
<h1 className="text-lg font-black text-gray-900 dark:text-white">Hospital Admin</h1>
<p className="text-xs text-outline mt-1">Clinical Excellence</p>
</div>
<div className="flex flex-col flex-grow mt-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">payments</span>
                Finance
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">hotel</span>
                Beds
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">medical_services</span>
                Pharmacy
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">biotech</span>
                Lab
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">campaign</span>
                News
            </a>
</div>
<div className="p-4 mt-auto space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">contact_support</span>
                Support
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 cursor-pointer transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</nav>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col md:ml-64 min-w-0">
{/*  TopNavBar  */}
<header className="flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-blue-600 dark:text-blue-400 font-manrope antialiased border-b border-gray-200 dark:border-gray-800 shadow-sm">
<div className="flex items-center gap-4">
<div className="md:hidden text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">MedAdmin Pro</div>
<div className="hidden md:flex relative text-gray-500">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm font-body-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all w-64" placeholder="Search..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded-full active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded-full active:opacity-80 transition-all duration-200 hidden sm:block">
<span className="material-symbols-outlined">help_outline</span>
</button>
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-gray-200 object-cover" data-alt="A professional headshot of a hospital administrator in a clean, brightly lit clinical setting. The lighting is soft and even, highlighting a trustworthy and competent expression. The background is a subtle, out-of-focus white medical corridor. High-key light-mode aesthetic with corporate blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAwM_gxVbHMBEy5gZAuY-8Vc1OEm_sTmkXVc_JKWiTNtkTUI8nySM6quBFzV-_nP4yDSZabu2OceaqGGMmKEuySGEikC_WWGMlJvLltRD2QryxBV2tZbC8RCV7NBLCopODrYKVMDztQjUttPM22iAvf0nkJg4i2uIET0WDBigDDE6kA7wh3TTRlUnHKvfeUbVti3J9Ow3mhCJPukkhWzflt04qItxVw5tsfKKXhq2t6vkTlKdAbUTy560gXNsQcQscbfmEkXk9B6q9" />
</div>
</header>
{/*  Page Content  */}
<main className="flex-1 p-6 md:p-8 overflow-y-auto w-full max-w-[1600px] mx-auto">
{/*  Page Header  */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
<div>
<h2 className="font-h2 text-h2 text-on-background">Billing & Finance</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage hospital revenue, claims, and patient invoices.</p>
</div>
<div className="flex gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-surface border border-outline-variant text-primary rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                        Filters
                    </button>
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm">
<span className="material-symbols-outlined text-[20px]">download</span>
                        Export Reports
                    </button>
</div>
</div>
{/*  Revenue Summary Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
{/*  Total Revenue  */}
<div className="bg-white rounded-xl p-6 shadow-level-1 border border-surface-variant flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary-fixed rounded-lg text-primary">
<span className="material-symbols-outlined filled text-2xl">account_balance</span>
</div>
<span className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md bg-secondary-fixed-dim/20 px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                            +12.5%
                        </span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Revenue (MTD)</p>
<h3 className="font-h3 text-h3 text-on-background">$2,458,900</h3>
</div>
</div>
{/*  Pending Payments  */}
<div className="bg-white rounded-xl p-6 shadow-level-1 border border-surface-variant flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-tertiary-fixed rounded-lg text-tertiary">
<span className="material-symbols-outlined filled text-2xl">pending_actions</span>
</div>
<span className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md bg-tertiary-fixed-dim/20 px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                            48h Avg
                        </span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Pending Payments</p>
<h3 className="font-h3 text-h3 text-on-background">$432,150</h3>
</div>
</div>
{/*  Insurance Claims  */}
<div className="bg-white rounded-xl p-6 shadow-level-1 border border-surface-variant flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-surface-container-highest rounded-lg text-on-surface">
<span className="material-symbols-outlined filled text-2xl">verified_user</span>
</div>
<span className="inline-flex items-center gap-1 text-on-surface-variant font-label-md text-label-md bg-surface-variant px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]">hourglass_empty</span>
                            142 Open
                        </span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Claims processing</p>
<h3 className="font-h3 text-h3 text-on-background">$1,120,400</h3>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Main Invoices Table Area  */}
<div className="lg:col-span-2 flex flex-col gap-8">
<div className="bg-white rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
<div className="p-6 border-b border-surface-variant flex justify-between items-center bg-surface-container-lowest">
<h3 className="font-h3 text-[20px] text-on-background">Recent Invoices</h3>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="pl-9 pr-4 py-1.5 bg-surface-container-low border-none rounded-md text-sm font-body-sm focus:ring-2 focus:ring-primary focus:bg-white w-48 sm:w-64 transition-all" placeholder="Search ID or Patient..." type="text" />
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface border-b border-surface-variant font-label-md text-label-md text-on-surface-variant">
<th className="py-3 px-4 w-24">Invoice ID</th>
<th className="py-3 px-4">Patient Name</th>
<th className="py-3 px-4 w-32">Date</th>
<th className="py-3 px-4 w-32 text-right">Amount</th>
<th className="py-3 px-4 w-32 text-center">Status</th>
<th className="py-3 px-4 w-16 text-center">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-background divide-y divide-surface-variant">
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="py-3 px-4 font-medium text-primary">#INV-8924</td>
<td className="py-3 px-4">Sarah Jenkins</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 24, 2023</td>
<td className="py-3 px-4 text-right font-medium">$1,250.00</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary-fixed text-on-secondary-container">Paid</span>
</td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr className="bg-surface hover:bg-surface-container-lowest transition-colors group">
<td className="py-3 px-4 font-medium text-primary">#INV-8923</td>
<td className="py-3 px-4">Michael Chang</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 24, 2023</td>
<td className="py-3 px-4 text-right font-medium">$4,500.00</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-tertiary-fixed text-on-tertiary-container">Pending</span>
</td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="py-3 px-4 font-medium text-primary">#INV-8922</td>
<td className="py-3 px-4">Emily Rodriguez</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 23, 2023</td>
<td className="py-3 px-4 text-right font-medium">$850.00</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-error-container text-on-error-container">Overdue</span>
</td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr className="bg-surface hover:bg-surface-container-lowest transition-colors group">
<td className="py-3 px-4 font-medium text-primary">#INV-8921</td>
<td className="py-3 px-4">Robert Wilson</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 23, 2023</td>
<td className="py-3 px-4 text-right font-medium">$12,400.00</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-variant text-on-surface-variant">Draft</span>
</td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="py-3 px-4 font-medium text-primary">#INV-8920</td>
<td className="py-3 px-4">Amanda Foster</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 22, 2023</td>
<td className="py-3 px-4 text-right font-medium">$3,200.00</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary-fixed text-on-secondary-container">Paid</span>
</td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-surface-variant flex justify-between items-center text-sm">
<span className="text-on-surface-variant">Showing 1 to 5 of 248 entries</span>
<div className="flex gap-2">
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-50">Prev</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">Next</button>
</div>
</div>
</div>
</div>
{/*  Side Panel: Claims & Refunds  */}
<div className="flex flex-col gap-6">
{/*  Insurance Claims Tracker  */}
<div className="bg-white rounded-xl shadow-level-1 border border-surface-variant p-6">
<div className="flex justify-between items-center mb-6 border-b border-surface-variant pb-4">
<h3 className="font-h3 text-[18px] text-on-background">Claims Tracker</h3>
<button className="text-primary hover:text-on-primary-fixed-variant transition-colors font-label-sm">View All</button>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-surface-variant">
<div className="p-2 bg-error-container text-on-error-container rounded-md mt-1">
<span className="material-symbols-outlined text-[18px]">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-label-md text-on-background">BlueCross Shield</p>
<span className="font-label-sm text-error">Denied</span>
</div>
<p className="font-body-sm text-on-surface-variant mt-1 text-xs">Patient: Sarah J. • Missing Documentation</p>
<button className="mt-2 text-xs font-label-md text-primary hover:underline">Review Details</button>
</div>
</div>
<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-surface-variant">
<div className="p-2 bg-tertiary-fixed text-on-tertiary-container rounded-md mt-1">
<span className="material-symbols-outlined text-[18px]">sync</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-label-md text-on-background">Medicare</p>
<span className="font-label-sm text-tertiary">In Review</span>
</div>
<p className="font-body-sm text-on-surface-variant mt-1 text-xs">Batch #4421 • 45 Claims Processing</p>
</div>
</div>
<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-surface-variant">
<div className="p-2 bg-secondary-fixed text-on-secondary-container rounded-md mt-1">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-label-md text-on-background">Aetna</p>
<span className="font-label-sm text-secondary">Approved</span>
</div>
<p className="font-body-sm text-on-surface-variant mt-1 text-xs">Batch #4418 • Funds depositing</p>
</div>
</div>
</div>
</div>
{/*  Quick Refund Action  */}
<div className="bg-gradient-to-br from-surface to-surface-container-low rounded-xl shadow-level-1 border border-surface-variant p-6">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary text-[24px]">currency_exchange</span>
<h3 className="font-h3 text-[18px] text-on-background">Refund Management</h3>
</div>
<p className="font-body-sm text-on-surface-variant mb-5">Initiate a refund for overpayment or cancelled procedures.</p>
<div className="space-y-3">
<div>
<label className="block font-label-sm text-on-surface-variant mb-1">Invoice ID</label>
<input className="w-full bg-white border border-outline-variant rounded-md px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="e.g. INV-8924" type="text" />
</div>
<button className="w-full bg-white border border-primary text-primary hover:bg-primary-fixed transition-colors font-label-md py-2 rounded-md shadow-sm">
                                Lookup Invoice
                            </button>
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
