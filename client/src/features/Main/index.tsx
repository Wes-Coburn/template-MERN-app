import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES, { PATHS } from '../../app/routes';
import FindNote from '../Notes/FindNote';
import styles from './Main.module.css';
import NewNote from '../Notes/NewNote';

const Login = lazy(() => import('../Login'));
const Home = lazy(() => import('../Home'));
const NotesList = lazy(() => import('../Notes/NotesList'));
const NotFound = lazy(() => import('../NotFound'));

export default function Main() {
  return (
    <main role="main" className={styles.Main}>
      <Routes>
        {/* /login */}
        <Route
          path={PATHS.ROOT()}
          element={<Navigate to={ROUTES.getLogin()} replace />}
        />
        <Route path={PATHS.login()} element={<Login />} />

        {/* user/:userId */}
        <Route path={PATHS.user()}>
          <Route
            path={PATHS.ROOT()} /* Reroute to <Home /> */
            element={<Navigate to={PATHS.home()} replace />}
          />
          <Route path={PATHS.home()} element={<Home />} />
          <Route path={PATHS.allNotes()} element={<NotesList />} />
          <Route path={PATHS.findNote()} element={<FindNote />} />
          <Route path={PATHS.newNote()} element={<NewNote />} />
        </Route>

        {/* not found [404] */}
        <Route path={PATHS.NOT_FOUND()} element={<NotFound />} />
      </Routes>
    </main>
  );
}
