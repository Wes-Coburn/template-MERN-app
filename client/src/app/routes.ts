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
  user: (userId?: string) => encodeURI(`user/${userId ?? ':userId'}`),
  login: () => 'login',
  home: () => 'home',
  counter: () => 'counter',
};

const ROUTES = {
  getLogin: () => PATHS.login(),
  getCounter: () => PATHS.counter(),
  getHome: (userId: string) =>
    encodeURI(`${PATHS.user(userId)}/${PATHS.home()}`),
};

export default ROUTES;
