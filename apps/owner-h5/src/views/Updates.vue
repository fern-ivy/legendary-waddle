<template>
  <div class="updates-page">
    <div class="header">
      <h1>📢 产品更新公告</h1>
      <p>持续迭代，为您提供更稳定、更智能的宠物医疗服务</p>
    </div>

    <!-- 时间线展示更新记录 -->
    <div class="timeline-container">
      <el-timeline>
        <el-timeline-item
          v-for="(update, index) in updateLogs"
          :key="index"
          :timestamp="update.date"
          placement="top"
          :type="index === 0 ? 'primary' : ''"
          :size="index === 0 ? 'large' : 'normal'"
        >
          <el-card shadow="hover" class="update-card">
            <div class="card-header">
              <h2>{{ update.version }}</h2>
              <el-tag v-if="index === 0" type="danger" effect="dark" size="small">最新版本</el-tag>
            </div>
            <ul class="update-list">
              <li v-for="(item, i) in update.content" :key="i">{{ item }}</li>
            </ul>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div class="back-area">
      <el-button round size="large" @click="$router.push('/marketing')">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 模拟从后端拉取的数据
const updateLogs = ref([
  {
    date: '2024-11-21',
    version: 'v2.1.0 - AI 智能辅助诊断上线',
    content: [
      '新增：医生工作台接入 RAG 宠物医疗知识库，支持智能问答。',
      '新增：AI 诊断结果提供溯源引用卡片（如《犬猫皮肤病学》），确保100%可追溯。',
      '优化：针对写操作增加二次确认弹窗，避免 AI 幻觉产生错误指令。',
      '修复：修复了病历字段偶发明文传输的安全漏洞（已全面升级 AES-256-GCM 加密）。'
    ]
  },
  {
    date: '2024-10-15',
    version: 'v2.0.0 - 多租户 SaaS 架构重磅升级',
    content: [
      '重构：系统底层升级为微服务架构（Spring Boot 3 + Vue 3）。',
      '新增：支持多租户隔离，一套系统同时服务多家连锁门店。',
      '优化：引入 Redis Lua 脚本扣减，全面解决高并发抢号超卖问题。',
      '新增：医生工作台增加 WebSocket 实时候诊队列推送，告别页面轮询。'
    ]
  },
  {
    date: '2024-09-01',
    version: 'v1.5.2 - 运营大屏与体验优化',
    content: [
      '新增：管理员后台接入 ECharts 运营数据大屏，实时监控疾病分布与接诊趋势。',
      '优化：重构主人端抢号页，增加 15 分钟支付倒计时与前端防抖拦截。',
      '修复：解决了部分 Windows 客户端下 TypeScript 路径解析失败的问题。'
    ]
  }
])
</script>

<style scoped>
.updates-page {
  min-height: 100vh;
  background: #f9fbfc;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}
.header h1 {
  font-size: 36px;
  color: #303133;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 2px;
}
.header p {
  color: #909399;
  font-size: 16px;
}

/* 时间线容器限制宽度，居中 */
.timeline-container {
  width: 100%;
  max-width: 800px;
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.card-header h2 {
  font-size: 18px;
  color: #2b7cff;
  margin: 0;
}

.update-list {
  margin: 0;
  padding-left: 20px;
  color: #606266;
  line-height: 2;
  font-size: 14px;
}
.update-list li {
  margin-bottom: 8px;
}

.update-card {
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

.back-area {
  margin-top: 50px;
}
</style>