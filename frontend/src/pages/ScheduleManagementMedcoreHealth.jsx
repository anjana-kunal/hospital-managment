import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const DOCTOR_NAV = [
  { icon: 'dashboard', label: 'Dashboard', to: '/doctor_dashboard_medcore_health' },
  { icon: 'calendar_today', label: 'Schedule', to: '/schedule_management_medcore_health', active: true },
  { icon: 'queue', label: 'Patient Queue', to: '/patient_queue_medcore_health' },
  { icon: 'event_note', label: 'Appointments', to: '/appointments_queue_medcore_health' },
  { icon: 'group', label: 'Patients', to: '/patient_directory_medcore_health' },
  { icon: 'summarize', label: 'Consultation Summary', to: '/consultation_summary_medcore_health' },
  { icon: 'mail', label: 'Messages', to: '/messages_medcore_health' },
];

const DAYS = [
  { label: 'Mon', date: '23', slots: [
    { time: '09:00 AM', patient: null },
    { time: '10:00 AM', patient: 'Sarah Jenkins', type: 'Follow-up', color: 'bg-primary-fixed text-on-primary-fixed border-primary/20' },
  ]},
  { label: 'Tue', date: '24', today: true, slots: [
    { time: '09:00 AM', patient: 'Michael Chang', type: 'Initial Consult', color: 'bg-secondary-container text-on-secondary-container border-secondary/20' },
    { time: '10:30 AM', patient: null, blocked: 'Break', blockedIcon: 'coffee' },
    { time: '11:30 AM', patient: 'Emergency Ward', type: 'Surgery Consult', color: 'bg-error-container text-on-error-container border-error/20', conflict: true },
  ]},
  { label: 'Wed', date: '25', slots: [
    { time: 'All Day', patient: 'Medical Seminar', type: '', color: 'bg-surface-container-highest text-on-surface-variant border-outline-variant', allDay: true },
  ]},
  { label: 'Thu', date: '26', slots: [
    { time: '09:00 AM', patient: null },
    { time: '10:00 AM', patient: 'Emily Clark', type: 'Post-Op Review', color: 'bg-primary-fixed text-on-primary-fixed border-primary/20' },
  ]},
  { label: 'Fri', date: '27', slots: [
    { time: '09:00 AM', patient: 'Board Meeting', type: 'Conference Rm A', color: 'bg-tertiary-container text-on-tertiary-container border-tertiary/20' },
  ]},
  { label: 'Sat', date: '28', off: true, slots: [] },
];

const EMPTY_FORM = { patient: '', type: 'Follow-up', time: '09:00', day: 1, notes: '' };
const APPT_TYPES = ['Follow-up', 'Initial Consult', 'Post-Op Review', 'Emergency', 'Surgery Consult', 'Board Meeting'];

