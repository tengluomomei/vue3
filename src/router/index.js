import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Layout from '@/layout/layout.vue'

export const asyncRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        meta: { title: 'Dashboard'},
        children: [
          {
            path: '/dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'Dashboard',
            meta: { title: 'Dashboard'}
          }
        ]
    },
    {
        path: '/good',
        component: Layout,
        redirect: '/good/list',
        meta: { title: '商品列表'},
        children: [
          {
            path: '/good/list',
            component: () => import('@/views/good/list.vue'),
            name: 'goodList',
            meta: { title: '商品列表'}
          }
        ]
    },
    {
        path: '/order',
        component: Layout,
        redirect: '/order/list',
        meta: { title: '订单列表'},
        children: [
          {
            path: '/order/list/:name?/:age?',
            component: () => import('@/views/order/list.vue'),
            name: 'orderList',
            meta: { title: '订单列表'}
          }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(), // 带#的hash路由模式
    // history: createWebHistory(), //不带#的history路由模式
    routes: [
        ...asyncRoutes   
    ]
})

router.beforeEach((to,from, next)=>{
    next()
})

export default router