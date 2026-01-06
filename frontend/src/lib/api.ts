import axios from 'axios';
import { Cafe, SearchFilters, User } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authApi = {
  register: async (email: string, password: string, name?: string) => {
    const response = await api.post('/auth/register', { email, password, name });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

// Cafes API
export const cafesApi = {
  search: async (filters: SearchFilters): Promise<{ cafes: Cafe[]; total: number; requiresSubscription: boolean }> => {
    const params = new URLSearchParams();
    params.append('lat', filters.lat.toString());
    params.append('lng', filters.lng.toString());
    if (filters.radius) params.append('radius', filters.radius.toString());
    if (filters.wifi) params.append('wifi', 'true');
    if (filters.laptops) params.append('laptops', 'true');
    if (filters.openNow) params.append('openNow', 'true');

    const response = await api.get(`/cafes/search?${params.toString()}`);
    return response.data;
  },

  getCafe: async (id: number): Promise<Cafe> => {
    const response = await api.get(`/cafes/${id}`);
    return response.data;
  },

  addFavorite: async (id: number) => {
    const response = await api.post(`/cafes/${id}/favorite`);
    return response.data;
  },

  removeFavorite: async (id: number) => {
    const response = await api.delete(`/cafes/${id}/favorite`);
    return response.data;
  },

  getFavorites: async (): Promise<Cafe[]> => {
    const response = await api.get('/cafes/favorites/list');
    return response.data;
  },
};

// Subscription API
export const subscriptionApi = {
  createCheckoutSession: async () => {
    const response = await api.post('/subscription/create-checkout-session');
    return response.data;
  },

  getStatus: async () => {
    const response = await api.get('/subscription/status');
    return response.data;
  },

  cancel: async () => {
    const response = await api.post('/subscription/cancel');
    return response.data;
  },
};

export default api;