export default function ScheduleManagementMedcoreHealth() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [slots, setSlots] = useState(DAYS);
  const [saved, setSaved] = useState(false);
  const [view, setView] = useState('Weekly');
  const [clickedSlot, setClickedSlot] = useState(null);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleAddAppt = () => {
    if (!form.patient.trim()) return;
    const newSlots = slots.map((day, i) => {
      if (i !== Number(form.day)) return day;
      const conflict = day.slots.some(s => s.time === form.time + ' AM' || s.time === form.time + ' PM');
      return {
        ...day,
        slots: [...day.slots, {
          time: form.time + ' AM',
          patient: form.patient,
          type: form.type,
          color: 'bg-primary-fixed text-on-primary-fixed border-primary/20',
          conflict,
        }].sort((a, b) => a.time.localeCompare(b.time)),
      };
    });
    setSlots(newSlots);
    setSaved(true);
    setTimeout(() => { setSaved(false); setShowModal(false); setForm(EMPTY_FORM); }, 1500);
  };

  const totalAppts = slots.reduce((acc, d) => acc + d.slots.filter(s => s.patient && !s.blocked).length, 0);

  return (
    <>
      <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
        <nav className="bg-white dark:bg-slate-900 font-manrope text-sm font-semibold h-screen w-64 border-r border-slate-200 dark:border-slate-800 fixed left-0 top-0 flex flex-col z-40">
          <div className="px-6 py-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">DB</div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Dr. Julian Bashir</h2>
              <p className="text-xs text-slate-500 font-medium">Chief Surgeon</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
            {DOCTOR_NAV.map(item => (
              <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${item.active ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                <span className="material-symbols-outlined">{item.icon}</span>{item.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 py-4 flex flex-col gap-1">
            <Link to="/settings_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined">settings</span>Settings
            </Link>
            <Link to="/login_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined">logout</span>Logout
            </Link>
          </div>
        </nav>

        <div className="flex-1 ml-64 flex flex-col min-w-0">
          <header className="bg-white dark:bg-slate-900 font-manrope text-sm font-medium border-b border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50">
            <div className="flex items-center gap-6">
              <div className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">MedCore HMS</div>
              <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-1.5 border border-transparent">
                <span className="material-symbols-outlined text-slate-400 text-sm mr-2">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-slate-700 dark:text-slate-200 text-sm w-64 placeholder-slate-400" placeholder="Search patients, appointments..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
                <span className="material-symbols-outlined">help</span>
              </button>
              <div className="ml-4 h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                <img alt="Doctor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_EFG8YnG3z-Y80kMIv13YQie1BbYazU4Qypo11NMxOUtneJJuQpFrCwsRZsCXi-XkfRD1OIMe3FLXF-TuK7bNXMe2z2Rcv3F5bpSLHhUjdQxqZYvdBAKZNaIRYkwYxrEDhqYZsxM4AHcHwgasQMbaxFSdv7Uemg_XDQ9M54J7Fe_6yn3Txbu-tdDUTwhvK0H77jNK9xNTvOWCWL3b8DDVAohzWsM7tfRWT-jG8Nq3MsEpFdZ3zfIg9qaDG4Dm6RvR4LskR28nPERq" />
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-xl bg-surface-container-low">
            <div className="max-w-[1600px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-lg gap-4">
                <div>
                  <h1 className="font-h2 text-h2 text-on-surface mb-xs">Schedule Management</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">Smart scheduling — click any empty slot to add an appointment. Conflicts are flagged automatically.</p>
                </div>
                <div className="flex items-center gap-md">
                  <div className="flex p-xs bg-surface-variant rounded-lg">
                    {['Weekly', 'Monthly'].map(v => (
                      <button key={v} onClick={() => setView(v)} className={`px-md py-sm rounded-DEFAULT font-label-md text-label-md transition-all ${view === v ? 'bg-surface text-on-surface shadow-sm border border-outline-variant' : 'text-on-surface-variant hover:text-on-surface'}`}>{v}</button>
                    ))}
                  </div>
                  <button onClick={() => setShowModal(true)} className="flex items-center gap-sm px-md py-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">add</span>New Appointment
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-lg">
                <div className="col-span-12 xl:col-span-8 flex flex-col gap-md">
                  <div className="bg-surface rounded-xl p-md shadow-sm border border-surface-variant flex items-center justify-between">
                    <div className="flex items-center gap-md">
                      <button className="p-sm rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
                        <span className="material-symbols-outlined">chevron_left</span>
                      </button>
                      <h3 className="font-h3 text-h3 text-on-surface">Oct 23 – Oct 29, 2023</h3>
                      <button className="p-sm rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </div>
                    <button className="px-md py-sm border border-outline rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-variant transition-colors">Today</button>
                  </div>

                  <div className="bg-surface rounded-xl shadow-sm border border-surface-variant overflow-hidden flex-1 min-h-[600px] flex flex-col">
                    <div className="grid grid-cols-6 border-b border-surface-variant bg-surface-container-lowest">
                      {slots.map((day, i) => (
                        <div key={i} className={`p-sm text-center border-r border-surface-variant last:border-r-0 ${day.today ? 'bg-primary-fixed-dim/20' : day.off ? 'bg-surface-container' : ''}`}>
                          <div className={`font-label-sm text-label-sm uppercase tracking-wider ${day.today ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{day.label}</div>
                          <div className={`font-h3 text-h3 mt-xs ${day.today ? 'text-primary' : day.off ? 'text-on-surface-variant' : 'text-on-surface'}`}>{day.date}</div>
                          {day.off && <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Off</div>}
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 grid grid-cols-6 relative">
                      {slots.map((day, di) => (
                        <div key={di} className={`border-r border-surface-variant last:border-r-0 p-sm flex flex-col gap-sm ${day.today ? 'bg-surface-container-lowest relative' : day.off ? 'bg-surface-container opacity-50' : ''}`}>
                          {day.today && (
                            <div className="absolute top-20 left-0 right-0 border-t-2 border-error z-10 flex items-center">
                              <span className="w-2 h-2 rounded-full bg-error -ml-1"></span>
                            </div>
                          )}
                          {!day.off && (
                            <button onClick={() => { setForm(f => ({ ...f, day: di })); setShowModal(true); }} className="h-16 rounded-lg border-2 border-dashed border-outline-variant bg-transparent flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-colors group">
                              <span className="material-symbols-outlined text-[18px] opacity-50 group-hover:opacity-100">add</span>
                              <span className="font-label-sm text-label-sm mt-0.5 text-[10px]">Add slot</span>
                            </button>
                          )}
                          {day.slots.map((slot, si) => (
                            slot.blocked ? (
                              <div key={si} className="h-16 rounded-lg bg-surface-variant p-sm flex flex-col justify-center items-center opacity-70 border border-outline border-dashed">
                                <span className="material-symbols-outlined text-on-surface-variant">{slot.blockedIcon}</span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 text-[10px]">Break</span>
                              </div>
                            ) : (
                              <div key={si} className={`${slot.allDay ? 'flex-1' : 'h-28'} rounded-lg p-sm border flex flex-col cursor-pointer hover:shadow-md transition-shadow relative ${slot.color}`}>
                                {slot.conflict && (
                                  <div className="absolute top-1 right-1">
                                    <span className="material-symbols-outlined text-[14px] text-error">warning</span>
                                  </div>
                                )}
                                <span className="font-label-sm text-label-sm font-bold text-[11px]">{slot.time}</span>
                                <span className="font-label-md text-label-md truncate mt-1 text-[12px]">{slot.patient}</span>
                                {slot.type && <span className="font-label-sm text-label-sm opacity-80 truncate text-[10px]">{slot.type}</span>}
                              </div>
                            )
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                    {[
                      { cls: 'bg-primary-fixed', label: 'Patient Appointment' },
                      { cls: 'bg-secondary-container', label: 'Initial Consult' },
                      { cls: 'bg-error-container', label: 'Emergency / Conflict' },
                      { cls: 'bg-tertiary-container', label: 'Meeting / Other' },
                    ].map(l => (
                      <div key={l.label} className="flex items-center gap-1.5">
                        <span className={`w-3 h-3 rounded-sm ${l.cls}`}></span>{l.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 xl:col-span-4 flex flex-col gap-lg">
                  <div className="bg-surface rounded-xl p-lg shadow-sm border border-outline-variant">
                    <h3 className="font-h3 text-h3 text-on-surface mb-md">Weekly Utilization</h3>
                    <div className="flex items-end gap-md mb-xs">
                      <span className="font-h1 text-h1 text-primary">{Math.round((totalAppts / 12) * 100)}%</span>
                      <span className="font-label-md text-label-md text-on-surface-variant mb-1">of available slots booked</span>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-2 mb-md">
                      <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${Math.min(100, Math.round((totalAppts / 12) * 100))}%` }}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-sm">
                      <div className="bg-surface-container-low p-sm rounded-lg border border-surface-variant">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Total Appointments</span>
                        <span className="font-h3 text-h3 text-on-surface">{totalAppts}</span>
                      </div>
                      <div className="bg-surface-container-low p-sm rounded-lg border border-surface-variant">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Available Hours</span>
                        <span className="font-h3 text-h3 text-on-surface">{Math.max(0, 8.5 - totalAppts * 0.5).toFixed(1)}</span>
                      </div>
                    </div>
                    <button onClick={() => navigate('/patient_queue_medcore_health')} className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-label-md text-label-md py-2.5 rounded-lg transition-all border border-blue-200">
                      <span className="material-symbols-outlined text-[18px]">queue</span>View Patient Queue
                    </button>
                  </div>

                  <div className="bg-surface rounded-xl p-lg shadow-sm border border-outline-variant">
                    <h3 className="font-h3 text-h3 text-on-surface mb-md">Schedule Actions</h3>
                    <div className="flex flex-col gap-md">
                      <button onClick={() => setShowModal(true)} className="group border border-outline-variant rounded-lg p-md hover:border-primary transition-colors text-left flex items-start gap-md">
                        <div className="p-sm bg-surface-variant text-on-surface rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
                          <span className="material-symbols-outlined">add_circle</span>
                        </div>
                        <div>
                          <h4 className="font-label-md text-label-md text-on-surface mb-xs">Add Appointment</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Book a new patient slot with conflict detection.</p>
                        </div>
                      </button>
                      <div className="group border border-outline-variant rounded-lg p-md hover:border-primary transition-colors cursor-pointer flex items-start gap-md">
                        <div className="p-sm bg-surface-variant text-on-surface rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
                          <span className="material-symbols-outlined">block</span>
                        </div>
                        <div>
                          <h4 className="font-label-md text-label-md text-on-surface mb-xs">Block Specific Time</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Reserve time for admin work or personal tasks.</p>
                        </div>
                      </div>
                      <div className="group border border-outline-variant rounded-lg p-md hover:border-tertiary transition-colors cursor-pointer flex items-start gap-md">
                        <div className="p-sm bg-surface-variant text-on-surface rounded-lg group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                          <span className="material-symbols-outlined">flight_takeoff</span>
                        </div>
                        <div>
                          <h4 className="font-label-md text-label-md text-on-surface mb-xs">Manage Leave</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Submit PTO or log sick days to clear schedule.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface rounded-xl p-lg shadow-sm border border-outline-variant">
                    <div className="flex items-center justify-between mb-md">
                      <h3 className="font-h3 text-h3 text-on-surface">Consultation Hours</h3>
                      <button className="p-xs rounded text-primary hover:bg-primary-fixed transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </div>
                    <ul className="flex flex-col gap-sm">
                      {[['Mon – Thu', '09:00 AM – 05:00 PM'], ['Friday', '09:00 AM – 01:00 PM'], ['Sat – Sun', 'Off']].map(([d, t]) => (
                        <li key={d} className="flex items-center justify-between py-xs border-b border-surface-variant last:border-b-0">
                          <span className="font-label-md text-label-md text-on-surface-variant">{d}</span>
                          <span className="font-body-md text-body-md text-on-surface">{t}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-md p-md bg-inverse-on-surface rounded-lg flex items-start gap-sm">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">info</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Standard slot duration is <strong>30 minutes</strong>. Adjust in settings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 m-4">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-slate-800 text-lg">New Appointment</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 transition-all">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Patient Name</label>
                <input value={form.patient} onChange={e => set('patient', e.target.value)} placeholder="Enter patient name…" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Day</label>
                  <select value={form.day} onChange={e => set('day', e.target.value)} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    {slots.map((d, i) => <option key={i} value={i} disabled={d.off}>{d.label} {d.date}{d.off ? ' (Off)' : ''}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Time</label>
                  <input type="time" value={form.time} onChange={e => set('time', e.target.value)} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Appointment Type</label>
                <select value={form.type} onChange={e => set('type', e.target.value)} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                  {APPT_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Notes (optional)</label>
                <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={2} placeholder="Any special notes…" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-200 text-slate-600 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">Cancel</button>
              <button onClick={handleAddAppt} className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${saved ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                {saved ? '✓ Added!' : 'Add Appointment'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
