import { getTimeUnits } from '@/utils/getTimeUnits';
import DateTimeDisplay from './dateTimeDisplay';
import { hstack } from '@styled-system/patterns';
import { css } from '@styled-system/css';

const colonStyle = css({ fontWeight: 'bold', fontSize: '5xl', alignSelf: 'end', mb: '16' });

interface ShowCounterProps {
  time: number;
}

const ShowCounter = ({ time }: ShowCounterProps) => {
  const [days, hours, minutes, seconds] = getTimeUnits(time);

  return (
    <div className={hstack({ gap: 10, color: 'primary', fontSize: '2xl' })}>
      <DateTimeDisplay value={days} type="Days" />
      <p className={colonStyle}>:</p>
      <DateTimeDisplay value={hours} type="Hours" />
      <p className={colonStyle}>:</p>
      <DateTimeDisplay value={minutes} type="Minutes" />
      <p className={colonStyle}>:</p>
      <DateTimeDisplay value={seconds} type="Seconds" />
    </div>
  );
};

export default ShowCounter;
