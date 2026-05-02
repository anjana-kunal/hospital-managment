import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DOCTOR_NAV = [
  { icon: 'dashboard', label: 'Dashboard', to: '/doctor_dashboard_medcore_health' },
  { icon: 'calendar_today', label: 'Schedule', to: '/schedule_management_medcore_health' },
  { icon: 'queue', label: 'Patient Queue', to: '/patient_queue_medcore_health' },
  { icon: 'event_note', label: 'Appointments', to: '/appointments_queue_medcore_health' },
  { icon: 'group', label: 'Patients', to: '/patient_directory_medcore_health' },
  { icon: 'summarize', label: 'Consultation Summary', to: '/consultation_summary_medcore_health', active: true },
  { icon: 'mail', label: 'Messages', to: '/messages_medcore_health' },
];

const PATIENTS = [
  { id: 1, name: 'Sarah Mitchell', dob: '1989-03-15', id_no: 'P-10042', age: 34 },
  { id: 2, name: 'James Okafor', dob: '1971-07-22', id_no: 'P-10043', age: 52 },
  { id: 3, name: 'Priya Sharma', dob: '1995-11-08', id_no: 'P-10044', age: 28 },
];

const ICD_SUGGESTIONS = ['G43.909 — Migraine, unspecified', 'I10 — Essential (primary) hypertension', 'E11.9 — Type 2 diabetes mellitus', 'M54.5 — Low back pain', 'J06.9 — Acute upper respiratory infection'];

const EMPTY = { patientId: 1, chiefComplaint: '', diagnosis: '', icdCode: '', notes: '', prescriptions: [{ drug: '', dose: '', frequency: '', duration: '' }], followUpDate: '', followUpNotes: '', referTo: '' };

