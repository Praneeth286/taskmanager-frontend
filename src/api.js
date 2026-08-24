import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axios.interceptors.response.use(
(response)=> response,
(error) => {
if(error.response && (error.response.status === 401 || error.response.status === 403)){
localStorage.removeItem('token');
window.location.href = '/login';
}
return Promise.reject(error);
}
);

export function getTasks() {
  return axios.get(`${BASE_URL}/tasks`)
    .then(response => response.data);
}

export function createTask(title) {
  return axios.post(`${BASE_URL}/tasks`, { title })
    .then(response => response.data);
}

export function deleteTask(id) {
  return axios.delete(`${BASE_URL}/tasks/${id}`);
}

export function login(username, password) {
  return axios.post(`${BASE_URL}/auth/login`, { username, password })
    .then(response => response.data);
}

export function register(username, password) {
  return axios.post(`${BASE_URL}/auth/register`, { username, password })
    .then(response => response.data);
}