const baseUrl = 'http://localhost:5050/';
const apiUrl = (api: string) => `${baseUrl}${api}`;

const API = {
  getAllNotes: () => apiUrl('note'),
};

export default API;
