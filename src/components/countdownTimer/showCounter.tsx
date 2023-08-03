import DateTimeDisplay from './dateTimeDisplay';
import { hstack } from '@styled-system/patterns';

interface ShowCounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter = ({ days, hours, minutes, seconds }: ShowCounterProps) => {
  return (
    <div className={hstack({ gap: 10, color: 'primary', fontSize: '2xl' })}>
      <DateTimeDisplay value={days} type="Days" />
      <p>:</p>
      <DateTimeDisplay value={hours} type="Hours" />
      <p>:</p>
      <DateTimeDisplay value={minutes} type="Minutes" />
      <p>:</p>
      <DateTimeDisplay value={seconds} type="Seconds" />
    </div>
  );
};

export default ShowCounter;
