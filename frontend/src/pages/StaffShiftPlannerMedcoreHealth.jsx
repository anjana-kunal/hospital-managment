import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DATES = ['Oct 23', 'Oct 24', 'Oct 25', 'Oct 26', 'Oct 27', 'Oct 28', 'Oct 29'];

const SHIFT_TYPES = {
  day: { label: 'Day', time: '07:00–15:00', cls: 'bg-blue-100 text-blue-700 border-blue-200', badge: 'bg-blue-500' },
  evening: { label: 'Evening', time: '15:00–23:00', cls: 'bg-amber-100 text-amber-700 border-amber-200', badge: 'bg-amber-500' },
  night: { label: 'Night', time: '23:00–07:00', cls: 'bg-purple-100 text-purple-700 border-purple-200', badge: 'bg-purple-500' },
  off: { label: 'Off', time: 'Day Off', cls: 'bg-slate-100 text-slate-400 border-slate-200', badge: 'bg-slate-300' },
};

const INITIAL_STAFF = [
  { id: 1, name: 'Dr. Julian Bashir', role: 'Chief Surgeon', dept: 'Surgery', avatar: 'DB', shifts: ['day', 'day', 'off', 'day', 'day', 'off', 'off'] },
  { id: 2, name: 'Nurse Maria Santos', role: 'Head Nurse', dept: 'ICU', avatar: 'MS', shifts: ['evening', 'evening', 'evening', 'off', 'evening', 'day', 'off'] },
  { id: 3, name: 'Dr. Rachel Torres', role: 'Surgeon', dept: 'Surgery', avatar: 'RT', shifts: ['off', 'day', 'day', 'day', 'off', 'night', 'night'] },
  { id: 4, name: 'James Ororo', role: 'Paramedic', dept: 'Emergency', avatar: 'JO', shifts: ['night', 'night', 'night', 'off', 'off', 'day', 'day'] },
  { id: 5, name: 'Dr. Emily Chen', role: 'Neurologist', dept: 'Neurology', avatar: 'EC', shifts: ['day', 'off', 'day', 'day', 'day', 'off', 'off'] },
  { id: 6, name: 'Nurse Kevin Park', role: 'ER Nurse', dept: 'Emergency', avatar: 'KP', shifts: ['evening', 'evening', 'off', 'evening', 'evening', 'off', 'evening'] },
  { id: 7, name: 'Dr. Marcus Johnson', role: 'Cardiologist', dept: 'Cardiology', avatar: 'MJ', shifts: ['day', 'day', 'day', 'off', 'day', 'off', 'off'] },
];

const DEPT_COLORS = { Surgery: 'bg-blue-100 text-blue-700', ICU: 'bg-red-100 text-red-700', Emergency: 'bg-orange-100 text-orange-700', Neurology: 'bg-purple-100 text-purple-700', Cardiology: 'bg-pink-100 text-pink-700' };

const ADMIN_NAV = [
  { icon: 'payments', label: 'Finance', to: '/billing_finance_medcore_health' },
  { icon: 'hotel', label: 'Beds', to: '/bed_management_medcore_health' },
  { icon: 'medical_services', label: 'Pharmacy', to: '/pharmacy_inventory_medcore_health' },
  { icon: 'biotech', label: 'Lab', to: '/laboratory_management_medcore_health' },
  { icon: 'campaign', label: 'News', to: '/announcements_medcore_health' },
  { icon: 'calendar_month', label: 'Staff Planner', to: '/staff_shift_planner_medcore_health', active: true },
];

