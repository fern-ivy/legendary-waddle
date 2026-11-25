<!-- <template>
  <div class="booking-page">
    <h1>宠物医院预约挂号</h1>
    <div class="doctor-card">
      <h2>李医生（皮肤科）</h2>
      <p>时段：今天 14:00 - 14:30</p>
      <p class="stock">剩余号源：3 个</p>
      <button class="book-btn" :disabled="loading" @click="handleBook">
        {{ loading ? '抢号中...' : '立即预约' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import http from '../../../../packages/shared/src/http'

const loading = ref(false)
const handleBook = async () => {
  loading.value = true
  try {
    const res = await http.post('/appointments', { vetId: 1, scheduleId: 1001, petId: 1 })
    alert(`预约成功！单号：${(res as any).appointmentNo}`)
  } catch (error: any) {
    if (error.response?.status === 409) alert('手慢了，号源已被抢光！')
    else alert('系统繁忙，请稍后再试')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.booking-page { padding: 20px; }
.doctor-card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; width: 300px; }
.stock { color: #e6a23c; font-weight: bold; }
.book-btn { background: #409eff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; width: 100%; margin-top: 10px;}
.book-btn:disabled { background: #a0cfff; }
</style> -->

<template>
  <div class="booking-page">
    <div class="header">
      <h1>🏥 预约挂号大厅</h1>
      <p>请选择医生与时段进行预约</p>
    </div>

    <div class="doctor-list">
      <div class="doctor-card" v-for="doc in doctors" :key="doc.id">
        <div class="info">
          <h2>{{ doc.name }} <span class="title">{{ doc.title }}</span></h2>
          <p>时段：今天 14:00 - 14:30</p>
          <p class="stock" :class="{ 'danger': doc.remain <= 0 }">
            剩余号源：<b>{{ doc.remain }}</b> 个
          </p>
        </div>
        
        <div class="action">
          <el-button 
            type="primary" 
            size="large"
            :loading="loadingId === doc.id" 
            :disabled="doc.remain <= 0 || loadingId !== null"
            @click="handleBook(doc)"
          >
            {{ doc.remain <= 0 ? '已约满' : (loadingId === doc.id ? '抢号中...' : '立即预约') }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

// 模拟从后端拉取的真实医生和排班数据
const doctors = ref([
  { id: 1, name: '李医生', title: '主任兽医师', remain: 3 },
  { id: 2, name: '王医生', title: '高级外科专家', remain: 1 },
  { id: 3, name: '张医生', title: '内科专家', remain: 0 } // 模拟已约满
])

const loadingId = ref<number | null>(null)

const handleBook = async (doc: any) => {
  if (doc.remain <= 0) return

  loadingId.value = doc.id

  // 模拟网络请求延迟（这就是防抖）
  setTimeout(() => {
    // 模拟后端返回：随机生成 409 冲突（抢号失败）
    // 真实场景下，这是后端 Redis Lua 扣减失败返回的
    const isSuccess = Math.random() > 0.3 // 70% 成功率

    if (isSuccess) {
      // 扣减前端库存
      doc.remain--
      ElMessage.success(`预约成功！单号：A${Date.now().toString().slice(-6)}，请尽快支付`)
    } else {
      // 模拟高并发抢空
      doc.remain = 0
      ElMessage.error('手慢了！号源已被其他用户抢光 (409 冲突)')
    }

    loadingId.value = null
  }, 800)
}
</script>

<style scoped>
.booking-page { padding: 40px; max-width: 800px; margin: 0 auto; }
.header { margin-bottom: 30px; text-align: center; }
.header h1 { font-size: 28px; color: #303133; margin-bottom: 10px; }
.header p { color: #909399; }
.doctor-list { display: flex; flex-direction: column; gap: 20px; }
.doctor-card { background: #fff; border: 1px solid #ebeef5; border-radius: 12px; padding: 25px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.03); transition: all 0.3s; }
.doctor-card:hover { box-shadow: 0 8px 24px rgba(43, 124, 255, 0.08); border-color: #c6e2ff; }
.info h2 { margin: 0 0 10px 0; font-size: 20px; color: #303133; }
.title { font-size: 13px; color: #2b7cff; background: #eef5ff; padding: 2px 8px; border-radius: 4px; margin-left: 8px; vertical-align: middle; font-weight: normal; }
.info p { margin: 0 0 10px 0; color: #606266; font-size: 14px; }
.stock { font-size: 15px; color: #e6a23c; }
.stock b { font-size: 18px; }
.stock.danger { color: #f56c6c; }
.action .el-button { width: 120px; border-radius: 8px; }
</style>