import { useEffect } from 'react';
import { hstack, vstack } from '@styled-system/patterns';
import { button } from '@styled-system/recipes';

import { useAudio } from 'react-use';

import ShowCounter from './showCounter';
import TimerForm from './timerForm';

import useCountdownTimer from '@/hooks/useCountdownTimer';
import alarmSound from '@assets/IPhone “Radar” alarm sound effect.mp3';

interface CountdownTimerProps {
  initialTime?: number;
  isMuted?: boolean;
}

const CountdownTimer = ({ initialTime = 0, isMuted = false }: CountdownTimerProps) => {
  const { time, setTime, timerStarted, startTimer, stopTimer, resetTimer } =
    useCountdownTimer(initialTime);

  const [audio, state, controls] = useAudio({
    src: alarmSound,
    autoPlay: false,
    loop: true,
  });

  // AUDIO
  useEffect(() => {
    if (isMuted) {
      controls.mute();
    } else {
      controls.unmute();
    }

    if (time === 0 && timerStarted) {
      controls.play();
    }

    if (!timerStarted) {
      controls.pause();
      state.time = 0;
    }
  }, [time, timerStarted, isMuted]);

  const showResetButton = time > 0;

  return (
    <div className={vstack({ gap: '8' })}>
      {audio}
      {timerStarted ? (
        <>
          <ShowCounter time={time} />
          <div className={hstack({ justify: 'space-around', width: '100%' })}>
            <button className={button({ size: 'lg' })} onClick={stopTimer}>
              Stop Timer
            </button>
            {showResetButton && (
              <button className={button({ size: 'lg' })} onClick={resetTimer}>
                Reset Timer
              </button>
            )}
          </div>
        </>
      ) : (
        <div className={vstack({ gap: '8' })}>
          <TimerForm time={time} onUpdate={setTime} />
          <button className={button({ size: 'lg' })} onClick={startTimer}>
            Start Timer
          </button>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
