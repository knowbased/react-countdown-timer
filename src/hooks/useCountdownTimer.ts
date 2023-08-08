import { useState, useEffect } from 'react';
import { useCountdown } from './useCountdown';

function useCountdownTimer(initialTime = 0) {
  const [time, setTime] = useState(initialTime);
  const [timerStarted, setTimerStarted] = useState(false);

  const newTime = useCountdown(time);

  useEffect(() => {
    setTime(newTime);
  }, [newTime]);

  const startTimer = () => {
    setTimerStarted(true);
  };

  const stopTimer = () => {
    setTimerStarted(false);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setTimerStarted(false);
  };

  return {
    time,
    setTime,
    timerStarted,
    startTimer,
    stopTimer,
    resetTimer,
  };
}

export default useCountdownTimer;
