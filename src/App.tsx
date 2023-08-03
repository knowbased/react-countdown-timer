import { vstack } from '@styled-system/patterns';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import './panda.css';

function App() {
  const backgroundImage = './assets/background-image-lofi-girl.jpg';

  return (
    <div
      className={vstack({
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      })}
    >
      <Header />
      <Footer />
    </div>
  );
}

export default App;
