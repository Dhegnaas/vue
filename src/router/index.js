import { createRouter, createWebHashHistory } from 'vue-router'
import test from '../components/tests.vue'
import baroobo from '@/components/baroobo.vue'
import iskuday from '@/components/iskuday.vue'
import markale from '@/components/markale.vue'
import ninweyn from '@/components/ninweyn.vue'
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
      {
    path: '/iskuday',
    name: 'iskuday',
    component: iskuday
  },
        {
    path: '/markale',
    name: 'markale',
    component: markale
  },
        {
    path: '/ninweyn',
    name: 'ninweyn',
    component: ninweyn
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
