import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const ADMIN_NAV_ITEMS = [
  { icon: 'payments', label: 'Finance', to: '/billing_finance_medcore_health', active: true },
  { icon: 'hotel', label: 'Beds', to: '/bed_management_medcore_health' },
  { icon: 'medical_services', label: 'Pharmacy', to: '/pharmacy_inventory_medcore_health' },
  { icon: 'biotech', label: 'Lab', to: '/laboratory_management_medcore_health' },
  { icon: 'campaign', label: 'News', to: '/announcements_medcore_health' },
  { icon: 'calendar_month', label: 'Staff Planner', to: '/staff_shift_planner_medcore_health' },
];

const AGING_DATA = [
  { id: '#INV-8810', patient: 'Emily Rodriguez', dept: 'Cardiology', amount: 850, age: 92, bucket: '90+' },
  { id: '#INV-8795', patient: 'John Carver', dept: 'Orthopedics', amount: 3400, age: 78, bucket: '61-90' },
  { id: '#INV-8812', patient: 'Linda Marsh', dept: 'Neurology', amount: 1200, age: 61, bucket: '61-90' },
  { id: '#INV-8820', patient: 'Robert Wilson', dept: 'Surgery', amount: 12400, age: 45, bucket: '31-60' },
  { id: '#INV-8825', patient: 'Tracy Brooks', dept: 'General', amount: 560, age: 38, bucket: '31-60' },
  { id: '#INV-8830', patient: 'Michael Chang', dept: 'Dermatology', amount: 4500, age: 18, bucket: '0-30' },
  { id: '#INV-8831', patient: 'Amanda Foster', dept: 'Radiology', amount: 990, age: 12, bucket: '0-30' },
];

const BUCKET_CONFIG = {
  '0-30': { label: '0–30 Days', color: 'bg-blue-50 text-blue-700', badge: 'bg-blue-100 text-blue-700', bar: 'bg-blue-500' },
  '31-60': { label: '31–60 Days', color: 'bg-amber-50 text-amber-700', badge: 'bg-amber-100 text-amber-700', bar: 'bg-amber-500' },
  '61-90': { label: '61–90 Days', color: 'bg-orange-50 text-orange-700', badge: 'bg-orange-100 text-orange-700', bar: 'bg-orange-500' },
  '90+': { label: '90+ Days', color: 'bg-red-50 text-red-700', badge: 'bg-red-100 text-red-700', bar: 'bg-red-500' },
};

const INVOICES = [
  { id: '#INV-8924', patient: 'Sarah Jenkins', date: 'Oct 24, 2023', amount: '$1,250.00', status: 'Paid', statusCls: 'bg-secondary-fixed text-on-secondary-container' },
  { id: '#INV-8923', patient: 'Michael Chang', date: 'Oct 24, 2023', amount: '$4,500.00', status: 'Pending', statusCls: 'bg-tertiary-fixed text-on-tertiary-container' },
  { id: '#INV-8922', patient: 'Emily Rodriguez', date: 'Oct 23, 2023', amount: '$850.00', status: 'Overdue', statusCls: 'bg-error-container text-on-error-container' },
  { id: '#INV-8921', patient: 'Robert Wilson', date: 'Oct 23, 2023', amount: '$12,400.00', status: 'Draft', statusCls: 'bg-surface-variant text-on-surface-variant' },
  { id: '#INV-8920', patient: 'Amanda Foster', date: 'Oct 22, 2023', amount: '$3,200.00', status: 'Paid', statusCls: 'bg-secondary-fixed text-on-secondary-container' },
];

