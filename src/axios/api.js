import axios from 'axios';
await axios.post('http://localhost:8000/api/login', {
  email: form.value.email,
  password: form.value.password,
});
const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default apiClient;
