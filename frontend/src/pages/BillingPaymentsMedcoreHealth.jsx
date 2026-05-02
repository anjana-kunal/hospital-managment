import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BillingPaymentsMedcoreHealth() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-surface antialiased flex min-h-screen">
      <nav className="bg-white font-manrope text-sm font-medium h-screen w-64 border-r border-slate-200 fixed left-0 top-0 flex flex-col py-4 z-40">
        <div className="px-6 mb-8 mt-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-lg">local_hospital</span>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold leading-tight">Patient Portal</h2>
            <p className="text-xs text-slate-500 font-body-sm">Hospital Management</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-col gap-1 px-2">
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all rounded-lg" to="/patient_dashboard_medcore_health">
            <span className="material-symbols-outlined">dashboard</span>Dashboard
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all rounded-lg" to="/my_appointments_medcore_health">
            <span className="material-symbols-outlined">calendar_today</span>Appointments
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all rounded-lg" to="/medical_records_medcore_health">
            <span className="material-symbols-outlined">history_edu</span>Medical Records
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all rounded-lg" to="/prescriptions_medcore_health">
            <span className="material-symbols-outlined">medication</span>Prescriptions
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600 rounded-r-lg" to="/billing_payments_medcore_health">
            <span className="material-symbols-outlined">payments</span>Billing
          </Link>
        </div>
        <div className="mt-auto px-2 flex flex-col gap-1 border-t border-slate-200 pt-4">
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all rounded-lg" to="/settings_medcore_health">
            <span className="material-symbols-outlined">settings</span>Settings
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all rounded-lg" to="/login_medcore_health">
            <span className="material-symbols-outlined">logout</span>Logout
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex flex-col ml-64 min-w-0">
        <header className="bg-white font-manrope antialiased top-0 sticky z-50 border-b border-slate-200 shadow-sm flex items-center justify-between px-6 h-16 w-full">
          <div className="flex items-center gap-4">
            <div className="text-lg font-extrabold tracking-tight text-slate-900">MedCore Portal</div>
            <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-1.5 ml-4 focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
              <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm text-slate-700 ml-2 w-48 placeholder-slate-400 font-body-sm py-1" placeholder="Search records, bills..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/notifications_medcore_health')}
              className="p-2 text-slate-600 hover:bg-slate-50 transition-colors rounded-full relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors rounded-full">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div
              onClick={() => navigate('/patient_dashboard_medcore_health')}
              className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ml-4 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 transition-all"
            >
              <img alt="Patient Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5w_p0H8pCOBVz_2BJQrr1ESz3XyQO9JQjDKvEDghYJVyjZnZqFbpqVZMW95XOxohIUVHMopKmEmwkJqoNyXOHa09DX9u3lOZyT0Rf__SL-QT_sqL57UPOC41J-lrs_6nAAHvie1GItDgezUsX6NxQ3NHvZ5LzKJpOBv49x4WwZB09e8J32MPcOHD_CzxRLNzA-a-f0ocsBFKtZAG-EDGmuu6Z2oaUhYQITGKNDmKxPTGvbtOsz3uL0c6HF3eqe6gKCtVutYXIDbXr" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-grid-margin overflow-y-auto">
          <div className="flex justify-between items-end mb-xl">
            <div>
              <h1 className="font-h1 text-h1 text-on-surface mb-2">Billing & Payments</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Manage your invoices, payment methods, and insurance claims.</p>
            </div>
            <button className="bg-surface-container-high hover:bg-surface-dim text-on-surface font-label-md text-label-md py-2 px-4 rounded-lg flex items-center gap-2 transition-colors border border-outline-variant">
              <span className="material-symbols-outlined text-[20px]">download</span>Statement
            </button>
          </div>

          <div className="grid grid-cols-12 gap-grid-gutter">
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-grid-gutter">
              <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E9ECEF] p-lg flex flex-col">
                <div className="flex justify-between items-center mb-md pb-md border-b border-[#E9ECEF]">
                  <h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">receipt_long</span>Pending Invoices
                  </h2>
                  <span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2.5 py-1 rounded-full">2 Action Required</span>
                </div>
                <div className="flex flex-col gap-md">
                  <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-transparent hover:border-outline-variant transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center shrink-0 mt-1">
                        <span className="material-symbols-outlined text-on-error-container">warning</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface">Cardiology Consultation</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Invoice #INV-2023-0891 • Dr. Sarah Jenkins</p>
                        <p className="font-label-sm text-label-sm text-error mt-1">Due: Oct 15, 2023 (Overdue)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-h3 text-h3 text-on-surface">$150.00</div>
                      </div>
                      <button className="bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md py-2 px-6 rounded-lg transition-colors shadow-sm">Pay Now</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-md bg-surface-container-lowest rounded-lg border border-outline-variant hover:border-outline transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 mt-1">
                        <span className="material-symbols-outlined text-on-surface-variant">vaccines</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface">Annual Blood Panel</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Invoice #INV-2023-0904 • Lab Services</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Due: Nov 01, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-h3 text-h3 text-on-surface">$45.00</div>
                      </div>
                      <button className="bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md py-2 px-6 rounded-lg transition-colors shadow-sm">Pay Now</button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E9ECEF] p-lg">
                <div className="flex justify-between items-center mb-md pb-md border-b border-[#E9ECEF]">
                  <h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">credit_card</span>Saved Payment Methods
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="relative p-lg rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden shadow-md">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                      <span className="material-symbols-outlined text-[64px]">contactless</span>
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                      <div className="flex justify-between items-start">
                        <div className="font-label-md text-label-md tracking-wider">VISA</div>
                        <span className="bg-white/20 text-white font-label-sm text-label-sm px-2 py-0.5 rounded backdrop-blur-sm">Default</span>
                      </div>
                      <div>
                        <div className="font-h3 text-h3 tracking-widest mb-1">•••• •••• •••• 4242</div>
                        <div className="flex justify-between text-slate-300 font-body-sm text-body-sm">
                          <span>Cardholder Name</span>
                          <span>Exp: 12/25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex flex-col items-center justify-center p-lg rounded-xl border-2 border-dashed border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors gap-2 text-outline hover:text-primary min-h-[160px]">
                    <span className="material-symbols-outlined text-[32px]">add_circle</span>
                    <span className="font-label-md text-label-md">Add New Payment Method</span>
                  </button>
                </div>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-grid-gutter">
              <section className="bg-primary rounded-xl shadow-md p-lg text-on-primary relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="font-label-md text-label-md text-primary-fixed mb-2 uppercase tracking-wider">Total Outstanding</h3>
                  <div className="font-h1 text-h1 mb-6">$195.00</div>
                  <div className="flex flex-col gap-3">
                    <button className="w-full bg-white text-primary hover:bg-surface-container-lowest font-label-md text-label-md py-3 px-4 rounded-lg transition-colors text-center shadow-sm">Pay Full Balance</button>
                    <button className="w-full bg-transparent border border-primary-fixed text-primary-fixed hover:bg-primary-fixed/10 font-label-md text-label-md py-3 px-4 rounded-lg transition-colors text-center">Set Up Payment Plan</button>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E9ECEF] p-lg flex-1">
                <div className="flex justify-between items-center mb-md pb-md border-b border-[#E9ECEF]">
                  <h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">verified_user</span>Recent Claims
                  </h2>
                </div>
                <div className="flex flex-col gap-lg relative">
                  <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-surface-container-high"></div>
                  <div className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 z-10 border-4 border-white">
                      <span className="material-symbols-outlined text-[16px] text-on-secondary-container">check</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface">Emergency Room Visit</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Claim #CLM-9921 • Aetna</p>
                      <span className="inline-block bg-secondary/10 text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded">Approved - Paid</span>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0 z-10 border-4 border-white">
                      <span className="material-symbols-outlined text-[16px] text-on-primary-container">sync</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface">MRI Scan - Lumbar</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Claim #CLM-9945 • BlueCross</p>
                      <span className="inline-block bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded">In Review</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 text-primary hover:text-primary-container font-label-md text-label-md flex justify-center items-center gap-1">
                  View All Claims
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </section>
            </div>

            <div className="col-span-12">
              <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E9ECEF] overflow-hidden">
                <div className="p-lg border-b border-[#E9ECEF] flex justify-between items-center bg-white">
                  <h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">history</span>Paid History
                  </h2>
                  <div className="flex gap-2">
                    <select className="bg-surface-container-low border-none text-on-surface font-body-sm text-body-sm rounded-md py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-primary">
                      <option>Last 6 Months</option>
                      <option>2023</option>
                      <option>2022</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-outline-variant">
                        <th className="p-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap pl-lg">Date</th>
                        <th className="p-4 font-label-md text-label-md text-on-surface-variant">Description</th>
                        <th className="p-4 font-label-md text-label-md text-on-surface-variant">Provider</th>
                        <th className="p-4 font-label-md text-label-md text-on-surface-variant text-right">Amount</th>
                        <th className="p-4 font-label-md text-label-md text-on-surface-variant text-center">Status</th>
                        <th className="p-4 font-label-md text-label-md text-on-surface-variant text-right pr-lg">Action</th>
                      </tr>
                    </thead>
                    <tbody className="font-body-sm text-body-sm text-on-surface">
                      <tr className="border-b border-[#E9ECEF] hover:bg-surface-container-lowest transition-colors bg-[#F8F9FA]">
                        <td className="p-4 pl-lg whitespace-nowrap">Sep 12, 2023</td>
                        <td className="p-4 font-medium">Physical Therapy Session</td>
                        <td className="p-4 text-on-surface-variant">Rehab Center Inc.</td>
                        <td className="p-4 text-right font-medium">$75.00</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center gap-1 text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>Paid
                          </span>
                        </td>
                        <td className="p-4 text-right pr-lg">
                          <button className="text-primary hover:text-primary-container p-1 rounded hover:bg-surface-container-low transition-colors" title="Download Receipt">
                            <span className="material-symbols-outlined">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#E9ECEF] hover:bg-surface-container-lowest transition-colors bg-white">
                        <td className="p-4 pl-lg whitespace-nowrap">Aug 28, 2023</td>
                        <td className="p-4 font-medium">Prescription Refill</td>
                        <td className="p-4 text-on-surface-variant">Central Pharmacy</td>
                        <td className="p-4 text-right font-medium">$22.50</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center gap-1 text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>Paid
                          </span>
                        </td>
                        <td className="p-4 text-right pr-lg">
                          <button className="text-primary hover:text-primary-container p-1 rounded hover:bg-surface-container-low transition-colors" title="Download Receipt">
                            <span className="material-symbols-outlined">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#E9ECEF] hover:bg-surface-container-lowest transition-colors bg-[#F8F9FA]">
                        <td className="p-4 pl-lg whitespace-nowrap">Jul 05, 2023</td>
                        <td className="p-4 font-medium">General Checkup</td>
                        <td className="p-4 text-on-surface-variant">Dr. Emily Chen</td>
                        <td className="p-4 text-right font-medium">$120.00</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center gap-1 text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>Paid
                          </span>
                        </td>
                        <td className="p-4 text-right pr-lg">
                          <button className="text-primary hover:text-primary-container p-1 rounded hover:bg-surface-container-low transition-colors" title="Download Receipt">
                            <span className="material-symbols-outlined">download</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 text-center border-t border-[#E9ECEF] bg-white">
                  <button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">Load More History</button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
