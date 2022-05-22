import axios from 'axios'
import endpoint from './config/endpoint';
import headers from './config/headers';

const api = (baseUrl) => {

  const instance = axios.create({
    baseURL: endpoint.get(baseUrl),
    headers: headers()
  });

  return instance;
};

export default api;