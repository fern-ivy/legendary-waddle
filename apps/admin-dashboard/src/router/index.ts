import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: () => import('../views/Dashboard.vue') },
        { path: '/tenants', component: () => import('../views/Tenants.vue') },
        { path: '/audit', component: () => import('../views/Audit.vue') },
    ],
})
export default router