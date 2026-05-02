import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const INITIAL_APPLICANTS = [
  {
    id: 1,
    name: 'Dr. Elena Rostova',
    specialty: 'Cardiothoracic Surgery',
    school: 'M.D., Harvard Medical',
    exp: '12 Years Exp.',
    relocation: 'Relocating from Mass Gen',
    docStatus: 'verified',
    department: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZmwCiWtkknvBzZhte68MbZyOEKCOtmv-dXwgJe4m8TwOTBqlaeGffGR11ceu3bqTeJJruMJbTYy8oNN1L1epdWU8SFmuhJ3GD6SQuzQZf83LJhz0ZqA-1LUD2-rJ9n8OIgilPDGVM6JgnvyF50g1UlCMfSD6M6YzA91FKX3rKKiywQrBSveFqdPWot4EpG_wLl9yAGEaAnlMHgbVb1C5E0wSsWlLXwNSvX08ii1nbJbtOfMy6L7CctUNdKjyb8XQMzEKEuVSq3ggr',
    docLabel: 'Medical License',
    docMissing: false,
    status: 'Pending',
    initials: null,
  },
  {
    id: 2,
    name: 'Dr. James Diaz',
    specialty: 'Pediatric Neurology',
    school: 'D.O., Johns Hopkins',
    exp: '8 Years Exp.',
    relocation: null,
    docStatus: 'missing',
    department: '',
    img: null,
    docLabel: 'Board Cert. Missing',
    docMissing: true,
    status: 'Pending',
    initials: 'JD',
  },
];

