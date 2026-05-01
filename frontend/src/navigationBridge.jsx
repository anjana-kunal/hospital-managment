import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const pathContexts = {
  '/': 'public',
  '/landing_page_medcore_health': 'public',
  '/login_medcore_health': 'auth',
  '/forgot_password_medcore_health': 'auth',
  '/otp_verification_medcore_health': 'auth',
  '/patient_registration_medcore_health': 'auth',
  '/booking_confirmed_medcore_health': 'auth',
  '/patient_dashboard_medcore_health': 'patient',
  '/my_appointments_medcore_health': 'patient',
  '/messages_medcore_health': 'patient',
  '/notifications_medcore_health': 'patient',
  '/medical_history_medcore_health': 'patient',
  '/medical_records_medcore_health': 'patient',
  '/my_profile_medcore_health': 'patient',
  '/settings_medcore_health': 'patient',
  '/search_doctors_medcore_health': 'patient',
  '/select_slot_medcore_health': 'patient',
  '/doctor_profile_medcore_health': 'patient',
  '/lab_reports_medcore_health': 'patient',
  '/billing_payments_medcore_health': 'patient',
  '/prescriptions_medcore_health': 'patient',
  '/pharmacy_inventory_medcore_health': 'patient',
  '/doctor_dashboard_medcore_health': 'doctor',
  '/appointments_queue_medcore_health': 'doctor',
  '/schedule_management_medcore_health': 'doctor',
  '/patient_directory_medcore_health': 'doctor',
  '/patient_clinical_profile_medcore_health': 'doctor',
  '/doctor_profile_medcore_pro': 'doctor',
  '/account_settings_medcore_pro': 'doctor',
  '/availability_settings_medcore_pro': 'doctor',
  '/consultation_fees_medcore_pro': 'doctor',
  '/notification_settings_medcore_pro': 'doctor',
  '/admin_dashboard_medcore_health': 'admin',
  '/admin_profile_settings_medcore_health': 'admin',
  '/user_management_medcore_health': 'admin',
  '/doctor_approvals_medcore_health': 'admin',
  '/department_management_medcore_health': 'admin',
  '/global_appointment_management_medcore_health': 'admin',
  '/billing_finance_medcore_health': 'admin',
  '/audit_logs_medcore_health': 'admin',
  '/roles_permissions_medcore_health': 'admin',
  '/reports_analytics_medcore_health': 'admin',
  '/system_settings_medcore_health': 'admin',
  '/announcements_medcore_health': 'admin',
  '/bed_management_medcore_health': 'admin',
  '/laboratory_management_medcore_health': 'admin',
};

const sectionViewAllRoutes = {
  'upcoming appointments': '/my_appointments_medcore_health',
  'recent lab reports': '/lab_reports_medcore_health',
  'recent activity': '/audit_logs_medcore_health',
  'today\'s appointments': '/schedule_management_medcore_health',
  'todays appointments': '/schedule_management_medcore_health',
  'critical alerts': '/doctor_approvals_medcore_health',
};

