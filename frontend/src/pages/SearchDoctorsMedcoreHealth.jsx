import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ALL_DOCTORS = [
  {
    id: 1, name: 'Dr. Robert Chen', specialty: 'Internal Medicine', rating: '4.8', reviews: 124,
    exp: '12 yrs', hospital: 'MedCore Central Hospital', location: 'Floor 3, Wing A - Downtown',
    next: 'Tomorrow, 10:00 AM', nextColor: 'text-secondary', fee: '$100',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-CBmxmyvCufTlPD9uF9Sx43iIfGGQCIHkZSrcXiCNobcLytiOWdrOPCansK6pczkIOiz3WIiv9bD-RYdD7QPGwfGme3NBairwTEL5SDmETJ_De09CQ8b9ZeXCgKl0yohDAASzqljdre7wRyPa7HRs2w9WliGOs-Le14lMo1wCovgl8fMtHg-c9xfeGCWEe---CIyY-ugNs64u1kT5ixQMjF_WQesRv-GrNdNUt1s4oZBpdytU4WuMLEaKLvSjStqSBGYkXWa7zkEy',
    hasVideo: true,
  },
  {
    id: 2, name: 'Dr. Sarah Jenkins', specialty: 'Cardiology', rating: '4.9', reviews: 210,
    exp: '15 yrs', hospital: 'Heart & Vascular Institute', location: 'Building B, Level 2 - Westside',
    next: 'Today, 2:30 PM', nextColor: 'text-tertiary-container', fee: '$150',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_hGGomS7Wzmkl_KJ31HIBF8j9W6ClReVGYIAkQfPirPyqSJ8yD3atRkcLf4Q2FVuIP9kyg1BVHMSq_KvDzhNDHOJnxnCqm1O7sp2Jxqcvg-9mOh_N2jXhQH_6DHj-_aquFZXybaJRsWLjUTcFK6yN5ihOuCKTMwg0E4KrvtCMDWxVaFUJfxCw6OFtuor477eTNkcHgtN7J1MTsJu5ckCyQg9nUyxEp_UiCmgxz03Trjt1kH9Wa5wCE_LuWZnGWE7fQXTxAYgvXgQ',
    hasVideo: false,
  },
  {
    id: 3, name: 'Dr. Michael Torres', specialty: 'Neurology', rating: '4.7', reviews: 89,
    exp: '8 yrs', hospital: 'NeuroCare Center', location: 'Suite 400 - North Park',
    next: 'Thursday, 9:15 AM', nextColor: 'text-on-surface', fee: '$120',
    img: null,
    hasVideo: true,
  },
];