export default function DoctorApprovalsMedcoreHealth() {
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState(INITIAL_APPLICANTS);
  const [dismissed, setDismissed] = useState({});

  function handleDeptChange(id, value) {
    setApplicants(prev => prev.map(a => a.id === id ? { ...a, department: value } : a));
  }

  function handleApprove(id) {
    setDismissed(d => ({ ...d, [id]: 'approved' }));
  }

  function handleReject(id) {
    setDismissed(d => ({ ...d, [id]: 'rejected' }));
  }

  const visible = applicants.filter(a => !dismissed[a.id]);

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      <aside className="fixed left-0 top-0 h-screen w-64 rounded-none bg-white border-r border-slate-200 flex flex-col gap-1 py-4 z-50 hidden md:flex">
        <div className="px-6 pb-6 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">
              <span className="material-symbols-outlined text-[20px]">medical_services</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-blue-700 font-h3 leading-tight tracking-tight">MedCore Health</h1>
              <p className="font-label-sm text-label-sm text-slate-500">Admin Portal</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-2">
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg mb-1 font-manrope text-sm font-medium" to="/admin_dashboard_medcore_health">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg mb-1 font-manrope text-sm font-medium" to="/user_management_medcore_health">
            <span className="material-symbols-outlined text-[20px]">group</span>User Management
          </Link>
          <Link className="text-blue-600 bg-blue-50 border-r-4 border-blue-600 px-4 py-3 flex items-center gap-3 rounded-l-lg mb-1 font-manrope text-sm font-medium" to="/doctor_approvals_medcore_health">
            <span className="material-symbols-outlined text-[20px]">verified_user</span>Doctor Approvals
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg mb-1 font-manrope text-sm font-medium" to="/department_management_medcore_health">
            <span className="material-symbols-outlined text-[20px]">corporate_fare</span>Departments
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg mb-1 font-manrope text-sm font-medium" to="/global_appointment_management_medcore_health">
            <span className="material-symbols-outlined text-[20px]">event</span>Appointments
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg mb-1 font-manrope text-sm font-medium" to="/billing_finance_medcore_health">
            <span className="material-symbols-outlined text-[20px]">payments</span>Billing
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg font-manrope text-sm font-medium" to="/system_settings_medcore_health">
            <span className="material-symbols-outlined text-[20px]">settings</span>Settings
          </Link>
        </nav>
      </aside>

      <div className="md:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm flex justify-between items-center h-16 px-6 w-full font-manrope antialiased tracking-tight">
          <div className="flex items-center gap-4 flex-1">
            <div className="md:hidden text-lg font-extrabold text-blue-700 tracking-tighter">MedCore Health</div>
            <div className="hidden md:flex relative max-w-md w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none placeholder:text-slate-400 text-slate-700" placeholder="Search applicants, departments..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/notifications_medcore_health')}
              className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            <button
              onClick={() => navigate('/admin_profile_settings_medcore_health')}
              className="flex items-center gap-2 p-1 pl-2 pr-3 hover:bg-slate-50 rounded-full transition-colors"
            >
              <img alt="Administrator Profile" className="w-8 h-8 rounded-full object-cover border border-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLVdtmJDNUZT50Zyl0xljKR274dIPITxSKXTWS2SFncsmGqeBoVLZ7eAx9r73a48Nd9sfJyjisDP_5psi1xgDV9KUDudHFR4yXogR2Cx2Dv3F-jjUqi_qB_3O4PYDMFDCwtptb0pPYO4PY2tb9gVJpbFSNfJX0_7CF199pb44o77Y51A5Wl9O6Cco8Ib8xS2sQYQ9qw5-7RDZvv0aKuSB5PE-aYC7aDwc9DBZd51N9ZNHSDbbORozsBNHg0Md10waiG-d7PhcmSFan" />
              <span className="text-sm font-semibold text-slate-700 hidden lg:block">Admin</span>
              <span className="material-symbols-outlined text-[18px] text-slate-400">expand_more</span>
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-label-sm text-label-sm border border-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                  Live Queue
                </span>
              </div>
              <h2 className="font-h2 text-h2 text-on-surface mb-1">Doctor Approvals</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Review and verify credentials for incoming medical professionals before finalizing system access and department routing.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filter: Pending
              </button>
            </div>
          </div>

          {Object.keys(dismissed).length > 0 && (
            <div className="mb-6 p-4 bg-surface-container-low rounded-lg border border-surface-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">
                {Object.values(dismissed).filter(v => v === 'approved').length} approved, {Object.values(dismissed).filter(v => v === 'rejected').length} rejected.
              </span>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {visible.map(applicant => (
              <div key={applicant.id} className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-[#E9ECEF] p-6 transition-all hover:shadow-md relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="flex-1 min-w-[300px]">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        {applicant.img ? (
                          <img alt={applicant.name} className="w-16 h-16 rounded-full object-cover border-2 border-surface-container-low shadow-sm" src={applicant.img} />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-surface-container-low shadow-sm">
                            <span className="font-h3 text-h3 text-on-surface-variant">{applicant.initials}</span>
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-surface-container-lowest rounded-full flex items-center justify-center border border-[#E9ECEF] shadow-sm">
                          <span className="material-symbols-outlined text-[14px] text-tertiary">schedule</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-h3 text-[20px] text-on-surface leading-tight">{applicant.name}</h3>
                          <span className="px-2 py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] uppercase tracking-wider font-bold">{applicant.status}</span>
                        </div>
                        <p className="font-body-md text-on-surface-variant font-medium text-sm mb-3">{applicant.specialty}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-body-sm text-on-surface-variant text-sm">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-outline">school</span>
                            <span>{applicant.school}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-outline">work_history</span>
                            <span>{applicant.exp}</span>
                          </div>
                          {applicant.relocation && (
                            <div className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                              <span>{applicant.relocation}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-64 border-t lg:border-t-0 lg:border-l border-[#E9ECEF] pt-4 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                    <p className="font-label-sm text-label-sm text-outline mb-2 uppercase tracking-wide">Required Documentation</p>
                    {applicant.docMissing ? (
                      <div className="flex items-center justify-between bg-error-container/20 p-3 rounded-lg border border-error/20 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[20px] text-error">error</span>
                          <span className="font-body-sm text-sm font-medium text-on-surface">{applicant.docLabel}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between bg-surface-container p-3 rounded-lg border border-[#E9ECEF] mb-2">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[20px] text-primary">description</span>
                          <span className="font-body-sm text-sm font-medium text-on-surface">{applicant.docLabel}</span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                      </div>
                    )}
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-container-lowest border-2 border-primary-container text-primary-container rounded-lg font-label-md text-label-md hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
                      <span className="material-symbols-outlined text-[18px]">policy</span>
                      Verify Credentials
                    </button>
                  </div>

                  <div className={`flex-1 border-t lg:border-t-0 lg:border-l border-[#E9ECEF] pt-4 lg:pt-0 lg:pl-8 flex flex-col justify-between ${applicant.docMissing ? 'opacity-60 pointer-events-none' : ''}`}>
                    <div className="space-y-3 mb-4 lg:mb-0">
                      <div>
                        <label className="block font-label-sm text-label-sm text-outline mb-1">Assign Department</label>
                        <div className="relative">
                          <select
                            className="w-full appearance-none bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-sm rounded-lg pl-3 pr-8 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer"
                            value={applicant.department}
                            onChange={e => handleDeptChange(applicant.id, e.target.value)}
                            disabled={applicant.docMissing}
                          >
                            <option value="">Select Department...</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="surgery">Surgery</option>
                            <option value="emergency">Emergency</option>
                            <option value="neurology">Neurology</option>
                            <option value="pediatrics">Pediatrics</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleReject(applicant.id)}
                          className="flex-1 flex justify-center items-center gap-1.5 px-4 py-2 bg-surface-container-lowest border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                          Reject
                        </button>
                        <button
                          onClick={() => handleApprove(applicant.id)}
                          disabled={!applicant.department}
                          className={`flex-[2] flex justify-center items-center gap-1.5 px-4 py-2 rounded-lg font-label-md text-label-md shadow-sm transition-colors ${
                            applicant.department
                              ? 'bg-primary-container text-on-primary-container hover:bg-blue-700'
                              : 'bg-outline text-surface cursor-not-allowed'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[18px]">check</span>
                          Approve Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {visible.length === 0 && (
              <div className="text-center py-16 text-on-surface-variant">
                <span className="material-symbols-outlined text-[48px] text-outline block mb-2">check_circle</span>
                All applications have been reviewed.
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[#E9ECEF] pt-4">
            <span className="font-body-sm text-sm text-on-surface-variant">Showing {visible.length} of {applicants.length} applications</span>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md hover:bg-surface-container-low text-on-surface-variant transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded-md bg-primary text-on-primary font-body-sm text-sm flex items-center justify-center font-medium">1</button>
              <button className="p-2 rounded-md hover:bg-surface-container-low text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
