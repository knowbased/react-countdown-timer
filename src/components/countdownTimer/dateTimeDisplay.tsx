import { css } from '@styled-system/css';
import { vstack } from '@styled-system/patterns';

type TimeType = 'Days' | 'Hours' | 'Minutes' | 'Seconds';

interface DateTimeDisplayProps {
  value: number;
  type: TimeType;
}

const DateTimeDisplay = ({ value, type }: DateTimeDisplayProps) => {
  return (
    <div className={vstack({ padding: 4 })}>
      <span className={css({ color: 'secondary', fontSize: '2lg' })}>{type}</span>
      <p
        className={css({
          color: 'primary',
          fontSize: '8xl',
          fontWeight: 'bold',
          minWidth: '150px',
          textAlign: 'center',
        })}
      >
        {value}
      </p>
    </div>
  );
};

export default DateTimeDisplay;