export default function SearchDoctorsMedcoreHealth() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [availability, setAvailability] = useState('Any Date');
  const [timeOfDay, setTimeOfDay] = useState('Any Time');
  const [consultType, setConsultType] = useState('All Types');
  const [sortBy, setSortBy] = useState('Recommended');

  const filtered = ALL_DOCTORS.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.hospital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-background text-on-background font-body-md text-body-md h-screen flex overflow-hidden">
      <nav className="hidden md:flex h-screen w-64 border-r border-outline-variant bg-surface-container-low font-label-md text-label-md flex-col p-4 fixed left-0 top-0 z-40">
        <div className="mb-xl px-4 mt-sm">
          <h2 className="font-h3 text-h3 text-primary mb-sm">MedCore HMS</h2>
        </div>
        <div className="flex-1 space-y-sm">
          <Link className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all" to="/patient_dashboard_medcore_health">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 bg-primary-fixed-dim/30 text-primary rounded-lg px-4 py-3" to="/my_appointments_medcore_health">
            <span className="material-symbols-outlined text-xl" style={{fontVariationSettings:"'FILL' 1"}}>calendar_month</span>
            <span>Appointments</span>
          </Link>
          <Link className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all" to="/medical_records_medcore_health">
            <span className="material-symbols-outlined text-xl">folder_shared</span>
            <span>Records</span>
          </Link>
          <Link className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all" to="/billing_payments_medcore_health">
            <span className="material-symbols-outlined text-xl">payments</span>
            <span>Billing</span>
          </Link>
          <Link className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant rounded-lg transition-all" to="/settings_medcore_health">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span>Settings</span>
          </Link>
        </div>
        <div className="mt-auto border-t border-outline-variant pt-4 flex items-center gap-3 px-2">
          <img alt="Patient Profile" className="w-10 h-10 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJqhiI1dugi9mu4EKWsyDzdUswo62UHMm0YBiK5SssV_qIn4j27x6POhz6MiC0Zy0UrK4gBEM_Llo5-q6CwGvr6M36CKO-7CkF78oJOGSXlUXjXY9saymuQ-9N7ZaHgK6b1Vro-LMYo1sxYGNqC-OM9Bffw0oaUiskwt_ns8DtDp_aocbzxhQydQJN0AWMyP1pzrRgZGnyDP0mFXSDC8d6a6SfFkKB5FFxRU52rXlT3AD_d2cvf090KYC6" />
          <div>
            <p className="font-label-md text-label-md text-on-surface">Alex Johnson</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Patient ID: #MC-9842</p>
          </div>
        </div>
      </nav>

      <main className="flex-1 md:ml-64 bg-background overflow-y-auto w-full">
        <header className="bg-surface border-b border-surface-variant sticky top-0 z-30 px-lg py-md flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div>
            <h1 className="font-h2 text-h2 text-on-surface">Find a Doctor</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Book your next consultation with our top specialists.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-surface-variant text-on-surface px-4 py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-dim transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history</span> History
            </button>
          </div>
        </header>

        <section className="p-lg lg:p-xl max-w-7xl mx-auto space-y-md">
          <div className="bg-surface shadow-level-1 rounded-lg p-lg border border-surface-variant">
            <div className="relative w-full mb-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline">search</span>
              </div>
              <input
                className="block w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-outline"
                placeholder="Search by specialty, doctor name, hospital, or condition..."
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button
                  onClick={() => {}}
                  className="bg-primary-container text-on-primary-container px-6 py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container/90 transition-colors h-full my-1 mr-1"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="relative">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-1">Availability</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">event</span>
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-2.5 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:bg-surface focus:border-primary appearance-none cursor-pointer"
                    value={availability} onChange={e => setAvailability(e.target.value)}
                  >
                    <option>Any Date</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>This Week</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-1">Time of Day</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">schedule</span>
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-2.5 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:bg-surface focus:border-primary appearance-none cursor-pointer"
                    value={timeOfDay} onChange={e => setTimeOfDay(e.target.value)}
                  >
                    <option>Any Time</option>
                    <option>Morning (8AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-1">Consultation Type</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">medical_services</span>
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-2.5 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:bg-surface focus:border-primary appearance-none cursor-pointer"
                    value={consultType} onChange={e => setConsultType(e.target.value)}
                  >
                    <option>All Types</option>
                    <option>In-Person Visit</option>
                    <option>Video Consultation</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end pb-sm pt-md border-b border-surface-variant">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Showing <span className="font-bold text-on-surface">{filtered.length}</span> doctor{filtered.length !== 1 ? 's' : ''} available
            </p>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Sort by:</span>
              <select
                className="bg-transparent border-none font-label-md text-label-md text-primary cursor-pointer p-0 focus:ring-0"
                value={sortBy} onChange={e => setSortBy(e.target.value)}
              >
                <option>Recommended</option>
                <option>Highest Rated</option>
                <option>Earliest Available</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg pb-xl">
            {filtered.map(doc => (
              <div key={doc.id} className="bg-surface rounded-xl shadow-level-1 border border-surface-variant overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="p-md flex items-start gap-4 border-b border-surface-variant/50">
                  <div className="relative">
                    {doc.img ? (
                      <img alt={doc.name} className="w-20 h-20 rounded-full object-cover border-2 border-surface-variant" src={doc.img} />
                    ) : (
                      <div className="w-20 h-20 rounded-full border-2 border-surface-variant bg-surface-container flex items-center justify-center text-outline">
                        <span className="material-symbols-outlined text-3xl">person</span>
                      </div>
                    )}
                    {doc.img && (
                      <div className="absolute bottom-0 right-0 bg-secondary text-on-secondary rounded-full w-5 h-5 flex items-center justify-center border-2 border-surface">
                        <span className="material-symbols-outlined text-[10px]" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-h3 text-body-lg font-bold text-on-surface">{doc.name}</h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium">{doc.specialty}</p>
                    <div className="flex items-center gap-3 mt-2 font-label-sm text-label-sm text-on-surface-variant">
                      <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                        <span className="material-symbols-outlined text-tertiary-container text-sm" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                        <span className="font-bold text-on-surface">{doc.rating}/5</span>
                        <span>({doc.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">work</span>
                        <span>{doc.exp} exp.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-md flex-1 flex flex-col gap-3 bg-surface-bright">
                  <div className="flex items-start gap-2 font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-outline mt-0.5 text-base">location_on</span>
                    <div>
                      <p className="text-on-surface font-medium">{doc.hospital}</p>
                      <p className="text-on-surface-variant">{doc.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Next Available</span>
                      <span className={`font-label-md text-label-md ${doc.nextColor}`}>{doc.next}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Consultation Fee</span>
                      <span className="font-h3 text-body-lg text-on-surface">{doc.fee}</span>
                    </div>
                  </div>
                </div>
                <div className="p-md pt-0 bg-surface-bright flex gap-2">
                  <button
                    onClick={() => navigate('/select_slot_medcore_health')}
                    className="flex-1 bg-primary-container text-on-primary-container py-2.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container/90 transition-colors shadow-sm"
                  >
                    Book Now
                  </button>
                  {doc.hasVideo && (
                    <button className="px-3 py-2.5 border border-outline text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">videocam</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-16 text-on-surface-variant">
                <span className="material-symbols-outlined text-[48px] text-outline block mb-2">search_off</span>
                No doctors found matching your search.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
