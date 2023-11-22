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
  allNotes: () => 'notes',
  findNote: () => 'find-note',
  newNote: () => 'new-note',
};

const ROUTES = {
  getLogin: () => PATHS.login(),
  getHome: (userId: string) =>
    encodeURI(`${PATHS.user(userId)}/${PATHS.home()}`),
  getAllNotes: (userId: string) =>
    encodeURI(`${PATHS.user(userId)}/${PATHS.allNotes()}`),
  getFindNote: (userId: string) =>
    encodeURI(`${PATHS.user(userId)}/${PATHS.findNote()}`),
  getNewNote: (userId: string) =>
    encodeURI(`${PATHS.user(userId)}/${PATHS.newNote()}`),
};

/* James 11/15
GET /user/TEST_USER/notes # Index of all notes
POST "" "" # create a note
GET /user/TEST_USER/notes/new # Create a new note
GET /user/TEST_USER/notes/<note_id> # Show a note
POST "" "" # update a note
*/

export default ROUTES;
