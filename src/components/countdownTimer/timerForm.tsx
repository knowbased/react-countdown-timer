import { useState, useEffect } from 'react';

interface TimerFormProps {
  time: number;
  onUpdate: (newTime: number) => void;
}

const TimerForm = ({ time, onUpdate }: TimerFormProps) => {
  const [days, setDays] = useState(Math.floor(time / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor((time % (1000 * 60)) / 1000));

  useEffect(() => {
    const newTime = (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000;
    console.log(newTime);
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
