import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const ADMIN_NAV_ITEMS = [
  { icon: 'payments', label: 'Finance', to: '/billing_finance_medcore_health' },
  { icon: 'hotel', label: 'Beds', to: '/bed_management_medcore_health' },
  { icon: 'medical_services', label: 'Pharmacy', to: '/pharmacy_inventory_medcore_health', active: true },
  { icon: 'biotech', label: 'Lab', to: '/laboratory_management_medcore_health' },
  { icon: 'campaign', label: 'News', to: '/announcements_medcore_health' },
  { icon: 'calendar_month', label: 'Staff Planner', to: '/staff_shift_planner_medcore_health' },
];

const INVENTORY = [
  { id: 'MED-001', name: 'Ibuprofen 400mg', category: 'Analgesics', stock: 850, max: 1000, expiry: 'Oct 2025', status: 'Optimal', statusCls: 'bg-secondary/10 text-secondary border-secondary/20', barCls: 'bg-secondary', barW: '85%' },
  { id: 'MED-042', name: 'Atorvastatin 20mg', category: 'Cardiovascular', stock: 120, max: 300, expiry: 'Jan 2024', status: 'Low Stock', statusCls: 'bg-amber-100 text-amber-700 border-amber-200', barCls: 'bg-amber-500', barW: '40%', low: true },
  { id: 'MED-115', name: 'Ceftriaxone 1g', category: 'Antibiotics', stock: 15, max: 100, expiry: 'May 2024', status: 'Critical', statusCls: 'bg-error/10 text-error border-error/20', barCls: 'bg-error', barW: '15%', critical: true },
  { id: 'MED-088', name: 'Diazepam 5mg', category: 'Neurology', stock: 450, max: 500, expiry: 'Dec 2026', status: 'Optimal', statusCls: 'bg-secondary/10 text-secondary border-secondary/20', barCls: 'bg-secondary', barW: '90%' },
  { id: 'MED-033', name: 'Amoxicillin 500mg', category: 'Antibiotics', stock: 5, max: 200, expiry: 'Mar 2025', status: 'Critical', statusCls: 'bg-error/10 text-error border-error/20', barCls: 'bg-error', barW: '3%', critical: true },
  { id: 'MED-077', name: 'Epinephrine Auto-Inj.', category: 'Emergency', stock: 2, max: 50, expiry: 'Aug 2024', status: 'Critical', statusCls: 'bg-error/10 text-error border-error/20', barCls: 'bg-error', barW: '4%', critical: true },
  { id: 'MED-092', name: 'Lisinopril 10mg', category: 'Cardiovascular', stock: 15, max: 100, expiry: 'Nov 2024', status: 'Low Stock', statusCls: 'bg-amber-100 text-amber-700 border-amber-200', barCls: 'bg-amber-500', barW: '15%', low: true },
];

const LOW_STOCK_ALERTS = INVENTORY.filter(i => i.critical || i.low);

