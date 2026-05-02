import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PATIENT_SIDEBAR = [
  { icon: 'dashboard', label: 'Dashboard', to: '/patient_dashboard_medcore_health' },
  { icon: 'calendar_today', label: 'Appointments', to: '/my_appointments_medcore_health' },
  { icon: 'timeline', label: 'Health Timeline', to: '/health_timeline_medcore_health', active: true },
  { icon: 'videocam', label: 'Telemedicine', to: '/telemedicine_medcore_health' },
  { icon: 'history_edu', label: 'Medical Records', to: '/medical_records_medcore_health' },
  { icon: 'medication', label: 'Prescriptions', to: '/prescriptions_medcore_health' },
  { icon: 'payments', label: 'Billing', to: '/billing_payments_medcore_health' },
];

const EVENTS = [
  { id: 1, date: 'Oct 24, 2023', month: 'OCT', day: '24', type: 'visit', icon: 'local_hospital', color: 'bg-blue-100 text-blue-600', dot: 'bg-blue-500', title: 'Neurology Consultation', subtitle: 'Dr. Emily Chen · Neurology', location: 'MedCore Health — Video Consult', detail: 'Follow-up for recurring migraines. Discussed medication adjustment. New prescription issued for Topiramate 25mg.', tags: ['Migraine', 'Prescription Updated'] },
  { id: 2, date: 'Oct 10, 2023', month: 'OCT', day: '10', type: 'test', icon: 'biotech', color: 'bg-purple-100 text-purple-600', dot: 'bg-purple-500', title: 'Blood Panel & MRI', subtitle: 'Central Lab · Radiology', location: 'MedCore Health — Lab Services', detail: 'Complete blood count normal. MRI brain scan showed no structural abnormalities. Results shared with Dr. Chen.', tags: ['CBC', 'MRI', 'Normal Results'] },
  { id: 3, date: 'Sep 15, 2023', month: 'SEP', day: '15', type: 'medication', icon: 'medication', color: 'bg-green-100 text-green-600', dot: 'bg-green-500', title: 'Medication Started: Topiramate', subtitle: 'Dr. Emily Chen · Prescription', location: 'MedCore Pharmacy', detail: 'Initiated Topiramate 25mg once daily for migraine prevention. Patient counselled on side effects. Next review in 4 weeks.', tags: ['Topiramate', 'Migraine Prevention'] },
  { id: 4, date: 'Aug 03, 2023', month: 'AUG', day: '03', type: 'visit', icon: 'local_hospital', color: 'bg-blue-100 text-blue-600', dot: 'bg-blue-500', title: 'Cardiology Check-up', subtitle: 'Dr. Marcus Johnson · Cardiology', location: 'Main Medical Center — Suite 402', detail: 'Routine cardiac check. EKG normal. Blood pressure 118/76 — excellent. Continue current lifestyle recommendations. Follow-up in 12 months.', tags: ['EKG Normal', 'BP Normal'] },
  { id: 5, date: 'Jun 20, 2023', month: 'JUN', day: '20', type: 'test', icon: 'biotech', color: 'bg-purple-100 text-purple-600', dot: 'bg-purple-500', title: 'Annual Blood Work', subtitle: 'General Lab', location: 'MedCore Health — Outpatient Lab', detail: 'Fasting glucose 92 mg/dL (normal). Cholesterol 178 mg/dL (normal). Vitamin D slightly low — supplements recommended.', tags: ['Annual', 'Vitamin D Low'] },
  { id: 6, date: 'Mar 11, 2023', month: 'MAR', day: '11', type: 'surgery', icon: 'healing', color: 'bg-red-100 text-red-600', dot: 'bg-red-500', title: 'Appendix Removal (Laparoscopic)', subtitle: 'Dr. Rachel Torres · Surgery', location: 'MedCore Surgical Center — OR 3', detail: 'Emergency laparoscopic appendectomy. Procedure successful. Discharged after 2 days observation. Full recovery achieved.', tags: ['Surgery', 'Emergency', 'Recovered'] },
  { id: 7, date: 'Jan 05, 2023', month: 'JAN', day: '05', type: 'medication', icon: 'medication', color: 'bg-green-100 text-green-600', dot: 'bg-green-500', title: 'Prescription: Lisinopril 10mg', subtitle: 'Dr. Marcus Johnson · Cardiology', location: 'MedCore Pharmacy', detail: 'Initiated Lisinopril 10mg daily for mild hypertension management. Blood pressure monitoring recommended weekly.', tags: ['Lisinopril', 'Hypertension'] },
];

const FILTER_TABS = [
  { key: 'all', label: 'All Events', icon: 'timeline' },
  { key: 'visit', label: 'Visits', icon: 'local_hospital' },
  { key: 'test', label: 'Tests & Labs', icon: 'biotech' },
  { key: 'medication', label: 'Medications', icon: 'medication' },
  { key: 'surgery', label: 'Procedures', icon: 'healing' },
];

