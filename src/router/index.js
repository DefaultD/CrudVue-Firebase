import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'customer',
    meta: {
      title: 'Clientes',
      icon: "people-group",
    },
    component: () => import('../views/customer/viewCustomers')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login')
  },

  {
    path: '/viewProduct',
    name: 'viewProduct',
    meta: {

      title: 'Produtos',
      icon: "cart-shopping",
     component: () => import('../views/viewProduct/viewProduct')
    },
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
