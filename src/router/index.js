import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        meta: {
            title: 'Dashboard',
            icon: "thin fa-house-chimney",
        },
        component: () => import('../views/dashboard/dashboard')
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
