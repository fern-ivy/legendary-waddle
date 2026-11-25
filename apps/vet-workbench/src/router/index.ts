import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 新增：访问根路径时，默认重定向到首页
        { path: '/', redirect: '/home' },
        { path: '/home', component: () => import('../views/Home.vue') },
        { path: '/patients', component: () => import('../views/Patients.vue') },
        { path: '/workbench', component: () => import('../views/workbench.vue') },
        { path: '/records', component: () => import('../views/Records.vue') },
        { path: '/prescription', component: () => import('../views/Prescription.vue') },
    ],
})

export default router