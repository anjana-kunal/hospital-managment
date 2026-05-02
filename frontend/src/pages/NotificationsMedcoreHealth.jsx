import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const INITIAL_NOTIFICATIONS = [
  {
    id: 1, read: false, priority: true,
    icon: 'calendar_month', iconBg: 'bg-primary-fixed text-primary-container',
    borderColor: 'border-l-primary-container',
    title: 'Appointment reminder for tomorrow',
    body: 'You have an upcoming consultation with Dr. Sarah Jenkins (Endocrinology) tomorrow at 10:30 AM. Please arrive 15 minutes early.',
    time: 'Just now',
    actions: [{ label: 'View Details', primary: true, nav: '/my_appointments_medcore_health' }, { label: 'Reschedule', primary: false, nav: '/select_slot_medcore_health' }],
  },
  {
    id: 2, read: false, priority: false,
    icon: 'prescriptions', iconBg: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    borderColor: null,
    title: 'Prescription refill ready',
    body: 'Your prescription refill for Lisinopril (10mg) is ready for pickup at the Main Campus Pharmacy.',
    time: '2 hours ago',
    actions: [],
  },
  {
    id: 3, read: false, priority: false,
    icon: 'science', iconBg: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    borderColor: 'border-l-tertiary-container',
    title: 'Lab results available for Cardiology',
    body: 'New lab results from your recent Comprehensive Metabolic Panel have been uploaded by Dr. Robert Chen.',
    time: 'Yesterday',
    actions: [{ label: 'View Results', primary: false, nav: '/lab_reports_medcore_health' }],
  },
  {
    id: 4, read: true, priority: false,
    icon: 'receipt_long', iconBg: 'bg-surface-container-highest text-on-surface-variant',
    borderColor: null,
    title: 'Payment reminder for Invoice #INV-2023-0891',
    body: 'A payment of $150.00 is due on October 30th for your recent Telehealth Consultation.',
    time: 'Oct 12',
    actions: [{ label: 'Pay Now', primary: true, nav: '/billing_payments_medcore_health' }],
  },
];

