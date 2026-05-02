import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DOCTOR_NAV = [
  { icon: 'dashboard', label: 'Dashboard', to: '/doctor_dashboard_medcore_health' },
  { icon: 'calendar_today', label: 'Schedule', to: '/schedule_management_medcore_health' },
  { icon: 'queue', label: 'Patient Queue', to: '/patient_queue_medcore_health', active: true },
  { icon: 'event_note', label: 'Appointments', to: '/appointments_queue_medcore_health' },
  { icon: 'group', label: 'Patients', to: '/patient_directory_medcore_health' },
  { icon: 'summarize', label: 'Consultation Summary', to: '/consultation_summary_medcore_health' },
  { icon: 'mail', label: 'Messages', to: '/messages_medcore_health' },
];

const INITIAL_QUEUE = [
  { id: 1, name: 'Sarah Mitchell', age: 34, reason: 'Migraine follow-up', waitMins: 0, status: 'in-progress', token: 'A01', urgency: 'normal', avatar: 'SM' },
  { id: 2, name: 'James Okafor', age: 52, reason: 'Chest pain evaluation', waitMins: 12, status: 'waiting', token: 'A02', urgency: 'urgent', avatar: 'JO' },
  { id: 3, name: 'Priya Sharma', age: 28, reason: 'Annual check-up', waitMins: 25, status: 'waiting', token: 'A03', urgency: 'normal', avatar: 'PS' },
  { id: 4, name: 'Carlos Mendez', age: 67, reason: 'Diabetes management', waitMins: 40, status: 'waiting', token: 'A04', urgency: 'normal', avatar: 'CM' },
  { id: 5, name: 'Emma Walsh', age: 41, reason: 'Back pain — chronic', waitMins: 55, status: 'waiting', token: 'A05', urgency: 'low', avatar: 'EW' },
  { id: 6, name: 'David Kim', age: 19, reason: 'Sports injury', waitMins: 70, status: 'waiting', token: 'A06', urgency: 'normal', avatar: 'DK' },
  { id: 7, name: 'Helen Torres', age: 73, reason: 'Hypertension review', waitMins: 85, status: 'done', token: 'A07', urgency: 'normal', avatar: 'HT' },
  { id: 8, name: 'Raj Patel', age: 45, reason: 'Lab results review', waitMins: 0, status: 'done', token: 'A00', urgency: 'normal', avatar: 'RP' },
];

const URGENCY_MAP = {
  urgent: { label: 'Urgent', cls: 'bg-red-100 text-red-600', dot: 'bg-red-500' },
  normal: { label: 'Normal', cls: 'bg-blue-50 text-blue-600', dot: 'bg-blue-400' },
  low: { label: 'Low', cls: 'bg-slate-100 text-slate-500', dot: 'bg-slate-400' },
};

