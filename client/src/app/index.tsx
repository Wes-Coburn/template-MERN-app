import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { PATHS } from './routes';
import { useAppSelector } from './hooks';
import { selectColorThemeMode } from './userSlice';
import Heading from '../features/Heading';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Main from '../features/Main';
import Error from '../features/Error';
import Background from '../features/Background';
import Popup from '../features/Components/Popups';
// import PopupAlt1 from '../features/Components/Popups/PopupAlt1';
// import responsive from './responsive';

const tailwindDefaults = 'dark:text-white';

export function AppContent() {
  // responsive();
  const themeColorMode = useAppSelector(selectColorThemeMode);
  let themeColorClass = '';
  if (
    themeColorMode === 'dark' ||
    (themeColorMode === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)')?.matches)
    /* null conditional '?' operator is there to pass tests */
  ) {
    themeColorClass = 'dark';
  }

  return (
    <div className={themeColorClass}>
      <div className={tailwindDefaults}>
        <Background />
        <ErrorBoundary fallback={<Error />}>
          <Popup />
          {/* <PopupAlt1 /> */}
          <Header />
          <Main />
          <Footer />
        </ErrorBoundary>
      </div>
    </div>
  );
}

/** HelmetProvider is here instead of main.tsx to avoid testing errors */
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Heading pageURL={PATHS.ROOT()} />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
