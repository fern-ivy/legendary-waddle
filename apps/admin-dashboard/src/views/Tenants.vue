<template>
  <div class="page-container">
    <h2>🏢 租户与门店管理</h2>
    <el-card shadow="never" class="table-card">
      <el-table :data="tenantList" style="width: 100%" :header-cell-style="{ background: '#091021', color: '#fff' }" :cell-style="{ background: 'transparent', color: '#889fbb', borderColor: 'rgba(255,255,255,0.05)' }">
        <el-table-column prop="id" label="租户ID" width="120" />
        <el-table-column prop="name" label="连锁医院名称" width="200" />
        <el-table-column prop="stores" label="门店数" width="100" />
        <el-table-column prop="status" label="状态">
          <template #default="scope">
            <el-tag :type="scope.row.status === '正常' ? 'success' : 'warning'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #default>
            <el-button type="primary" size="small" text>进入后台</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tenantList = ref([
  { id: 'hospital_a', name: '它它宠物医院（总院）', stores: 3, status: '正常' },
  { id: 'hospital_b', name: '爱宠动物诊所', stores: 1, status: '正常' },
  { id: 'hospital_c', name: '萌兽医疗中心', stores: 5, status: '审核中' }
])
</script>

<style scoped>
.page-container { padding: 30px; }
h2 { color: #00a2ff; margin-bottom: 20px; }
.table-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 162, 255, 0.2); }
</style>