const ROUTES = {
  /* Universal routes */
  ROOT: () => '',
  NOT_FOUND: () => '*',
  COMBINE: (params: Array<string>) => `${params?.join('/')}`,
  /* Page routes */
  login: () => 'login',
  user: () => 'user',
  home: () => 'home',
  allNotes: () => 'notes',
  findNote: () => 'find-note',
  newNote: () => 'new-note',
};

export default ROUTES;
