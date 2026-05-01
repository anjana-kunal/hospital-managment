import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginMedcoreHealth() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('patient');

  const roleDestinations = {
    patient: '/patient_dashboard_medcore_health',
    doctor: '/doctor_dashboard_medcore_health',
    admin: '/admin_dashboard_medcore_health',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(roleDestinations[selectedRole]);
  };

  return (
    <>
      <div className="bg-surface-container-low text-on-surface min-h-screen flex items-center justify-center p-md sm:p-lg md:p-xl font-body-md antialiased">

{/*  Main Container Canvas  */}
<main className="w-full max-w-[480px]">
{/*  Trust Badge / Header Area  */}
<div className="flex flex-col items-center mb-xl text-center">
<div className="bg-surface-container-lowest p-md rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.04)] mb-md flex items-center justify-center h-16 w-16">
<span className="material-symbols-outlined fill-icon text-primary-container text-[32px]">health_and_safety</span>
</div>
<h1 className="font-h2 text-h2 text-on-surface mb-xs">MedCore Health</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Secure access to your healthcare dashboard.</p>
</div>
{/*  Login Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-outline-variant/30 overflow-hidden">
{/*  Role Selector Tabs  */}
<div className="flex border-b border-outline-variant/30 bg-surface-container-lowest">
<button className={selectedRole === 'patient' ? 'flex-1 py-md px-sm text-center font-label-md text-label-md text-primary-container border-b-2 border-primary-container bg-surface-container-low/50 transition-colors' : 'flex-1 py-md px-sm text-center font-label-md text-label-md text-on-surface-variant border-b-2 border-transparent hover:text-on-surface hover:bg-surface-container-low/30 transition-colors'} type="button" onClick={() => setSelectedRole('patient')}>
                    Patient
                </button>
<button className={selectedRole === 'doctor' ? 'flex-1 py-md px-sm text-center font-label-md text-label-md text-primary-container border-b-2 border-primary-container bg-surface-container-low/50 transition-colors' : 'flex-1 py-md px-sm text-center font-label-md text-label-md text-on-surface-variant border-b-2 border-transparent hover:text-on-surface hover:bg-surface-container-low/30 transition-colors'} type="button" onClick={() => setSelectedRole('doctor')}>
                    Doctor
                </button>
<button className={selectedRole === 'admin' ? 'flex-1 py-md px-sm text-center font-label-md text-label-md text-primary-container border-b-2 border-primary-container bg-surface-container-low/50 transition-colors' : 'flex-1 py-md px-sm text-center font-label-md text-label-md text-on-surface-variant border-b-2 border-transparent hover:text-on-surface hover:bg-surface-container-low/30 transition-colors'} type="button" onClick={() => setSelectedRole('admin')}>
                    Admin
                </button>
</div>
{/*  Form Content  */}
<div className="p-lg sm:p-xl">
<form className="space-y-lg" onSubmit={handleSubmit}>
{/*  Email / Phone Input  */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="identifier">Email or Phone Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
</div>
<input className="block w-full pl-xl pr-md py-md bg-surface-container font-body-md text-body-md text-on-surface rounded-lg border-2 border-transparent focus:bg-surface-container-lowest focus:border-primary-container focus:ring-0 transition-colors" id="identifier" name="identifier" placeholder="Enter your email or phone" type="text" />
</div>
</div>
{/*  Password Input  */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="password">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">lock</span>
</div>
<input className="block w-full pl-xl pr-xl py-md bg-surface-container font-body-md text-body-md text-on-surface rounded-lg border-2 border-transparent focus:bg-surface-container-lowest focus:border-primary-container focus:ring-0 transition-colors" id="password" name="password" placeholder="Enter your password" type="password" />
<button className="absolute inset-y-0 right-0 pr-md flex items-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
</div>
</div>
{/*  Remember & Forgot  */}
<div className="flex items-center justify-between pt-sm">
<div className="flex items-center">
<input className="h-4 w-4 rounded border-outline text-primary-container focus:ring-primary-container bg-surface-container-lowest" id="remember-me" name="remember-me" type="checkbox" />
<label className="ml-sm block font-body-sm text-body-sm text-on-surface-variant" htmlFor="remember-me">
                                Remember me
                            </label>
</div>
<div className="text-sm">
<Link className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors" to="/forgot_password_medcore_health">
                                Forgot password?
              </Link>
</div>
</div>
{/*  CTA  */}
<div className="pt-sm">
<button className="w-full flex justify-center py-md px-lg border border-transparent rounded-lg shadow-sm font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-container transition-colors items-center gap-sm" type="submit">
<span>Sign In</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</form>
</div>
{/*  Security Footer  */}
<div className="bg-surface-container p-md border-t border-outline-variant/30 text-center flex justify-center items-center gap-xs">
<span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Secure 256-bit SSL Encryption</span>
</div>
</div>
{/*  System Footer  */}
<div className="mt-lg text-center">
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Need help? <a className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors" href="#">Contact IT Support</a>
</p>
</div>
</main>

</div>
    </>
  );
}
