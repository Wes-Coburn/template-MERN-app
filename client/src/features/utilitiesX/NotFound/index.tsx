import { NavLink } from 'react-router-dom';
import ROUTES from '@src/app/routes';

/**
 * error page - with back button
 *
 *  @author https://github.com/felixmacaspac
 *  @link https://www.hyperui.dev/components/application-ui/error-pages
 */
export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="light:text-gray-900 text-2xl font-bold tracking-tight sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <NavLink
          to={ROUTES.getRoot()}
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
}
