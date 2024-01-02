import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import {
  selectColorScheme,
  toggleColorThemeMode,
} from '../../../../app/userSlice';

const darkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const lightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const toggleClasses =
  'w-9 h-9 relative rounded-full transition duration-500 transform p-1 text-white';

const toggleIcon = (newClasses: string, iconImage: JSX.Element) => (
  <div id="switch-toggle" className={`${toggleClasses} ${newClasses}`}>
    {iconImage}
  </div>
);

const systemThemeIcon = toggleIcon('bg-gray-500 translate-x-6', <div />);
const lightThemeIcon = toggleIcon('bg-yellow-500 -translate-x-2', lightIcon);
const darkThemeIcon = toggleIcon('bg-gray-700 translate-x-12', darkIcon);

/**
 * switch to darkmode
 * @link https://tailwindcomponents.com/component/switch-to-darkmode
 */
export default function DarkModeToggle() {
  const dispatch = useAppDispatch();
  const themeColorMode = useAppSelector(selectColorScheme);

  return (
    <button
      type="button"
      className="w-20 h-8 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={() => dispatch(toggleColorThemeMode())}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {themeColorMode === 'system'
        ? systemThemeIcon
        : themeColorMode === 'light'
          ? lightThemeIcon
          : darkThemeIcon}
    </button>
  );
}
