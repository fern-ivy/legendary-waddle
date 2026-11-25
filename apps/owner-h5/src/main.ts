// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import router from './router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css' // 引入样式
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// const app = createApp(App)

// // 注册所有图标
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }

// app.use(router)
// app.use(ElementPlus) // 挂载 Element Plus
// app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia' // 引入 Pinia
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) // 挂载 Pinia
app.use(router)
app.use(ElementPlus)
app.mount('#app')