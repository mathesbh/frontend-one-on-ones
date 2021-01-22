import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL : 'https://backend-one-on-ones.herokuapp.com/',
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if(token) {
        config.headers.Autorization = `Bearer ${token}`;
    }
    
    return config;
});

export default api;