import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { useCallback, useEffect, useState } from 'react';
import { PATHS } from './routes';
import Heading from '../features/Sections/Heading';
import Header from '../features/Sections/Header';
import Footer from '../features/Sections/Footer';
import Main from '../features/Sections/Main';
import Error from '../features/Utilities/Error';
import Background from '../features/Sections/Background';
import Popup from '../features/Components/Popups';
import { useAppDispatch, useAppSelector } from './hooks';
import { selectColorScheme, setColorScheme } from './userSlice';
// import PopupAlt1 from '../features/Components/Popups/PopupAlt1';
// import responsive from './responsive';

const tailwindDefaults = 'dark:text-white';
const darkModeMatch = () => window.matchMedia('(prefers-color-scheme: dark)');

export function AppContent() {
  const dispatch = useAppDispatch();
  const colorScheme = useAppSelector(selectColorScheme);
  const [colorSchemeClass, setColorSchemeClass] = useState<string>('');

  const darkModeListener = useCallback(
    (event: MediaQueryListEvent) => {
      dispatch(setColorScheme(event.matches ? 'dark' : 'light'));
    },
    [dispatch],
  );

  /** null operator > darkModeMatch()? < is used to avoid testing errors */
  useEffect(() => {
    darkModeMatch()?.addEventListener('change', darkModeListener);
    dispatch(setColorScheme(darkModeMatch()?.matches ? 'dark' : 'light'));
    return darkModeMatch()?.removeEventListener('change', darkModeListener);
  }, [dispatch, darkModeListener]);

  useEffect(() => {
    setColorSchemeClass(colorScheme);
  }, [colorScheme]);

  return (
    <div className={colorSchemeClass}>
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
