import { useState, useEffect } from 'react';

const useCountdown = (time: number): [number, number, number, number] => {
  const [countDown, setCountDown] = useState<number>(time);
  const [isRunning, setIsRunning] = useState<boolean>(false); // Update to false initially

  useEffect(() => {
    let interval: number;

    if (isRunning && countDown > 0) {
      // Only start the countdown when isRunning is true and countDown is positive
      interval = setInterval(() => {
        setCountDown((prevTime) => Math.max(0, prevTime - 1000));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, countDown]); // Add isRunning and countDown as dependencies for the useEffect

  useEffect(() => {
    if (time > 0) {
      // Reset the countdown when the time prop changes and is greater than 0
      setCountDown(time);
      setIsRunning(true);
    } else {
      setIsRunning(false); // Stop the countdown if time is 0 or negative
    }
  }, [time]); // Add time as a dependency for this useEffect

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
