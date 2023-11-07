const ROUTES = {
  root: () => '',
  allNotes: () => 'notes',
  getNoteById: (id: number) => `notes/${id}`,
  newNote: () => 'notes/new-note',
  error: () => '*',
};

export default ROUTES;
