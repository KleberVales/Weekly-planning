import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Endereço do back-end
});

export default api;
