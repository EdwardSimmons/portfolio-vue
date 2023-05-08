import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mobile-apps',
      name: 'mobile-apps',
      component: () => import('../views/Mobile.vue')
    },
    {
      path: '/surfacing',
      name: 'surfacing',
      component: () => import('../views/Surfacing.vue')
    }
  ]
})

export default router
