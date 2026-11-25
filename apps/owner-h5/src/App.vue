<!-- <template>
  <div class="booking-page">
    <h1>宠物医院预约挂号</h1>
    
    <div class="doctor-card">
      <h2>李医生（皮肤科）</h2>
      <p>时段：今天 14:00 - 14:30</p>
      <p class="stock">剩余号源：3 个</p>
      
      <button 
        class="book-btn" 
        :disabled="loading" 
        @click="handleBook"
      >
        {{ loading ? '抢号中...' : '立即预约' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import http from '../../../packages/shared/src/http'

const loading = ref(false)

const handleBook = async () => {
  loading.value = true
  try {
    const res = await http.post('/appointments', {
      vetId: 1,
      scheduleId: 1001,
      petId: 1
    })
    alert(`预约成功！单号：${(res as any).appointmentNo}`)
  } catch (error: any) {
    if (error.response?.status === 409) {
      alert('手慢了，号源已被抢光！')
    } else {
      alert('系统繁忙，请稍后再试')
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.booking-page { padding: 20px; font-family: sans-serif; }
.doctor-card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; width: 300px; margin-top: 20px;}
.stock { color: #e6a23c; font-weight: bold; }
.book-btn { background: #409eff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; width: 100%; margin-top: 10px;}
.book-btn:disabled { background: #a0cfff; cursor: not-allowed; }
</style> -->


<template>
  <router-view></router-view>
</template>