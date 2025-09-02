
import axios from 'axios';
import { BASE_URL } from './Api';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: BASE_URL,

});


apiClient.interceptors.request.use(
  (config) => {
    // const token = Cookies.get('token');
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2IiwidW5pcXVlX25hbWUiOiIwMTAwMDk5OTAyMiIsInJvbGUiOiJNYW5hZ2VyIiwic3RvcmVJZCI6IjYiLCJuYmYiOjE3NTY4NDk2MDAsImV4cCI6MTc1Njg1MzIwMCwiaWF0IjoxNzU2ODQ5NjAwLCJpc3MiOiJGYXNoaW9uU3RvcmUiLCJhdWQiOiJGYXNoaW9uU3RvcmVVc2VycyJ9.TCIYNM8tP3NVlf7a6PORY0UzHNj5SXMvQiPdUBBe3cQ"

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
