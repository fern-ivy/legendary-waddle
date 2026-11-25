<template>
  <div class="home-welcome">
    <h1>👋 欢迎回来，李医生</h1>
    <p>今天是个好天气，祝您接诊顺利！</p>
    <div class="stats">
      <div class="stat-card">
        <h3>今日接诊</h3>
        <p class="num">12 <span>人</span></p>
      </div>
      <div class="stat-card">
        <h3>候诊中</h3>
        <p class="num" style="color: #e6a23c;">{{ patientStore.livePatients.length + 2 }} <span>人</span></p>
      </div>
      <div class="stat-card">
        <h3>今日营收</h3>
        <p class="num" style="color: #67c23a;">¥ 3,450</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePatientStore } from '../stores/patient'
const patientStore = usePatientStore()
</script>

<style scoped>
.home-welcome { padding: 40px; }
h1 { color: #303133; margin-bottom: 10px; }
p { color: #909399; margin-bottom: 30px; }
.stats { display: flex; gap: 20px; }
.stat-card { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 12px 0 rgba(0,0,0,0.05); flex: 1; }
.stat-card h3 { color: #606266; font-size: 14px; margin-bottom: 15px; font-weight: normal;}
.num { font-size: 32px; font-weight: bold; color: #409eff; margin: 0; }
.num span { font-size: 14px; font-weight: normal; color: #909399;}
</style>