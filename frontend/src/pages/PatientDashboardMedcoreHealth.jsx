import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PatientDashboardMedcoreHealth() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
      <nav className="hidden md:flex bg-slate-50 border-r border-slate-200 h-screen w-64 flex-col p-4 shrink-0 z-10 relative">
        <div className="mb-8 px-4 mt-2">
          <span className="font-h3 text-h3 text-primary-container font-extrabold tracking-tighter">MedCore HMS</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 mb-6 bg-surface-container-low rounded-lg border border-outline-variant/30">
          <img alt="Patient Profile" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy3ZakSAsAzp8g9VXMTQTLrXkAf5QQtIeoK8EEX1HE8s6aXy3H-aePqiCyttdnepYNXWoDUhEMK1f-KuiZRRaysLTR0ZDJE3eSnv88nmHUW331USaXdNNnEdaimnXnpiT6wELV9-S_VOjQwt6c_ICfIHmn46MOJtU5Ce5jWtldSOGO5QeYqg0vvtajmYWAXvCV9O-VxtQfBfaS10c5vxZwk2De29WMn1t7yS8xJBhN30g7Cn4C7XhJc4YuddvAMXEuo_KC_OMAt64G" />
          <div>
            <p className="font-label-md text-label-md text-on-surface">Alex Johnson</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Patient ID: #MC-9842</p>
          </div>
        </div>
        <ul className="flex-1 space-y-2">
          <li>
            <Link className="flex items-center gap-3 bg-blue-50 text-blue-700 rounded-lg px-4 py-3 font-manrope text-sm font-medium" to="/patient_dashboard_medcore_health">
              <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>dashboard</span>Dashboard
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" to="/my_appointments_medcore_health">
              <span className="material-symbols-outlined">calendar_month</span>Appointments
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" to="/medical_records_medcore_health">
              <span className="material-symbols-outlined">folder_shared</span>Records
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" to="/billing_payments_medcore_health">
              <span className="material-symbols-outlined">payments</span>Billing
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" to="/settings_medcore_health">
              <span className="material-symbols-outlined">settings</span>Settings
            </Link>
          </li>
        </ul>
        <div className="mt-auto pt-6 border-t border-slate-200">
          <Link className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200 rounded-lg font-manrope text-sm font-medium transition-colors" to="/login_medcore_health">
            <span className="material-symbols-outlined">logout</span>Logout
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="bg-surface border-b border-slate-200 h-16 flex justify-between items-center px-6 md:px-lg shrink-0 z-20">
          <div className="md:hidden flex items-center gap-4">
            <button className="text-on-surface-variant p-2 rounded-md hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-h3 text-h3 text-primary-container font-extrabold tracking-tighter">MedCore HMS</span>
          </div>
          <div className="hidden md:flex items-center">
            <h1 className="font-h3 text-h3 text-on-surface">Overview</h1>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button
              aria-label="Notifications"
              onClick={() => navigate('/notifications_medcore_health')}
              className="relative text-on-surface-variant p-2 rounded-md hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
            </button>
            <div className="hidden md:flex items-center gap-2 pl-3 ml-1 border-l border-outline-variant/40">
              <div className="text-right leading-tight">
                <div className="font-label-md text-label-md text-on-surface">Alex Johnson</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Patient #MC-9842</div>
              </div>
              <button
                aria-label="Account menu"
                onClick={() => navigate('/my_profile_medcore_health')}
                className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md hover:shadow-level-2 transition-shadow"
              >
                AJ
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-xl no-scrollbar bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto space-y-grid-margin">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
              <div className="lg:col-span-8 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] p-lg flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="relative z-10 mb-6">
                  <h2 className="font-h2 text-h2 text-on-surface mb-2">Welcome back, Alex!</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Here is your latest health overview.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                  {[
                    { icon: 'favorite', label: 'Heart Rate', value: '72', unit: 'bpm' },
                    { icon: 'blood_pressure', label: 'Blood Pressure', value: '118/75', unit: 'mmHg' },
                    { icon: 'monitor_weight', label: 'Weight', value: '165', unit: 'lbs' },
                    { icon: 'thermostat', label: 'Temperature', value: '98.6', unit: '°F' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                        <span className="font-label-sm text-label-sm">{stat.label}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-h3 text-h3 text-on-surface">{stat.value}</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{stat.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] p-lg flex flex-col">
                <div className="border-b border-[#E9ECEF] pb-3 mb-4">
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Quick Actions</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <button
                    onClick={() => navigate('/search_doctors_medcore_health')}
                    className="bg-primary-container text-on-primary font-label-md text-label-md py-3 px-2 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined">event</span>
                    <span className="text-center text-xs">Book Appointment</span>
                  </button>
                  <button className="bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-2 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant/20 flex flex-col items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined">upload_file</span>
                    <span className="text-center text-xs">Upload Records</span>
                  </button>
                  <button
                    onClick={() => navigate('/billing_payments_medcore_health')}
                    className="bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-2 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant/20 flex flex-col items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined">payments</span>
                    <span className="text-center text-xs">Pay Bill</span>
                  </button>
                  <button
                    onClick={() => navigate('/messages_medcore_health')}
                    className="bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-2 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant/20 flex flex-col items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    <span className="text-center text-xs">Message Doctor</span>
                  </button>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter">
              <div className="bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
                <div className="border-b border-[#E9ECEF] px-lg py-4 flex justify-between items-center">
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Upcoming Appointments</h3>
                  <Link className="font-label-sm text-label-sm text-primary-container hover:underline" to="/my_appointments_medcore_health">View All</Link>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/20 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-on-primary-fixed">stethoscope</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface">Dr. Sarah Mitchell</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Cardiologist</p>
                        <div className="flex items-center gap-2 mt-1 text-on-surface-variant font-label-sm text-label-sm bg-surface rounded px-2 py-1 border border-outline-variant/30 w-fit">
                          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                          Oct 12, 10:30 AM
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 sm:flex-col w-full sm:w-auto">
                      <button
                        onClick={() => navigate('/select_slot_medcore_health')}
                        className="flex-1 sm:flex-none bg-surface border border-primary-container text-primary-container font-label-md text-label-md py-2 px-4 rounded hover:bg-primary-fixed-dim/10 transition-colors text-center"
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
                <div className="border-b border-[#E9ECEF] px-lg py-4 flex justify-between items-center">
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Recent Lab Reports</h3>
                  <Link className="font-label-sm text-label-sm text-primary-container hover:underline" to="/lab_reports_medcore_health">View All</Link>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { label: 'Full Blood Count', date: 'Sep 28, 2024' },
                    { label: 'Lipid Panel', date: 'Sep 15, 2024' },
                  ].map(report => (
                    <div key={report.label} className="flex items-center justify-between p-3 hover:bg-surface-container-lowest rounded-lg transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container">
                          <span className="material-symbols-outlined">science</span>
                        </div>
                        <div>
                          <h4 className="font-label-md text-label-md text-on-surface">{report.label}</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{report.date}</p>
                        </div>
                      </div>
                      <button className="text-primary-container hover:bg-primary-fixed p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
              <div className="lg:col-span-8 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
                <div className="border-b border-[#E9ECEF] px-lg py-4 flex justify-between items-center">
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Active Prescriptions</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#F8F9FA] border-b border-[#E9ECEF]">
                        <th className="font-label-md text-label-md text-outline px-4 py-3 font-semibold w-1/2">Medication</th>
                        <th className="font-label-md text-label-md text-outline px-4 py-3 font-semibold">Status</th>
                        <th className="font-label-md text-label-md text-outline px-4 py-3 font-semibold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="font-body-sm text-body-sm">
                      {[
                        { name: 'Atorvastatin', dose: '20mg • 1 tablet daily' },
                        { name: 'Lisinopril', dose: '10mg • 1 tablet daily' },
                      ].map((med, i) => (
                        <tr key={med.name} className={`border-b border-surface-container-high hover:bg-surface-container-lowest transition-colors ${i % 2 === 1 ? 'bg-[#F8F9FA]' : ''}`}>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-[18px]">pill</span>
                              </div>
                              <div>
                                <p className="font-label-md text-label-md text-on-surface">{med.name}</p>
                                <p className="text-on-surface-variant">{med.dose}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-container/20 text-on-secondary-container">Active</span>
                          </td>
                          <td className="px-4 py-4 text-right">
                            <button className="font-label-sm text-label-sm text-primary-container hover:underline">Order Refill</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="lg:col-span-4 bg-surface rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col p-lg justify-between">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary-container">receipt_long</span>
                    <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-outline">Outstanding Balance</h3>
                  </div>
                  <p className="font-h1 text-h1 text-on-surface">$145.00</p>
                  <p className="font-body-sm text-body-sm text-error mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">info</span>Due in 5 days
                  </p>
                </div>
                <div className="space-y-3 border-t border-[#E9ECEF] pt-4 mb-6">
                  <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>Consultation (Oct 1)</span><span>$120.00</span>
                  </div>
                  <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>Lab Co-pay</span><span>$25.00</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/billing_payments_medcore_health')}
                  className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 px-4 rounded-lg hover:bg-primary-fixed-dim transition-colors shadow-sm text-center"
                >
                  Pay Now
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
