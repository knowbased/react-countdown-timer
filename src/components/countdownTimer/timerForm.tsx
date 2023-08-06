import { getTimeUnits } from '@/utils/getTimeUnits';
import { hstack } from '@styled-system/patterns';
import { useState, useEffect } from 'react';
import TimeInput from './timeInput';

interface TimerFormProps {
  time: number;
  onUpdate: (newTime: number) => void;
}

const TimerForm = ({ time, onUpdate }: TimerFormProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const [newDays, newHours, newMinutes, newSeconds] = getTimeUnits(time);
    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  }, []);

  useEffect(() => {
    const newTime = (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000;
    onUpdate(newTime);
  }, [days, hours, minutes, seconds, onUpdate]);

  return (
    <div className={hstack({ gap: 10, color: 'primary', fontSize: '2xl' })}>
      <TimeInput label="Days" value={days} onChange={setDays} />
      :
      <TimeInput label="Hours" value={hours} onChange={setHours} />
      :
      <TimeInput label="Minutes" value={minutes} onChange={setMinutes} />
      :
      <TimeInput label="Seconds" value={seconds} onChange={setSeconds} />
    </div>
  );
};

export default TimerForm;
