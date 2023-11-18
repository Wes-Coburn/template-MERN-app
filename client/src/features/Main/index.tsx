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
