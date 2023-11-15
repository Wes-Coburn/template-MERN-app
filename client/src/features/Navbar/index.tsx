import { NavLink } from 'react-router-dom';
import ROUTES from '../../app/routes';
import styles from './Navbar.module.css';

const activeLink = 'Active-link';

export default function Navbar() {
  const userId = `TEST_USER`; // REPLACE ME WITH AUTHENTICATION

  return (
    <nav className={styles.Navbar} role="navigation" aria-label="Primary">
      <ul className={styles.ul}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles[activeLink] : '')}
            to={ROUTES.COMBINE([ROUTES.user(), userId])}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles[activeLink] : '')}
            to={ROUTES.COMBINE([ROUTES.user(), userId, ROUTES.allNotes()])}
            end
          >
            All Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles[activeLink] : '')}
            to={ROUTES.COMBINE([ROUTES.user(), userId, ROUTES.findNote()])}
          >
            Find Note
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles[activeLink] : '')}
            to={ROUTES.COMBINE([ROUTES.user(), userId, ROUTES.newNote()])}
          >
            New Note
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
