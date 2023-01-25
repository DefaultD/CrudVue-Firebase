import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Clientes',
    meta: {
      title: 'Clientes',
      icon: "people-group",
    },
    component: () => import('../views/HomeView')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
