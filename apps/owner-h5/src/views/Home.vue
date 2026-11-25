<template>
  <div class="layout">
    <!-- 左侧菜单栏 -->
    <aside class="sidebar">
      <div class="logo">
        <h2>🐾 爱宠云</h2>
        <p>主人工作台</p>
      </div>
      
      <nav class="menu">
        <router-link to="/home/profile">🐶 我的宠物档案</router-link>
        <router-link to="/home/booking">🏥 预约挂号</router-link>
        <router-link to="/home/orders">💳 我的订单</router-link>
        <router-link to="/home/records">📁 电子病历</router-link>
        <router-link to="/home/followup">📅 复诊与提醒</router-link>
        <router-link to="/home/doctors">👨‍⚕️ 医生团队介绍</router-link>

        <router-link to="/home/triage">🧠 智能分诊</router-link>
      </nav>

      <div class="logout-area">
        <el-button type="danger" plain @click="logout">退出登录</el-button>
      </div>
    </aside>

    <!-- 右侧内容区 -->
    <main class="content">
      <!-- 顶部面包屑或欢迎语 -->
      <header class="content-header">
        <span>欢迎回来，{{ authStore.account || '用户' }}</span>
      </header>

      <!-- 这里就是各个子页面的出口 -->
      <div class="content-body">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  ElMessage.success('已退出登录')
  router.push('/marketing') // 退出后回官网
}
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background: #f5f7fa;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
}

/* 左侧菜单 */
.sidebar {
  width: 240px;
  background: #ffffff;
  border-right: 1px solid #ebeef5;
  display: flex;
  flex-direction: column;
}

.logo {
  padding: 25px 20px;
  text-align: center;
  border-bottom: 1px solid #ebeef5;
}
.logo h2 { color: #2b7cff; margin: 0 0 5px 0; font-size: 22px; }
.logo p { color: #909399; margin: 0; font-size: 13px; }

.menu {
  flex: 1;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menu a {
  text-decoration: none;
  color: #606266;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s;
}
.menu a:hover {
  background: #f0f7ff;
  color: #2b7cff;
}
.menu a.router-link-active {
  background: #2b7cff;
  color: white;
  font-weight: bold;
}

.logout-area {
  padding: 20px;
  border-top: 1px solid #ebeef5;
}
.logout-area .el-button { width: 100%; }

/* 右侧内容区 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content-header {
  height: 60px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #ebeef5;
  color: #606266;
  font-size: 14px;
}

.content-body {
  flex: 1;
  overflow-y: auto;
  /* 内部页面我们自己写样式，这里去掉默认 padding，让 PetProfile 自己撑开 */
}
</style>