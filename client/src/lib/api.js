import axios from 'axios';
export const API_BASE = import.meta.env.VITE_API_BASE || 'https://kashin-portfolio.onrender.com/api';
export const api = axios.create({ baseURL: API_BASE, withCredentials: true });
