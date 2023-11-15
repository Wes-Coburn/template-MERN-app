import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES from '../../app/routes';
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
          path={ROUTES.ROOT()}
          element={<Navigate to={ROUTES.login()} replace />}
        />
        <Route path={ROUTES.login()} element={<Login />} />

        {/* /user */}
        <Route path={ROUTES.user()}>
          <Route
            path={ROUTES.ROOT()} /* reroute empty userIds to <Login /> */
            element={<Navigate to={`/${ROUTES.login()}`} replace />}
          />
          {/* /:userId */}
          <Route path=":userId">
            <Route
              path={ROUTES.ROOT()} /* Reroute to <Home /> */
              element={<Navigate to={ROUTES.home()} replace />}
            />
            {/* user routes */}
            <Route path={ROUTES.home()} element={<Home />} />
            <Route path={ROUTES.allNotes()} element={<NotesList />} />
            <Route path={ROUTES.findNote()} element={<FindNote />} />
            <Route path={ROUTES.newNote()} element={<NewNote />} />
          </Route>
        </Route>

        {/* not found [404] route */}
        <Route path={ROUTES.NOT_FOUND()} element={<NotFound />} />
      </Routes>
    </main>
  );
}
