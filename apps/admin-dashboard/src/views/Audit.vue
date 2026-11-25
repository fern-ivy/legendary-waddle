<template>
  <div class="page-container">
    <h2>📜 全局审计日志</h2>
    <el-card shadow="never" class="table-card">
      <el-timeline>
        <el-timeline-item
          v-for="(log, index) in auditLogs"
          :key="index"
          :timestamp="log.time"
          :type="log.type"
          placement="top"
          color="#00a2ff"
        >
          <div class="log-content">
            <span class="operator">{{ log.operator }}</span>
            <span class="action">{{ log.action }}</span>
          </div>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const auditLogs = ref([
  { time: '2024-11-21 15:30:22', operator: '李医生 (VET)', action: '查看了宠物「旺财」的电子病历 (IP: 192.168.1.5)', type: 'primary' },
  { time: '2024-11-21 14:12:05', operator: '张女士 (OWNER)', action: '修改了宠物「咪咪」的体重信息', type: 'success' },
  { time: '2024-11-21 10:00:00', operator: '平台管理员 (ADMIN)', action: '审批通过了「萌兽医疗中心」的入驻申请', type: 'warning' },
  { time: '2024-11-20 18:45:11', operator: '王医生 (VET)', action: '导出了近一个月的处方记录报表', type: 'danger' }
])
</script>

<style scoped>
.page-container { padding: 30px; }
h2 { color: #00a2ff; margin-bottom: 30px; }
.table-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 162, 255, 0.2); padding: 20px; }
.log-content { display: flex; gap: 15px; font-size: 14px; }
.operator { color: #fff; font-weight: bold; }
.action { color: #889fbb; }
/* 覆盖 Element Plus 时间线默认颜色 */
:deep(.el-timeline-item__timestamp) { color: #889fbb; }
</style>