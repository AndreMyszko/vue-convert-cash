import axios from 'axios';
import type { AxiosInstance } from 'axios';

// Create an Axios instance with a base URL and timeout
const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 1000,
});

export default api;