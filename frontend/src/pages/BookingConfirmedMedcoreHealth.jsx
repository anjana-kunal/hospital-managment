import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingConfirmedMedcoreHealth() {
  const navigate = useNavigate();

  function handleAddToCalendar(type) {
    const title = encodeURIComponent('Appointment with Dr. Sarah Jenkins');
    const details = encodeURIComponent('Cardiology Specialist - MedCore Health');
    const location = encodeURIComponent('General Hospital, Building B, Room 402');
    const start = '20241012T103000';
    const end = '20241012T111500';

    if (type === 'google') {
      window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`, '_blank');
    } else {
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${decodeURIComponent(title)}`,
        `DESCRIPTION:${decodeURIComponent(details)}`,
        `LOCATION:${decodeURIComponent(location)}`,
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\n');
      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'appointment.ics';
      a.click();
      URL.revokeObjectURL(url);
    }
  }

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/30 overflow-hidden relative">
        <div className="h-2 w-full bg-secondary"></div>
        <div className="p-8 flex flex-col items-center text-center">
          <div className="mb-6 h-20 w-20 rounded-full bg-secondary-container/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-[48px] text-secondary" style={{fontVariationSettings:"'FILL' 1"}}>
              check_circle
            </span>
          </div>
          <h1 className="font-h2 text-h2 text-on-surface mb-2">Appointment Confirmed!</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-sm">
            Your booking has been successfully scheduled. We have sent the details to your registered email.
          </p>

          <div className="w-full bg-surface-container-low rounded-lg border border-outline-variant/50 p-6 mb-8 text-left">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-outline-variant/40">
              <img
                alt="Doctor Avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-surface-container-lowest shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYuF8kvjGNMLU9XEWJnpGM-5KASrN62f9H6CGDKGLxo6QYf0TX1kuXLl2oFxTr2tCRNFUpfLaqRN6xjXGSC5zviGCqnPy6Ai9X87BGXShtPKfL6rMeJykLaD1Jpy5CI61uNeIYLTQD11NIMfdx6-RNS5nLIExsJZ9LnimOMqf2yEJDdEt1EqfJg9zf76ytY54TeO4MinPslShEACBg1wCOe85Q-G4VZSkk03H-xQK1MFFk2jmYM3LUOkHCVFBhapGMfkOrCwZ-rfDJ"
              />
              <div>
                <h3 className="font-h3 text-[20px] leading-tight text-on-surface mb-1">Dr. Sarah Jenkins</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Cardiology Specialist</p>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">calendar_month</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface mb-0.5">Oct 12, 2024</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">10:30 AM - 11:15 AM (EST)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface mb-0.5">General Hospital</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Building B, Room 402<br />124 Medical Way, Metro City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button
              onClick={() => handleAddToCalendar('google')}
              className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-colors py-3.5 px-6 rounded-lg font-label-md text-label-md"
            >
              <span className="material-symbols-outlined text-[20px]">event</span>
              Add to Google Calendar
            </button>
            <div className="grid grid-cols-2 gap-3 w-full">
              <button
                onClick={() => handleAddToCalendar('ical')}
                className="w-full flex items-center justify-center gap-2 bg-transparent border border-outline text-on-surface hover:bg-surface-container transition-colors py-3 px-4 rounded-lg font-label-md text-label-md"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                Add to iCal
              </button>
              <button
                onClick={() => navigate('/my_appointments_medcore_health')}
                className="w-full flex items-center justify-center gap-2 bg-transparent border border-outline/30 text-primary hover:bg-primary-fixed/50 transition-colors py-3 px-4 rounded-lg font-label-md text-label-md"
              >
                <span className="material-symbols-outlined text-[20px]">list_alt</span>
                View Appointments
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
