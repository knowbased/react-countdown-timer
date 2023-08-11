import { css } from '@styled-system/css';
import { vstack } from '@styled-system/patterns';

interface TimeInputProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
}

const TimeInput = ({ label, value, onChange }: TimeInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 99) {
      onChange(inputValue);
    }
  };

  return (
    <div className={vstack({ padding: 4 })}>
      <label className={css({ color: 'secondary', fontSize: '2lg' })}>{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={0}
        max={99}
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
          padding: { base: '1', lg: '2' },
          appearance: 'none', // Disable default browser styles
        })}
      />
    </div>
  );
};

export default TimeInput;
