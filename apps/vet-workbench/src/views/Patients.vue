<template>
  <div class="patients">
    <div class="header">
      <h1>今日待接诊患者</h1>
      <el-tag type="danger" effect="dark" round>
        当前排队：{{ totalPatients }} 人
      </el-tag>
    </div>

    <el-table :data="allPatients" style="width: 100%" stripe border>
      <el-table-column prop="name" label="宠物名" width="150" />
      <el-table-column prop="breed" label="品种" width="150" />
      <el-table-column prop="time" label="挂号时间" width="200" />
      <el-table-column label="状态" width="150">
        <template #default>
          <el-tag type="warning">候诊中</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="small" @click="startDiagnosis(scope.row)">
            接诊
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { usePatientStore } from '../stores/patient'

const router = useRouter()
const patientStore = usePatientStore()

// 初始自带两个患者
const initialPatients = [
  { name: '旺财', breed: '金毛', time: '10:00:00' },
  { name: '咪咪', breed: '英短', time: '10:15:00' },
]

// 将死数据和实时推送的数据合并
const allPatients = computed(() => {
  return [...initialPatients, ...patientStore.livePatients]
})

const totalPatients = computed(() => allPatients.value.length)

const startDiagnosis = (patient: any) => {
  ElMessage.success(`正在接入 ${patient.name} 的病历...`)
  router.push('/workbench')
}
</script>

<style scoped>
.patients { padding: 20px; background: #fff; border-radius: 8px; margin: 20px; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.header h1 { margin: 0; font-size: 20px; color: #333; }
</style>