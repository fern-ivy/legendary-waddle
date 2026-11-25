<template>
  <div class="records-page">
    <div class="header">
      <h2>📁 电子病历库</h2>
      <p>所有加密病历均需通过鉴权后方可查看，操作将记录审计日志</p>
    </div>

    <el-table :data="recordList" style="width: 100%" stripe border>
      <el-table-column prop="petName" label="宠物" width="120" />
      <el-table-column prop="doctor" label="接诊医生" width="120" />
      <el-table-column prop="date" label="就诊时间" width="180" />
      <el-table-column prop="diagnosis" label="诊断结果" />
      <el-table-column label="状态" width="100">
        <template #default>
          <el-tag type="success" effect="plain">已归档</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button type="primary" size="small" @click="viewRecord(scope.row)">
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 病历详情弹窗 -->
    <el-dialog v-model="showDetail" title="电子病历详情（密文解密展示）" width="600px">
      <div class="record-detail">
        <p><b>宠物姓名：</b>{{ currentRecord.petName }}</p>
        <p><b>主诉：</b>最近一周皮肤瘙痒，掉毛严重。</p>
        <p><b>诊断结果：</b>{{ currentRecord.diagnosis }}</p>
        <p><b>处方：</b>阿莫西林克拉维酸钾片，每日两次，连用7天。</p>
        <div class="alert-box">
          🔒 审计提示：本次病历查看行为已被记录。
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const showDetail = ref(false)
const currentRecord = ref<any>({})

const recordList = ref([
  { id: 1, petName: '旺财', doctor: '李医生', date: '2024-11-20 14:30', diagnosis: '真菌性皮肤病' },
  { id: 2, petName: '咪咪', doctor: '王医生', date: '2024-11-19 10:15', diagnosis: '急性肠胃炎' },
])

const viewRecord = (row: any) => {
  currentRecord.value = row
  showDetail.value = true
  // 模拟向后端发送审计日志
  ElMessage.success('病历解密成功，操作已记录')
}
</script>

<style scoped>
.records-page { padding: 20px; background: #fff; border-radius: 8px; margin: 20px; }
.header { margin-bottom: 20px; }
.header h2 { margin: 0 0 5px 0; color: #303133; }
.header p { color: #909399; font-size: 13px; }
.record-detail p { line-height: 1.8; color: #606266; }
.alert-box { margin-top: 20px; padding: 10px; background: #fdf6ec; color: #e6a23c; border-radius: 6px; font-size: 13px; }
</style>