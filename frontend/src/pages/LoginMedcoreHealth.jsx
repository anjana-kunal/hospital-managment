import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginMedcoreHealth() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('patient');
  const [showPassword, setShowPassword] = useState(false);

  const roleDestinations = {
    patient: '/patient_dashboard_medcore_health',
    doctor: '/doctor_dashboard_medcore_health',
    admin: '/admin_dashboard_medcore_health',
  };

  const roles = [
    { id: 'patient', label: 'Patient', icon: 'personal_injury' },
    { id: 'doctor', label: 'Doctor', icon: 'stethoscope' },
    { id: 'admin', label: 'Admin', icon: 'admin_panel_settings' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(roleDestinations[selectedRole]);
  };

  const tabClass = (id) =>
    selectedRole === id
      ? 'flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-md text-sm font-semibold text-primary bg-surface-container-lowest shadow-level-1 transition-all'
      : 'flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-md text-sm font-medium text-on-surface-variant hover:text-on-surface transition-all';

  return (
    <div className="min-h-screen relative bg-background text-on-surface antialiased font-sans">
      {/* Left brand panel (desktop only) */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-[44%] xl:w-2/5 overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 opacity-90"
             style={{
               background:
                 'radial-gradient(circle at 20% 0%, #1a73e8 0%, transparent 55%),' +
                 'radial-gradient(circle at 100% 100%, #006b5c 0%, transparent 55%),' +
                 'linear-gradient(135deg, #003a7e 0%, #005bbf 100%)',
             }} />
        <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -left-24 w-[22rem] h-[22rem] rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between w-full h-full p-12 xl:p-14 gap-10">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <span className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/25">
              <span className="material-symbols-outlined fill-icon text-white text-[24px]">health_and_safety</span>
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">MedCore Health</span>
          </Link>

          <div className="space-y-6 max-w-md">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/12 ring-1 ring-white/20 text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Hospital Operating System
            </span>
            <h1 className="font-display text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              The calm command center for modern healthcare.
            </h1>
            <p className="text-base xl:text-lg text-white/80 leading-relaxed">
              Unified records, scheduling, billing, and real-time clinical workflows in one secure platform &mdash; trusted by 2,000+ healthcare professionals.
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

      {/* Right form column */}
      <main className="surface-gradient px-6 py-10 lg:ml-[44%] xl:ml-[40%] min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Mobile brand */}
          <Link to="/" className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <span className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-level-2">
              <span className="material-symbols-outlined fill-icon text-[22px]">health_and_safety</span>
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-on-surface">MedCore Health</span>
          </Link>

          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">Welcome back</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Sign in to access your healthcare dashboard.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl shadow-level-2 border border-outline-variant/30 overflow-hidden">
            {/* Role selector */}
            <div className="p-2 m-3 mb-0 flex gap-1 rounded-xl bg-surface-container">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRole(r.id)}
                  className={tabClass(r.id)}
                  aria-pressed={selectedRole === r.id}
                >
                  <span className={`material-symbols-outlined text-[18px] ${selectedRole === r.id ? 'fill-icon' : ''}`}>{r.icon}</span>
                  <span>{r.label}</span>
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="identifier">
                    Email or phone number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute inset-y-0 left-3 my-auto h-fit text-on-surface-variant text-[20px] pointer-events-none">person</span>
                    <input
                      id="identifier"
                      name="identifier"
                      type="text"
                      autoComplete="username"
                      placeholder="you@medcore.test"
                      className="block w-full h-12 pl-10 pr-3 bg-surface-container-low border border-outline-variant/40 rounded-lg text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:border-primary focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">
                      Password
                    </label>
                    <Link
                      to="/forgot_password_medcore_health"
                      className="font-label-md text-label-md text-primary hover:underline"
                    >
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
            Need help? <a className="font-label-md text-label-md text-primary hover:underline" href="mailto:support@medcore.test">Contact IT support</a>
          </p>
        </div>
      </main>
    </div>
  );
}