export default function HealthTimelineMedcoreHealth() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filtered = filter === 'all' ? EVENTS : EVENTS.filter(e => e.type === filter);

  return (
    <div className="bg-background text-on-surface font-body-md text-body-md antialiased flex h-screen overflow-hidden">
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
          {PATIENT_SIDEBAR.map(item => (
            <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-4 py-3 font-manrope text-sm font-medium rounded-r-lg transition-all ${item.active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'}`}>
              <span className="material-symbols-outlined">{item.icon}</span>{item.label}
            </Link>
          ))}
        </nav>
        <div className="px-2 mt-auto space-y-1 border-t border-slate-200 pt-2">
          <Link to="/settings_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all font-manrope text-sm font-medium rounded-r-lg">
            <span className="material-symbols-outlined">settings</span>Settings
          </Link>
          <Link to="/login_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-red-500 transition-all font-manrope text-sm font-medium rounded-r-lg">
            <span className="material-symbols-outlined">logout</span>Logout
          </Link>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 overflow-y-auto bg-slate-50">
        <div className="sticky top-0 z-30 bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-h2 text-h2 text-slate-900 font-bold">Health Timeline</h1>
            <p className="text-slate-500 text-sm mt-0.5">Chronological history of your medical events</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 text-sm hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>Export PDF
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-100">
              <img alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ2s4wTqNsJ3n2GRussFN9uytSczfqyiRmB7RLN2f4TP2Jn1a08M1Ip48LUCsuyRLEQGI9ybHygC8aNtYt4eNhBQ0j5Z2k3lQZ85ETe-yyc4Psi3Q58N-FDrA8dRXnaTJ46GwWUSRFbIGU-HazYdI_m2x8W4xSveYqeGWQN_eFzJUXG_cgVe9-42IXdOmlcllCnw4WxlB4vKRLGyCBM-iqXBsObt9t23qo8BuAciORxCzzE28aqZyupFcbzSWUWXwasxhcQhHcoFoT" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="px-8 py-4">
          <div className="flex gap-2 flex-wrap">
            {FILTER_TABS.map(tab => (
              <button key={tab.key} onClick={() => setFilter(tab.key)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === tab.key ? 'bg-blue-500 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
                <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>{tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-8 pb-12">
          <div className="flex gap-2 mb-6">
            {[{ label: 'Total Events', val: EVENTS.length, color: 'text-slate-700' }, { label: 'This Year', val: EVENTS.filter(e => e.date.includes('2023')).length, color: 'text-blue-600' }, { label: 'Procedures', val: EVENTS.filter(e => e.type === 'surgery').length, color: 'text-red-600' }].map(s => (
              <div key={s.label} className="bg-white rounded-xl border border-slate-200 px-5 py-3 flex flex-col">
                <span className={`text-2xl font-bold ${s.color}`}>{s.val}</span>
                <span className="text-xs text-slate-500 mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-0">
              {filtered.map((ev, i) => (
                <div key={ev.id} className="flex gap-0 group">
                  <div className="w-20 shrink-0 text-right pr-4 pt-5">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{ev.month}</p>
                    <p className="text-2xl font-black text-slate-700 leading-tight">{ev.day}</p>
                  </div>
                  <div className="flex items-start pt-5 shrink-0">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm mt-1 ${ev.dot} z-10`}></div>
                  </div>
                  <div className="flex-1 pl-5 pb-8">
                    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer ${expanded === ev.id ? 'ring-2 ring-blue-300' : ''}`} onClick={() => setExpanded(expanded === ev.id ? null : ev.id)}>
                      <div className="p-4 flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${ev.color}`}>
                          <span className="material-symbols-outlined text-[20px]">{ev.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold text-slate-800 text-sm">{ev.title}</h3>
                            <span className="material-symbols-outlined text-slate-400 text-[18px] shrink-0 transition-transform" style={{ transform: expanded === ev.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{ev.subtitle}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-slate-400 text-[14px]">location_on</span>
                            <span className="text-xs text-slate-400">{ev.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {ev.tags.map(t => <span key={t} className="bg-slate-100 text-slate-600 text-[11px] px-2 py-0.5 rounded-full font-medium">{t}</span>)}
                          </div>
                        </div>
                      </div>
                      {expanded === ev.id && (
                        <div className="px-4 pb-4 border-t border-slate-100 pt-3">
                          <p className="text-sm text-slate-600 leading-relaxed">{ev.detail}</p>
                          <div className="flex gap-2 mt-3">
                            <button className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-all font-medium">View Full Report</button>
                            <button className="text-xs bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all font-medium">Download</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
