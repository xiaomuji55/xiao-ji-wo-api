import { createWebHashHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/javaScript-API',
        name: 'javaScript-API',
        component: () => import('@/views/js-api/index.vue'),
    },
    {
        path: '/css-API',
        name: 'css-API',
        component: () => import('@/views/css-api/index.vue'),
    },
    {
        path: '/html-API',
        name: 'html-API',
        component: () => import('@/views/html-api/index.vue'),
    },
    {
        path: '/vue-API',
        name: 'vue-API',
        component: () => import('@/views/vue-api/index.vue'),
    },
    {
        path: '/json',
        name: 'json',
        component: () => import('@/views/tool/json.vue'),
    },
    {
        path: '/http',
        name: 'http',
        component: () => import('@/views/tool/http.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(async (to) => {
    // 如果是进入根页面 则重定向到 首页
    if(to.path === '/') {
        return { name: 'home' }
    }
});


export default router;