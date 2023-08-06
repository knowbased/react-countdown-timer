import { useCountdown } from '@/hooks/useCountdown';
import { useEffect, useState } from 'react';
import ShowCounter from './showCounter';
import TimerForm from './timerForm';
import { hstack, vstack } from '@styled-system/patterns';

interface CountdownTimerProps {
  initialTime?: number;
}

const CountdownTimer = ({ initialTime = 0 }: CountdownTimerProps) => {
  const [time, setTime] = useState(initialTime);
  const [timerStarted, setTimerStarted] = useState(false);

  const newTime = useCountdown(time);

  useEffect(() => {
    setTime(newTime);
  }, [newTime]);

  const showResetButton = time > 0;

  const resetTimer = () => {
    setTime(initialTime);
    setTimerStarted(false);
  };

  return (
    <div className={vstack({ gap: '8' })}>
      {timerStarted ? (
        <>
          <ShowCounter time={time} />
          <div className={hstack({ justify: 'space-around', width: '100%' })}>
            <button onClick={() => setTimerStarted(false)}>Stop Timer</button>
            {showResetButton && <button onClick={resetTimer}>Reset Timer</button>}
          </div>
        </>
      ) : (
        <div className={vstack({ gap: '8' })}>
          <TimerForm time={time} onUpdate={setTime} />
          <button onClick={() => setTimerStarted(true)}>Start Timer</button>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
