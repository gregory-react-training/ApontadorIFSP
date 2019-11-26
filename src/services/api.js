import axios from 'axios';

const api = axios.create({
  baseURL: 'http://slt.ifsp.edu.br/ifciencia2019/per/webservices',
});

export default api;