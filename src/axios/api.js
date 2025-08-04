import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

// Customers count
export const getCustomersCount = () => apiClient.get('/customers/count')

// Products count
export const getProductsCount = () => apiClient.get('/products/count')

// Sales count
export const getSalesCount = () => apiClient.get('/sales/count')

// Users count
export const getUsersCount = () => apiClient.get('/users/count')

// Example: fetch all customers
export const getCustomers = () => apiClient.get('/customers')

// Example: fetch customer by id
export const getCustomerById = (id) => apiClient.get(`/customers/${id}`)

// Add more API methods as you build...

export default apiClient
