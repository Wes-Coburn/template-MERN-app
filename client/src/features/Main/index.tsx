import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES, { PATHS } from '../../app/routes';
import NotFound from '../NotFound';
import Login from '../Components/Login';
import LoginAlt1 from '../Components/Login/LoginAlt1';
import Signup from '../Components/Signup';
import SignupAlt1 from '../Components/Signup/SignupAlt1';
import CallToAction from '../Components/CallToAction';
import CallToActionAlt1 from '../Components/CallToAction/alt1';
import LinkGrid from '../Components/LinkGrid';
import ProductGallery from '../Components/ProductGallery';
import FeaturedSection from '../Components/FeaturedSection';
import Testimonial from '../Components/Testimonial';
import FAQ from '../Components/FAQ';
import Article from '../Components/Article';
import Pricing from '../Components/Pricing';
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
            <Route key={page.path} path={page.path} element={page.element} />
          );
        })}
        <Route path={PATHS.NOT_FOUND()} element={<NotFound />} />
      </Routes>
    </>
  );
}
