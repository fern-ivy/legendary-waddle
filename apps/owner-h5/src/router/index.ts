import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // --- 营销官网 (无需登录) ---
        { path: '/', redirect: '/marketing' },
        { path: '/marketing', component: () => import('../views/Marketing.vue') },
        { path: '/about', component: () => import('../views/About.vue') },
        { path: '/updates', component: () => import('../views/Updates.vue') },
        { path: '/faq', component: () => import('../views/FAQ.vue') },
        { path: '/news', component: () => import('../views/News.vue') },
        { path: '/login', component: () => import('../views/Login.vue') },

        // --- 主人工作台 (嵌套路由) ---
        {
            path: '/home',
            component: () => import('../views/Home.vue'),
            children: [
                // 注意：这里的 path 都没有开头的 "/"，因为是嵌套在 /home 下面的
                { path: '', redirect: '/home/profile' },
                { path: 'profile', component: () => import('../views/PetProfile.vue') },
                { path: 'triage', component: () => import('../views/Triage.vue') },
                { path: 'booking', component: () => import('../views/Booking.vue') },
                { path: 'orders', component: () => import('../views/Orders.vue') },
                { path: 'records', component: () => import('../views/Records.vue') },
                { path: 'followup', component: () => import('../views/FollowUp.vue') },
                { path: 'doctors', component: () => import('../views/About.vue') },
            ]
        },
    ],
})

// 路由守卫
router.beforeEach((to, _, next) => {
    const token = localStorage.getItem('access_token')
    const whiteList = ['/marketing', '/login', '/about', '/updates', '/faq', '/news']

    if (whiteList.includes(to.path) || token) {
        next()
    } else {
        next('/login')
    }
})

export default router