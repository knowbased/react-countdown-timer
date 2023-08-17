import { getTimeUnits } from '@/utils/getTimeUnits';
import { wrap } from '@styled-system/patterns';
import { useState, useEffect } from 'react';
import TimeInput from './timeInput';
import { css } from '@styled-system/css';

const colonStyle = css({
  display: 'none',
  fontWeight: 'bold',
  fontSize: '5xl',
  alignSelf: 'end',
  mb: '16',
  lg: { display: 'block' },
});

interface TimerFormProps {
  timeUnits: [number, number, number, number];
  onUpdate: (newTime: number) => void;
}

const TimerForm = ({ timeUnits, onUpdate }: TimerFormProps) => {
  const [days, hours, minutes, seconds] = timeUnits;

  const handleChange = (index: number, newValue: number) => {
    const updatedTimeUnits = [...timeUnits];
    updatedTimeUnits[index] = newValue;

    const [days, hours, minutes, seconds] = updatedTimeUnits;

    // Convert time units to milliseconds
    const totalMilliseconds =
      days * 24 * 60 * 60 * 1000 + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;

    onUpdate(totalMilliseconds);
  };

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
      <TimeInput label="Days" value={days} onChange={(newValue) => handleChange(0, newValue)} />
      <span className={colonStyle}>:</span>
      <TimeInput label="Hours" value={hours} onChange={(newValue) => handleChange(1, newValue)} />
      <span className={colonStyle}>:</span>
      <TimeInput
        label="Minutes"
        value={minutes}
        onChange={(newValue) => handleChange(2, newValue)}
      />
      <span className={colonStyle}>:</span>
      <TimeInput
        label="Seconds"
        value={seconds}
        onChange={(newValue) => handleChange(3, newValue)}
      />
    </div>
  );
};

export default TimerForm;
