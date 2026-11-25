import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus' // 1. 引入
import 'element-plus/dist/index.css'   // 2. 引入样式

const app = createApp(App)
app.use(router)
app.use(ElementPlus) // 3. 挂载
app.mount('#app')