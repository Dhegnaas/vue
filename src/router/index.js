import { createRouter, createWebHashHistory } from 'vue-router'

import Dashboard from '@/components/Dashboard.vue'
import CustomerCreate from '@/pages/customers/Create.vue' // hubi in faylka sax yahay Create.vue
import CustomerEdit from '@/pages/customers/Edit.vue'
import CustomerList from '@/pages/customers/Index.vue'
import ProductList from '@/pages/products/Index.vue'
import ProductCreate from '@/pages/products/Create.vue'
import ProductEdit from '@/pages/products/Edit.vue'
import SalesList from '@/pages/sales/Index.vue'
import SalesCreate from '@/pages/sales/Create.vue'
import SalesEdit from '@/pages/sales/Edit.vue'
import UserList from '@/pages/users/Index.vue'
import UserCreate from '@/pages/users/Create.vue'
import UserEdit from '@/pages/users/Edit.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/customers',
    name: 'Customers',
    component: CustomerList,
  },
  {
    path: '/customers/create',
    name: 'CustomerCreate',
    component: CustomerCreate,
  },
  {
    path: '/customers/edit/:id',
    name: 'CustomerEdit',
    component: CustomerEdit,
    props: true,
  },
  // Products
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/products/create',
    name: 'ProductCreate',
    component: ProductCreate,
  },
  {
    path: '/products/edit/:id',
    name: 'ProductEdit',
    component: ProductEdit,
    props: true,
  },
  // Sales (waxaan ku daray `{` bilowga halkan)
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList,
  },
  {
    path: '/sales/create',
    name: 'SalesCreate',
    component: SalesCreate,
  },
  {
    path: '/sales/edit/:id',
    name: 'SalesEdit',
    component: SalesEdit,
    props: true,
  },
    {
    path: '/users',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/users/create',
    name: 'UserCreate',
    component: UserCreate,
  },
  {
    path: '/users/edit/:id',
    name: 'UserEdit',
    component: UserEdit,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
