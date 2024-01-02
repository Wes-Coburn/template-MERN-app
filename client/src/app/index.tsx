import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { PATHS } from './routes';
import { useAppSelector } from './hooks';
import { selectColorScheme } from './userSlice';
import Heading from '../features/Heading';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Main from '../features/Main';
import Error from '../features/Error';
import Background from '../features/Background';
import Popup from '../features/Components/Popups';
// import PopupAlt1 from '../features/Components/Popups/PopupAlt1';
// import responsive from './responsive';

const darkModeQuery = '(prefers-color-scheme: dark)';
const darkModeMatch = () => window.matchMedia(darkModeQuery);
const tailwindDefaults = 'dark:text-white';

export function AppContent() {
  // responsive();
  const themeColorMode = useAppSelector(selectColorScheme);
  const [themeColorClass, setThemeColorClass] = useState<string>('');

  const applyThemeColorMode = (forceDarkMode?: boolean) => {
    if (
      themeColorMode === 'dark' ||
      (themeColorMode === 'system' &&
        (forceDarkMode || window.matchMedia(darkModeQuery)?.matches))
      /* null conditional '?' operator is there to pass tests */
    ) {
      setThemeColorClass('dark');
    } else {
      setThemeColorClass('');
    }
  };

  const darkModeListener = (event: MediaQueryListEvent) => {
    applyThemeColorMode(event.matches);
  };

  useEffect(() => {
    darkModeMatch()?.addEventListener('change', darkModeListener);
    applyThemeColorMode();
    return darkModeMatch()?.removeEventListener('change', darkModeListener);
  });

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
