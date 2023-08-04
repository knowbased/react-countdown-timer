import { useCountdown } from '@/hooks/useCountdown';
import { useState } from 'react';
import ShowCounter from './showCounter';
import TimerForm from './timerForm';

interface CountdownTimerProps {
  initialTime?: number;
}

const CountdownTimer = ({ initialTime = 0 }: CountdownTimerProps) => {
  const [time, setTime] = useState(initialTime);
  const [timerStarted, setTimerStarted] = useState(false);

  const [days, hours, minutes, seconds] = useCountdown(time);

  return (
    <div>
      {timerStarted ? (
        <>
          <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
          <button onClick={() => setTimerStarted(false)}>Stop Timer</button>
        </>
      ) : (
        <>
          <TimerForm time={time} onUpdate={setTime} />
          <button onClick={() => setTimerStarted(true)}>Start Timer</button>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
