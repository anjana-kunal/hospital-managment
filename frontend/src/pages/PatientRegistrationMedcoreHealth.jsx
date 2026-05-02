import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PatientRegistrationMedcoreHealth() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '', dob: '', gender: '', phone: '', email: '', address: '',
    emergencyName: '', emergencyPhone: '', relationship: '',
    insuranceProvider: '', policyNumber: '',
    password: '', confirmPassword: '',
  });
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const required = ['fullName', 'dob', 'gender', 'phone', 'email', 'address', 'emergencyName', 'emergencyPhone', 'relationship', 'password', 'confirmPassword'];
    for (const field of required) {
      if (!form[field]) { setError('Please fill in all required fields.'); return; }
    }
    if (form.password !== form.confirmPassword) { setError('Passwords do not match.'); return; }
    navigate('/otp_verification_medcore_health');
  }

  const inputClass = "w-full px-md py-3 bg-surface-container border-2 border-transparent rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-0 transition-colors";

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex overflow-hidden">
      <div className="hidden lg:flex lg:w-5/12 relative flex-col justify-between p-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-primary/20"></div>
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent"></div>
        <div className="relative z-10 flex items-center gap-sm">
          <span className="material-symbols-outlined text-4xl text-primary-fixed" style={{fontVariationSettings:"'FILL' 1"}}>health_and_safety</span>
          <span className="font-h3 text-h3 text-on-primary font-bold tracking-tight">MedCore HMS</span>
        </div>
        <div className="relative z-10 mt-auto text-on-primary max-w-md pb-xl">
          <h1 className="font-h1 text-h1 mb-md">Streamline your care experience.</h1>
          <p className="font-body-lg text-body-lg opacity-90">Register for your secure patient portal to access medical records, manage appointments, and communicate directly with your clinical team.</p>
        </div>
      </div>

      <div className="w-full lg:w-7/12 h-screen overflow-y-auto bg-background px-6 py-xl sm:px-12 md:px-xl xl:px-24">
        <div className="flex lg:hidden items-center gap-sm mb-xl">
          <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings:"'FILL' 1"}}>health_and_safety</span>
          <span className="font-h3 text-h3 text-primary font-bold tracking-tight">MedCore HMS</span>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-xl">
            <h2 className="font-h2 text-h2 text-on-surface mb-xs">Patient Registration</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Please provide your details below to create your secure account.</p>
          </div>

          <form className="flex flex-col gap-xl pb-xl" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
              <div className="border-b border-surface-variant pb-sm">
                <h3 className="font-h3 text-h3 text-on-surface">Personal Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
                <div className="col-span-1 md:col-span-2 flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Full Name <span className="text-error">*</span></label>
                  <input className={inputClass} name="fullName" placeholder="e.g. Jane Doe" type="text" value={form.fullName} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Date of Birth <span className="text-error">*</span></label>
                  <input className={inputClass} name="dob" type="date" value={form.dob} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Gender <span className="text-error">*</span></label>
                  <select className={`${inputClass} appearance-none cursor-pointer`} name="gender" value={form.gender} onChange={handleChange}>
                    <option value="">Select gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Phone Number <span className="text-error">*</span></label>
                  <input className={inputClass} name="phone" placeholder="(555) 000-0000" type="tel" value={form.phone} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Email Address <span className="text-error">*</span></label>
                  <input className={inputClass} name="email" placeholder="jane.doe@example.com" type="email" value={form.email} onChange={handleChange} />
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Home Address <span className="text-error">*</span></label>
                  <input className={inputClass} name="address" placeholder="123 Healthway Drive, Apt 4B, City, State, ZIP" type="text" value={form.address} onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
              <div className="border-b border-surface-variant pb-sm">
                <h3 className="font-h3 text-h3 text-on-surface">Emergency Contact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
                <div className="col-span-1 md:col-span-2 flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Contact Name <span className="text-error">*</span></label>
                  <input className={inputClass} name="emergencyName" placeholder="Full name of emergency contact" type="text" value={form.emergencyName} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Contact Phone <span className="text-error">*</span></label>
                  <input className={inputClass} name="emergencyPhone" placeholder="(555) 000-0000" type="tel" value={form.emergencyPhone} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Relationship <span className="text-error">*</span></label>
                  <input className={inputClass} name="relationship" placeholder="e.g. Spouse, Parent, Sibling" type="text" value={form.relationship} onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
              <div className="border-b border-surface-variant pb-sm flex justify-between items-baseline">
                <h3 className="font-h3 text-h3 text-on-surface">Insurance Details</h3>
                <span className="font-label-sm text-label-sm text-outline">Optional</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Insurance Provider</label>
                  <input className={inputClass} name="insuranceProvider" placeholder="e.g. BlueCross, Aetna" type="text" value={form.insuranceProvider} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Policy Number</label>
                  <input className={inputClass} name="policyNumber" placeholder="Member ID or Policy #" type="text" value={form.policyNumber} onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col gap-grid-gutter">
              <div className="border-b border-surface-variant pb-sm">
                <h3 className="font-h3 text-h3 text-on-surface">Account Security</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Create Password <span className="text-error">*</span></label>
                  <input className={inputClass} name="password" placeholder="••••••••" type="password" value={form.password} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Confirm Password <span className="text-error">*</span></label>
                  <input className={inputClass} name="confirmPassword" placeholder="••••••••" type="password" value={form.confirmPassword} onChange={handleChange} />
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-error-container/30 border border-error-container text-error rounded-lg px-4 py-3 font-body-sm text-body-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {error}
              </div>
            )}

            <div className="pt-sm flex flex-col sm:flex-row items-center justify-between gap-md">
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
                By creating an account, you agree to our{' '}
                <a className="text-primary hover:underline" href="#">Terms of Service</a> and{' '}
                <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center gap-2"
              >
                Create Account
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
              Already have an account?{' '}
              <Link className="text-primary hover:underline font-medium" to="/login_medcore_health">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
