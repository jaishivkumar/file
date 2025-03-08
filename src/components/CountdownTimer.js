import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Initial state: 1412 hours
  const [hours, setHours] = useState(1412);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    // Timer logic to decrease by 1 minute every 60 seconds
    const timer = setInterval(() => {
      if (minutes === 0) {
        if (hours === 0) {
          // Timer reaches 0, stop the countdown
          clearInterval(timer);
        } else {
          // Decrease hours and reset minutes to 59
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
        }
      } else {
        // Decrease minutes by 1
        setMinutes((prevMinutes) => prevMinutes - 1);
      }
    }, 60000); // 60000ms = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [hours, minutes]);

  // Format hours and minutes to always show 4 digits for hours and 2 digits for minutes
  const formattedHours = String(hours).padStart(4, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  // Split hours and minutes into individual digits
  const hoursDigits = formattedHours.split('');
  const minutesDigits = formattedMinutes.split('');

  return (
    <div className="d-flex align-items-center  text-white rounded shadow">
      {/* Hours digits */}
      <div className="bg-black text-white fw-bold text-center mx-1 p-2 rounded" style={{ width: '40px', height: '50px', fontFamily: 'Courier New, monospace' }}>
        {hoursDigits[0]}
      </div>
      <div className="bg-black text-white fw-bold text-center mx-1 p-2 rounded" style={{ width: '40px', height: '50px', fontFamily: 'Courier New, monospace' }}>
        {hoursDigits[1]}
      </div>
      {/* <div className="bg-black text-white fw-bold text-center mx-1 p-2 rounded" style={{ width: '40px', height: '50px', fontFamily: 'Courier New, monospace' }}>
        {hoursDigits[2]}
      </div>
      <div className="bg-black text-white fw-bold text-center mx-1 p-2 rounded" style={{ width: '40px', height: '50px', fontFamily: 'Courier New, monospace' }}>
        {hoursDigits[3]}
      </div> */}

      {/* Separator */}
      <span className="mx-2 fs-4">:</span>

      {/* Minutes digits */}
      <div className="bg-black text-white fw-bold text-center mx-1 p-2 rounded" style={{ width: '40px', height: '50px', fontFamily: 'Courier New, monospace' }}>
        {minutesDigits[0]}
      </div>
      <div className="bg-black text-white fw-bold text-center mx-1 p-2 rounded" style={{ width: '40px', height: '50px', fontFamily: 'Courier New, monospace' }}>
        {minutesDigits[1]}
      </div>

      {/* Label */}
      <div className="ms-3 fw-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
        DAYS <br/>  <br/> LEFT
      </div>
    </div>
  );
};

export default CountdownTimer;