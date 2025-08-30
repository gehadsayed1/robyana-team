export const BASE_URL = (
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL
) || "http://localhost:5000";

 export const ADD_BANNER = '/api/upload'

