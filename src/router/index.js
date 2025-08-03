import { createRouter, createWebHashHistory } from 'vue-router'
import Dhashboard from '../components/Dhashboard.vue'
import Customers from '@/components/Customers.vue'
import Sales from '@/components/Sales.vue'
import Products from '@/components/Products.vue'
import Create from '@/components/Create.vue'
const routes = [
  {
    path: '/Dhashboard',
    name: 'Dhashboard',
    component: Dhashboard
  },
    {
    path: '/Customers',
    name: 'Customers',
    component: Customers
  },
      {
    path: '/Sales',
    name: 'Sales',
    component: Sales
  },
        {
    path: '/Products',
    name: 'Products',
    component: Products
  },
        {
    path: '/Create',
    name: 'Create',
    component: Create
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
