import { flex } from '@styled-system/patterns';
import { css } from '@styled-system/css';

function Footer() {
  return (
    <footer
      className={flex({
        direction: 'row',
        justify: 'flex-end',
        width: '90%',
        padding: '6',
      })}
    >
      <a
        className={css({ color: 'primary', fontSize: 'xs' })}
        href="https://www.freepik.com/free-ai-image/cartoon-lofi-young-manga-style-girl-studying-while-listening-music-raining-street-ai-generative_43227423.htm#query=lofi&position=2&from_view=keyword&track=sph"
      >
        Image By chandlervid85
      </a>
    </footer>
  );
}

export default Footer;
