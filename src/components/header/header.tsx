import { flex } from '../../../styled-system/patterns';

function Header() {
  return (
    <header
      className={flex({
        direction: 'row',
        justify: 'space-between',
        width: '90%',
        marginTop: '8',
        padding: '6',
        color: 'white',
        fontSize: '2xl',
        fontWeight: 'bold',
      })}
    >
      <span>Countdown Timer</span>
      <span>mute</span>
    </header>
  );
}

export default Header;
