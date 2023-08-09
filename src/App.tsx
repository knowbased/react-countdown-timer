import { vstack } from '@styled-system/patterns';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import CountdownTimer from '@components/countdownTimer/countdownTimer';

import './panda.css';

import { useToggle } from 'react-use';

function App() {
  const [isMuted, toggleIsMuted] = useToggle(false);
  const backgroundImage = './assets/background-image-lofi-girl.jpg';

  return (
    <div
      className={vstack({
        justify: 'space-between',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      })}
    >
      <Header isMuted={isMuted} onMuteToggle={toggleIsMuted} />
      <CountdownTimer initialTime={0} isMuted={isMuted} />
      <Footer />
    </div>
  );
}

export default App;
