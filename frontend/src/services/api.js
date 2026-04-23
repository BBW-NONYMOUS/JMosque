import axios from 'axios';

export const clearStoredAuth = () => {
  localStorage.removeItem('mosque_admin_token');
  localStorage.removeItem('mosque_admin_user');
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api',
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('mosque_admin_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearStoredAuth();
      window.dispatchEvent(new Event('mosque-auth-expired'));
    }

    return Promise.reject(error);
  }
);

export const fetchMosques = async (params = {}) => {
  const response = await api.get('/mosques', { params });
  return response.data;
};

export const fetchMosque = async (id) => {
  const response = await api.get(`/mosques/${id}`);
  return response.data;
};

export const loginAdmin = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const logoutAdmin = async () => {
  const response = await api.post('/logout');
  return response.data;
};

export const createMosque = async (payload) => {
  const response = await api.post('/mosques', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const updateMosque = async (id, payload) => {
  payload.append('_method', 'PUT');

  const response = await api.post(`/mosques/${id}`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const deleteMosque = async (id) => {
  const response = await api.delete(`/mosques/${id}`);
  return response.data;
};

export const fetchStats = async () => {
  const response = await api.get('/stats');
  return response.data;
};

export const submitFeedback = async (payload) => {
  const response = await api.post('/feedback', payload);
  return response.data;
};

export const fetchFeedback = async (page = 1) => {
  const response = await api.get('/feedback', { params: { page } });
  return response.data;
};

export const exportBackup = async () => {
  const response = await api.get('/backup/export');
  return response.data;
};

export default api;
