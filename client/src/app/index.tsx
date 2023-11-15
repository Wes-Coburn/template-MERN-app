import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { lazy, Suspense } from 'react';
import Heading from '../features/Heading';
import Loading from '../features/Loading';
import Error from '../features/Error';
import * as appInfo from '../../manifest.json';
import './App.css';

const Header = lazy(() => import('../features/Header'));
const Main = lazy(() => import('../features/Main'));
const Footer = lazy(() => import('../features/Footer'));

export function AppContent() {
  return (
    <div className="App">
      <Heading pageUrl="" pageTitle={appInfo.name} />

      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading classNames={['Grid-top']} />}>
          <Header />
        </Suspense>
        <Suspense fallback={<Loading classNames={['Grid-mid']} />}>
          <Main />
        </Suspense>
        <Suspense fallback={<Loading classNames={['Grid-btm']} />}>
          <Footer />
        </Suspense>
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
