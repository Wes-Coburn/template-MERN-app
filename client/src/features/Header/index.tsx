/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../Components/Buttons/DarkModeToggle';
import ROUTES from '../../app/routes';
import Menu from '../Components/Menu';

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

interface Link {
  name: string;
  href: string;
}

const navigationPrimary: Link[] = [{ name: 'Home', href: ROUTES.getHome() }];

const navigationSecondary: Link[] = [
  { name: 'Login-Alt1', href: ROUTES.getLoginAlt1() },
  { name: 'Signup', href: ROUTES.getSignup() },
  { name: 'Signup-Alt1', href: ROUTES.getSignupAlt1() },
  { name: 'Link Grid', href: ROUTES.getLinkGrid() },
  { name: 'Product Gallery', href: ROUTES.getProductGallery() },
  { name: 'Featured Section', href: ROUTES.getFeaturedSection() },
  { name: 'Call to Action', href: ROUTES.getCallToAction() },
  { name: 'Testimonial', href: ROUTES.getTestimonial() },
  { name: 'FAQ', href: ROUTES.getFAQ() },
  { name: 'Article', href: ROUTES.getArticle() },
  { name: 'Pricing', href: ROUTES.getPricing() },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to={ROUTES.getHome()} className="-m-1.5 p-1.5">
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
            <NavLink key={item.name} to={item.href} className={activeLink}>
              {item.name}
            </NavLink>
          ))}
          <Menu name="Components" links={navigationSecondary} />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <DarkModeToggle />
          <NavLink
            to={ROUTES.getLogin()}
            className="text-sm font-semibold leading-6 light:text-gray-900"
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
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
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
