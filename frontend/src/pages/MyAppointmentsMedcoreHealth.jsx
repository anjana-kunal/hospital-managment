import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TABS = ['Upcoming', 'Completed', 'Cancelled'];

const UPCOMING = [
  {
    id: 1, doctor: 'Dr. Emily Chen', specialty: 'Neurology Specialist', specialtyIcon: 'psychology',
    type: 'Virtual Consultation', typeIcon: 'videocam', typeBg: 'bg-secondary-container/20 text-on-secondary-container border-secondary-container/30',
    date: 'Oct 24, 2023', time: '10:00 AM - 10:45 AM', meetingLabel: 'Ready to join in 15m', meetingSubLabel: 'MedCore Secure Video',
    meetingIcon: 'link', selected: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUILhh9d0EelBcT3XgcNeaFFLImOHkkH6wpiu9Ac0UwjcSY_o4uL4QpGHLvt8G2DtMo2yt3iCk9TxECYS3dRLV24mbLwyX0ZFzo_-wsBVaBSjSXzMskqftDqgEprNAG86v7i-4vqq0B3Zpqc_DjD6veHkhwgMJZY9nqRbRY_CVqBDoIkpiH2bYKsnfO89P-CpNppvweczpE0nyuPAtKNRkmzJiSlaDvYgj0SYp5k3yTtqZsGXLh3Z_Iz4sqBH4691e79KF_IcuxKT_',
    actions: ['Reschedule','Join'],
  },
  {
    id: 2, doctor: 'Dr. Marcus Johnson', specialty: 'Cardiology', specialtyIcon: 'monitor_heart',
    type: 'In-person', typeIcon: 'domain', typeBg: 'bg-surface-container-high text-on-surface border-outline-variant/30',
    date: 'Nov 02, 2023', time: '2:30 PM - 3:00 PM', meetingLabel: 'Main Medical Center', meetingSubLabel: 'West Wing, Suite 402',
    meetingIcon: 'location_on', selected: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrdTzMqp0wEV3GoiPW535SNT9zyGymMtY-m3MPnmvklmqRjT84NqmrVYGHw5daPfMI4OCwXb0hFpROIi7wra4N3YDcKyDzg-lDS81yvVOd5yqyoBMU7JjGXKAhfzl08MedV_bdfUVmHloDPn6RCapqpU3Iol9KHm_Weqpg88SHDxjixb-FPeARv6v0obL3MVKFqZM6R1Z02bwloQO-7Y8qGmNgXx6VPxU--fyw8q-rFHnEWSmrZTOopSt1s9loYiINYl6koIK8OHLL',
    actions: ['Cancel','Reschedule'],
  },
];

