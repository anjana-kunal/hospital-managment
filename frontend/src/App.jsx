import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NavigationBridge } from './navigationBridge.jsx';

import AccountSettingsMedcorePro from './pages/AccountSettingsMedcorePro';
import AdminDashboardMedcoreHealth from './pages/AdminDashboardMedcoreHealth';
import AdminProfileSettingsMedcoreHealth from './pages/AdminProfileSettingsMedcoreHealth';
import AnnouncementsMedcoreHealth from './pages/AnnouncementsMedcoreHealth';
import AppointmentsQueueMedcoreHealth from './pages/AppointmentsQueueMedcoreHealth';
import AuditLogsMedcoreHealth from './pages/AuditLogsMedcoreHealth';
import AvailabilitySettingsMedcorePro from './pages/AvailabilitySettingsMedcorePro';
import BedManagementMedcoreHealth from './pages/BedManagementMedcoreHealth';
import BillingFinanceMedcoreHealth from './pages/BillingFinanceMedcoreHealth';
import BillingPaymentsMedcoreHealth from './pages/BillingPaymentsMedcoreHealth';
import BookingConfirmedMedcoreHealth from './pages/BookingConfirmedMedcoreHealth';
import ConsultationFeesMedcorePro from './pages/ConsultationFeesMedcorePro';
import DepartmentManagementMedcoreHealth from './pages/DepartmentManagementMedcoreHealth';
import DoctorApprovalsMedcoreHealth from './pages/DoctorApprovalsMedcoreHealth';
import DoctorDashboardMedcoreHealth from './pages/DoctorDashboardMedcoreHealth';
import DoctorProfileMedcoreHealth from './pages/DoctorProfileMedcoreHealth';
import DoctorProfileMedcorePro from './pages/DoctorProfileMedcorePro';
import ForgotPasswordMedcoreHealth from './pages/ForgotPasswordMedcoreHealth';
import GlobalAppointmentManagementMedcoreHealth from './pages/GlobalAppointmentManagementMedcoreHealth';
import LaboratoryManagementMedcoreHealth from './pages/LaboratoryManagementMedcoreHealth';
import LabReportsMedcoreHealth from './pages/LabReportsMedcoreHealth';
import LandingPageMedcoreHealth from './pages/LandingPageMedcoreHealth';
import LoginMedcoreHealth from './pages/LoginMedcoreHealth';
import MedicalHistoryMedcoreHealth from './pages/MedicalHistoryMedcoreHealth';
import MedicalRecordsMedcoreHealth from './pages/MedicalRecordsMedcoreHealth';
import MessagesMedcoreHealth from './pages/MessagesMedcoreHealth';
import MyAppointmentsMedcoreHealth from './pages/MyAppointmentsMedcoreHealth';
import MyProfileMedcoreHealth from './pages/MyProfileMedcoreHealth';
import NotificationsMedcoreHealth from './pages/NotificationsMedcoreHealth';
import NotificationSettingsMedcorePro from './pages/NotificationSettingsMedcorePro';
import OtpVerificationMedcoreHealth from './pages/OtpVerificationMedcoreHealth';
import PatientClinicalProfileMedcoreHealth from './pages/PatientClinicalProfileMedcoreHealth';
import PatientDashboardMedcoreHealth from './pages/PatientDashboardMedcoreHealth';
import PatientDirectoryMedcoreHealth from './pages/PatientDirectoryMedcoreHealth';
import PatientRegistrationMedcoreHealth from './pages/PatientRegistrationMedcoreHealth';
import PharmacyInventoryMedcoreHealth from './pages/PharmacyInventoryMedcoreHealth';
import PrescriptionsMedcoreHealth from './pages/PrescriptionsMedcoreHealth';
import ReportsAnalyticsMedcoreHealth from './pages/ReportsAnalyticsMedcoreHealth';
import RolesPermissionsMedcoreHealth from './pages/RolesPermissionsMedcoreHealth';
import ScheduleManagementMedcoreHealth from './pages/ScheduleManagementMedcoreHealth';
import SearchDoctorsMedcoreHealth from './pages/SearchDoctorsMedcoreHealth';
import SelectSlotMedcoreHealth from './pages/SelectSlotMedcoreHealth';
import SettingsMedcoreHealth from './pages/SettingsMedcoreHealth';
import SystemSettingsMedcoreHealth from './pages/SystemSettingsMedcoreHealth';
import UserManagementMedcoreHealth from './pages/UserManagementMedcoreHealth';

