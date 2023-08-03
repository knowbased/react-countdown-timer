import { useCountdown } from '@hooks/useCountdown';
import ShowCounter from './showCounter';

interface CountdownTimerProps {
  time: number;
}

const CountdownTimer = ({ time }: CountdownTimerProps) => {
  const [days, hours, minutes, seconds] = useCountdown(time);

  console.log(days, hours, minutes, seconds);

  if (days + hours + minutes + seconds <= 0) return <div>Timer finished</div>;

  return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