export default function BillingFinanceMedcoreHealth() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Overview');
  const [agingFilter, setAgingFilter] = useState('All');
  const [sentReminder, setSentReminder] = useState({});

  const totalByBucket = (b) => AGING_DATA.filter(r => r.bucket === b).reduce((s, r) => s + r.amount, 0);
  const grandTotal = AGING_DATA.reduce((s, r) => s + r.amount, 0);

  const filteredAging = agingFilter === 'All' ? AGING_DATA : AGING_DATA.filter(r => r.bucket === agingFilter);

  const sendReminder = (id) => {
    setSentReminder(p => ({ ...p, [id]: true }));
    setTimeout(() => setSentReminder(p => ({ ...p, [id]: false })), 2000);
  };

  return (
    <>
      <div className="bg-background text-on-background min-h-screen flex flex-col md:flex-row antialiased">
        <nav className="hidden md:flex fixed left-0 top-0 flex-col h-full z-40 w-64 border-r bg-white dark:bg-gray-950 font-manrope text-sm font-medium border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <h1 className="text-lg font-black text-gray-900 dark:text-white">Hospital Admin</h1>
            <p className="text-xs text-outline mt-1">Clinical Excellence</p>
          </div>
          <div className="flex flex-col flex-grow mt-4 space-y-1 px-2">
            {ADMIN_NAV_ITEMS.map(item => (
              <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${item.active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600'}`}>
                <span className="material-symbols-outlined">{item.icon}</span>{item.label}
              </Link>
            ))}
          </div>
          <div className="p-4 mt-auto space-y-1 border-t border-gray-200">
            <Link className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all" to="/admin_dashboard_medcore_health">
              <span className="material-symbols-outlined">contact_support</span>Support
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-all" to="/login_medcore_health">
              <span className="material-symbols-outlined">logout</span>Logout
            </Link>
          </div>
        </nav>

        <div className="flex-1 flex flex-col md:ml-64 min-w-0">
          <header className="flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md font-manrope border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="md:hidden text-xl font-bold tracking-tight text-blue-600">MedAdmin Pro</div>
              <div className="hidden md:flex relative text-gray-500">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all w-64" placeholder="Search..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:bg-gray-100 transition-colors p-2 rounded-full"><span className="material-symbols-outlined">notifications</span></button>
              <button className="text-gray-500 hover:bg-gray-100 transition-colors p-2 rounded-full"><span className="material-symbols-outlined">settings</span></button>
              <img alt="Administrator" className="w-8 h-8 rounded-full border border-gray-200 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAwM_gxVbHMBEy5gZAuY-8Vc1OEm_sTmkXVc_JKWiTNtkTUI8nySM6quBFzV-_nP4yDSZabu2OceaqGGMmKEuySGEikC_WWGMlJvLltRD2QryxBV2tZbC8RCV7NBLCopODrYKVMDztQjUttPM22iAvf0nkJg4i2uIET0WDBigDDE6kA7wh3TTRlUnHKvfeUbVti3J9Ow3mhCJPukkhWzflt04qItxVw5tsfKKXhq2t6vkTlKdAbUTy560gXNsQcQscbfmEkXk9B6q9" />
            </div>
          </header>

          <main className="flex-1 p-6 md:p-8 overflow-y-auto w-full max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="font-h2 text-h2 text-on-background">Billing & Finance</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage hospital revenue, claims, aging invoices, and patient billing.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant text-primary rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>Filters
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">download</span>Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: 'account_balance', label: 'Total Revenue (MTD)', val: '$2,458,900', trend: '+12.5%', trendCls: 'text-secondary bg-secondary-fixed-dim/20', bg: 'bg-primary-fixed' },
                { icon: 'pending_actions', label: 'Pending Payments', val: '$432,150', trend: '48h Avg', trendCls: 'text-tertiary bg-tertiary-fixed-dim/20', bg: 'bg-tertiary-fixed' },
                { icon: 'verified_user', label: 'Claims Processing', val: '$1,120,400', trend: '142 Open', trendCls: 'text-on-surface-variant bg-surface-variant', bg: 'bg-surface-container-highest' },
              ].map(c => (
                <div key={c.label} className="bg-white rounded-xl p-6 shadow-level-1 border border-surface-variant flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 ${c.bg} rounded-lg text-primary`}><span className="material-symbols-outlined filled text-2xl">{c.icon}</span></div>
                    <span className={`inline-flex items-center gap-1 font-label-md text-label-md px-2 py-1 rounded-full ${c.trendCls}`}>
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>{c.trend}
                    </span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">{c.label}</p>
                    <h3 className="font-h3 text-h3 text-on-background">{c.val}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-1 mb-6 border-b border-surface-variant">
              {['Overview', 'Aging Report'].map(t => (
                <button key={t} onClick={() => setTab(t)} className={`px-5 py-2.5 font-label-md text-label-md border-b-2 transition-colors relative top-[1px] ${tab === t ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}>{t}</button>
              ))}
            </div>

            {tab === 'Overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                  <div className="bg-white rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
                    <div className="p-6 border-b border-surface-variant flex justify-between items-center bg-surface-container-lowest">
                      <h3 className="font-h3 text-[20px] text-on-background">Recent Invoices</h3>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                        <input className="pl-9 pr-4 py-1.5 bg-surface-container-low border-none rounded-md text-sm focus:ring-2 focus:ring-primary w-48 sm:w-64 transition-all" placeholder="Search ID or Patient..." type="text" />
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
                          {INVOICES.map(inv => (
                            <tr key={inv.id} className="hover:bg-surface-container-lowest transition-colors group">
                              <td className="py-3 px-4 font-medium text-primary">{inv.id}</td>
                              <td className="py-3 px-4">{inv.patient}</td>
                              <td className="py-3 px-4 text-on-surface-variant">{inv.date}</td>
                              <td className="py-3 px-4 text-right font-medium">{inv.amount}</td>
                              <td className="py-3 px-4 text-center"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${inv.statusCls}`}>{inv.status}</span></td>
                              <td className="py-3 px-4 text-center">
                                <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                </button>
                              </td>
                            </tr>
                          ))}
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

                <div className="flex flex-col gap-6">
                  <div className="bg-white rounded-xl shadow-level-1 border border-surface-variant p-6">
                    <div className="flex justify-between items-center mb-6 border-b border-surface-variant pb-4">
                      <h3 className="font-h3 text-[18px] text-on-background">Claims Tracker</h3>
                      <button className="text-primary font-label-sm hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                      {[
                        { icon: 'warning', bg: 'bg-error-container text-on-error-container', name: 'BlueCross Shield', status: 'Denied', statusCls: 'text-error', detail: 'Patient: Sarah J. • Missing Documentation' },
                        { icon: 'sync', bg: 'bg-tertiary-fixed text-on-tertiary-container', name: 'Medicare', status: 'In Review', statusCls: 'text-tertiary', detail: 'Batch #4421 • 45 Claims Processing' },
                        { icon: 'check_circle', bg: 'bg-secondary-fixed text-on-secondary-container', name: 'Aetna', status: 'Approved', statusCls: 'text-secondary', detail: 'Batch #4418 • Funds depositing' },
                      ].map(c => (
                        <div key={c.name} className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-surface-variant">
                          <div className={`p-2 ${c.bg} rounded-md mt-1`}><span className="material-symbols-outlined text-[18px]">{c.icon}</span></div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className="font-label-md text-on-background">{c.name}</p>
                              <span className={`font-label-sm ${c.statusCls}`}>{c.status}</span>
                            </div>
                            <p className="font-body-sm text-on-surface-variant mt-1 text-xs">{c.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

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
                      <button className="w-full bg-white border border-primary text-primary hover:bg-primary-fixed transition-colors font-label-md py-2 rounded-md shadow-sm">Lookup Invoice</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === 'Aging Report' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(BUCKET_CONFIG).map(([key, cfg]) => {
                    const total = totalByBucket(key);
                    const pct = Math.round((total / grandTotal) * 100);
                    return (
                      <div key={key} className={`rounded-xl border p-5 cursor-pointer transition-all ${agingFilter === key ? 'ring-2 ring-blue-400' : ''} ${cfg.color.replace('text-', 'border-').split(' ')[0]} bg-white`}
                        onClick={() => setAgingFilter(agingFilter === key ? 'All' : key)}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.badge}`}>{cfg.label}</span>
                          <span className="text-xs text-slate-400">{pct}%</span>
                        </div>
                        <p className="text-2xl font-black text-slate-800">${total.toLocaleString()}</p>
                        <p className="text-xs text-slate-500 mt-1">{AGING_DATA.filter(r => r.bucket === key).length} invoices</p>
                        <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${cfg.bar} rounded-full`} style={{ width: `${pct}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-500">warning</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-red-700">Outstanding Balance: ${grandTotal.toLocaleString()}</p>
                    <p className="text-xs text-red-500 mt-0.5">
                      ${totalByBucket('90+').toLocaleString()} aged 90+ days requires immediate follow-up action.
                    </p>
                  </div>
                  <button className="text-xs bg-red-600 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-red-700 transition-all">Send All Reminders</button>
                </div>

                <div className="bg-white rounded-xl shadow-level-1 border border-surface-variant overflow-hidden">
                  <div className="p-5 border-b border-surface-variant flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800">
                      {agingFilter === 'All' ? 'All Outstanding Invoices' : `${BUCKET_CONFIG[agingFilter]?.label} Invoices`}
                      <span className="ml-2 text-sm font-normal text-slate-400">({filteredAging.length} records)</span>
                    </h3>
                    <div className="flex gap-2">
                      {agingFilter !== 'All' && <button onClick={() => setAgingFilter('All')} className="text-xs text-blue-600 hover:underline">Clear filter</button>}
                      <button className="text-xs border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">download</span>Export
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {['Invoice ID', 'Patient', 'Department', 'Amount', 'Days Overdue', 'Bucket', 'Action'].map(h => (
                            <th key={h} className="py-3 px-5 font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredAging.map(row => {
                          const cfg = BUCKET_CONFIG[row.bucket];
                          return (
                            <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                              <td className="py-3 px-5 font-medium text-blue-600 text-sm">{row.id}</td>
                              <td className="py-3 px-5 text-slate-800 text-sm font-medium">{row.patient}</td>
                              <td className="py-3 px-5 text-slate-500 text-sm">{row.dept}</td>
                              <td className="py-3 px-5 text-slate-800 text-sm font-semibold">${row.amount.toLocaleString()}</td>
                              <td className="py-3 px-5">
                                <span className={`text-sm font-bold ${row.age >= 90 ? 'text-red-600' : row.age >= 60 ? 'text-orange-600' : row.age >= 30 ? 'text-amber-600' : 'text-blue-600'}`}>{row.age} days</span>
                              </td>
                              <td className="py-3 px-5">
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${cfg.badge}`}>{cfg.label}</span>
                              </td>
                              <td className="py-3 px-5">
                                <button onClick={() => sendReminder(row.id)} className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${sentReminder[row.id] ? 'bg-green-100 text-green-700' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                                  {sentReminder[row.id] ? '✓ Sent' : 'Send Reminder'}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
