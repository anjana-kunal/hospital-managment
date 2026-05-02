import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function DoctorDashboardMedcoreHealth() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden flex">
      <nav className="fixed left-0 top-0 bottom-0 flex flex-col z-40 h-screen w-64 border-r rounded-none bg-white border-slate-200 shadow-none font-manrope text-sm font-semibold tracking-wide">
        <div className="flex flex-col items-center justify-center p-lg border-b border-slate-200">
          <img alt="Dr. Julian Bashir" className="w-20 h-20 rounded-full mb-md object-cover border-2 border-primary-container/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB-SEkmyKlVaV5a3wi78B5xbFob5bCCSh4q5U1iqUFYVxAHY2I8x2Xtx564dTpFbP85tSWd_KeYE6fObsG3ewNpQwmLQMGD_9B7V1T_gZCAKUnpVEGLG8jOqv2NKMenJt0WfHZfiSGmtRqsf_yk1tuaFqU2vk82Y_5kbMkoTfsI_bAw1GDCUn9YREw6I1ADw660M4wKEy9kzMI4F4mIkBOQBf8iM8plIvPGAI1i8Klbn9fAMeouPV5fFrItKSHv47JkOCY0T-sgEu-" />
          <h2 className="text-lg font-bold text-slate-900">Dr. Julian Bashir</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Chief Surgeon</p>
        </div>
        <div className="flex-1 overflow-y-auto py-md flex flex-col gap-xs">
          <Link className="nav-link-active flex items-center gap-3 px-4 py-3" to="/doctor_dashboard_medcore_health">
            <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link className="nav-link flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors" to="/schedule_management_medcore_health">
            <span className="material-symbols-outlined">calendar_today</span>
            <span>Schedule</span>
          </Link>
          <Link className="nav-link flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors" to="/appointments_queue_medcore_health">
            <span className="material-symbols-outlined">event_note</span>
            <span>Appointments</span>
          </Link>
          <Link className="nav-link flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors" to="/patient_directory_medcore_health">
            <span className="material-symbols-outlined">group</span>
            <span>Patients</span>
          </Link>
          <Link className="nav-link flex items-center justify-between px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors" to="/messages_medcore_health">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">mail</span>
              <span>Messages</span>
            </div>
            <span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded-full">3</span>
          </Link>
        </div>
        <div className="p-md border-t border-slate-200 flex flex-col gap-xs">
          <Link className="nav-link flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors" to="/settings_medcore_health">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Link>
          <Link className="nav-link flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors" to="/login_medcore_health">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </nav>

      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        <header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 z-30 border-b bg-white border-slate-200 shadow-sm font-manrope text-sm font-medium antialiased text-blue-600">
          <div className="flex items-center gap-lg">
            <div className="text-xl font-extrabold tracking-tight text-slate-900">MedCore HMS</div>
            <div className="relative hidden md:block w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-[#F1F3F4] border-transparent focus:bg-white focus:border-primary-container rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline transition-colors" placeholder="Search patients, ID, or records..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button
              onClick={() => navigate('/notifications_medcore_health')}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
            <img
              alt="Doctor Avatar"
              onClick={() => navigate('/doctor_profile_medcore_pro')}
              className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-sm cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHcinjQzsDo8JKviJw8463kGNXa6LASnyKZm2Xs94o7sMh21R_Cn2EnnVUSgjf19Jr77ASFgpTaGwt6L6U8e4LqurheECTL0wsG55l_bH7sHuSfo7pv2BHPpHNHd5hUTsB5dY98G-u2_F2qdm0SKqm6J9Z5ZCHphTpWV55H0b6QAwEbjP5EDXvvS35Wv9gYj_pn1PRMiXOCvF43q97ZQi3EiAjt8KBogkuk23vwElEKfDm3h_RwAY9Efq5pbvywfgsdad7G4xDTOVM"
            />
          </div>
        </header>

        <div className="p-grid-margin space-y-grid-gutter">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="font-h2 text-h2 text-on-surface">Good Morning, Dr. Bashir</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Here is your clinical overview for today.</p>
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              {new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' })} • {new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' })}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-grid-gutter">
            <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-grid-gutter">
              {[
                { icon: 'group', bg: 'bg-primary-fixed text-primary', label: 'Total Patients', value: '1,248', sub: '+12 this week', subColor: 'text-secondary', subIcon: 'trending_up' },
                { icon: 'stethoscope', bg: 'bg-secondary-container text-on-secondary-container', label: "Today's Consults", value: '14', sub: '4 completed, 10 remaining', subColor: 'text-on-surface-variant', subIcon: null },
                { icon: 'edit_document', bg: 'bg-tertiary-fixed text-tertiary', label: 'Pending Notes', value: '3', sub: 'Action required', subColor: 'text-error', subIcon: 'warning' },
              ].map(stat => (
                <div key={stat.label} className="bento-card p-lg">
                  <div className="flex justify-between items-start mb-md">
                    <div className={`p-2 ${stat.bg} rounded-lg`}>
                      <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">{stat.label}</h3>
                  <div className="font-h1 text-h1 text-on-surface">{stat.value}</div>
                  <div className={`font-body-sm text-body-sm ${stat.subColor} flex items-center gap-1 mt-2`}>
                    {stat.subIcon && <span className="material-symbols-outlined text-[16px]">{stat.subIcon}</span>}
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-4 bento-card border-error-container/50 bg-[#FFF9F9]">
              <div className="p-lg border-b border-error-container/30 flex justify-between items-center">
                <h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-error" style={{fontVariationSettings:"'FILL' 1"}}>error</span>
                  Critical Alerts
                </h2>
              </div>
              <div className="p-lg flex-1 overflow-y-auto">
                <div className="p-md bg-white rounded-lg border border-error-container shadow-sm mb-md flex gap-md">
                  <div className="text-error mt-1"><span className="material-symbols-outlined text-[20px]">science</span></div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Lab Result: Abnormal</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Patient: <strong>Sarah Jenkins</strong><br />Troponin elevated.</p>
                    <button className="mt-2 text-primary font-label-md text-label-md hover:underline">Review Results</button>
                  </div>
                </div>
                <div className="p-md bg-white rounded-lg border border-[#E9ECEF] shadow-sm flex gap-md">
                  <div className="text-tertiary mt-1"><span className="material-symbols-outlined text-[20px]">medication</span></div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Prescription Renewal</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Patient: <strong>Michael Chang</strong></p>
                    <button className="mt-2 text-primary font-label-md text-label-md hover:underline">Approve</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 bento-card">
              <div className="p-lg border-b border-[#E9ECEF] flex justify-between items-center">
                <h2 className="font-h3 text-h3 text-on-surface">Today's Appointments</h2>
                <button
                  onClick={() => navigate('/appointments_queue_medcore_health')}
                  className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1"
                >
                  View Schedule <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#E9ECEF] bg-[#F8F9FA]">
                      {['Time','Patient','Reason','Status','Action'].map(h => (
                        <th key={h} className={`py-3 px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider ${h === 'Action' ? 'text-right' : ''}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm">
                    {[
                      { time: '09:00 AM', initials: 'SJ', bg: 'bg-primary-fixed text-primary', name: 'Sarah Jenkins', reason: 'Post-Op Follow-up', status: 'In-Queue', statusBg: 'bg-primary-container/10 text-primary-container', action: 'Start', bg2: '' },
                      { time: '09:30 AM', initials: 'MC', bg: 'bg-tertiary-fixed text-tertiary', name: 'Michael Chang', reason: 'Routine Checkup', status: 'Waiting', statusBg: 'bg-[#E9ECEF] text-on-surface-variant', action: 'View Chart', bg2: 'bg-[#F8F9FA]' },
                      { time: '10:15 AM', initials: 'ER', bg: 'bg-secondary-container text-on-secondary-container', name: 'Emily Ross', reason: 'MRI Results Review', status: 'Confirmed', statusBg: 'bg-[#E9ECEF] text-on-surface-variant', action: 'View Chart', bg2: '' },
                      { time: '11:00 AM', initials: 'DL', bg: 'bg-surface-variant text-on-surface', name: 'David Lee', reason: 'Surgical Consultation', status: 'Confirmed', statusBg: 'bg-[#E9ECEF] text-on-surface-variant', action: 'View Chart', bg2: 'bg-[#F8F9FA]' },
                    ].map(row => (
                      <tr key={row.name} className={`border-b border-[#E9ECEF] hover:bg-surface-container-low transition-colors group ${row.bg2}`}>
                        <td className="py-4 px-md font-label-md text-label-md text-on-surface whitespace-nowrap">{row.time}</td>
                        <td className="py-4 px-md">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${row.bg} flex items-center justify-center font-label-md text-label-md`}>{row.initials}</div>
                            <span className="font-medium text-on-surface">{row.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-md text-on-surface-variant">{row.reason}</td>
                        <td className="py-4 px-md">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm ${row.statusBg}`}>{row.status}</span>
                        </td>
                        <td className="py-4 px-md text-right">
                          <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100">{row.action}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-grid-gutter">
              <div className="bento-card">
                <div className="p-md border-b border-[#E9ECEF] flex justify-between items-center bg-[#F8F9FA] rounded-t-xl">
                  <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Pending Reports</h2>
                  <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-medium">2 New</span>
                </div>
                <div className="p-md space-y-md">
                  {[
                    { icon: 'description', label: 'Pathology Report', patient: 'Robert King', time: '2h ago' },
                    { icon: 'radiology', label: 'CT Scan Analysis', patient: 'Alice Wong', time: '4h ago' },
                  ].map(r => (
                    <div key={r.label} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline mt-0.5">{r.icon}</span>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface">{r.label}</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Patient: {r.patient}</p>
                        <p className="font-body-sm text-body-sm text-outline text-xs mt-1">Received {r.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bento-card flex-1">
                <div className="p-md border-b border-[#E9ECEF]">
                  <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Weekly Overview</h2>
                </div>
                <div className="p-md">
                  <div className="grid grid-cols-5 gap-2 text-center mb-4">
                    {['M','T','W','T','F'].map((d, i) => (
                      <div key={i} className={`font-label-sm text-label-sm ${i === 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{d}</div>
                    ))}
                    {[22,23,24,25,26].map((n, i) => (
                      <div key={n} className={`p-2 rounded-lg ${i === 2 ? 'bg-primary text-on-primary font-label-md shadow-sm' : 'font-body-sm text-body-sm'} relative`}>
                        {n}
                        {i === 3 && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>}
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#F8F9FA] rounded-lg p-3 text-center border border-[#E9ECEF]">
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Next major block:</p>
                    <p className="font-label-md text-label-md text-on-surface mt-1">Surgery - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
