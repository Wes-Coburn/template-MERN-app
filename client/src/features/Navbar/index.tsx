import { NavLink } from 'react-router-dom';
import ROUTES from '../../app/routes';
import styles from './Navbar.module.css';

const activeLink = 'Active-link';

export default function Navbar() {
  return (
    <nav className={styles.Navbar} role="navigation">
      <ul className={styles.ul}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles[activeLink] : '')}
            to={ROUTES.root()}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles[activeLink] : '')}
            to={ROUTES.allNotes()}
            end
          >
            All Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles[activeLink] : '')}
            to={ROUTES.getNoteById(0)}
          >
            Find Note
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
