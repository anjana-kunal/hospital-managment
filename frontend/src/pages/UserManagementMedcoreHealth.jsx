import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ROLE_TABS = ['Patients', 'Doctors', 'Staff', 'Admins'];

const INITIAL_USERS = {
  Patients: [
    { initials: 'ES', bg: 'bg-primary-fixed text-on-primary-fixed-variant', name: 'Eleanor Sterling', sub: 'ID: PT-84920', contact: 'e.sterling@example.com', phone: '+1 (555) 293-4819', role: 'Patient', status: 'Active', statusBg: 'bg-secondary-container text-on-secondary-container', statusDot: 'bg-secondary', lastLogin: 'Today, 09:41 AM', img: null },
  ],
  Doctors: [
    { initials: 'MC', bg: 'bg-secondary-fixed text-on-secondary-fixed', name: 'Dr. Marcus Chen', sub: 'Cardiology Dept.', contact: 'm.chen@medcore.org', phone: 'Ext: 4092', role: 'Attending Physician', status: 'Active', statusBg: 'bg-secondary-container text-on-secondary-container', statusDot: 'bg-secondary', lastLogin: 'Yesterday, 14:20 PM', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOiwZ-aHF-I00mKj60Sa_WqdiO9WAXtZYPnTYTNgMQOTwlRcIvk4N1oPPRJUSdVXnAOGYjRMNTKkeo5zbi96SGeIeWZhH5K-0ovmW5WVWvQh9uih7HsrLLn_xrttUnQ98kj6gtIH5afLIg4XcdecCk8jCLSI5FR4F8Yyyie270wodz-65bdt5f9PUCXKHrznSQV1JaHEWKdUGC1D08jTcyQ08goNAdBzLfV6AQu-t4y1rL4tf1QhiJ6G-wKIzAc09KiMRvx0N_-S3Y' },
  ],
  Staff: [
    { initials: 'JP', bg: 'bg-surface-dim text-on-surface-variant', name: 'Jordan Pierce', sub: 'ID: ST-11029', contact: 'j.pierce@medcore.org', phone: '+1 (555) 837-1022', role: 'Radiology Tech', status: 'Pending', statusBg: 'bg-tertiary-fixed text-on-tertiary-fixed', statusDot: 'bg-tertiary', lastLogin: 'Never', img: null },
  ],
  Admins: [
    { initials: 'AW', bg: 'bg-surface-dim text-on-surface-variant', name: 'Alicia Vance', sub: 'ID: AD-0041', contact: 'a.vance@medcore.org', phone: 'Ext: 1004', role: 'System Admin', status: 'Suspended', statusBg: 'bg-error-container text-on-error-container', statusDot: 'bg-error', lastLogin: 'Oct 12, 2023', img: null },
  ],
};

const DEPARTMENTS = ['Cardiology', 'Neurology', 'Surgery', 'Pediatrics', 'Emergency', 'Radiology', 'Oncology', 'Orthopedics'];

const EMPTY_DOCTOR_FORM = { name: '', email: '', department: '', role: '', password: '', confirmPassword: '' };

export default function UserManagementMedcoreHealth() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Patients');
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(INITIAL_USERS);
  const [showAddDoctor, setShowAddDoctor] = useState(false);
  const [doctorForm, setDoctorForm] = useState(EMPTY_DOCTOR_FORM);
  const [formError, setFormError] = useState('');
  const [addedMsg, setAddedMsg] = useState('');
  const [showDoctorPassword, setShowDoctorPassword] = useState(false);

  const filteredUsers = (users[activeTab] || []).filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleDoctorFormChange(e) {
    setDoctorForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setFormError('');
  }

  function handleAddDoctor(e) {
    e.preventDefault();
    const { name, email, department, role, password, confirmPassword } = doctorForm;
    if (!name || !email || !department || !role || !password || !confirmPassword) {
      setFormError('All fields are required.'); return;
    }
    if (password !== confirmPassword) {
      setFormError('Passwords do not match.'); return;
    }
    const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const newDoc = {
      initials,
      bg: 'bg-secondary-fixed text-on-secondary-fixed',
      name: name.startsWith('Dr.') ? name : `Dr. ${name}`,
      sub: `${department} Dept.`,
      contact: email,
      phone: 'Ext: —',
      role,
      status: 'Active',
      statusBg: 'bg-secondary-container text-on-secondary-container',
      statusDot: 'bg-secondary',
      lastLogin: 'Never',
      img: null,
    };
    setUsers(u => ({ ...u, Doctors: [...u.Doctors, newDoc] }));
    setDoctorForm(EMPTY_DOCTOR_FORM);
    setShowAddDoctor(false);
    setFormError('');
    setAddedMsg(`Dr. ${name} added successfully.`);
    setActiveTab('Doctors');
    setTimeout(() => setAddedMsg(''), 4000);
  }

  return (
    <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">
      <aside className="bg-white font-manrope text-sm font-medium fixed left-0 top-0 h-screen w-64 border-r border-slate-200 z-50 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-200 flex items-center gap-3">
          <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">local_hospital</span>
          </div>
          <div>
            <div className="text-xl font-black text-blue-700">MedCore Health</div>
            <div className="font-label-sm text-outline">Admin Portal</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1 py-4 flex-1 overflow-y-auto px-2">
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg" to="/admin_dashboard_medcore_health">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </Link>
          <Link className="text-blue-600 bg-blue-50 border-r-4 border-blue-600 px-4 py-3 flex items-center gap-3 rounded-lg" to="/user_management_medcore_health">
            <span className="material-symbols-outlined">group</span>
            <span className="font-label-md">User Management</span>
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg" to="/doctor_approvals_medcore_health">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-label-md">Doctor Approvals</span>
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg" to="/department_management_medcore_health">
            <span className="material-symbols-outlined">corporate_fare</span>
            <span className="font-label-md">Departments</span>
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg" to="/global_appointment_management_medcore_health">
            <span className="material-symbols-outlined">event</span>
            <span className="font-label-md">Appointments</span>
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg" to="/billing_finance_medcore_health">
            <span className="material-symbols-outlined">payments</span>
            <span className="font-label-md">Billing</span>
          </Link>
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg" to="/system_settings_medcore_health">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Settings</span>
          </Link>
        </nav>
        <div className="border-t border-slate-200 p-4">
          <Link className="text-slate-600 hover:text-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-all rounded-lg" to="/login_medcore_health">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md">Logout</span>
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64 w-full h-full">
        <header className="bg-white font-manrope antialiased tracking-tight sticky top-0 z-40 border-b border-slate-200 shadow-sm flex justify-between items-center h-16 px-6 w-full">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full max-w-md hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-DEFAULT py-2 pl-10 pr-4 font-body-sm text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors" placeholder="Search..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/notifications_medcore_health')} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-white"></span>
            </button>
            <button onClick={() => navigate('/admin_profile_settings_medcore_health')} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-grid-margin bg-background">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-xl">
            <div>
              <h1 className="font-h1 text-h1 text-on-surface mb-2">User Management</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Manage hospital staff, administrators, and patient records.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { setActiveTab('Doctors'); setShowAddDoctor(true); }}
                className="bg-secondary text-on-secondary font-label-md px-5 py-3 rounded-DEFAULT flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">stethoscope</span>
                Add Doctor
              </button>
              <button className="bg-primary text-on-primary font-label-md px-5 py-3 rounded-DEFAULT flex items-center gap-2 hover:bg-surface-tint transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Invite User
              </button>
            </div>
          </div>

          {addedMsg && (
            <div className="mb-6 flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg border border-secondary/20 font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              {addedMsg}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter mb-grid-margin">
            {[
              { label: 'Total Users', value: '12,450', icon: 'group', bg: 'bg-primary-fixed text-on-primary-fixed-variant' },
              { label: 'Active Doctors', value: String(users.Doctors.length), icon: 'stethoscope', bg: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
              { label: 'Pending Approvals', value: '34', icon: 'pending_actions', bg: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
            ].map(stat => (
              <div key={stat.label} className="bg-surface-container-lowest rounded-xl p-lg shadow-level-1 border border-surface-variant flex items-center justify-between">
                <div>
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="font-h2 text-h2 text-on-surface">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-level-1 border border-surface-variant flex flex-col">
            <div className="p-lg border-b border-surface-variant">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="flex bg-surface-container-low p-1 rounded-lg">
                  {ROLE_TABS.map(tab => (
                    <button
                      key={tab}
                      onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
                      className={`px-4 py-2 rounded-DEFAULT font-label-md transition-colors ${
                        activeTab === tab ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {tab}
                      {tab === 'Doctors' && (
                        <span className="ml-1.5 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">{users.Doctors.length}</span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <div className="relative flex-1 lg:w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                    <input
                      className="w-full bg-surface-container-low border border-transparent rounded-DEFAULT py-2 pl-10 pr-4 font-body-sm text-on-surface focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-colors"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                  </div>
                  {activeTab === 'Doctors' && (
                    <button
                      onClick={() => setShowAddDoctor(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary rounded-DEFAULT font-label-md hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>Add Doctor
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface font-label-md text-on-surface-variant border-b border-surface-variant">
                    {['User', 'Contact', 'Role', 'Status', 'Last Login', 'Actions'].map(h => (
                      <th key={h} className={`py-4 px-6 font-semibold ${h === 'Actions' ? 'text-center w-16' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="font-body-sm text-on-surface">
                  {filteredUsers.map((user, i) => (
                    <tr key={user.name + i} className={`border-b border-surface-variant hover:bg-surface-container-low transition-colors ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-background'}`}>
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-3">
                          {user.img ? (
                            <img alt={user.name} className="w-10 h-10 rounded-full object-cover" src={user.img} />
                          ) : (
                            <div className={`w-10 h-10 rounded-full ${user.bg} flex items-center justify-center font-label-md`}>{user.initials}</div>
                          )}
                          <div>
                            <div className="font-medium text-on-surface">{user.name}</div>
                            <div className="text-outline text-xs mt-0.5">{user.sub}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-6">{user.contact}<br /><span className="text-outline text-xs">{user.phone}</span></td>
                      <td className="py-3 px-6">{user.role}</td>
                      <td className="py-3 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${user.statusBg}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.statusDot} mr-1.5`}></span>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-on-surface-variant">{user.lastLogin}</td>
                      <td className="py-3 px-6 text-center">
                        <button className="text-outline hover:text-on-surface transition-colors p-1 rounded-DEFAULT hover:bg-surface-variant">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-10 text-center text-on-surface-variant">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-surface-variant flex items-center justify-between bg-surface-container-lowest rounded-b-xl">
              <span className="font-body-sm text-on-surface-variant">Showing {filteredUsers.length} of {(users[activeTab] || []).length} entries</span>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT border border-surface-variant text-outline hover:bg-surface-container-low transition-colors" disabled>
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT bg-primary text-on-primary font-label-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT border border-surface-variant text-outline hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Doctor Modal */}
      {showAddDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/40 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-outline-variant/30 w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">stethoscope</span>
                </div>
                <div>
                  <h2 className="font-h3 text-h3 text-on-surface">Add Doctor Account</h2>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Admin-issued credentials</p>
                </div>
              </div>
              <button
                onClick={() => { setShowAddDoctor(false); setDoctorForm(EMPTY_DOCTOR_FORM); setFormError(''); }}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form className="p-6 space-y-4" onSubmit={handleAddDoctor}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Full Name <span className="text-error">*</span></label>
                  <input
                    name="name"
                    placeholder="e.g. Sarah Jenkins"
                    value={doctorForm.name}
                    onChange={handleDoctorFormChange}
                    className="w-full px-3 py-2.5 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Email Address <span className="text-error">*</span></label>
                  <input
                    name="email"
                    type="email"
                    placeholder="doctor@medcore.org"
                    value={doctorForm.email}
                    onChange={handleDoctorFormChange}
                    className="w-full px-3 py-2.5 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Department <span className="text-error">*</span></label>
                  <select
                    name="department"
                    value={doctorForm.department}
                    onChange={handleDoctorFormChange}
                    className="w-full px-3 py-2.5 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select dept.</option>
                    {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Title / Role <span className="text-error">*</span></label>
                  <input
                    name="role"
                    placeholder="e.g. Attending Physician"
                    value={doctorForm.role}
                    onChange={handleDoctorFormChange}
                    className="w-full px-3 py-2.5 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Temporary Password <span className="text-error">*</span></label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showDoctorPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={doctorForm.password}
                      onChange={handleDoctorFormChange}
                      className="w-full pl-3 pr-10 py-2.5 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-colors"
                    />
                    <button type="button" onClick={() => setShowDoctorPassword(v => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface">
                      <span className="material-symbols-outlined text-[18px]">{showDoctorPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Confirm Password <span className="text-error">*</span></label>
                  <input
                    name="confirmPassword"
                    type={showDoctorPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={doctorForm.confirmPassword}
                    onChange={handleDoctorFormChange}
                    className="w-full px-3 py-2.5 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 bg-primary-fixed/30 rounded-lg">
                <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">info</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">The doctor will receive their credentials via email and must change their password on first login.</p>
              </div>

              {formError && (
                <div className="flex items-center gap-2 text-error font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px]">error</span>{formError}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => { setShowAddDoctor(false); setDoctorForm(EMPTY_DOCTOR_FORM); setFormError(''); }}
                  className="flex-1 py-3 border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">person_add</span>
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
