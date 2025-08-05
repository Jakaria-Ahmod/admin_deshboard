import React, { useEffect } from 'react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dates = Array.from({ length: 31 }, (_, i) => i + 1);

const Calender = () => {
  const today = new Date().getDate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        August 2025
      </h2>

      <div className="grid grid-cols-7 gap-4 text-center font-medium text-gray-600 mb-4">
        {days.map((day, index) => (
          <div key={index} className="uppercase text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-4 text-center text-gray-800">
        {/* Dummy empty boxes for offset (e.g., August 1st starts on Friday, so need 5 blanks) */}
        {[...Array(4)].map((_, i) => (
          <div key={`blank-${i}`} />
        ))}

        {dates.map(date => (
          <div
            key={date}
            className={`py-3 rounded-lg border text-sm ${
              date === today
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-white border-gray-200 hover:bg-gray-100'
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
