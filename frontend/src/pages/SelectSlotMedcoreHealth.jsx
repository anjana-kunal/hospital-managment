import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS_OF_WEEK = ['Su','Mo','Tu','We','Th','Fr','Sa'];

const TIME_SLOTS = {
  Morning: ['09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM'],
  Afternoon: ['01:00 PM','01:30 PM','02:00 PM','03:30 PM'],
};
const UNAVAILABLE = ['09:30 AM'];

function buildCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevMonthDays - i, current: false });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, current: true });
  while (cells.length % 7 !== 0) cells.push({ day: cells.length - firstDay - daysInMonth + 1, current: false });
  return cells;
}

export default function SelectSlotMedcoreHealth() {
  const navigate = useNavigate();
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [visitType, setVisitType] = useState('virtual');
  const [reason, setReason] = useState('');
  const [interpreterNeeded, setInterpreterNeeded] = useState(false);

  const cells = buildCalendar(currentYear, currentMonth);

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
    setSelectedDay(null); setSelectedTime(null);
  }
  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
    setSelectedDay(null); setSelectedTime(null);
  }

  const selectedDateLabel = selectedDay
    ? `${MONTHS[currentMonth].slice(0,3)} ${selectedDay}`
    : 'Not selected';
  const selectedDateFull = selectedDay
    ? `${MONTHS[currentMonth]} ${selectedDay}, ${currentYear}`
    : 'Not selected';

  function handleConfirm() {
    if (selectedDay && selectedTime) {
      navigate('/booking_confirmed_medcore_health');
    }
  }

  const canConfirm = selectedDay && selectedTime;

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex">
      <nav className="fixed left-0 top-0 h-full flex flex-col p-4 w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-manrope text-sm font-medium transition-all duration-200 z-10">
        <div className="mb-8 px-4 mt-4 flex flex-col items-start">
          <div className="h-12 w-12 rounded-full overflow-hidden mb-3 border-2 border-primary-fixed">
            <img alt="Patient Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1tYvfPFzvhlFzxyFh-gbdMYA0a50PF3mpI381QczKijWtqqBL5ZvidBMm87BuJ5AcFKnqMOrZbCIQepXFFWVHF2lbuMPmbwrPNlHC5NSgQjDIdt8oF8klXDSXWQzhbJJuFLMqVvBcoleFTr28w8dt52OXIS9p3jByC5s5Wt--RJ7Rkop4Lyc6zkbaRwd1q-XgDEs4GeTrr-2EyV_2eGNfe-ktN-bmEAw_tEYe6jeqlcMd3M3Bzrc9k7OeL7icWVB4B2r-FndijSz2" />
          </div>
          <div className="font-h3 text-h3 text-on-surface leading-tight">Alex Johnson</div>
          <div className="font-label-sm text-label-sm text-outline mt-1">Patient ID: #MC-9842</div>
        </div>
        <ul className="flex flex-col gap-2 w-full">
          <li>
            <Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg" to="/patient_dashboard_medcore_health">
              <span className="material-symbols-outlined">dashboard</span>Dashboard
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg px-4 py-3" to="/my_appointments_medcore_health">
              <span className="material-symbols-outlined">calendar_month</span>Appointments
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg" to="/medical_records_medcore_health">
              <span className="material-symbols-outlined">folder_shared</span>Records
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg" to="/billing_payments_medcore_health">
              <span className="material-symbols-outlined">payments</span>Billing
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg" to="/settings_medcore_health">
              <span className="material-symbols-outlined">settings</span>Settings
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg" to="/login_medcore_health">
              <span className="material-symbols-outlined">logout</span>Logout
            </Link>
          </li>
        </ul>
      </nav>

      <main className="ml-64 flex-1 p-grid-margin w-full max-w-[1400px] mx-auto">
        <header className="mb-lg flex justify-between items-end">
          <div>
            <h1 className="font-h2 text-h2 text-on-surface">Book an Appointment</h1>
            <p className="font-body-md text-body-md text-outline mt-xs">Select a date and time for your consultation.</p>
          </div>
          <button
            onClick={() => navigate('/search_doctors_medcore_health')}
            className="text-outline hover:text-on-surface transition-colors flex items-center gap-sm font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Directory
          </button>
        </header>

        <div className="grid grid-cols-12 gap-grid-gutter">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {/* Calendar Card */}
              <div className="bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 flex flex-col">
                <div className="flex items-center justify-between mb-md pb-sm border-b border-surface-variant">
                  <h2 className="font-h3 text-h3 text-on-surface text-[20px]">Select Date</h2>
                  <div className="flex items-center gap-sm text-on-surface font-label-md text-label-md">
                    <button
                      onClick={prevMonth}
                      className="h-8 w-8 rounded-full hover:bg-surface-container flex items-center justify-center text-outline transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    {MONTHS[currentMonth]} {currentYear}
                    <button
                      onClick={nextMonth}
                      className="h-8 w-8 rounded-full hover:bg-surface-container flex items-center justify-center text-outline transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-outline mb-sm">
                  {DAYS_OF_WEEK.map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm">
                  {cells.map((cell, i) => {
                    if (!cell.current) {
                      return <div key={i} className="py-2 text-outline-variant">{cell.day}</div>;
                    }
                    const isSelected = selectedDay === cell.day;
                    return (
                      <div
                        key={i}
                        onClick={() => { setSelectedDay(cell.day); setSelectedTime(null); }}
                        className={`py-2 cursor-pointer rounded-full w-8 h-8 mx-auto flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-primary text-on-primary font-label-md shadow-sm'
                            : 'hover:bg-surface-container text-on-surface'
                        }`}
                      >
                        {cell.day}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Card */}
              <div className="bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 flex flex-col h-full">
                <div className="flex items-center justify-between mb-md pb-sm border-b border-surface-variant">
                  <h2 className="font-h3 text-h3 text-on-surface text-[20px]">Available Times</h2>
                  <span className="font-label-sm text-label-sm text-primary bg-primary-fixed-dim/20 px-2 py-1 rounded">
                    {selectedDay ? selectedDateLabel : 'No date selected'}
                  </span>
                </div>
                {!selectedDay ? (
                  <div className="flex-1 flex items-center justify-center text-on-surface-variant font-body-sm text-body-sm text-center">
                    <div>
                      <span className="material-symbols-outlined text-[40px] text-outline mb-2 block">calendar_today</span>
                      Select a date to see available times
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-sm overflow-y-auto pr-2" style={{maxHeight:'220px'}}>
                    {Object.entries(TIME_SLOTS).map(([period, slots]) => (
                      <React.Fragment key={period}>
                        <div className="col-span-full font-label-sm text-label-sm text-outline mt-xs mb-1">{period}</div>
                        {slots.map(slot => {
                          const isUnavailable = UNAVAILABLE.includes(slot);
                          const isSelected = selectedTime === slot;
                          if (isUnavailable) {
                            return (
                              <button key={slot} disabled className="border border-outline-variant rounded-DEFAULT py-2 px-3 text-center text-outline-variant font-body-sm text-body-sm bg-surface-container cursor-not-allowed line-through">
                                {slot}
                              </button>
                            );
                          }
                          return (
                            <button
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`border rounded-DEFAULT py-2 px-3 text-center font-body-sm text-body-sm transition-colors ${
                                isSelected
                                  ? 'border-2 border-primary bg-primary-fixed text-on-primary-fixed font-label-md shadow-[0_0_0_2px_rgba(0,91,191,0.1)]'
                                  : 'border-outline-variant hover:border-primary bg-surface-container-lowest text-on-surface'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Intake Form Card */}
            <div className="bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 mt-xs">
              <h2 className="font-h3 text-h3 text-on-surface text-[20px] mb-md pb-sm border-b border-surface-variant">Consultation Details</h2>
              <form className="flex flex-col gap-md" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-sm">Consultation Type</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        className="form-radio text-primary border-outline-variant focus:ring-primary w-5 h-5"
                        name="visitType" type="radio" value="inperson"
                        checked={visitType === 'inperson'}
                        onChange={() => setVisitType('inperson')}
                      />
                      <span className="font-body-md text-body-md text-on-surface flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px] text-outline">business</span>
                        In-person Visit
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        className="form-radio text-primary border-primary focus:ring-primary w-5 h-5"
                        name="visitType" type="radio" value="virtual"
                        checked={visitType === 'virtual'}
                        onChange={() => setVisitType('virtual')}
                      />
                      <span className="font-body-md text-body-md text-on-surface flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px] text-primary">videocam</span>
                        Virtual Telehealth
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-sm">
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="reason">
                    Reason for Visit <span className="text-error">*</span>
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-outline"
                    id="reason" rows="3"
                    placeholder="Briefly describe your symptoms or reason for consultation..."
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                  />
                </div>
                <div className="mt-xs">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      className="form-checkbox text-primary border-outline-variant focus:ring-primary w-5 h-5 mt-0.5 rounded-sm"
                      type="checkbox"
                      checked={interpreterNeeded}
                      onChange={e => setInterpreterNeeded(e.target.checked)}
                    />
                    <div>
                      <span className="block font-label-md text-label-md text-on-surface">Require interpreter services</span>
                      <span className="block font-body-sm text-body-sm text-outline">Our staff will contact you to arrange translation.</span>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Summary Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-grid-margin bg-surface-container-lowest rounded-xl shadow-level-1 p-lg border border-outline-variant/30 flex flex-col gap-md">
              <h3 className="font-h3 text-h3 text-on-surface text-[20px] mb-xs">Booking Summary</h3>
              <div className="flex items-center gap-md bg-surface p-sm rounded-lg border border-surface-variant">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-surface-dim flex-shrink-0">
                  <img alt="Dr. Sarah Jenkins" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1u7S1md2xGxXLn6O2b8HBVKgsyVKdI5qukJUwg3q14-0-sljAHduMEOFsotfqYchvmDpUiYojqP9IaStukfz6ZRwl4PFNMJQwuqratQ6Uk5WntyGNXCcQ_8AigS7jLv4WoglqifPU6Fd4v8FmUHpI4lvtpmS7tmIfoPKJoajvjY0HkuyV1jgQa62_M8LX8UleFYOP-0m1Q4aW9d33K_AO6yLm5W5n6kY-c1xL9bAfR5V0yfVF5Z7u8CXTeqFYp37DLGc3GTZy8WRK" />
                </div>
                <div>
                  <div className="font-h3 text-h3 text-on-surface text-[18px] leading-tight">Dr. Sarah Jenkins</div>
                  <div className="font-body-sm text-body-sm text-outline mt-0.5">Cardiology Specialist</div>
                </div>
              </div>
              <hr className="border-surface-variant my-xs" />
              <ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface">
                <li className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-outline">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    <span>Date</span>
                  </div>
                  <span className={`font-label-md text-label-md text-right ${!selectedDay ? 'text-outline' : ''}`}>
                    {selectedDateFull}
                  </span>
                </li>
                <li className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-outline">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                    <span>Time</span>
                  </div>
                  <span className={`font-label-md text-label-md text-right ${!selectedTime ? 'text-outline' : ''}`}>
                    {selectedTime ? `${selectedTime} (EST)` : 'Not selected'}
                  </span>
                </li>
                <li className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-outline">
                    <span className="material-symbols-outlined text-[20px]">videocam</span>
                    <span>Type</span>
                  </div>
                  <span className="font-label-md text-label-md text-right">
                    {visitType === 'virtual' ? 'Virtual Telehealth' : 'In-person Visit'}
                  </span>
                </li>
              </ul>
              <div className="bg-surface-container-low p-md rounded-lg mt-sm flex justify-between items-center border border-surface-variant">
                <span className="font-body-md text-body-md text-on-surface">Consultation Fee</span>
                <span className="font-h3 text-h3 text-primary text-[20px]">$150.00</span>
              </div>
              <button
                onClick={handleConfirm}
                disabled={!canConfirm}
                className={`w-full font-label-md text-label-md py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 mt-sm ${
                  canConfirm
                    ? 'bg-primary hover:bg-primary/90 text-on-primary cursor-pointer'
                    : 'bg-outline-variant text-on-surface-variant cursor-not-allowed opacity-60'
                }`}
              >
                Confirm Booking
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              {!canConfirm && (
                <p className="text-center font-body-sm text-body-sm text-outline mt-xs">
                  {!selectedDay ? 'Please select a date' : 'Please select a time slot'}
                </p>
              )}
              {canConfirm && (
                <p className="text-center font-body-sm text-body-sm text-outline mt-xs">
                  You will not be charged until the appointment is completed.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
