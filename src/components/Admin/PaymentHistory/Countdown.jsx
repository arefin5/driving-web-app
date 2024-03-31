import { useEffect, useState } from 'react';

const Countdown = ({ expirationDate }) => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    // Function to calculate remaining time
    const calculateRemainingTime = () => {
      const now = new Date().getTime();
      const expirationTime = new Date(expirationDate).getTime();
      const difference = expirationTime - now;

      if (difference <= 0) {
        setRemainingTime('Subscription expired');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    // Update remaining time every second
    const interval = setInterval(calculateRemainingTime, 1000);

    // Clean up interval
    return () => clearInterval(interval);
  }, [expirationDate]);

  return (
    <p className="text-[15px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text">
   
      <span style={{ color: 'red' }}>
        {remainingTime}
      </span>
    </p>
  );
};

export default Countdown;
