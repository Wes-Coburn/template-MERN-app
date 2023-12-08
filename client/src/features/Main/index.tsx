import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES, { PATHS } from '../../app/routes';
import styles from './Main.module.css';
// import { isMobileDomain } from '../../app/responsive';

const Login = lazy(() => import('../Login'));
const Home = lazy(() => import('../Home'));
const Counter = lazy(() => import('../Counter'));
const NotFound = lazy(() => import('../NotFound'));

/** uncomment if subdomain is configured in responsive.ts */
/*
const responsive: typeof import('../../app/responsive') = await import(
  '../../app/responsive'
);
responsive.default();

const deviceDomain = () => {
  if (responsive !== undefined) {
    if (responsive.isMobileDomain()) {
      return <p>[Mobile]</p>;
    }
    return <p>[Desktop]</p>;
  }
  return null;
};
*/

export default function Main() {
  return (
    <main role="main" className={styles.Main}>
      {/* deviceDomain() */}
      <Routes>
        <Route
          path={PATHS.ROOT()}
          element={<Navigate to={ROUTES.getLogin()} replace />}
        />
        <Route path={PATHS.login()} element={<Login />} />

        <Route path={PATHS.user()}>
          <Route
            path={PATHS.ROOT()}
            element={<Navigate to={PATHS.home()} replace />}
          />
          <Route path={PATHS.home()} element={<Home />} />
        </Route>

        <Route path={PATHS.counter()} element={<Counter />} />

        <Route path={PATHS.NOT_FOUND()} element={<NotFound />} />
      </Routes>
    </main>
  );
}
