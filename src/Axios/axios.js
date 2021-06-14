import Axios from 'axios';
// keeep first letter captital of file
export const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Auth: 'Simple Auth' },
});
