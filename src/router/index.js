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
    {
        path: '/module',
        component: Layout,
        redirect: '/module/index',
        meta: { title: '组件管理'},
        children: [
          {
            path: '/module/index',
            component: () => import('@/views/module/index.vue'),
            name: 'moduleList',
            meta: { title: '组件使用'}
          },
          {
            path: '/module/ref',
            component: () => import('@/views/module/ref.vue'),
            name: 'moduleRef',
            meta: { title: 'ref使用'}
          },
          {
            path: '/module/vModule',
            component: () => import('@/views/module/vModule.vue'),
            name: 'vModule',
            meta: { title: 'v-module使用'}
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