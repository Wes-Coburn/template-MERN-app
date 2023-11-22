const serverURL = import.meta.env.VITE_SERVER_URL;
const apiURL = (path: string) => `${serverURL}/${path}`;

const API = {
  getAllNotes: () => apiURL('note'),
};

export default API;
