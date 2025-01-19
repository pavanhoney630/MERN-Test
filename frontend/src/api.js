import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // Include credentials in cross-origin requests
});
console.log(api);