export default function MyAppointmentsMedcoreHealth() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <div className="bg-background text-on-surface font-body-md text-body-md antialiased overflow-hidden">
      <div className="flex h-screen w-full">
        <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 border-r border-slate-200 bg-white py-4 z-40">
          <div className="px-6 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined">local_hospital</span>
            </div>
            <div>
              <h2 className="text-blue-600 font-bold font-h3 text-h3 leading-tight tracking-tight">Patient Portal</h2>
              <p className="font-label-sm text-label-sm text-slate-500">Hospital Management</p>
            </div>
          </div>
          <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all font-manrope text-sm font-medium rounded-r-lg" to="/patient_dashboard_medcore_health">
              <span className="material-symbols-outlined">dashboard</span>Dashboard
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600 rounded-r-lg font-manrope text-sm font-medium" to="/my_appointments_medcore_health">
              <span className="material-symbols-outlined">calendar_today</span>Appointments
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all font-manrope text-sm font-medium rounded-r-lg" to="/medical_records_medcore_health">
              <span className="material-symbols-outlined">history_edu</span>Medical Records
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all font-manrope text-sm font-medium rounded-r-lg" to="/prescriptions_medcore_health">
              <span className="material-symbols-outlined">medication</span>Prescriptions
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all font-manrope text-sm font-medium rounded-r-lg" to="/billing_payments_medcore_health">
              <span className="material-symbols-outlined">payments</span>Billing
            </Link>
          </nav>
          <div className="px-2 mt-auto space-y-1">
            <div className="border-t border-slate-200 mb-2 mx-4"></div>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all font-manrope text-sm font-medium rounded-r-lg" to="/settings_medcore_health">
              <span className="material-symbols-outlined">settings</span>Settings
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all font-manrope text-sm font-medium rounded-r-lg" to="/login_medcore_health">
              <span className="material-symbols-outlined">logout</span>Logout
            </Link>
          </div>
        </aside>

        <div className="flex-1 flex flex-col md:ml-64 h-screen relative">
          <header className="flex items-center justify-between px-6 h-16 w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-manrope antialiased">
            <div className="flex items-center gap-4">
              <button className="md:hidden text-slate-600 hover:text-blue-600">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="relative hidden sm:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                <input className="bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" placeholder="Search..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/notifications_medcore_health')}
                className="text-slate-600 hover:bg-slate-50 transition-colors p-2 rounded-full relative"
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="text-slate-600 hover:bg-slate-50 transition-colors p-2 rounded-full hidden sm:block">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
              <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img alt="Patient Profile Avatar" className="w-8 h-8 rounded-full border border-slate-200 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbyZcDeSAJNUJ2AB61s_fjyUj0bcPhelaz2v35Acg5lRUxhxaUObWMIRuKRaoXW_EQvOJKXvl0cJ7b8BfEaYVLWka8HEeCj2nECQTQISb1OIVUA3y72h2qOCrbOuv2-pqCxXMnG-JLS5n3pzmK-mmV9HQvBSqb7ZdFlRPLO9rY63W3aKbV_GhXMZ60NG4k32hFCzyt6MjW5eqnkGmbPDSJaUtMXQ-4-3VBUQrDtWAE7i2i4-45uqOuzwxnydboAmmyy9kMx0bN16IC" />
                <span className="font-medium text-sm text-slate-700 hidden sm:block">Sarah J.</span>
              </button>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 md:p-grid-margin bg-background">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-xl gap-4">
              <div>
                <h1 className="font-h1 text-h1 text-on-surface">My Appointments</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage your upcoming visits and view consultation history.</p>
              </div>
              <button
                onClick={() => navigate('/search_doctors_medcore_health')}
                className="bg-primary-container text-on-primary-container font-label-md text-label-md px-lg py-sm rounded-lg hover:bg-primary-fixed-variant transition-colors flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Book Appointment
              </button>
            </div>

            <div className="flex gap-lg border-b border-surface-variant mb-lg">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-sm border-b-2 font-label-md text-label-md transition-colors relative top-[1px] ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab}
                  {tab === 'Upcoming' && (
                    <span className="ml-2 bg-primary-container text-on-primary-container text-[10px] py-[2px] px-2 rounded-full">2</span>
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-grid-gutter items-start">
              <div className="xl:col-span-7 flex flex-col gap-md">
                {activeTab === 'Upcoming' && UPCOMING.map(appt => (
                  <div
                    key={appt.id}
                    className={`bg-surface-container-lowest rounded-xl p-lg border-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all cursor-pointer ${appt.selected ? 'border-primary' : 'border-surface-variant hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]'}`}
                  >
                    {appt.selected && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 border-b border-surface-variant pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-outline-variant shrink-0">
                          <img alt={appt.doctor} className="w-full h-full object-cover" src={appt.img} />
                        </div>
                        <div>
                          <h3 className="font-h3 text-[18px] leading-tight text-on-surface">{appt.doctor}</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px]">{appt.specialtyIcon}</span>
                            {appt.specialty}
                          </p>
                        </div>
                      </div>
                      <div className={`${appt.typeBg} font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1 shrink-0 border`}>
                        <span className="material-symbols-outlined text-[14px]">{appt.typeIcon}</span>
                        {appt.type}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined">event</span>
                        </div>
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Date & Time</p>
                          <p className="font-label-md text-label-md text-on-surface">{appt.date}</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{appt.time}</p>
                        </div>
                      </div>
                      <div className="hidden sm:block w-px h-12 bg-surface-variant self-center"></div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined">{appt.meetingIcon}</span>
                        </div>
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">{appt.typeIcon === 'videocam' ? 'Meeting Link' : 'Location'}</p>
                          <p className="font-label-md text-label-md text-primary">{appt.meetingLabel}</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{appt.meetingSubLabel}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                      {appt.actions[0] === 'Reschedule' && appt.actions[1] === 'Join' ? (
                        <>
                          <button
                            onClick={() => navigate('/select_slot_medcore_health')}
                            className="font-label-md text-label-md text-on-surface border border-outline-variant px-4 py-2 rounded-lg hover:bg-surface-container transition-colors"
                          >
                            Reschedule
                          </button>
                          <button className="font-label-md text-label-md bg-secondary text-on-secondary px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">videocam</span>Join Consultation
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="font-label-md text-label-md text-error hover:bg-error-container/20 px-4 py-2 rounded-lg transition-colors">Cancel</button>
                          <button
                            onClick={() => navigate('/select_slot_medcore_health')}
                            className="font-label-md text-label-md text-on-surface border border-outline-variant px-4 py-2 rounded-lg hover:bg-surface-container transition-colors"
                          >
                            Reschedule
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
                {activeTab === 'Completed' && (
                  <div className="text-center py-16 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[48px] text-outline block mb-2">check_circle</span>
                    No completed appointments to show.
                  </div>
                )}
                {activeTab === 'Cancelled' && (
                  <div className="text-center py-16 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[48px] text-outline block mb-2">cancel</span>
                    No cancelled appointments.
                  </div>
                )}
              </div>

              <div className="xl:col-span-5 hidden xl:block">
                <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-surface-variant sticky top-[100px] overflow-hidden flex flex-col max-h-[calc(100vh-140px)]">
                  <div className="bg-surface px-6 py-4 border-b border-surface-variant flex justify-between items-center shrink-0">
                    <h2 className="font-h3 text-[20px] text-on-surface">Appointment Details</h2>
                    <button className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-container">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1">
                    <div className="flex flex-col items-center text-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-secondary-container mb-3 overflow-hidden border-2 border-surface-container-lowest shadow-sm">
                        <img alt="Dr. Emily Chen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUIMJ4eUhHce5ZtRduSEqMf02gJmMfyP-V8eqWdhDQKx1_EG3oKznX65fufDJrJg__dZL9IHAtHyfF2GHyk861tnZW-4zU97gf6fBAhUkfPA-rdKvVrfQviML3xn6kSYxfPNeMW0canwIzGzWCMCncl9c6-g9-Le_rzcllCaNtEt-4WxPr9VtZ97EVXFS7dQ6wi4paoXG4KlaI5ea6LxI_ENVXi_z3s50b8zHVfr3bM_TL5llwHokKyE1GXWW0_LQlLFRUzfcgaR-G" />
                      </div>
                      <h3 className="font-h2 text-[24px] text-on-surface mb-1">Dr. Emily Chen</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">Neurology Specialist</p>
                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => navigate('/messages_medcore_health')}
                          className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center hover:bg-surface-container-high transition-colors"
                        >
                          <span className="material-symbols-outlined text-[20px]">chat</span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-[20px]">info</span>
                        </button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Consultation Prep</h4>
                        <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/30">
                          <p className="font-body-sm text-body-sm text-on-surface mb-2">Please ensure you are in a quiet room with a stable internet connection. Have your recent medication list ready.</p>
                          <a className="flex items-center gap-2 text-primary font-label-sm text-label-sm hover:underline mt-2" href="#">
                            <span className="material-symbols-outlined text-[16px]">description</span>
                            Complete Pre-visit Questionnaire
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Patient Notes</h4>
                        <div className="bg-surface rounded-lg p-3 border border-surface-variant">
                          <p className="font-body-sm text-body-sm text-on-surface italic">"Experiencing mild headaches in the morning since last week. Want to discuss medication dosage."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface px-6 py-4 border-t border-surface-variant shrink-0 mt-auto">
                    <button className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm">
                      <span className="material-symbols-outlined">videocam</span>Join Consultation Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
