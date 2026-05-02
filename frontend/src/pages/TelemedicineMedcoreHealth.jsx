import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PATIENT_SIDEBAR = [
  { icon: 'dashboard', label: 'Dashboard', to: '/patient_dashboard_medcore_health' },
  { icon: 'calendar_today', label: 'Appointments', to: '/my_appointments_medcore_health' },
  { icon: 'timeline', label: 'Health Timeline', to: '/health_timeline_medcore_health' },
  { icon: 'videocam', label: 'Telemedicine', to: '/telemedicine_medcore_health', active: true },
  { icon: 'history_edu', label: 'Medical Records', to: '/medical_records_medcore_health' },
  { icon: 'medication', label: 'Prescriptions', to: '/prescriptions_medcore_health' },
  { icon: 'payments', label: 'Billing', to: '/billing_payments_medcore_health' },
];

const CHAT_MESSAGES = [
  { from: 'doctor', name: 'Dr. Emily Chen', text: 'Hello! I can see you have joined. Give me a moment to review your file.', time: '10:01 AM' },
  { from: 'patient', name: 'You', text: 'Thank you doctor, I\'m ready whenever you are.', time: '10:02 AM' },
  { from: 'doctor', name: 'Dr. Emily Chen', text: 'I see your last lab results. Can you describe the headaches — when do they typically start?', time: '10:03 AM' },
];

export default function TelemedicineMedcoreHealth() {
  const navigate = useNavigate();
  const [callState, setCallState] = useState('waiting'); // waiting | active | ended
  const [muted, setMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [newMsg, setNewMsg] = useState('');
  const [messages, setMessages] = useState(CHAT_MESSAGES);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (callState !== 'active') return;
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, [callState]);

  const fmtTime = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const sendMsg = () => {
    if (!newMsg.trim()) return;
    setMessages(m => [...m, { from: 'patient', name: 'You', text: newMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setNewMsg('');
  };

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

      <main className="flex-1 md:ml-64 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-6 h-14 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="font-semibold text-sm">Dr. Emily Chen · Neurology</span>
            {callState === 'active' && <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs font-mono">{fmtTime(elapsed)}</span>}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs">MedCore Secure Video</span>
            <span className="material-symbols-outlined text-green-400 text-[18px]">lock</span>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden bg-slate-800">
          <div className="flex-1 relative flex flex-col items-center justify-center">
            {callState === 'waiting' && (
              <div className="flex flex-col items-center gap-6 text-center p-8">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl text-white font-bold shadow-2xl">EC</div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[16px]">schedule</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-white text-2xl font-bold">Dr. Emily Chen</h2>
                  <p className="text-slate-400 text-sm mt-1">Neurology Specialist</p>
                  <p className="text-amber-400 text-sm mt-2 animate-pulse">Waiting for doctor to join…</p>
                  <p className="text-slate-500 text-xs mt-1">Appointment: Oct 24, 2023 · 10:00 AM</p>
                </div>
                <button onClick={() => setCallState('active')} className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-green-500/30">
                  <span className="material-symbols-outlined">videocam</span>Join Consultation Room
                </button>
              </div>
            )}

            {callState === 'active' && (
              <>
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl text-white font-bold shadow-2xl">EC</div>
                    <p className="text-white font-semibold">Dr. Emily Chen</p>
                  </div>
                  <div className={`absolute top-4 right-4 w-36 h-24 rounded-xl border-2 border-slate-600 overflow-hidden shadow-xl flex items-center justify-center ${videoOff ? 'bg-slate-700' : 'bg-gradient-to-br from-teal-700 to-teal-900'}`}>
                    {videoOff ? <span className="material-symbols-outlined text-slate-400 text-3xl">videocam_off</span> : <p className="text-white text-xs font-medium">You</p>}
                  </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  <button onClick={() => setMuted(!muted)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${muted ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                    <span className="material-symbols-outlined">{muted ? 'mic_off' : 'mic'}</span>
                  </button>
                  <button onClick={() => setVideoOff(!videoOff)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${videoOff ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                    <span className="material-symbols-outlined">{videoOff ? 'videocam_off' : 'videocam'}</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-all">
                    <span className="material-symbols-outlined">screen_share</span>
                  </button>
                  <button onClick={() => setChatOpen(!chatOpen)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${chatOpen ? 'bg-blue-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                    <span className="material-symbols-outlined">chat</span>
                  </button>
                  <button onClick={() => setCallState('ended')} className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all shadow-lg shadow-red-500/40">
                    <span className="material-symbols-outlined">call_end</span>
                  </button>
                </div>
              </>
            )}

            {callState === 'ended' && (
              <div className="flex flex-col items-center gap-6 text-center p-8">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400 text-4xl">check_circle</span>
                </div>
                <div>
                  <h2 className="text-white text-2xl font-bold">Consultation Complete</h2>
                  <p className="text-slate-400 text-sm mt-1">Duration: {fmtTime(elapsed)} · Oct 24, 2023</p>
                  <p className="text-slate-400 text-sm mt-1">Your consultation summary will be emailed to you.</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => navigate('/prescriptions_medcore_health')} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all">View Prescriptions</button>
                  <button onClick={() => navigate('/my_appointments_medcore_health')} className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all">Back to Appointments</button>
                </div>
              </div>
            )}
          </div>

          {chatOpen && callState === 'active' && (
            <div className="w-72 bg-white flex flex-col border-l border-slate-200">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800 text-sm">Consultation Chat</h3>
                <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex flex-col gap-1 ${m.from === 'patient' ? 'items-end' : 'items-start'}`}>
                    <span className="text-xs text-slate-400">{m.name} · {m.time}</span>
                    <div className={`px-3 py-2 rounded-2xl text-sm max-w-[90%] ${m.from === 'patient' ? 'bg-blue-500 text-white rounded-br-sm' : 'bg-slate-100 text-slate-800 rounded-bl-sm'}`}>{m.text}</div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-slate-100 flex gap-2">
                <input value={newMsg} onChange={e => setNewMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMsg()} placeholder="Type a message…" className="flex-1 text-sm border border-slate-200 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <button onClick={sendMsg} className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-all">
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
