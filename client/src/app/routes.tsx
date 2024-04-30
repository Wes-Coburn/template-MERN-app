import { Suspense, lazy } from 'react';
import Loading from '@src/features/utilities/Loading';

const Counter = lazy(() => import('@src/features/components/Counter'));
const Login = lazy(() => import('@components/Login'));
const LoginAlt1 = lazy(() => import('@components/Login/LoginAlt1'));
const Signup = lazy(() => import('@components/Signup'));
const SignupAlt1 = lazy(() => import('@components/Signup/SignupAlt1'));
const CallToAction = lazy(() => import('@components/CallToAction'));
const CallToActionAlt1 = lazy(
  () => import('@components/CallToAction/CallToActionAlt1'),
);
const LinkGrid = lazy(() => import('@components/LinkGrid'));
const ProductGallery = lazy(() => import('@components/ProductGallery'));
const FeaturedSection = lazy(() => import('@components/FeaturedSection'));
const Testimonial = lazy(() => import('@components/Testimonial'));
const Faq = lazy(() => import('@components/FAQ'));
const Article = lazy(() => import('@components/Article'));
const Pricing = lazy(() => import('@components/Pricing'));

const publicURL = () => `${import.meta.env.VITE_PUBLIC_URL}`;
// const mobileDomain = 'm.';

export const CANONICAL = {
  desktop: (path: string) => encodeURI(`https://${publicURL()}/${path}`),
  /* mobile: (path: string) =>
    encodeURI(`https://${mobileDomain}${publicURL()}/${path}`),
  */
};

export interface PageRoute {
  path: string;
  title: string;
  element: JSX.Element;
  topPadding: boolean;
}

const suspense = (element: JSX.Element) => (
  <Suspense
    fallback={
      <div className="flex h-dvh items-center justify-center">
        <Loading />
      </div>
    }
  >
    {element}
  </Suspense>
);

const route = (path: string, title: string) => ({ path, title });
const pageRoute = (
  path: string,
  title: string,
  element: JSX.Element,
  topPadding = true,
): PageRoute => ({
  path,
  title,
  element: suspense(element),
  topPadding,
});

const ROUTES = {
  ROOT: () => route('', ''),
  NOT_FOUND: () => route('*', ''),
  home: () => pageRoute('home', 'Home', <CallToAction />),
  login: () => pageRoute('login', 'Login', <Login />),
  loginAlt1: () => pageRoute('loginAlt1', 'Login', <LoginAlt1 />),
  signup: () => pageRoute('signup', 'Signup', <Signup />),
  signupAlt1: () => pageRoute('signupAlt1', 'Signup', <SignupAlt1 />),
  counter: () => pageRoute('counter', 'Conter', <Counter />),
  linkGrid: () => pageRoute('linkGrid', 'Link Grid', <LinkGrid />),
  productGallery: () =>
    pageRoute('productGallery', 'Product Gallery', <ProductGallery />),
  featuredSection: () =>
    pageRoute('featureSection', 'Featured Section', <FeaturedSection />),
  callToAction: () =>
    pageRoute('callToAction', 'Call to Action', <CallToActionAlt1 />),
  testimonial: () => pageRoute('testimonial', 'Testimonial', <Testimonial />),
  FAQ: () => pageRoute('faq', 'FAQ', <Faq />),
  article: () => pageRoute('article', 'Article', <Article />),
  pricing: () => pageRoute('pricing', 'Pricing', <Pricing />),
  // user: (userId?: string) => encodeURI(`user/${userId ?? ':userId'}`),
};

export default ROUTES;
