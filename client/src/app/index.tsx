import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { lazy, Suspense } from 'react';
import { PATHS } from './routes';
import Heading from '../features/Heading';
import Loading from '../features/Loading';
import Error from '../features/Error';
import './App.css';

const Header = lazy(() => import('../features/Header'));
const Main = lazy(() => import('../features/Main'));
const Footer = lazy(() => import('../features/Footer'));

/** uncomment if subdomain is configured in responsive.ts */
const responsive = await import('./responsive');
responsive.default();

export function AppContent() {
  return (
    <div className="App">
      <Heading pageURL={PATHS.ROOT()} />
      <ErrorBoundary fallback={<Error />}>
        <div className="Grid-top">
          <Suspense fallback={<Loading />}>
            <Header />
          </Suspense>
        </div>
        <div className="Grid-mid">
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        </div>
        <div className="Grid-btm">
          <Suspense fallback={<Loading />}>
            <Footer />
          </Suspense>
        </div>
      </ErrorBoundary>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
