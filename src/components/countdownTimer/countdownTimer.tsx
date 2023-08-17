import { useEffect } from 'react';
import { vstack, wrap } from '@styled-system/patterns';
import { button } from '@styled-system/recipes';

import { useAudio, useBoolean, useLockBodyScroll, useToggle } from 'react-use';

import ShowCounter from './showCounter';
import TimerForm from './timerForm';

import useCountdownTimer from '@/hooks/useCountdownTimer';
import alarmSound from '@assets/IPhone “Radar” alarm sound effect.mp3';
import { showNotification } from '@/utils/showNotification';

interface CountdownTimerProps {
  initialTime?: number;
  isMuted?: boolean;
}

const CountdownTimer = ({ initialTime = 0, isMuted = false }: CountdownTimerProps) => {
  const { time, isRunning, startTimer, stopTimer, resetTimer, updateTime } =
    useCountdownTimer(initialTime);

  const [audio, state, controls] = useAudio({
    src: alarmSound,
    autoPlay: false,
    loop: true,
  });

  const timerEnded = isRunning && time === 0;

  useEffect(() => {
    if (timerEnded) {
      controls.play();
      showNotification(
        'Countdown Timer',
        {
          body: 'Timer has ended!',
        },
        handleStopTimer,
      );
    }
  }, [timerEnded, controls]);

  const handleStopTimer = () => {
    stopTimer();
    controls.pause();
    state.time = 0;
  };

  if (isMuted) {
    controls.mute();
  } else {
    controls.unmute();
  }

  const showResetButton = time > 0;

  return (
    <div className={vstack({ gap: '8' })}>
      {audio}
      {isRunning ? (
        <>
          <ShowCounter time={time} />
          <div className={wrap({ justify: 'space-around', gap: '8', width: '100%' })}>
            <button className={button({ size: 'lg' })} onClick={handleStopTimer}>
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
          <TimerForm time={time} onUpdate={updateTime} />
          <button className={button({ size: 'lg' })} onClick={startTimer}>
            Start Timer
          </button>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
