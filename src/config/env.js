// src/config/env.js
const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

const config = {
  apiUrl: isDevelopment 
    ? 'http://localhost:8081/api' 
    : 'https://search-service-production-8dd1.up.railway.app/api',
  
  ordersApiUrl: isDevelopment
    ? 'http://localhost:8082/api'
    : 'https://operation-service-production.up.railway.app/api'
};

export default config;