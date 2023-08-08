import { flex } from '@styled-system/patterns';
import { css } from '@styled-system/css';

interface HeaderProps {
  isMuted: boolean;
  onMuteToggle: () => void;
}

function Header({ isMuted = false, onMuteToggle }: HeaderProps) {
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
      <button className={css({ color: 'secondary' })} onClick={onMuteToggle}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </header>
  );
}

export default Header;
