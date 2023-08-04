import { vstack } from '@styled-system/patterns';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import CountdownTimer from '@components/countdownTimer/countdownTimer';
import './panda.css';

function App() {
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
      <Header />
      <CountdownTimer initialTime={0} />
      <Footer />
    </div>
  );
}

export default App;
