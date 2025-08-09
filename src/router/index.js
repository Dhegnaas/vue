// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import CustomersIndex from '@/pages/customers/Index.vue'
import CreateCustomer from '@/pages/customers/Create.vue'
import EditCustomer from '@/pages/customers/Edit.vue'

const routes = [
  { path: '/login', component: Login },
  { 
    path: '/customers', 
    component: CustomersIndex,
    meta: { requiresAuth: true }
  },
  {
    path: '/customers/create',
    component: CreateCustomer,
    meta: { requiresAuth: true }
  },
  {
    path: '/customers/edit/:id',
    component: EditCustomer,
    meta: { requiresAuth: true }
  },
  { path: '/', redirect: '/login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard for auth
router.beforeEach((to, from, next) => {
  const loggedIn = !!localStorage.getItem('token')
  if (to.meta.requiresAuth && !loggedIn) {
    next('/login')
  } else if (to.path === '/login' && loggedIn) {
    next('/customers')
  } else {
    next()
  }
})

export default router
