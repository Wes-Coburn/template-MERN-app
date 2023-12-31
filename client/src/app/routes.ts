const publicURL = () => `${import.meta.env.VITE_PUBLIC_URL}`;
const protocol = () => 'https';
// const mobileDomain = 'm.';

export const CANONICAL = {
  desktop: (path: string) =>
    encodeURI(`${protocol()}://${publicURL()}/${path}`),
  /* mobile: (path: string) =>
    encodeURI(`${protocol()}://${mobileDomain}${publicURL()}/${path}`),
  */
};

export const PATHS = {
  ROOT: () => '',
  NOT_FOUND: () => '*',
  login: () => 'login',
  loginAlt1: () => 'loginAlt1',
  signup: () => 'signup',
  signupAlt1: () => 'signupAlt1',
  home: () => 'home',
  counter: () => 'counter',
  linkGrid: () => 'linkGrid',
  productGallery: () => 'productGallery',
  featuredSection: () => 'featuredSection',
  callToAction: () => 'callToAction',
  testimonial: () => 'testimonial',
  FAQ: () => 'FAQ',
  article: () => 'article',
  pricing: () => 'pricing',
  user: (userId?: string) => encodeURI(`user/${userId ?? ':userId'}`),
};

const ROUTES = {
  getRoot: () => '/',
  getLogin: () => PATHS.login(),
  getLoginAlt1: () => PATHS.loginAlt1(),
  getSignup: () => PATHS.signup(),
  getSignupAlt1: () => PATHS.signupAlt1(),
  getHome: () => PATHS.home(),
  getCounter: () => PATHS.counter(),
  getLinkGrid: () => PATHS.linkGrid(),
  getProductGallery: () => PATHS.productGallery(),
  getFeaturedSection: () => PATHS.featuredSection(),
  getCallToAction: () => PATHS.callToAction(),
  getTestimonial: () => PATHS.testimonial(),
  getFAQ: () => PATHS.FAQ(),
  getArticle: () => PATHS.article(),
  getPricing: () => PATHS.pricing(),
};

export default ROUTES;
