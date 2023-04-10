import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

// 引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由
import router from './router/index.js'

let app = createApp(App)

app.config.globalProperties.$hello = 666


app.use(ElementPlus) // 使用ElementPlus
app.use(router) // 注册路由

// 创建pinia实例，注册app.use(pinia)
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