export default function NotificationsMedcoreHealth() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  function markAllRead() {
    setNotifications(n => n.map(notif => ({ ...notif, read: true })));
  }

  function markRead(id) {
    setNotifications(n => n.map(notif => notif.id === id ? { ...notif, read: true } : notif));
  }

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md text-body-md flex antialiased">
      <nav className="fixed left-0 top-0 h-full flex flex-col w-64 border-r border-outline-variant shadow-sm z-50 bg-surface">
        <div className="h-16 flex items-center px-lg border-b border-outline-variant">
          <span className="material-symbols-outlined text-primary-container text-2xl mr-sm" style={{fontVariationSettings:"'FILL' 1"}}>medical_services</span>
          <div>
            <div className="font-h3 text-h3 text-primary-container font-bold leading-tight">MediPortal</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant">Patient Access</div>
          </div>
        </div>
        <div className="flex-1 py-lg flex flex-col gap-sm overflow-y-auto">
          <Link className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" to="/messages_medcore_health">
            <span className="material-symbols-outlined">chat</span>
            <span className="font-label-md text-label-md">Messages</span>
          </Link>
          <Link className="flex items-center gap-3 px-lg py-sm bg-primary-fixed text-on-primary-fixed-variant border-r-4 border-primary-container" to="/notifications_medcore_health">
            <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>notifications</span>
            <span className="font-label-md text-label-md">Notifications</span>
            {unreadCount > 0 && (
              <span className="ml-auto bg-error text-on-error font-label-sm text-label-sm px-1.5 py-0.5 rounded-full text-xs">{unreadCount}</span>
            )}
          </Link>
          <Link className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" to="/medical_history_medcore_health">
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-label-md text-label-md">Medical History</span>
          </Link>
          <Link className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" to="/my_profile_medcore_health">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md">Profile</span>
          </Link>
          <Link className="flex items-center gap-3 px-lg py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors" to="/settings_medcore_health">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </Link>
        </div>
      </nav>

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm">
          <div className="flex items-center gap-lg">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-lg border-transparent focus:bg-surface focus:border-primary-container focus:ring-2 focus:ring-primary-fixed transition-colors font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search MediPortal HMS" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-xs font-label-sm text-label-sm bg-surface-container px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[18px]">emergency</span>
              Emergency Support
            </button>
            <div className="h-6 w-px bg-outline-variant mx-sm"></div>
            <button className="text-on-surface-variant hover:text-primary-container rounded-full p-1 transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
            <img
              alt="User profile"
              onClick={() => navigate('/my_profile_medcore_health')}
              className="h-8 w-8 rounded-full ml-sm border border-outline-variant cursor-pointer object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjfpf7ky6zbusj9wC2SOxvgGY-IiakbybdVkzk1uHH3Safejf_TAKJFkOQq2lvdnQtUZoof_DjW7V_iEUn9Iy9jtZegOCUOhrgpW7Xh0lya1sE4oSdixZKbTM_Bll0Rv7ovaEZ4OwdsCnFE2qdwiP0kg6rDZXbeFjzkkZnuT8BPc27Ypkc34JD6TPdr7Qdka3mCS_r5HW1kz5gJrlAu39_6P-PeGSlvUKuO-8cT3lfvTkss4GD-lhTtgH9cqzn3tgJN4d6cQzRGWaw"
            />
          </div>
        </header>

        <main className="flex-1 pt-24 px-grid-margin pb-xl max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-xl">
            <div>
              <h1 className="font-h2 text-h2 text-on-surface mb-xs">Notifications Center</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Manage your alerts and important updates.
                {unreadCount > 0 && <span className="ml-2 text-primary-container font-medium">{unreadCount} unread</span>}
              </p>
            </div>
            <button
              onClick={markAllRead}
              disabled={unreadCount === 0}
              className={`flex items-center gap-sm px-md py-2 font-label-md text-label-md rounded-lg border border-outline-variant transition-colors shadow-sm ${unreadCount > 0 ? 'bg-surface-container hover:bg-surface-container-high text-on-surface cursor-pointer' : 'bg-surface-container/50 text-outline cursor-not-allowed'}`}
            >
              <span className="material-symbols-outlined text-[20px]">done_all</span>
              Mark all as read
            </button>
          </div>

          <div className="grid grid-cols-1 gap-md">
            {notifications.map(notif => (
              <div
                key={notif.id}
                onClick={() => markRead(notif.id)}
                className={`bg-surface rounded-xl p-lg border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex gap-md items-start relative overflow-hidden group cursor-pointer transition-all ${
                  notif.read ? 'opacity-70' : 'hover:shadow-md'
                } ${notif.borderColor ? `border-l-4 ${notif.borderColor}` : ''}`}
              >
                <div className={`h-12 w-12 rounded-full ${notif.iconBg} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>{notif.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-xs">
                    <h3 className="font-h3 text-[18px] leading-6 text-on-surface flex items-center gap-2">
                      {notif.title}
                      {!notif.read && <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>}
                    </h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded shrink-0 ml-2">{notif.time}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md">{notif.body}</p>
                  {notif.actions.length > 0 && (
                    <div className="flex gap-sm flex-wrap">
                      {notif.actions.map(action => (
                        <button
                          key={action.label}
                          onClick={e => { e.stopPropagation(); navigate(action.nav); }}
                          className={`px-md py-2 font-label-md text-label-md rounded-lg transition-colors ${
                            action.primary
                              ? 'bg-primary-container text-on-primary shadow-sm hover:bg-primary'
                              : 'bg-surface border border-primary-container text-primary-container hover:bg-primary-fixed hover:border-surface-container-high'
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {!notif.read && <div className="h-3 w-3 bg-primary-container rounded-full mt-2 shrink-0"></div>}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
