import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/play',
    component: () => import('@/views/Play')
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/layout/home',
        component: () => import('@/views/home')
      },
      {
        path: '/layout/search',
        component: () => import('@/views/search')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
