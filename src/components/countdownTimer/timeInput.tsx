import { css } from '@styled-system/css';
import { vstack } from '@styled-system/patterns';

interface TimeInputProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
}

const TimeInput = ({ label, value, onChange }: TimeInputProps) => {
  return (
    <div className={vstack({ padding: 4 })}>
      <label className={css({ color: 'secondary', fontSize: '2lg' })}>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className={css({
          backgroundColor: 'transparent',
          color: 'primary',
          fontSize: '8xl',
          fontWeight: 'bold',
          maxWidth: '150px',
          textAlign: 'center',
          borderWidth: '2px',
          borderColor: 'secondary',
          borderRadius: 'md',
          padding: '8px',
          paddingLeft: '10px',
          appearance: 'none', // Disable default browser styles
        })}
      />
    </div>
  );
};

export default TimeInput;
