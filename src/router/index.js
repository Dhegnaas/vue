import { createRouter, createWebHistory } from 'vue-router'

import CustomersIndex from '../pages/customers/Index.vue'
import CustomersCreate from '../pages/customers/Create.vue'
import CustomersEdit from '../pages/customers/Edit.vue'

const routes = [
  {
    path: '/customers',
    name: 'CustomersIndex',
    component: CustomersIndex,
  },
  {
    path: '/customers/create',
    name: 'CustomersCreate',
    component: CustomersCreate,
  },
  {
    path: '/customers/edit/:id',
    name: 'CustomersEdit',
    component: CustomersEdit,
  },
  {
    path: '/',
    redirect: '/customers',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
