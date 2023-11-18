import { NavLink } from 'react-router-dom';
import ROUTES from '../../app/routes';
import styles from './Navbar.module.css';

const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles['Active-link'] : '';

export default function Navbar() {
  const userId = import.meta.env.VITE_USER_ID; // REPLACE ME WITH AUTHENTICATION

  return (
    <nav className={styles.Navbar} role="navigation" aria-label="Primary">
      <ul className={styles.ul}>
        <li>
          <NavLink className={activeLink} to={ROUTES.getHome(userId)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to={ROUTES.getAllNotes(userId)}>
            All Notes
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to={ROUTES.getFindNote(userId)}>
            Find Note
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to={ROUTES.getNewNote(userId)}>
            New Note
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
