import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DarkModeToggle from '@components/Buttons/DarkModeToggle';
import ROUTES from '@src/app/routes';
import Menu from '@components/Menu';
import ccn from '@src/utils/createClassName';

const activeLink = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  let linkStyle = '';
  if (isPending) linkStyle = 'Pending-link';
  else if (isActive) linkStyle = 'Active-link';
  return linkStyle;
};

const navigationPrimary = [ROUTES.home()];

const navigationSecondary = [
  ROUTES.loginAlt1(),
  ROUTES.signup(),
  ROUTES.signupAlt1(),
  ROUTES.linkGrid(),
  ROUTES.productGallery(),
  ROUTES.featuredSection(),
  ROUTES.callToAction(),
  ROUTES.testimonial(),
  ROUTES.FAQ(),
  ROUTES.article(),
  ROUTES.pricing(),
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  const gradientClassname = ccn`bg-gradient-to-b from-gray-100/70 via-gray-100 to-gray-200/70 bg-size-200 
  bg-pos-100 dark:from-gray-700/70 dark:via-gray-700 dark:to-gray-800/70`;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-700 ${scrollY !== 0 ? gradientClassname : 'bg-pos-0'}`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to={ROUTES.home().path} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationPrimary.map((item) => (
            <NavLink key={uuidv4()} to={item.path} className={activeLink}>
              {item.title}
            </NavLink>
          ))}
          <Menu name="Components" links={navigationSecondary} />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-16">
          <DarkModeToggle />
          <NavLink
            to={ROUTES.login().path}
            className="light:text-gray-900 text-sm font-semibold leading-6"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to={ROUTES.home().path} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationPrimary.concat(navigationSecondary).map((item) => (
                  <NavLink
                    key={uuidv4()}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
