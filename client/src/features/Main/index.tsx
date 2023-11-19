import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES, { PATHS } from '../../app/routes';
import FindNote from '../Notes/FindNote';
import styles from './Main.module.css';
import NewNote from '../Notes/NewNote';
// import { isMobileDomain } from '../../app/responsive';

const Login = lazy(() => import('../Login'));
const Home = lazy(() => import('../Home'));
const NotesList = lazy(() => import('../Notes/NotesList'));
const NotFound = lazy(() => import('../NotFound'));

/** remove this condition if subdomain is configured in responsive.ts */
let responsive: typeof import('../../app/responsive');
if (process.env.NODE_ENV !== 'production') {
  responsive = await import('../../app/responsive');
  responsive.default();
}

export default function Main() {
  let deviceDomain;
  if (responsive !== undefined) {
    if (responsive.isMobileDomain()) {
      deviceDomain = '[Mobile]';
    } else deviceDomain = '[Desktop]';
  }

  return (
    <main role="main" className={styles.Main}>
      {deviceDomain ?? ''}
      <Routes>
        {/* /ROOT [redirect -->] /login */}
        <Route
          path={PATHS.ROOT()}
          element={<Navigate to={ROUTES.getLogin()} replace />}
        />
        {/* /login */}
        <Route path={PATHS.login()} element={<Login />} />

        {/* /user/:userId */}
        <Route path={PATHS.user()}>
          {/* /user/:userId [redirect --->] user/:userId/home */}
          <Route
            path={PATHS.ROOT()}
            element={<Navigate to={PATHS.home()} replace />}
          />
          {/* /user/:userId/home */}
          <Route path={PATHS.home()} element={<Home />} />
          {/* /user/:userId/notes */}
          <Route path={PATHS.allNotes()} element={<NotesList />} />
          {/* /user/:userId/find-note?noteId=<noteId> */}
          <Route path={PATHS.findNote()} element={<FindNote />} />
          {/* /user/:userId/new-note */}
          <Route path={PATHS.newNote()} element={<NewNote />} />
        </Route>

        {/* not found [404] */}
        <Route path={PATHS.NOT_FOUND()} element={<NotFound />} />
      </Routes>
    </main>
  );
}