function App() {
  return (
    <Router>
      <NavigationBridge />
      <Routes>
        <Route path="/" element={<LandingPageMedcoreHealth />} />
        <Route path="/account_settings_medcore_pro" element={<AccountSettingsMedcorePro />} />
        <Route path="/admin_dashboard_medcore_health" element={<AdminDashboardMedcoreHealth />} />
        <Route path="/admin_profile_settings_medcore_health" element={<AdminProfileSettingsMedcoreHealth />} />
        <Route path="/announcements_medcore_health" element={<AnnouncementsMedcoreHealth />} />
        <Route path="/appointments_queue_medcore_health" element={<AppointmentsQueueMedcoreHealth />} />
        <Route path="/audit_logs_medcore_health" element={<AuditLogsMedcoreHealth />} />
        <Route path="/availability_settings_medcore_pro" element={<AvailabilitySettingsMedcorePro />} />
        <Route path="/bed_management_medcore_health" element={<BedManagementMedcoreHealth />} />
        <Route path="/billing_finance_medcore_health" element={<BillingFinanceMedcoreHealth />} />
        <Route path="/billing_payments_medcore_health" element={<BillingPaymentsMedcoreHealth />} />
        <Route path="/booking_confirmed_medcore_health" element={<BookingConfirmedMedcoreHealth />} />
        <Route path="/consultation_fees_medcore_pro" element={<ConsultationFeesMedcorePro />} />
        <Route path="/department_management_medcore_health" element={<DepartmentManagementMedcoreHealth />} />
        <Route path="/doctor_approvals_medcore_health" element={<DoctorApprovalsMedcoreHealth />} />
        <Route path="/doctor_dashboard_medcore_health" element={<DoctorDashboardMedcoreHealth />} />
        <Route path="/doctor_profile_medcore_health" element={<DoctorProfileMedcoreHealth />} />
        <Route path="/doctor_profile_medcore_pro" element={<DoctorProfileMedcorePro />} />
        <Route path="/forgot_password_medcore_health" element={<ForgotPasswordMedcoreHealth />} />
        <Route path="/global_appointment_management_medcore_health" element={<GlobalAppointmentManagementMedcoreHealth />} />
        <Route path="/laboratory_management_medcore_health" element={<LaboratoryManagementMedcoreHealth />} />
        <Route path="/lab_reports_medcore_health" element={<LabReportsMedcoreHealth />} />
        <Route path="/landing_page_medcore_health" element={<LandingPageMedcoreHealth />} />
        <Route path="/login_medcore_health" element={<LoginMedcoreHealth />} />
        <Route path="/medical_history_medcore_health" element={<MedicalHistoryMedcoreHealth />} />
        <Route path="/medical_records_medcore_health" element={<MedicalRecordsMedcoreHealth />} />
        <Route path="/messages_medcore_health" element={<MessagesMedcoreHealth />} />
        <Route path="/my_appointments_medcore_health" element={<MyAppointmentsMedcoreHealth />} />
        <Route path="/my_profile_medcore_health" element={<MyProfileMedcoreHealth />} />
        <Route path="/notifications_medcore_health" element={<NotificationsMedcoreHealth />} />
        <Route path="/notification_settings_medcore_pro" element={<NotificationSettingsMedcorePro />} />
        <Route path="/otp_verification_medcore_health" element={<OtpVerificationMedcoreHealth />} />
        <Route path="/patient_clinical_profile_medcore_health" element={<PatientClinicalProfileMedcoreHealth />} />
        <Route path="/patient_dashboard_medcore_health" element={<PatientDashboardMedcoreHealth />} />
        <Route path="/patient_directory_medcore_health" element={<PatientDirectoryMedcoreHealth />} />
        <Route path="/patient_registration_medcore_health" element={<PatientRegistrationMedcoreHealth />} />
        <Route path="/pharmacy_inventory_medcore_health" element={<PharmacyInventoryMedcoreHealth />} />
        <Route path="/prescriptions_medcore_health" element={<PrescriptionsMedcoreHealth />} />
        <Route path="/reports_analytics_medcore_health" element={<ReportsAnalyticsMedcoreHealth />} />
        <Route path="/roles_permissions_medcore_health" element={<RolesPermissionsMedcoreHealth />} />
        <Route path="/schedule_management_medcore_health" element={<ScheduleManagementMedcoreHealth />} />
        <Route path="/search_doctors_medcore_health" element={<SearchDoctorsMedcoreHealth />} />
        <Route path="/select_slot_medcore_health" element={<SelectSlotMedcoreHealth />} />
        <Route path="/settings_medcore_health" element={<SettingsMedcoreHealth />} />
        <Route path="/system_settings_medcore_health" element={<SystemSettingsMedcoreHealth />} />
        <Route path="/user_management_medcore_health" element={<UserManagementMedcoreHealth />} />
      </Routes>
    </Router>
  );
}

export default App;
