const baseCanonUrl = 'www.my-example-website.com';

export const PATHS = {
  ROOT: () => '',
  CANONICAL: (url: string) => encodeURI(`${baseCanonUrl}/${url}`),
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
