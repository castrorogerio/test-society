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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div className="countdown-item border-2 border-teal-800 rounded-lg p-6 backdrop-blur-sm bg-black/20">
        <div className="text-4xl md:text-6xl font-bold mb-2 text-white">{timeLeft.days}</div>
        <p className="text-white opacity-80">DAYS</p>
      </div>
      <div className="countdown-item border-2 border-teal-800 rounded-lg p-6 backdrop-blur-sm bg-black/20">
        <div className="text-4xl md:text-6xl font-bold mb-2 text-white">{timeLeft.hours}</div>
        <p className="text-white opacity-80">HOURS</p>
      </div>
      <div className="countdown-item border-2 border-teal-800 rounded-lg p-6 backdrop-blur-sm bg-black/20">
        <div className="text-4xl md:text-6xl font-bold mb-2 text-white">{timeLeft.minutes}</div>
        <p className="text-white opacity-80">MINUTES</p>
      </div>
      <div className="countdown-item border-2 border-teal-800 rounded-lg p-6 backdrop-blur-sm bg-black/20">
        <div className="text-4xl md:text-6xl font-bold mb-2 text-white">{timeLeft.seconds}</div>
        <p className="text-white opacity-80">SECONDS</p>
      </div>
    </div>
  );
};

export default Countdown; 