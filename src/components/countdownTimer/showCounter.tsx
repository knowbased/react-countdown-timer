import { getTimeUnits } from '@/utils/getTimeUnits';
import DateTimeDisplay from './dateTimeDisplay';
import { hstack } from '@styled-system/patterns';

interface ShowCounterProps {
  time: number;
}

const ShowCounter = ({ time }: ShowCounterProps) => {
  const [days, hours, minutes, seconds] = getTimeUnits(time);

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
