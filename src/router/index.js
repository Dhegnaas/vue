import { createRouter, createWebHashHistory } from 'vue-router'
import test from '../components/tests.vue'
import baroobo from '@/components/baroobo.vue'
const routes = [
  {
    path: '/test',
    name: 'test',
    component: test
  },
    {
    path: '/baroobo',
    name: 'baroobo',
    component: baroobo
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
