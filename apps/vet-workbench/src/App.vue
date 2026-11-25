<template>
  <div class="layout">
    <aside class="sidebar">
      <h2>医生工作台</h2>
           <nav>
        <router-link to="/home">🏠 首页概览</router-link>  <!-- 新增这行 -->
        <router-link to="/patients">📋 待接诊患者</router-link>
        <router-link to="/workbench">🩺 AI 接诊台</router-link>
        <router-link to="/prescription">✍️ 处方开单</router-link>
        <router-link to="/records">📁 电子病历</router-link>
      </nav>
    </aside>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ElNotification } from 'element-plus'
import { usePatientStore } from './stores/patient'

const patientStore = usePatientStore()
let mockWsTimer: any = null

const mockNames = ['大黄', '小白', '煤球', '旺财', '可乐', '布丁']
const mockBreeds = ['金毛', '英短', '泰迪', '布偶', '柯基', '法斗']

onMounted(() => {
  // 模拟 WebSocket 每 5 秒推送一个新患者
  mockWsTimer = setInterval(() => {
    const randomName = mockNames[Math.floor(Math.random() * mockNames.length)]
    const randomBreed = mockBreeds[Math.floor(Math.random() * mockBreeds.length)]
    
    const newPatient = {
      name: randomName,
      breed: randomBreed,
      time: new Date().toLocaleTimeString()
    }

    // 存进 Pinia 仓库
    patientStore.addPatient(newPatient)

    // 右上角弹出提示
    ElNotification({
      title: '🔔 新患者挂号',
      message: `${newPatient.name}（${newPatient.breed}）已进入候诊队列`,
      type: 'success',
      duration: 3000,
    })
  }, 5000)
})

onUnmounted(() => {
  if (mockWsTimer) clearInterval(mockWsTimer)
})
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body, html, #app { height: 100%; }
.layout { display: flex; height: 100vh; font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif; }
.sidebar { width: 220px; background: #304156; color: white; padding: 20px; flex-shrink: 0; }
.sidebar h2 { font-size: 18px; margin-bottom: 20px; }
.sidebar nav { display: flex; flex-direction: column; gap: 10px; }
.sidebar a { color: #bfcbd9; text-decoration: none; padding: 12px 15px; border-radius: 6px; transition: all 0.3s; }
.sidebar a:hover { background: #263445; }
.sidebar a.router-link-active { background: #409eff; color: white; font-weight: bold;}
.content { flex: 1; overflow-y: auto; background: #f0f2f5; padding: 20px; }
</style>