export default function StaffShiftPlannerMedcoreHealth() {
  const navigate = useNavigate();
  const [staff, setStaff] = useState(INITIAL_STAFF);
  const [editCell, setEditCell] = useState(null);
  const [filterDept, setFilterDept] = useState('All');
  const [weekOffset, setWeekOffset] = useState(0);

  const depts = ['All', ...new Set(INITIAL_STAFF.map(s => s.dept))];
  const displayed = filterDept === 'All' ? staff : staff.filter(s => s.dept === filterDept);

  const setShift = (staffId, dayIdx, shiftType) => {
    setStaff(prev => prev.map(s => s.id === staffId ? { ...s, shifts: s.shifts.map((sh, i) => i === dayIdx ? shiftType : sh) } : s));
    setEditCell(null);
  };

  const totalByShift = (type) => staff.reduce((acc, s) => acc + s.shifts.filter(sh => sh === type).length, 0);
  const staffOnDay = (dayIdx, type) => staff.filter(s => s.shifts[dayIdx] === type).length;

  return (
    <div className="bg-background text-on-surface font-body-md antialiased flex h-screen overflow-hidden">
      <nav className="bg-white dark:bg-slate-900 font-manrope text-sm font-medium fixed left-0 top-0 h-full w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col z-40">
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-lg font-black text-slate-900 dark:text-white">Hospital Admin</h1>
          <p className="text-xs text-slate-500 mt-1">Clinical Excellence</p>
        </div>
        <div className="flex flex-col flex-grow mt-4 space-y-1 px-2">
          {ADMIN_NAV.map(item => (
            <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${item.active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>
              <span className="material-symbols-outlined">{item.icon}</span>{item.label}
            </Link>
          ))}
        </div>
        <div className="p-4 mt-auto space-y-1 border-t border-slate-200">
          <Link to="/admin_dashboard_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all rounded-lg">
            <span className="material-symbols-outlined">contact_support</span>Support
          </Link>
          <Link to="/login_medcore_health" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-red-500 transition-all rounded-lg">
            <span className="material-symbols-outlined">logout</span>Logout
          </Link>
        </div>
      </nav>

      <main className="flex-1 md:ml-64 flex flex-col overflow-hidden bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-8 py-4 shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Staff Shift Planner</h1>
              <p className="text-slate-500 text-sm mt-0.5">Week of Oct 23 – Oct 29, 2023 · Click any cell to change shift</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                <button onClick={() => setWeekOffset(w => w - 1)} className="p-1.5 hover:bg-white rounded text-slate-600 transition-all"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                <span className="text-sm font-medium text-slate-700 px-2">Week {40 + weekOffset}</span>
                <button onClick={() => setWeekOffset(w => w + 1)} className="p-1.5 hover:bg-white rounded text-slate-600 transition-all"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
              </div>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
                <span className="material-symbols-outlined text-[16px]">download</span>Export
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {[
              { label: 'Day Shifts', val: totalByShift('day'), icon: 'wb_sunny', col: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Evening Shifts', val: totalByShift('evening'), icon: 'wb_twilight', col: 'text-amber-600', bg: 'bg-amber-50' },
              { label: 'Night Shifts', val: totalByShift('night'), icon: 'nightlight', col: 'text-purple-600', bg: 'bg-purple-50' },
              { label: 'Days Off', val: totalByShift('off'), icon: 'weekend', col: 'text-slate-500', bg: 'bg-slate-100' },
            ].map(s => (
              <div key={s.label} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${s.bg}`}>
                <span className={`material-symbols-outlined ${s.col} text-xl`}>{s.icon}</span>
                <div><p className={`text-xl font-bold ${s.col}`}>{s.val}</p><p className="text-xs text-slate-500">{s.label}</p></div>
              </div>
            ))}
          </div>
        </header>

        <div className="px-8 py-3 flex items-center gap-3 shrink-0">
          <span className="text-sm text-slate-500 font-medium">Filter by dept:</span>
          {depts.map(d => (
            <button key={d} onClick={() => setFilterDept(d)} className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${filterDept === d ? 'bg-blue-500 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{d}</button>
          ))}
        </div>

        <div className="flex-1 overflow-auto px-8 pb-8">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-52">Staff Member</th>
                  {DAYS.map((d, i) => (
                    <th key={d} className="text-center px-2 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider min-w-[100px]">
                      <div>{d}</div>
                      <div className="text-[11px] font-normal text-slate-400 mt-0.5">{DATES[i]}</div>
                      <div className="flex justify-center gap-0.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title={`${staffOnDay(i, 'day')} day`}></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title={`${staffOnDay(i, 'evening')} eve`}></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" title={`${staffOnDay(i, 'night')} night`}></span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayed.map((member, rowIdx) => (
                  <tr key={member.id} className={`border-b border-slate-100 hover:bg-slate-50/50 transition-all ${rowIdx % 2 === 0 ? '' : 'bg-slate-50/30'}`}>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">{member.avatar}</div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 leading-tight">{member.name}</p>
                          <p className="text-xs text-slate-500">{member.role}</p>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${DEPT_COLORS[member.dept] || 'bg-slate-100 text-slate-500'}`}>{member.dept}</span>
                        </div>
                      </div>
                    </td>
                    {member.shifts.map((shift, dayIdx) => {
                      const st = SHIFT_TYPES[shift];
                      const isEditing = editCell?.staffId === member.id && editCell?.dayIdx === dayIdx;
                      return (
                        <td key={dayIdx} className="px-2 py-2 text-center relative">
                          <button onClick={() => setEditCell(isEditing ? null : { staffId: member.id, dayIdx })} className={`w-full px-2 py-2 rounded-lg border text-xs font-semibold transition-all hover:shadow-sm ${st.cls} ${isEditing ? 'ring-2 ring-blue-400' : ''}`}>
                            {st.label}
                          </button>
                          {isEditing && (
                            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-white border border-slate-200 rounded-xl shadow-xl z-30 w-36 overflow-hidden">
                              {Object.entries(SHIFT_TYPES).map(([key, s]) => (
                                <button key={key} onClick={() => setShift(member.id, dayIdx, key)} className={`w-full flex items-center gap-2 px-3 py-2.5 text-xs font-medium hover:bg-slate-50 transition-all text-left ${shift === key ? 'bg-blue-50 text-blue-600' : 'text-slate-700'}`}>
                                  <span className={`w-2 h-2 rounded-full ${s.badge}`}></span>{s.label}
                                  <span className="text-slate-400 text-[10px] ml-auto">{s.time}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex gap-3">
            {Object.entries(SHIFT_TYPES).map(([k, s]) => (
              <div key={k} className="flex items-center gap-2 text-xs text-slate-500">
                <span className={`w-3 h-3 rounded-full ${s.badge}`}></span>
                <span>{s.label} · {s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
