import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-10-10T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {[
        { value: timeLeft.days, label: 'DAYS' },
        { value: timeLeft.hours, label: 'HOURS' },
        { value: timeLeft.minutes, label: 'MINUTES' },
        { value: timeLeft.seconds, label: 'SECONDS' },
      ].map((item, idx) => (
        <div
          key={item.label}
          className="countdown-item border-2 border-teal-800 rounded-lg bg-black/60 flex flex-col items-center justify-center min-w-[150px] min-h-[120px] md:min-w-[200px] md:min-h-[140px] p-4 md:p-6"
        >
          <div className="text-5xl md:text-6xl font-extrabold text-white mb-1 md:mb-2 leading-none">{item.value}</div>
          <div className="text-white text-base md:text-lg font-semibold tracking-widest uppercase opacity-90">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown; 