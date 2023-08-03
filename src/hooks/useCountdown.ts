import { useEffect, useState } from 'react';

const useCountdown = (time: number): [number, number, number, number] => {
  const [countDown, setCountDown] = useState<number>(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const calculateTimeLeft = (countDown: number): [number, number, number, number] => {
    // calculate time left
    const days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  return calculateTimeLeft(countDown);
};

export { useCountdown };
