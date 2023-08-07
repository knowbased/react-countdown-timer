import { useEffect, useRef, useState } from 'react';
import { hstack, vstack } from '@styled-system/patterns';

import ShowCounter from './showCounter';
import TimerForm from './timerForm';

import { useCountdown } from '@/hooks/useCountdown';
import alarmSound from '@assets/IPhone “Radar” alarm sound effect.mp3';

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

  useEffect(() => {
    if (newTime === 0 && timerStarted) {
      audioRef.current.play();
      audioRef.current.loop = true;
    }

    if (!timerStarted) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [time, timerStarted]);

  const audioRef = useRef(new Audio(alarmSound));

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
