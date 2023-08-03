import { flex } from '@styled-system/patterns';
import { css } from '@styled-system/css';

function Header() {
  return (
    <header
      className={flex({
        direction: 'row',
        justify: 'space-between',
        width: '90%',
        marginTop: '8',
        padding: '6',
        fontSize: '2xl',
        fontWeight: 'bold',
      })}
    >
      <span className={css({ color: 'primary' })}>Countdown Timer</span>
      <span className={css({ color: 'secondary' })}>mute</span>
    </header>
  );
}

export default Header;
