import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ROUTES from '../../app/routes';
/* import styles from "./Main.module.css"; */

const NotesList = lazy(() => import('../Notes/NotesList'));
const NotFound = lazy(() => import('../NotFound'));

const replaceMeText = (text: string) => (
  <h1>
    &quot;
    {text}
    &quot;
  </h1>
);

export default function Main() {
  return (
    <main role="main">
      <Routes>
        <Route path={ROUTES.root()} element={<NotesList />} />
        <Route
          path={ROUTES.allNotes()}
          element={replaceMeText(ROUTES.allNotes())}
        />
        <Route
          path={ROUTES.getNoteById(0)}
          element={replaceMeText(ROUTES.getNoteById(0))}
        />
        <Route
          path={ROUTES.newNote()}
          element={replaceMeText(ROUTES.newNote())}
        />
        <Route path={ROUTES.error()} element={<NotFound />} />
      </Routes>
    </main>
  );
}
