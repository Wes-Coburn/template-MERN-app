import logo from '../../assets/logo.svg';
import Navbar from '../Navbar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header role="banner">
      <img src={logo} className={styles['App-logo']} alt="logo" />
      <h1>Note-Taker App</h1>
      <Navbar />
    </header>
  );
}
