import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminDashboardMedcoreHealth() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body-md antialiased flex h-screen overflow-hidden">
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-outline-variant/40 bg-surface-container-lowest flex-col gap-1 py-4 z-50 hidden md:flex font-manrope text-sm font-medium">
        <div className="px-6 pb-6 pt-2 flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-level-1">
            <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
          </span>
          <div>
            <h1 className="font-display text-base font-extrabold tracking-tight text-on-surface">MedCore Health</h1>
            <p className="text-[10px] text-on-surface-variant font-semibold tracking-wider uppercase">Admin Portal</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-2">
          <Link className="nav-link-active px-4 py-3 flex items-center gap-3" to="/admin_dashboard_medcore_health">
            <span className="material-symbols-outlined">dashboard</span>Dashboard
          </Link>
          <Link className="nav-link px-4 py-3 flex items-center gap-3 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant" to="/user_management_medcore_health">
            <span className="material-symbols-outlined">group</span>User Management
          </Link>
          <Link className="nav-link px-4 py-3 flex items-center gap-3 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant" to="/doctor_approvals_medcore_health">
            <span className="material-symbols-outlined">verified_user</span>Doctor Approvals
          </Link>
          <Link className="nav-link px-4 py-3 flex items-center gap-3 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant" to="/department_management_medcore_health">
            <span className="material-symbols-outlined">corporate_fare</span>Departments
          </Link>
          <Link className="nav-link px-4 py-3 flex items-center gap-3 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant" to="/global_appointment_management_medcore_health">
            <span className="material-symbols-outlined">event</span>Appointments
          </Link>
          <Link className="nav-link px-4 py-3 flex items-center gap-3 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant" to="/billing_finance_medcore_health">
            <span className="material-symbols-outlined">payments</span>Billing
          </Link>
          <Link className="nav-link px-4 py-3 flex items-center gap-3 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant mt-auto" to="/system_settings_medcore_health">
            <span className="material-symbols-outlined">settings</span>Settings
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64 w-full h-full min-w-0">
        <header className="docked full-width top-0 sticky z-40 border-b border-slate-200 shadow-sm flex justify-between items-center h-16 px-6 w-full ml-auto bg-white font-manrope antialiased tracking-tight">
          <div className="flex items-center">
            <div className="md:hidden text-lg font-extrabold text-blue-700 tracking-tighter mr-4">MedCore Health</div>
            <div className="hidden md:flex items-center bg-surface rounded-full px-4 py-2 border border-surface-variant w-80">
              <span className="material-symbols-outlined text-outline">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm outline-none w-full ml-2 text-on-surface placeholder:text-outline-variant font-body-sm" placeholder="Search patients, doctors, or ID..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <button
              onClick={() => navigate('/notifications_medcore_health')}
              className="hover:bg-slate-50 transition-colors p-2 rounded-full relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button
              onClick={() => navigate('/admin_profile_settings_medcore_health')}
              className="hover:bg-slate-50 transition-colors p-2 rounded-full ml-2"
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-grid-margin">
          <div className="mb-xl">
            <h2 className="font-h2 text-h2 text-on-surface">Dashboard Overview</h2>
            <p className="font-body-md text-on-surface-variant mt-1">Real-time clinical and operational metrics.</p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-grid-gutter mb-grid-margin">
            {[
              { icon: 'group', label: 'Total Patients', value: '12,480', badge: '+2.4%', badgeClass: 'bg-secondary-container text-on-secondary-container', trendIcon: 'trending_up' },
              { icon: 'stethoscope', label: 'Total Doctors', value: '450', badge: '0%', badgeClass: 'bg-surface-variant text-on-surface-variant', trendIcon: 'horizontal_rule' },
              { icon: 'calendar_today', label: 'Appointments Today', value: '342', badge: '+12%', badgeClass: 'bg-secondary-container text-on-secondary-container', trendIcon: 'trending_up' },
              { icon: 'payments', label: 'Revenue (MTD)', value: '$84.2k', badge: '+5.8%', badgeClass: 'bg-secondary-container text-on-secondary-container', trendIcon: 'trending_up', iconBg: 'bg-tertiary-fixed text-tertiary' },
            ].map(kpi => (
              <div key={kpi.label} className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/40 p-lg flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className={`${kpi.iconBg || 'bg-primary-fixed text-primary'} p-2 rounded-lg`}>
                    <span className="material-symbols-outlined">{kpi.icon}</span>
                  </div>
                  <span className={`${kpi.badgeClass} font-label-sm text-label-sm px-2 py-1 rounded-full flex items-center gap-1`}>
                    <span className="material-symbols-outlined text-[14px]">{kpi.trendIcon}</span> {kpi.badge}
                  </span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">{kpi.label}</div>
                  <div className="font-h1 text-h1 text-on-surface">{kpi.value}</div>
                </div>
              </div>
            ))}
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant p-lg flex flex-col justify-between border-l-4 border-l-error">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-error-container text-error p-2 rounded-lg">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2 py-1 rounded-full">Action Req.</span>
              </div>
              <div>
                <div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Pending Approvals</div>
                <div className="font-h1 text-h1 text-on-surface">12</div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter mb-grid-margin">
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant p-lg">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-variant">
                <h3 className="font-h3 text-h3 text-on-surface">Appointment Trends</h3>
                <button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
              <div className="h-64 w-full flex items-end justify-between gap-2 relative">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,80 C20,60 40,90 60,40 C80,-10 100,50 100,50 L100,100 L0,100 Z" fill="url(#blue-gradient)" opacity="0.2" />
                  <path d="M0,80 C20,60 40,90 60,40 C80,-10 100,50 100,50" fill="none" stroke="#005bbf" strokeWidth="3" />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#005bbf" />
                      <stop offset="100%" stopColor="#f9f9ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant p-lg">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-variant">
                <h3 className="font-h3 text-h3 text-on-surface">Billing & Revenue</h3>
                <button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
              <div className="h-64 w-full flex items-end justify-around gap-2 px-4 pt-8 border-b border-surface-variant">
                {[40,60,35,80,95,50].map((h,i) => (
                  <div key={i} className={`w-12 rounded-t-sm transition-colors cursor-pointer ${i === 4 ? 'bg-primary shadow-[0_0_15px_rgba(0,91,191,0.3)]' : 'bg-surface-variant hover:bg-primary-fixed'}`} style={{height:`${h}%`}}></div>
                ))}
              </div>
              <div className="flex justify-around mt-2 text-xs text-outline font-label-sm">
                {['Mon','Tue','Wed','Thu','Fri','Sat'].map((d,i) => (
                  <span key={d} className={i === 4 ? 'text-primary font-bold' : ''}>{d}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-grid-gutter">
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant">
              <div className="p-lg border-b border-surface-variant flex justify-between items-center">
                <h3 className="font-h3 text-h3 text-on-surface">Recent Activity</h3>
                <Link className="font-label-md text-label-md text-primary hover:underline" to="/audit_logs_medcore_health">View All</Link>
              </div>
              <div className="p-0">
                {[
                  { icon: 'person_add', bg: 'bg-primary-fixed text-primary', title: 'New Doctor Application: Dr. Sarah Miller', sub: 'Cardiology Department • Pending Review', time: '10m ago' },
                  { icon: 'receipt_long', bg: 'bg-tertiary-fixed text-tertiary', title: 'Payment Received: #INV-2023-0891', sub: '$4,250.00 processed via Wire Transfer', time: '1h ago' },
                  { icon: 'event_available', bg: 'bg-surface-variant text-on-surface-variant', title: 'System Backup Completed', sub: 'Database cluster US-East-1', time: '3h ago' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 p-md border-b border-surface-variant hover:bg-surface-container-low transition-colors last:border-0">
                    <div className={`${item.bg} p-2 rounded-full flex-shrink-0 mt-1`}>
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body-md text-on-surface font-medium">{item.title}</p>
                      <p className="font-body-sm text-on-surface-variant">{item.sub}</p>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline-variant">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant flex flex-col">
              <div className="p-lg border-b border-surface-variant flex justify-between items-center bg-surface-container-low rounded-t-xl">
                <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-error">warning</span>Critical Alerts
                </h3>
              </div>
              <div className="p-lg flex-1 flex flex-col gap-4">
                <div className="bg-error-container/30 border border-error-container rounded-lg p-md flex gap-3">
                  <span className="material-symbols-outlined text-error mt-0.5">memory</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-error-container mb-1">Server Load High</h4>
                    <p className="font-body-sm text-on-surface-variant text-sm">Cluster A is operating at 92% capacity. Auto-scaling initiated.</p>
                  </div>
                </div>
                <div className="bg-surface-container rounded-lg p-md flex gap-3 border border-outline-variant">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">how_to_reg</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">5 Pending Doctor Verifications</h4>
                    <p className="font-body-sm text-on-surface-variant text-sm">Action required to clear the onboarding queue for this week.</p>
                    <button
                      onClick={() => navigate('/doctor_approvals_medcore_health')}
                      className="mt-3 font-label-sm text-label-sm text-primary hover:text-primary-fixed-variant transition-colors uppercase tracking-wider"
                    >
                      Review Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-xl pt-8 border-t border-surface-variant text-center pb-8">
            <p className="font-body-sm text-outline font-medium">© 2024 MedCore Health Systems. Internal use only.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