const contextRoutes = {
  public: {
    'patient login': '/login_medcore_health',
    'staff portal': '/login_medcore_health',
    'book an appointment': '/search_doctors_medcore_health',
    'book appointment': '/search_doctors_medcore_health',
  },
  auth: {
    'forgot password': '/forgot_password_medcore_health',
    'back to login': '/login_medcore_health',
    'patient login': '/login_medcore_health',
    'staff portal': '/login_medcore_health',
  },
  patient: {
    dashboard: '/patient_dashboard_medcore_health',
    appointments: '/my_appointments_medcore_health',
    records: '/medical_records_medcore_health',
    billing: '/billing_payments_medcore_health',
    messages: '/messages_medcore_health',
    notifications: '/notifications_medcore_health',
    settings: '/settings_medcore_health',
    logout: '/landing_page_medcore_health',
    profile: '/my_profile_medcore_health',
    'medical history': '/medical_history_medcore_health',
    'medical records': '/medical_records_medcore_health',
    prescriptions: '/prescriptions_medcore_health',
    'lab reports': '/lab_reports_medcore_health',
    'pharmacy inventory': '/pharmacy_inventory_medcore_health',
    'search doctors': '/search_doctors_medcore_health',
    'book appointment': '/search_doctors_medcore_health',
    'book now': '/select_slot_medcore_health',
    'confirm booking': '/booking_confirmed_medcore_health',
    reschedule: '/select_slot_medcore_health',
    'upload records': '/medical_records_medcore_health',
    'pay bill': '/billing_payments_medcore_health',
    'message doctor': '/messages_medcore_health',
    'schedule consult': '/search_doctors_medcore_health',
    'edit profile': '/my_profile_medcore_health',
    history: '/medical_history_medcore_health',
  },
  doctor: {
    dashboard: '/doctor_dashboard_medcore_health',
    schedule: '/schedule_management_medcore_health',
    appointments: '/appointments_queue_medcore_health',
    patients: '/patient_directory_medcore_health',
    messages: '/messages_medcore_health',
    settings: '/account_settings_medcore_pro',
    logout: '/landing_page_medcore_health',
    profile: '/doctor_profile_medcore_pro',
    availability: '/availability_settings_medcore_pro',
    'consultation fees': '/consultation_fees_medcore_pro',
    notifications: '/notification_settings_medcore_pro',
    security: '/account_settings_medcore_pro',
    'new appointment': '/appointments_queue_medcore_health',
    'new patient': '/patient_registration_medcore_health',
    'view chart': '/patient_clinical_profile_medcore_health',
    'review results': '/lab_reports_medcore_health',
    'start consultation': '/patient_clinical_profile_medcore_health',
    'view schedule': '/schedule_management_medcore_health',
    'view full schedule': '/schedule_management_medcore_health',
    'back to directory': '/patient_directory_medcore_health',
    manage: '/medical_records_medcore_health',
  },
  admin: {
    dashboard: '/admin_dashboard_medcore_health',
    analytics: '/reports_analytics_medcore_health',
    'audit logs': '/audit_logs_medcore_health',
    permissions: '/roles_permissions_medcore_health',
    'system settings': '/system_settings_medcore_health',
    profile: '/admin_profile_settings_medcore_health',
    'user management': '/user_management_medcore_health',
    'doctor approvals': '/doctor_approvals_medcore_health',
    departments: '/department_management_medcore_health',
    appointments: '/global_appointment_management_medcore_health',
    billing: '/billing_finance_medcore_health',
    announcements: '/announcements_medcore_health',
    'bed management': '/bed_management_medcore_health',
    'laboratory management': '/laboratory_management_medcore_health',
    logout: '/landing_page_medcore_health',
  },
};

function normalizeLabel(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function getContext(pathname) {
  return pathContexts[pathname] ?? 'patient';
}

function getElementLabel(element) {
  const aria = element.getAttribute('aria-label') || element.getAttribute('title');
  if (aria) return normalizeLabel(aria);
  
  const clone = element.cloneNode(true);
  const icons = clone.querySelectorAll('.material-symbols-outlined, .material-icons, svg');
  icons.forEach(i => i.remove());
  
  return normalizeLabel(clone.textContent || '');
}

function getScopeLabel(element) {
  let current = element.parentElement;

  while (current && current !== document.body) {
    const heading = current.querySelector('h1, h2, h3, h4');
    if (heading) {
      const scope = normalizeLabel(heading.textContent || '');
      if (scope) {
        return scope;
      }
    }

    current = current.parentElement;
  }

  return '';
}

function resolveDestination(pathname, element) {
  const label = getElementLabel(element);
  if (!label) {
    return null;
  }

  if (label === 'view all') {
    const scope = getScopeLabel(element);
    if (scope && sectionViewAllRoutes[scope]) {
      return sectionViewAllRoutes[scope];
    }

    const context = getContext(pathname);
    if (context === 'patient') {
      return '/my_appointments_medcore_health';
    }

    if (context === 'doctor') {
      return '/schedule_management_medcore_health';
    }

    if (context === 'admin') {
      return '/audit_logs_medcore_health';
    }
  }

  const context = getContext(pathname);
  return contextRoutes[context]?.[label] ?? null;
}

export function NavigationBridge() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const clickable = event.target.closest('a[href="#"], button');
      if (!clickable) {
        return;
      }

      const destination = resolveDestination(location.pathname, clickable);
      if (!destination || destination === location.pathname) {
        if (clickable.tagName === 'A' && clickable.getAttribute('href') === '#') {
          event.preventDefault();
        }
        return;
      }

      event.preventDefault();
      navigate(destination);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [location.pathname, navigate]);

  return null;
}
