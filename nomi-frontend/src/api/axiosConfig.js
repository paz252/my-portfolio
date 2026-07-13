import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nomi-backend-ksov.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 45000, // Render free tier cold starts can take up to 30-40 seconds
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = 'An unexpected connection error occurred.';
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = 'NOMI is waking up from standby on Render. Please send the message again in a few seconds.';
    } else if (error.response) {
      errorMessage = error.response.data?.message || `Server Error: ${error.response.status}`;
    } else if (error.request) {
      errorMessage = 'No response received from the backend. Verify if the API server is live.';
    }
    
    return Promise.reject(new Error(errorMessage));
  }
);

export default api;