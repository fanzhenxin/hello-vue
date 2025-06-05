import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
