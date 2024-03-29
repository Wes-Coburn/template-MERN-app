import { Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ROUTES, { PATHS } from '@src/app/routes';
import NotFound from '@src/features/utilities/NotFound';
import Login from '@components/Login';
import LoginAlt1 from '@components/Login/LoginAlt1';
import Signup from '@components/Signup';
import SignupAlt1 from '@components/Signup/SignupAlt1';
import CallToAction from '@components/CallToAction';
import CallToActionAlt1 from '@components/CallToAction/CallToActionAlt1';
import LinkGrid from '@components/LinkGrid';
import ProductGallery from '@components/ProductGallery';
import FeaturedSection from '@components/FeaturedSection';
import Testimonial from '@components/Testimonial';
import FAQ from '@components/FAQ';
import Article from '@components/Article';
import Pricing from '@components/Pricing';
// import { isMobileDomain } from '../../app/responsive';

/** uncomment if subdomain is configured in responsive.ts */
/*
const responsive: typeof import('../../app/responsive') = await import(
  '../../app/responsive'
);
responsive.default();

const deviceDomain = () => {
  if (responsive !== undefined) {
    if (responsive.isMobileDomain()) {
      return <p>[Mobile]</p>;
    }
    return <p>[Desktop]</p>;
  }
  return null;
};
*/

const pageWrapper = (content: JSX.Element, topPadding: boolean = true) => {
  return (
    <main
      role="main"
      className={topPadding ? 'min-h-dvh pt-8 sm:pt-12 lg:pt-16' : ''}
    >
      {content}
    </main>
  );
};

interface Page {
  path: string;
  element: JSX.Element;
}

const pages: Page[] = [
  {
    path: PATHS.home(),
    element: pageWrapper(<CallToAction />),
  },
  {
    path: PATHS.login(),
    element: pageWrapper(<Login />, false),
  },
  {
    path: PATHS.loginAlt1(),
    element: pageWrapper(<LoginAlt1 />),
  },
  {
    path: PATHS.signup(),
    element: pageWrapper(<Signup />, false),
  },
  {
    path: PATHS.signupAlt1(),
    element: pageWrapper(<SignupAlt1 />, false),
  },
  {
    path: PATHS.linkGrid(),
    element: pageWrapper(<LinkGrid />),
  },
  {
    path: PATHS.productGallery(),
    element: pageWrapper(<ProductGallery />),
  },
  {
    path: PATHS.featuredSection(),
    element: pageWrapper(<FeaturedSection />),
  },
  {
    path: PATHS.callToAction(),
    element: pageWrapper(<CallToActionAlt1 />),
  },
  {
    path: PATHS.testimonial(),
    element: pageWrapper(<Testimonial />),
  },
  {
    path: PATHS.article(),
    element: pageWrapper(<Article />),
  },
  {
    path: PATHS.FAQ(),
    element: pageWrapper(<FAQ />),
  },
  {
    path: PATHS.pricing(),
    element: pageWrapper(<Pricing />),
  },
];

export default function Main() {
  return (
    <>
      {/* deviceDomain() */}
      <Routes>
        <Route
          path={PATHS.ROOT()}
          element={<Navigate to={ROUTES.getHome()} replace />}
        />
        {pages.map((page) => {
          return (
            <Route key={uuidv4()} path={page.path} element={page.element} />
          );
        })}
        <Route path={PATHS.NOT_FOUND()} element={<NotFound />} />
      </Routes>
    </>
  );
}