export default function ConsultationSummaryMedcoreHealth() {
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY);
  const [preview, setPreview] = useState(false);
  const [saved, setSaved] = useState(false);
  const [icdOpen, setIcdOpen] = useState(false);

  const patient = PATIENTS.find(p => p.id === Number(form.patientId));
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const setRx = (i, k, v) => setForm(f => { const p = [...f.prescriptions]; p[i] = { ...p[i], [k]: v }; return { ...f, prescriptions: p }; });
  const addRx = () => setForm(f => ({ ...f, prescriptions: [...f.prescriptions, { drug: '', dose: '', frequency: '', duration: '' }] }));
  const removeRx = i => setForm(f => ({ ...f, prescriptions: f.prescriptions.filter((_, j) => j !== i) }));

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  const inputCls = 'w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white placeholder-slate-400';
  const labelCls = 'block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5';

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
            <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-4 py-3 transition-all ${item.active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'}`}>
              <span className="material-symbols-outlined">{item.icon}</span>{item.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-slate-200 py-4 flex flex-col gap-1">
          <Link to="/settings_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined">settings</span>Settings
          </Link>
          <Link to="/login_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined">logout</span>Logout
          </Link>
        </div>
      </nav>

      <main className="flex-1 md:ml-64 flex flex-col overflow-hidden bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-8 py-4 shrink-0 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Consultation Summary</h1>
            <p className="text-slate-500 text-sm mt-0.5">Complete and sign the post-visit consultation record</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setPreview(!preview)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${preview ? 'bg-blue-50 border-blue-300 text-blue-600' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
              <span className="material-symbols-outlined text-[16px]">preview</span>{preview ? 'Edit Mode' : 'Preview'}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-[16px]">print</span>Print
            </button>
            <button onClick={handleSave} className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${saved ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
              <span className="material-symbols-outlined text-[16px]">{saved ? 'check' : 'save'}</span>{saved ? 'Saved!' : 'Save & Sign'}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {!preview ? (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h2 className="font-semibold text-slate-800 mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-blue-500">person</span>Patient Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Select Patient</label>
                    <select value={form.patientId} onChange={e => set('patientId', e.target.value)} className={inputCls}>
                      {PATIENTS.map(p => <option key={p.id} value={p.id}>{p.name} — {p.id_no}</option>)}
                    </select>
                  </div>
                  <div className="flex gap-3">
                    {patient && (
                      <div className="flex-1 bg-blue-50 rounded-lg p-3 text-sm">
                        <p className="font-semibold text-blue-800">{patient.name}</p>
                        <p className="text-blue-600 text-xs mt-0.5">Age {patient.age} · ID: {patient.id_no}</p>
                        <p className="text-blue-500 text-xs">DOB: {patient.dob}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <h2 className="font-semibold text-slate-800 flex items-center gap-2"><span className="material-symbols-outlined text-purple-500">clinical_notes</span>Clinical Notes</h2>
                <div>
                  <label className={labelCls}>Chief Complaint</label>
                  <input value={form.chiefComplaint} onChange={e => set('chiefComplaint', e.target.value)} placeholder="e.g. Patient reports persistent headaches for 2 weeks…" className={inputCls} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Diagnosis</label>
                    <input value={form.diagnosis} onChange={e => set('diagnosis', e.target.value)} placeholder="Primary diagnosis…" className={inputCls} />
                  </div>
                  <div className="relative">
                    <label className={labelCls}>ICD-10 Code</label>
                    <input value={form.icdCode} onChange={e => { set('icdCode', e.target.value); setIcdOpen(true); }} onFocus={() => setIcdOpen(true)} onBlur={() => setTimeout(() => setIcdOpen(false), 200)} placeholder="Search ICD-10 codes…" className={inputCls} />
                    {icdOpen && (
                      <div className="absolute top-full mt-1 left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-lg z-20 overflow-hidden">
                        {ICD_SUGGESTIONS.filter(s => !form.icdCode || s.toLowerCase().includes(form.icdCode.toLowerCase())).map(s => (
                          <button key={s} onMouseDown={() => { set('icdCode', s); setIcdOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all">{s}</button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Clinical Notes</label>
                  <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={4} placeholder="Examination findings, observations, treatment rationale…" className={inputCls + ' resize-none'} />
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-slate-800 flex items-center gap-2"><span className="material-symbols-outlined text-green-500">medication</span>Prescriptions</h2>
                  <button onClick={addRx} className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-all">
                    <span className="material-symbols-outlined text-[16px]">add</span>Add Medication
                  </button>
                </div>
                {form.prescriptions.map((rx, i) => (
                  <div key={i} className="grid grid-cols-4 gap-3 bg-slate-50 rounded-xl p-4 relative">
                    <div>
                      <label className={labelCls}>Drug Name</label>
                      <input value={rx.drug} onChange={e => setRx(i, 'drug', e.target.value)} placeholder="e.g. Topiramate" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Dose</label>
                      <input value={rx.dose} onChange={e => setRx(i, 'dose', e.target.value)} placeholder="e.g. 25mg" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Frequency</label>
                      <input value={rx.frequency} onChange={e => setRx(i, 'frequency', e.target.value)} placeholder="e.g. Once daily" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Duration</label>
                      <input value={rx.duration} onChange={e => setRx(i, 'duration', e.target.value)} placeholder="e.g. 30 days" className={inputCls} />
                    </div>
                    {form.prescriptions.length > 1 && (
                      <button onClick={() => removeRx(i)} className="absolute top-2 right-2 text-slate-400 hover:text-red-500 transition-all">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <h2 className="font-semibold text-slate-800 flex items-center gap-2"><span className="material-symbols-outlined text-amber-500">event_repeat</span>Follow-up & Referral</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Follow-up Date</label>
                    <input type="date" value={form.followUpDate} onChange={e => set('followUpDate', e.target.value)} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Refer to Specialist</label>
                    <input value={form.referTo} onChange={e => set('referTo', e.target.value)} placeholder="e.g. Cardiologist (optional)" className={inputCls} />
                  </div>
                  <div className="col-span-2">
                    <label className={labelCls}>Follow-up Instructions</label>
                    <textarea value={form.followUpNotes} onChange={e => set('followUpNotes', e.target.value)} rows={2} placeholder="Instructions for patient's next visit…" className={inputCls + ' resize-none'} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6 font-[serif]">
                <div className="border-b border-slate-200 pb-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">MedCore Health — Consultation Record</h2>
                    <p className="text-slate-500 text-sm mt-1">Oct 24, 2023 · Dr. Julian Bashir, Chief Surgeon</p>
                  </div>
                  <div className="bg-blue-50 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-700 uppercase tracking-wider">Draft</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div><p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Patient</p><p className="font-semibold text-slate-800 mt-1">{patient?.name || '—'}</p><p className="text-slate-500">{patient?.id_no} · Age {patient?.age}</p></div>
                  <div><p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Chief Complaint</p><p className="text-slate-800 mt-1">{form.chiefComplaint || '—'}</p></div>
                  <div><p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Diagnosis</p><p className="font-semibold text-slate-800 mt-1">{form.diagnosis || '—'}</p></div>
                  <div><p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">ICD-10 Code</p><p className="font-mono text-slate-700 mt-1">{form.icdCode || '—'}</p></div>
                </div>
                {form.notes && <div><p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2">Clinical Notes</p><p className="text-slate-700 text-sm leading-relaxed bg-slate-50 p-3 rounded-lg">{form.notes}</p></div>}
                {form.prescriptions.some(rx => rx.drug) && (
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2">Prescriptions</p>
                    <table className="w-full text-sm border-collapse">
                      <thead><tr className="text-left text-xs text-slate-400 border-b border-slate-200">{['Drug', 'Dose', 'Frequency', 'Duration'].map(h => <th key={h} className="pb-2 pr-4 font-semibold">{h}</th>)}</tr></thead>
                      <tbody>{form.prescriptions.filter(rx => rx.drug).map((rx, i) => <tr key={i} className="border-b border-slate-100">{[rx.drug, rx.dose, rx.frequency, rx.duration].map((v, j) => <td key={j} className="py-2 pr-4 text-slate-700">{v || '—'}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                )}
                {form.followUpDate && <div className="grid grid-cols-2 gap-4 text-sm"><div><p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Follow-up Date</p><p className="text-slate-800 mt-1">{form.followUpDate}</p></div>{form.referTo && <div><p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Referral</p><p className="text-slate-800 mt-1">{form.referTo}</p></div>}</div>}
                <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                  <div><p className="text-xs text-slate-400">Physician Signature</p><p className="font-semibold text-slate-700 mt-1 italic">Dr. Julian Bashir</p></div>
                  <div className="text-right"><p className="text-xs text-slate-400">Date & Time</p><p className="text-slate-600 text-sm mt-1">{new Date().toLocaleString()}</p></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
