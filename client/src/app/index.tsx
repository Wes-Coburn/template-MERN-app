import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { lazy, Suspense } from 'react';
import Heading from '../features/Heading';
import Loading from '../features/Loading';
import * as appInfo from '../../manifest.json';
import './App.css';

const Header = lazy(() => import('../features/Header'));
const Main = lazy(() => import('../features/Main'));
const Footer = lazy(() => import('../features/Footer'));

export function AppContent() {
  return (
    <div className="App">
      <Heading pageUrl="" pageTitle={appInfo.name} />
      <ErrorBoundary fallback={<h1>Oops! Something went wrong.</h1>}>
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
