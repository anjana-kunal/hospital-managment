const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export function getDashboardPath(role) {
  if (role === 'ADMIN' || role === 'SUPER_ADMIN') return '/admin_dashboard_medcore_health';
  if (role === 'DOCTOR') return '/doctor_dashboard_medcore_health';
  return '/patient_dashboard_medcore_health';
}

export function saveAuthSession({ token, user }) {
  localStorage.setItem('medcore_token', token);
  localStorage.setItem('medcore_user', JSON.stringify(user));
}

export async function loginWithFirebaseIdToken(idToken) {
  const response = await fetch(`${API_BASE_URL}/auth/firebase/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  });

  const payload = await response.json();

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || 'Google login failed');
  }

  saveAuthSession(payload.data);

  return payload.data;
}
