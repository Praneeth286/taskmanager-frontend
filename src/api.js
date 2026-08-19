import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function getTasks() {
  return axios.get(`${BASE_URL}/tasks`)
    .then(response =>response.data);
}

export function createTask(title) {
  return axios.post(`${BASE_URL}/tasks`,{title})
  .then(response => response.data);
}

export function deleteTask(id) {
  return axios.delete(`${BASE_URL}/tasks/${id}`);
}