import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QUEUE_TABS = ['Today', 'Upcoming', 'Completed', 'Cancelled'];

export default function AppointmentsQueueMedcoreHealth() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Today');

  return (
    <div className="bg-background text-on-background flex min-h-screen">
      <nav className="bg-white text-blue-600 font-manrope text-sm font-semibold tracking-wide h-screen w-64 border-r border-slate-200 fixed left-0 top-0 bottom-0 flex flex-col z-40 hidden md:flex">
        <div className="p-6">
          <span className="text-lg font-bold text-slate-900 font-h3 text-h3">MedCore HMS</span>
        </div>
        <div className="flex items-center gap-4 px-6 py-4 mb-4">
          <img alt="Dr. Julian Bashir" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqMaRcz2eko8IMTP_cS1SxWXSZbhECu2tCaBbIFgelsvV_9km7imn1kvNgzCVY5oOK4-7CTBEJ3OBEW1RbxC4Uy1JAITL-q5M7zWhjuZj5aEXbsrk54AWIq-oLsKDCP_FZP1zh5lfildFe50dViHJzPprr0LkuMlTRShZ9dNg6JbE3k4ZPMyH5nI1dthOcNMolkSxx1W_sPZ7fO6i9fbEWVNPRotEYJNWEjDgSz0mxHZIkcnpjcsVJ6wBgObEGjik-X0cI3-TigUz2" />
          <div>
            <p className="font-label-md text-label-md text-on-surface">Dr. Julian Bashir</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Chief Surgeon</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 flex-grow mt-4">
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-r-lg" to="/doctor_dashboard_medcore_health">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-r-lg" to="/schedule_management_medcore_health">
              <span className="material-symbols-outlined">calendar_today</span>
              <span className="font-label-md text-label-md">Schedule</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600" to="/appointments_queue_medcore_health">
              <span className="material-symbols-outlined">event_note</span>
              <span className="font-label-md text-label-md">Appointments</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-r-lg" to="/patient_directory_medcore_health">
              <span className="material-symbols-outlined">group</span>
              <span className="font-label-md text-label-md">Patients</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-r-lg" to="/messages_medcore_health">
              <span className="material-symbols-outlined">mail</span>
              <span className="font-label-md text-label-md">Messages</span>
            </Link>
          </li>
        </ul>
        <div className="mt-auto border-t border-slate-200 pt-4 pb-6">
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-r-lg" to="/settings_medcore_health">
                <span className="material-symbols-outlined">settings</span>
                <span className="font-label-md text-label-md">Settings</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-r-lg" to="/login_medcore_health">
                <span className="material-symbols-outlined">logout</span>
                <span className="font-label-md text-label-md">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-1 flex flex-col md:ml-64 w-full">
        <header className="bg-white text-blue-600 font-manrope text-sm font-medium antialiased top-0 border-b border-slate-200 shadow-sm flex justify-between items-center w-full px-8 h-16 sticky z-50">
          <div className="flex items-center md:hidden">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">MedCore HMS</span>
          </div>
          <div className="hidden md:flex flex-1 items-center max-w-md bg-[#F1F3F4] rounded-lg px-4 py-2 border border-transparent focus-within:bg-white focus-within:border-primary-container transition-colors">
            <span className="material-symbols-outlined text-outline mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 w-full font-body-sm text-body-sm text-on-surface outline-none" placeholder="Search patients, ID, or records..." type="text" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/notifications_medcore_health')}
              className="text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors p-2 rounded-full relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors p-2 rounded-full">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-y-auto">
          <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div>
              <h1 className="font-h2 text-h2 text-on-surface mb-2">Appointments</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Manage your patient schedule and active queues.</p>
            </div>
            <div className="flex bg-surface-container-low rounded-lg p-1 border border-[#E9ECEF]">
              {QUEUE_TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-label-md text-label-md transition-colors ${
                    activeTab === tab
                      ? 'bg-white shadow-sm text-primary-container border border-slate-200'
                      : 'hover:bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col">
              <div className="p-6 border-b border-[#E9ECEF] flex justify-between items-center">
                <h2 className="font-h3 text-h3 text-on-surface">{activeTab === 'Today' ? "Today's Queue" : `${activeTab} Appointments`}</h2>
                <span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm">
                  {activeTab === 'Today' ? '8 Patients Remaining' : activeTab === 'Upcoming' ? '12 Scheduled' : activeTab === 'Completed' ? '6 Completed' : '2 Cancelled'}
                </span>
              </div>
              {activeTab === 'Today' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-background border-b border-[#E9ECEF]">
                        {['Time','Patient','Status','Type','Actions'].map(h => (
                          <th key={h} className={`p-4 font-label-md text-label-md text-on-surface-variant ${h === 'Actions' ? 'text-right' : ''}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-primary-container/5 border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group cursor-pointer border-l-4 border-l-primary-container">
                        <td className="p-4 font-body-md text-body-md text-on-surface">09:00 AM</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim flex items-center justify-center font-label-md text-label-md text-on-tertiary-fixed">JS</div>
                            <div>
                              <p className="font-label-md text-label-md text-on-surface">Sarah Jenkins</p>
                              <p className="font-label-sm text-label-sm text-on-surface-variant">ID: PT-8921</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm">In-Waiting Room</span>
                        </td>
                        <td className="p-4 font-body-md text-body-md text-on-surface-variant">Follow-up</td>
                        <td className="p-4 text-right">
                          <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-md font-label-md text-label-md hover:bg-primary transition-colors">Start Consultation</button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group cursor-pointer border-l-4 border-l-transparent">
                        <td className="p-4 font-body-md text-body-md text-on-surface">09:30 AM</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center font-label-md text-label-md text-on-primary-fixed">MR</div>
                            <div>
                              <p className="font-label-md text-label-md text-on-surface">Michael Ross</p>
                              <p className="font-label-sm text-label-sm text-on-surface-variant">ID: PT-4432</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Checking In</span>
                        </td>
                        <td className="p-4 font-body-md text-body-md text-on-surface-variant">Initial Consult</td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => navigate('/select_slot_medcore_health')}
                              className="border border-outline-variant text-on-surface px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-surface-variant transition-colors"
                            >
                              Reschedule
                            </button>
                            <button className="border border-error/50 text-error px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-error-container transition-colors">Mark No-show</button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group cursor-pointer border-l-4 border-l-transparent">
                        <td className="p-4 font-body-md text-body-md text-on-surface">10:15 AM</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim flex items-center justify-center font-label-md text-label-md text-on-secondary-fixed">EL</div>
                            <div>
                              <p className="font-label-md text-label-md text-on-surface">Emma Lawson</p>
                              <p className="font-label-sm text-label-sm text-on-surface-variant">ID: PT-1129</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Scheduled</span>
                        </td>
                        <td className="p-4 font-body-md text-body-md text-on-surface-variant">Lab Review</td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => navigate('/select_slot_medcore_health')}
                              className="border border-outline-variant text-on-surface px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-surface-variant transition-colors"
                            >
                              Reschedule
                            </button>
                            <button className="border border-error/50 text-error px-3 py-1.5 rounded-md font-label-sm text-label-sm hover:bg-error-container transition-colors">Mark No-show</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[40px] text-outline block mb-2">
                    {activeTab === 'Upcoming' ? 'calendar_month' : activeTab === 'Completed' ? 'check_circle' : 'cancel'}
                  </span>
                  No {activeTab.toLowerCase()} appointments to display.
                </div>
              )}
              <div className="p-4 border-t border-[#E9ECEF] flex justify-center">
                <button
                  onClick={() => navigate('/schedule_management_medcore_health')}
                  className="text-primary-container font-label-md text-label-md flex items-center gap-2 hover:underline"
                >
                  View Full Schedule <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="xl:col-span-4 bg-surface-container-lowest rounded-xl shadow-level-1 border border-[#E9ECEF] flex flex-col relative overflow-hidden">
              <div className="h-2 bg-primary-container w-full absolute top-0 left-0"></div>
              <div className="p-6 border-b border-[#E9ECEF] mt-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-h3 text-h3 text-on-surface">Quick Preview</h3>
                  <button className="text-on-surface-variant hover:bg-surface-variant p-1 rounded-full transition-colors">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim flex items-center justify-center font-h2 text-h2 text-on-tertiary-fixed">JS</div>
                  <div>
                    <h4 className="font-h3 text-h3 text-on-surface">Sarah Jenkins</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">34 yrs • Female • PT-8921</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 overflow-y-auto space-y-6 bg-background">
                <div className="bg-white p-4 rounded-lg border border-[#E9ECEF] shadow-sm">
                  <h5 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Reason for Visit</h5>
                  <p className="font-body-md text-body-md text-on-surface">Post-operative follow-up (Appendectomy 2 weeks ago). Reports mild discomfort around incision site.</p>
                </div>
                <div>
                  <h5 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Triage Vitals</h5>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: 'favorite', label: 'Heart Rate', value: '78 bpm', error: false },
                      { icon: 'blood_pressure', label: 'BP', value: '120/80', error: false },
                      { icon: 'thermostat', label: 'Temp', value: '98.6 °F', error: false },
                      { icon: 'air', label: 'SpO2', value: '94% ↓', error: true },
                    ].map(vital => (
                      <div key={vital.label} className={`bg-white p-3 rounded-lg border shadow-sm ${vital.error ? 'border-error-container bg-error-container/10' : 'border-[#E9ECEF]'}`}>
                        <div className={`flex items-center gap-2 mb-1 ${vital.error ? 'text-error' : 'text-on-surface-variant'}`}>
                          <span className="material-symbols-outlined text-sm">{vital.icon}</span>
                          <span className="font-label-sm text-label-sm">{vital.label}</span>
                        </div>
                        <div className={`font-h3 text-h3 ${vital.error ? 'text-error' : 'text-on-surface'}`}>{vital.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-[#E9ECEF] bg-white mt-auto">
                <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-md font-label-md text-label-md shadow-sm hover:bg-primary transition-colors flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-sm">stethoscope</span>
                  Open Full Chart & Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
