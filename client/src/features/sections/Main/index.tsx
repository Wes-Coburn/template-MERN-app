import { Routes, Navigate, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ROUTES, { PageRoute } from '@src/app/routes';
import NotFound from '@src/features/utilities/NotFound';
import Heading from '../Heading';
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

const pageWrapper = (
  content: JSX.Element,
  pageUrl: string,
  pageTitle: string,
  includeHeading: boolean,
) => {
  return (
    <>
      {includeHeading && <Heading pageUrl={pageUrl} pageTitle={pageTitle} />}
      <main
        role="main"
        className="relative -top-[80px] min-h-dvh lg:-top-[88px]"
        // !!! TOP OFFSET IS RELATIVE TO THE <Header /> COMPONENT'S HEIGHT !!!
      >
        {content}
      </main>
    </>
  );
};

const pageRoutes: PageRoute[] = [
  ROUTES.home(),
  ROUTES.login(),
  ROUTES.loginAlt1(),
  ROUTES.signup(),
  ROUTES.signupAlt1(),
  ROUTES.linkGrid(),
  ROUTES.productGallery(),
  ROUTES.featuredSection(),
  ROUTES.callToAction(),
  ROUTES.testimonial(),
  ROUTES.article(),
  ROUTES.FAQ(),
  ROUTES.pricing(),
];

interface IProps {
  isTest: boolean;
}
export default function Main({ isTest }: IProps) {
  return (
    <>
      {/* deviceDomain() */}
      <Routes>
        <Route
          path={ROUTES.ROOT().path}
          element={<Navigate to={ROUTES.home().path} replace />}
        />
        {pageRoutes.map((pageRoute) => {
          const element = pageWrapper(
            pageRoute.element,
            pageRoute.path,
            pageRoute.title,
            !isTest,
          );
          return (
            <Route key={uuidv4()} path={pageRoute.path} element={element} />
          );
        })}
        <Route path={ROUTES.NOT_FOUND().path} element={<NotFound />} />
      </Routes>
    </>
  );
}
