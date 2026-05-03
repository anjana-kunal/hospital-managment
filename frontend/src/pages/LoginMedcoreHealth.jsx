import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { firebaseAuth, googleProvider } from '../config/firebase';
import { getDashboardPath, loginWithFirebaseIdToken } from '../services/authApi';

const ROLE_RULES = [
  { match: (e) => e.includes('admin'), role: 'Admin', icon: 'admin_panel_settings', dest: '/admin_dashboard_medcore_health', color: 'text-tertiary' },
  { match: (e) => e.includes('doctor') || e.includes('dr.') || e.includes('@doctors.') || e.includes('.doctor'), role: 'Doctor', icon: 'stethoscope', dest: '/doctor_dashboard_medcore_health', color: 'text-secondary' },
];

function detectRole(email) {
  const e = email.toLowerCase().trim();
  for (const rule of ROLE_RULES) {
    if (rule.match(e)) return rule;
  }
  return { role: 'Patient', icon: 'personal_injury', dest: '/patient_dashboard_medcore_health', color: 'text-primary' };
}

export default function LoginMedcoreHealth() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || null;
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);

  const detectedRole = email.trim() ? detectRole(email) : null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) { setError('Please enter your email.'); return; }
    const role = detectRole(email);
    localStorage.setItem('medcore_user_role', role.role);
    navigate(redirectTo || role.dest);
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError('');

    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      const idToken = await result.user.getIdToken();
      const session = await loginWithFirebaseIdToken(idToken);
      localStorage.setItem('medcore_user_role', session.user.role);
      navigate(redirectTo || getDashboardPath(session.user.role));
    } catch (err) {
      setError(err.message || 'Google login failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-background text-on-surface antialiased font-sans">
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-[44%] xl:w-2/5 overflow-hidden bg-primary text-on-primary">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(circle at 20% 0%, #1a73e8 0%, transparent 55%),' +
              'radial-gradient(circle at 100% 100%, #006b5c 0%, transparent 55%),' +
              'linear-gradient(135deg, #003a7e 0%, #005bbf 100%)',
          }}
        />
        <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -left-24 w-[22rem] h-[22rem] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col justify-between w-full h-full p-12 xl:p-14 gap-10">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/25">
              <span className="material-symbols-outlined text-white text-[24px]">health_and_safety</span>
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">MedCore Health</span>
          </div>
          <div className="space-y-6 max-w-md">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/12 ring-1 ring-white/20 text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Hospital Operating System
            </span>
            <h1 className="font-display text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              The calm command center for modern healthcare.
            </h1>
            <p className="text-base xl:text-lg text-white/80 leading-relaxed">
              Unified records, scheduling, billing, and real-time clinical workflows in one secure platform — trusted by 2,000+ healthcare professionals.
            </p>
          </div>
          <ul className="space-y-3 max-w-md">
            {[
              { i: 'shield_lock', t: 'HIPAA-compliant by default', d: 'Encryption in transit & at rest, full audit trail.' },
              { i: 'schedule', t: 'Built for clinical speed', d: 'Sub-second navigation across 40+ workflows.' },
              { i: 'workspaces', t: 'Role-aware experience', d: 'Tailored to patients, doctors, and administrators.' },
            ].map((f) => (
              <li key={f.t} className="flex items-start gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-white/12 ring-1 ring-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">{f.i}</span>
                </span>
                <div>
                  <div className="text-sm font-semibold">{f.t}</div>
                  <div className="text-xs text-white/70">{f.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="px-6 py-10 lg:ml-[44%] xl:ml-[40%] min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <span className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-level-2">
              <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-on-surface">MedCore Health</span>
          </div>

          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">Welcome back</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Sign in to access your healthcare dashboard.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl shadow-level-2 border border-outline-variant/30 overflow-hidden">
            <div className="p-6 sm:p-8 space-y-5">

              {/* Google Sign-In */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={googleLoading}
                className="w-full h-12 flex items-center justify-center gap-3 rounded-lg border-2 border-outline-variant/50 bg-white hover:bg-surface-container-low hover:border-outline transition-all font-label-md text-label-md text-on-surface shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
                {googleLoading ? 'Connecting...' : 'Continue with Google'}
              </button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-outline-variant/40"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">or sign in with email</span>
                <div className="flex-1 h-px bg-outline-variant/40"></div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="identifier">
                    Email address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute inset-y-0 left-3 my-auto h-fit text-on-surface-variant text-[20px] pointer-events-none">person</span>
                    <input
                      id="identifier"
                      name="identifier"
                      type="text"
                      autoComplete="username"
                      placeholder="you@medcore.test"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setError(''); }}
                      className="block w-full h-12 pl-10 pr-3 bg-surface-container-low border border-outline-variant/40 rounded-lg text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:border-primary focus:ring-0 outline-none transition-colors"
                    />
                  </div>

                  {detectedRole && (
                    <div className="mt-2 flex items-center gap-1.5 px-3 py-1.5 bg-surface-container rounded-lg">
                      <span className={`material-symbols-outlined text-[16px] ${detectedRole.color}`}>{detectedRole.icon}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Signing in as <span className={`font-semibold ${detectedRole.color}`}>{detectedRole.role}</span>
                      </span>
                    </div>
                  )}

                  {error && (
                    <p className="mt-2 font-label-sm text-label-sm text-error flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">error</span>{error}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">
                      Password
                    </label>
                    <Link to="/forgot_password_medcore_health" className="font-label-md text-label-md text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute inset-y-0 left-3 my-auto h-fit text-on-surface-variant text-[20px] pointer-events-none">lock</span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="block w-full h-12 pl-10 pr-12 bg-surface-container-low border border-outline-variant/40 rounded-lg text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:border-primary focus:ring-0 outline-none transition-colors"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute inset-y-0 right-2 my-auto h-9 w-9 flex items-center justify-center rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? 'visibility' : 'visibility_off'}
                      </span>
                    </button>
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Keep me signed in on this device</span>
                </label>

                <button
                  type="submit"
                  className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:shadow-level-2 active:scale-[0.99] transition-all"
                >
                  <span>Sign in</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                <div className="text-center pt-1">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    New patient?{' '}
                    <Link to="/patient_registration_medcore_health" className="font-label-md text-label-md text-primary hover:underline">
                      Create an account
                    </Link>
                  </span>
                </div>
              </form>
            </div>

            <div className="px-6 py-3 border-t border-outline-variant/30 bg-surface-container-low/60 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[16px]">encrypted</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Secured with 256-bit TLS
              </span>
            </div>
          </div>

          <p className="mt-6 text-center font-body-sm text-body-sm text-on-surface-variant">
            Need help?{' '}
            <a className="font-label-md text-label-md text-primary hover:underline" href="mailto:support@medcore.test">
              Contact IT support
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
