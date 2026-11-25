import { createApp } from 'vue'
import { createPinia } from 'pinia' // 必须有这行
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia() // 必须有这行

app.use(pinia) // 核心：必须在这里挂载！
app.use(router)
app.use(ElementPlus)
app.mount('#app')