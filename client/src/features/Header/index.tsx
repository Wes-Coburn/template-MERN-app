import Navbar from '../Navbar';
import ASSETS from '../../assets';
import styles from './Header.module.css';

export default function Header() {
  const mainLogo = ASSETS.images.logos.main;

  return (
    <header role="banner">
      <img
        src={mainLogo.src}
        alt={mainLogo.alt}
        className={styles['App-logo']}
      />
      <h1>Note-Taker App</h1>
      <Navbar />
    </header>
  );
}