export default function PatientQueueMedcoreHealth() {
  const navigate = useNavigate();
  const [queue, setQueue] = useState(INITIAL_QUEUE);
  const [filter, setFilter] = useState('all');
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setElapsed(e => e + 1), 60000);
    return () => clearInterval(t);
  }, []);

  const callNext = () => {
    setQueue(prev => {
      const updated = [...prev];
      const inProg = updated.findIndex(p => p.status === 'in-progress');
      if (inProg !== -1) updated[inProg] = { ...updated[inProg], status: 'done' };
      const nextWait = updated.findIndex(p => p.status === 'waiting');
      if (nextWait !== -1) updated[nextWait] = { ...updated[nextWait], status: 'in-progress', waitMins: 0 };
      return updated;
    });
  };

  const skipPatient = id => {
    setQueue(prev => {
      const updated = [...prev];
      const idx = updated.findIndex(p => p.id === id);
      if (idx !== -1) {
        const [removed] = updated.splice(idx, 1);
        const lastWaiting = updated.findLastIndex(p => p.status === 'waiting');
        updated.splice(lastWaiting + 1, 0, { ...removed, waitMins: removed.waitMins + 20 });
      }
      return updated;
    });
  };

  const inProgress = queue.find(p => p.status === 'in-progress');
  const waiting = queue.filter(p => p.status === 'waiting');
  const done = queue.filter(p => p.status === 'done');

  const displayed = filter === 'waiting' ? waiting : filter === 'done' ? done : queue.filter(p => p.status !== 'done');

  return (
    <div className="bg-background text-on-surface font-body-md antialiased flex h-screen overflow-hidden">
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

      <main className="flex-1 md:ml-64 flex flex-col overflow-hidden bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-8 py-4 shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Patient Queue</h1>
              <p className="text-slate-500 text-sm mt-0.5">Live view · Today, Oct 24, 2023 · Refreshes every minute</p>
            </div>
            <button onClick={callNext} disabled={!waiting.length} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm shadow-blue-200">
              <span className="material-symbols-outlined text-[18px]">call_made</span>Call Next Patient
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            {[
              { label: 'Total Today', val: queue.length, icon: 'groups', bg: 'bg-blue-50', col: 'text-blue-600' },
              { label: 'In Progress', val: inProgress ? 1 : 0, icon: 'person', bg: 'bg-green-50', col: 'text-green-600' },
              { label: 'Waiting', val: waiting.length, icon: 'hourglass_top', bg: 'bg-amber-50', col: 'text-amber-600' },
              { label: 'Completed', val: done.length, icon: 'check_circle', bg: 'bg-slate-100', col: 'text-slate-500' },
            ].map(s => (
              <div key={s.label} className={`flex items-center gap-3 ${s.bg} px-4 py-3 rounded-xl flex-1`}>
                <span className={`material-symbols-outlined ${s.col} text-2xl`}>{s.icon}</span>
                <div><p className={`text-2xl font-bold ${s.col}`}>{s.val}</p><p className="text-xs text-slate-500">{s.label}</p></div>
              </div>
            ))}
          </div>
        </header>

        {inProgress && (
          <div className="mx-8 mt-6 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">{inProgress.avatar}</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Currently With Doctor</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mt-0.5">{inProgress.name}</h3>
                <p className="text-sm text-slate-500">{inProgress.reason} · Token {inProgress.token} · Age {inProgress.age}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/consultation_summary_medcore_health')} className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
                <span className="material-symbols-outlined text-[16px]">summarize</span>Write Summary
              </button>
              <button onClick={callNext} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all">
                <span className="material-symbols-outlined text-[16px]">done_all</span>Mark Complete
              </button>
            </div>
          </div>
        )}

        <div className="px-8 py-4 flex gap-2">
          {['all', 'waiting', 'done'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize ${filter === f ? 'bg-blue-500 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{f === 'all' ? 'Active Queue' : f}</button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="space-y-3">
            {displayed.map((patient, idx) => {
              const urg = URGENCY_MAP[patient.urgency];
              return (
                <div key={patient.id} className={`bg-white rounded-xl border transition-all ${patient.status === 'done' ? 'border-slate-100 opacity-60' : 'border-slate-200 hover:border-blue-200 hover:shadow-sm'}`}>
                  <div className="p-4 flex items-center gap-4">
                    <div className="text-center w-10 shrink-0">
                      {patient.status === 'done' ? (
                        <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                      ) : patient.status === 'in-progress' ? (
                        <span className="material-symbols-outlined text-green-500 text-2xl animate-pulse">person</span>
                      ) : (
                        <span className="text-2xl font-black text-slate-300">#{idx + 1}</span>
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">{patient.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-slate-800 text-sm">{patient.name}</h4>
                        <span className="text-slate-400 text-xs">Age {patient.age}</span>
                        <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${urg.cls}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${urg.dot}`}></span>{urg.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{patient.reason}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-slate-400">Token</p>
                      <p className="font-bold text-slate-700 font-mono">{patient.token}</p>
                    </div>
                    {patient.status === 'waiting' && (
                      <div className="text-right shrink-0">
                        <p className="text-xs text-slate-400">Est. Wait</p>
                        <p className="font-semibold text-amber-600 text-sm">{patient.waitMins}m</p>
                      </div>
                    )}
                    {patient.status === 'waiting' && (
                      <button onClick={() => skipPatient(patient.id)} className="text-slate-400 hover:text-slate-600 transition-all p-1.5 hover:bg-slate-100 rounded-lg">
                        <span className="material-symbols-outlined text-[18px]">skip_next</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            {displayed.length === 0 && (
              <div className="text-center py-16 text-slate-400">
                <span className="material-symbols-outlined text-5xl">inbox</span>
                <p className="mt-2 text-sm">No patients in this category</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
