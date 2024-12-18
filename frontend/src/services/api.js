import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // URL do compromisso-service no backend
});

export default api;
