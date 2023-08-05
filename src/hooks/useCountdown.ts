import { useState, useEffect, useRef } from 'react';

const useCountdown = (initialTime: number): number => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(initialTime > 0);

  const intervalRef = useRef<number>();

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(0, prevTime - 1000));
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  useEffect(() => {
    if (initialTime > 0) {
      setTimeLeft(initialTime);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [initialTime]);

  return timeLeft;
};

export { useCountdown };
