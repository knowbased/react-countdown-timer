import { getTimeUnits } from '@/utils/getTimeUnits';
import DateTimeDisplay from './dateTimeDisplay';
import { wrap } from '@styled-system/patterns';
import { css } from '@styled-system/css';

const colonStyle = css({
  display: 'none',
  fontWeight: 'bold',
  fontSize: '5xl',
  alignSelf: 'end',
  mb: '16',
  lg: { display: 'block' },
});

interface ShowCounterProps {
  time: number;
}

const ShowCounter = ({ time }: ShowCounterProps) => {
  const [days, hours, minutes, seconds] = getTimeUnits(time);

  return (
    <div
      className={wrap({
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary',
        fontSize: '2xl',
      })}
    >
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
