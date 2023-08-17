import { useState } from 'react';
import { useBoolean, useInterval } from 'react-use';

function useCountdownTimer(initialTime = 0) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, toggleIsRunning] = useBoolean(false);

  useInterval(
    () => {
      setTime(Math.max(0, time - 1000));
    },
    isRunning ? 1000 : null,
  );

  const startTimer = () => {
    if (time > 0) {
      toggleIsRunning(true);
    }
  };

  const resetTimer = () => {
    setTime(initialTime);
    toggleIsRunning(true);
  };

  const stopTimer = () => {
    toggleIsRunning(false);
  };

  const updateTime = (newTime: number) => {
    setTime(newTime);
  };

  return {
    time,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    updateTime,
  };
}

export default useCountdownTimer;
