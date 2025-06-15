import './assets/main.css'

import { createApp } from 'vue'
//引入pinia
import { createPinia } from 'pinia'
import App from './App.vue'
//创建pinia实例
const pinia = createPinia()
//引入路由器
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
//使用pinia
app.use(pinia)
app.use(router)
app.mount('#app')
