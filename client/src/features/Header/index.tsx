import Navbar from '../Navbar';
import ASSETS from '../../assets';
import styles from './Header.module.css';

export default function Header() {
  const { favIcon } = ASSETS.images.logos;

  return (
    <header role="banner">
      <img src={favIcon.src} alt={favIcon.alt} className={styles['App-logo']} />
      <h1>Note-Taker App</h1>
      <Navbar />
    </header>
  );
}
