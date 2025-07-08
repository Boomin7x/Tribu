import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from '@tribu/location-intelligence';
// import {}
const mapClient = axios.create({
  baseURL: import.meta.env.VITE_MAP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

mapClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.MAP_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    // Handle request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
mapClient.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    console.log('Response received:', response);
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response error status:', error.response.status);
      console.error('Response error data:', error.response.data);

      // You can handle specific status codes here
      if (error.response.status === 401) {
        // Handle unauthorized access
        // window.location.href = '/login';
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Request setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default mapClient;
