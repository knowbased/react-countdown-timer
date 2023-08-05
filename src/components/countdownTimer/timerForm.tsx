import { getTimeUnits } from '@/utils/getTimeUnits';
import { useState, useEffect } from 'react';

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
    <div>
      <div>
        <label>Days:</label>
        <input type="number" value={days} onChange={(e) => setDays(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Hours:</label>
        <input type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Minutes:</label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Seconds:</label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default TimerForm;
