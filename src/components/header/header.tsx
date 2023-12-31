import { flex } from '@styled-system/patterns';
import { css } from '@styled-system/css';
import { button } from '@styled-system/recipes';

import { Volume2, VolumeX } from 'lucide-react';

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
        alignItems: 'center',
        width: '90%',
        marginTop: '8',
        padding: '6',
        fontSize: { base: 'md', lg: '2xl' },
        fontWeight: 'bold',
      })}
    >
      <span className={css({ color: 'primary' })}>Countdown Timer</span>
      <button
        name="mute"
        className={button({ visual: 'transparent' })}
        onClick={onMuteToggle}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={36} /> : <Volume2 size={36} />}
      </button>
    </header>
  );
}

export default Header;