export default function PharmacyInventoryMedcoreHealth() {
  const navigate = useNavigate();
  const [inventoryTab, setInventoryTab] = useState('All');
  const [reordered, setReordered] = useState({});
  const [dismissedAlert, setDismissedAlert] = useState(false);
  const [filterCategory, setFilterCategory] = useState('All Categories');

  const handleReorder = (id) => {
    setReordered(p => ({ ...p, [id]: true }));
  };

  const criticalCount = INVENTORY.filter(i => i.critical).length;
  const lowCount = INVENTORY.filter(i => i.low).length;

  const tabFiltered = inventoryTab === 'All' ? INVENTORY
    : inventoryTab === 'Critical' ? INVENTORY.filter(i => i.critical)
    : inventoryTab === 'Low Stock' ? INVENTORY.filter(i => i.low)
    : INVENTORY;

  const catFiltered = filterCategory === 'All Categories' ? tabFiltered : tabFiltered.filter(i => i.category === filterCategory);
  const categories = ['All Categories', ...new Set(INVENTORY.map(i => i.category))];

  return (
    <>
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col md:flex-row">
        <aside className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant bg-surface-container-lowest z-40 fixed left-0 top-0">
          <div className="p-lg border-b border-outline-variant">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_hospital</span>
              </div>
              <div>
                <h1 className="font-h3 text-h3 text-on-surface tracking-tight">Hospital Admin</h1>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Clinical Excellence</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 py-md overflow-y-auto">
            <ul className="space-y-1 px-md">
              {ADMIN_NAV_ITEMS.map(item => (
                <li key={item.to}>
                  <Link to={item.to} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all ${item.active ? 'bg-primary-fixed text-on-primary-fixed border-r-4 border-primary' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'}`}>
                    <span className="material-symbols-outlined" style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-md border-t border-outline-variant">
            <ul className="space-y-1">
              <li><Link to="/admin_dashboard_medcore_health" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg font-label-md text-label-md transition-all"><span className="material-symbols-outlined">contact_support</span><span>Support</span></Link></li>
              <li><Link to="/login_medcore_health" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-error rounded-lg font-label-md text-label-md transition-all"><span className="material-symbols-outlined">logout</span><span>Logout</span></Link></li>
            </ul>
          </div>
        </aside>

        <div className="flex-1 md:ml-64 flex flex-col min-w-0">
          <header className="hidden md:flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm">
            <div className="flex items-center gap-lg">
              <h2 className="font-h3 text-h3 text-on-surface hidden lg:block">MedAdmin Pro</h2>
              <div className="relative w-64 lg:w-96">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                <input className="w-full h-10 pl-10 pr-4 bg-surface-container-low border-0 rounded-lg text-on-surface font-body-sm focus:ring-2 focus:ring-primary transition-colors placeholder:text-on-surface-variant/60" placeholder="Search pharmacy records..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-sm">
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">settings</span></button>
              <button className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant shrink-0">
                <img alt="Admin" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA8j0nlXh7lg2bTXN_ZoK8gYprjU50Hp_1lW63EoafAoOkjp_-MjIgIjbhHPUkY6GlohzvG6WLpcd7TlhnXxdRlSSNMsZjGYg4EgT8CmfSZRWhZTPFG2PzjL6y8HpnzlBXO5lcBJTLm5WCdqQW1xM2VQt09nybr8RXkOO0m07MRpH0J8lQVrpENmtHFKLl6s34emdjKuJVBl3I2O5K_Y3OPjq4YoAlp3E4ZWweLyZ_7Y85NTj2wFu3ZuhhaNFLLip51V5-JdDpchXC" />
              </button>
            </div>
          </header>

          <main className="flex-1 p-md md:p-xl overflow-y-auto">
            {/* ── Low-Stock Alert Banner ── */}
            {!dismissedAlert && (LOW_STOCK_ALERTS.length > 0) && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-red-600">emergency</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-red-800 text-sm">
                    {criticalCount} critical & {lowCount} low-stock items require attention
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {LOW_STOCK_ALERTS.map(item => (
                      <span key={item.id} className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${item.critical ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                        {item.name} — {item.stock} left
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => setInventoryTab('Critical')} className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg font-medium transition-all">View Critical</button>
                  <button onClick={() => setDismissedAlert(true)} className="text-red-400 hover:text-red-600 transition-all">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
              </div>
            )}

            <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
              <div>
                <h2 className="font-h2 text-h2 text-on-surface mb-xs">Pharmacy Dashboard</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Manage inventory, prescriptions, and supplier relations.</p>
              </div>
              <div className="flex gap-sm">
                <button className="px-md py-sm bg-surface-container-lowest border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">download</span>Export
                </button>
                <button className="px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:bg-primary-container/90 transition-colors shadow-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">add</span>New Order
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-xl">
              <div className="md:col-span-8 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden">
                <div className="p-lg border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-low/30">
                  <h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">monitoring</span>Stock Summary
                  </h3>
                  <button className="text-primary font-label-sm hover:underline">View All</button>
                </div>
                <div className="p-lg flex-1 grid grid-cols-2 md:grid-cols-4 gap-md">
                  {[
                    { label: 'Total Items', val: '4,285', trend: '+2.4%', trendCls: 'text-secondary', trendIcon: 'trending_up' },
                    { label: 'Critical Stock', val: String(criticalCount), trend: 'Action Req.', trendCls: 'text-error', trendIcon: 'warning' },
                    { label: 'Pending Rx', val: '148', trend: 'Today', trendCls: 'text-on-surface-variant', trendIcon: 'schedule' },
                    { label: 'Expiring Soon', val: '34', trend: '< 30 days', trendCls: 'text-tertiary-container', trendIcon: 'event_busy' },
                  ].map(s => (
                    <div key={s.label} className="p-md rounded-lg bg-surface-container-low/50 border border-outline-variant/20 flex flex-col justify-center">
                      <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">{s.label}</p>
                      <p className={`font-h2 text-[28px] ${s.label === 'Critical Stock' ? 'text-error' : 'text-on-surface'}`}>{s.val}</p>
                      <div className={`flex items-center gap-1 mt-xs ${s.trendCls}`}>
                        <span className="material-symbols-outlined text-[14px]">{s.trendIcon}</span>
                        <span className="font-label-sm text-label-sm text-[11px]">{s.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 flex flex-col overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-error-container/20 to-transparent pointer-events-none"></div>
                <div className="p-lg border-b border-outline-variant/50 flex justify-between items-center relative z-10">
                  <h3 className="font-h3 text-[18px] text-on-surface flex items-center gap-sm">
                    <span className="material-symbols-outlined text-error">error_outline</span>Low Stock Alerts
                  </h3>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">{LOW_STOCK_ALERTS.length}</span>
                </div>
                <div className="p-0 flex-1 overflow-y-auto relative z-10">
                  <ul className="divide-y divide-outline-variant/30">
                    {LOW_STOCK_ALERTS.map(item => (
                      <li key={item.id} className="p-md hover:bg-surface-container-low/50 transition-colors flex justify-between items-center">
                        <div>
                          <p className="font-label-md text-label-md text-on-surface">{item.name}</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">{item.category}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full font-label-sm text-label-sm text-[11px] mb-1 ${item.critical ? 'bg-error-container text-on-error-container' : 'bg-amber-100 text-amber-700'}`}>
                            {item.stock} units left
                          </span>
                          <button onClick={() => handleReorder(item.id)} className={`block w-full font-label-sm text-label-sm transition-all ${reordered[item.id] ? 'text-green-600 font-semibold' : 'text-primary hover:underline'}`}>
                            {reordered[item.id] ? '✓ Ordered' : 'Reorder'}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 mb-xl overflow-hidden">
              <div className="p-lg border-b border-outline-variant/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md bg-surface-container-low/30">
                <div className="flex items-center gap-3">
                  <h3 className="font-h3 text-[20px] text-on-surface">Medicine Inventory</h3>
                  <div className="flex gap-1">
                    {['All', 'Critical', 'Low Stock'].map(t => (
                      <button key={t} onClick={() => setInventoryTab(t)} className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${inventoryTab === t ? 'bg-blue-500 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                        {t}{t === 'Critical' && criticalCount > 0 && <span className="ml-1 bg-red-500 text-white rounded-full px-1">{criticalCount}</span>}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-sm w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">filter_list</span>
                    <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="w-full h-9 pl-10 pr-8 py-0 bg-surface border border-outline-variant rounded-lg text-on-surface font-body-sm focus:ring-1 focus:ring-primary appearance-none">
                      {categories.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface border-b border-outline-variant/50 font-label-md text-label-md text-on-surface-variant">
                      {['Medicine Name', 'Category', 'Stock Level', 'Expiry Date', 'Status', 'Actions'].map((h, i) => (
                        <th key={h} className={`py-3 px-4 font-semibold ${i === 5 ? 'text-right' : ''}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/30 font-body-sm text-body-sm">
                    {catFiltered.map((item, idx) => (
                      <tr key={item.id} className={`hover:bg-surface-container-low/30 transition-colors ${item.critical ? 'bg-red-50/30' : item.low ? 'bg-amber-50/20' : idx % 2 === 1 ? 'bg-surface-container-lowest' : ''}`}>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            {item.critical && <span className="material-symbols-outlined text-error text-[16px]">warning</span>}
                            {item.low && !item.critical && <span className="material-symbols-outlined text-amber-500 text-[16px]">info</span>}
                            <div>
                              <p className="font-label-md text-on-surface">{item.name}</p>
                              <p className="text-[12px] text-on-surface-variant">ID: {item.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">{item.category}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                              <div className={`h-full ${item.barCls} rounded-full`} style={{ width: item.barW }}></div>
                            </div>
                            <span className={`font-semibold ${item.critical ? 'text-error' : item.low ? 'text-amber-600' : 'text-on-surface'}`}>{item.stock}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">{item.expiry}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-[11px] border ${item.statusCls}`}>{item.status}</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            {(item.critical || item.low) && (
                              <button onClick={() => handleReorder(item.id)} className={`text-xs px-3 py-1 rounded-lg font-medium transition-all ${reordered[item.id] ? 'bg-green-100 text-green-700' : 'bg-error/10 text-error hover:bg-error/20'}`}>
                                {reordered[item.id] ? '✓ Ordered' : 'Reorder'}
                              </button>
                            )}
                            <button className="text-on-surface-variant hover:text-primary p-1 rounded-md hover:bg-surface-container">
                              <span className="material-symbols-outlined text-[18px]">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-md border-t border-outline-variant/50 flex items-center justify-between bg-surface">
                <p className="font-body-sm text-body-sm text-on-surface-variant">Showing {catFiltered.length} of {INVENTORY.length} entries</p>
                <div className="flex gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container disabled:opacity-50" disabled>
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface hover:bg-surface-container font-label-sm text-label-sm">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container">
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
