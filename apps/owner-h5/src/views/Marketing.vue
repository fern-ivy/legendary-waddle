<!-- <template>
  <div class="marketing-page">
    <!-- 顶部导航栏 -->
    <!-- <header class="navbar">
      <div class="logo-area">
        <!-- 用文字模拟那个蓝色 Logo -->
        <!-- <div class="logo-icon">🐾</div>
        <span class="logo-text">爱宠云</span>
      </div> -->
      
      <!-- <nav class="nav-links">
        <a href="#" class="active">首页</a>
        <a href="#">介绍医生</a>
        <a href="#">更新公告</a>
        <a href="#">常见问题</a>
        <a href="#">行业资讯</a>
      </nav>

      <div class="nav-actions">
        <el-button type="primary" round @click="$router.push('/login')">注册体验</el-button>
      </div>
    </header> --> 

    <!-- 主体内容 -->
    <!-- <main class="hero-section">
      <p class="sub-title">专业团队全程在线，服务无断点，使用无担忧！</p>
      
      <h1 class="main-title">
        让宠物医院和 <span class="highlight">“双系统”</span> 说再见
      </h1>

          <div class="action-buttons">
        <!-- 改成查看大屏，因为咱们的 admin-dashboard 是纯网页大屏，非常符合 SaaS 的调性 -->
        <!-- <el-button class="btn-download" round size="large" @click="goToDashboard">查看大屏</el-button>
        <el-button type="primary" class="btn-try" round size="large" @click="$router.push('/login')">免费试用</el-button>
      </div>
    </main>  --> 

    <!-- 底部超大背景文字 -->
    <!-- <div class="footer-watermark">
      TATAVET
    </div>
  </div>
</template> -->
<!-- 
<script setup lang="ts">
// import { useRouter } from 'vue-router'
// const router = useRouter()

const goToDashboard = () => {
  window.open('http://localhost:5175', '_blank')
}
</script> -->

<!-- <style scoped>
/* 基础重置 */
.marketing-page {
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* --- 顶部导航栏 --- */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  height: 80px;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-icon {
  width: 36px; height: 36px;
  background: #2b7cff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #2b7cff;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 30px;
}
.nav-links a {
  text-decoration: none;
  color: #606266;
  font-size: 15px;
  transition: color 0.3s;
}
.nav-links a:hover, .nav-links a.active {
  color: #2b7cff;
  font-weight: bold;
}
.nav-links a.active {
  background: #eef5ff;
  padding: 8px 20px;
  border-radius: 20px;
  color: #2b7cff;
}

.nav-actions .el-button {
  background-color: #2b7cff;
  border-color: #2b7cff;
  padding: 10px 24px;
  font-size: 16px;
}

/* --- 主体内容 --- */
.hero-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px; /* 稍微往上提一点 */
  z-index: 10;
}

.sub-title {
  font-size: 18px;
  color: #606266;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

.main-title {
  font-size: 56px;
  font-weight: 600;
  color: #303133;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
}

.highlight {
  color: #2b7cff;
  font-style: italic;
  font-weight: 800;
}

.action-buttons {
  display: flex;
  gap: 30px;
}
.btn-download {
  background: #3b4757;
  color: white;
  border: none;
  width: 160px;
  font-size: 18px;
}
.btn-download:hover {
  background: #2c3645;
  color: white;
}
.btn-try {
  background: #2b7cff;
  border: none;
  width: 160px;
  font-size: 18px;
}

/* --- 底部超大背景文字 --- */
.footer-watermark {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 280px;
  font-weight: 900;
  color: rgba(43, 124, 255, 0.08); /* 极浅的蓝色 */
  -webkit-text-stroke: 2px rgba(43, 124, 255, 0.2); /* 文字描边 */
  letter-spacing: 10px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
}
</style> -->

<template>
  <div class="marketing-page">
    <!-- 顶部导航栏 (通过动态 class 控制出现) -->
    <header class="navbar" :class="{ 'nav-show': showHeader }">
      <div class="logo-area">
        <div class="logo-icon">🐾</div>
        <span class="logo-text">爱宠云</span>
      </div>
      
           <nav class="nav-links">
        <!-- 点击首页就跳回营销首页 -->
        <router-link to="/marketing" class="active">首页</router-link>
        <!-- 点击介绍医生，平滑跳转到 About 页面 -->
        <router-link to="/about">介绍医生</router-link>
       <router-link to="/updates">更新公告</router-link>
       <router-link to="/faq">常见问题</router-link>
     <router-link to="/news">行业资讯</router-link>
      </nav>

      <div class="nav-actions">
        <el-button type="primary" round @click="$router.push('/login')">注册体验</el-button>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="hero-section">
      <!-- 副标题 -->
      <p class="sub-title" :class="{ 'fade-up-show': showSub }">
        专业团队全程在线，服务无断点，使用无担忧！
      </p>
      
      <!-- 主标题 (分段控制) -->
      <h1 class="main-title">
        <span class="left-text" :class="{ 'fade-in-show': showLeft }">让宠物医院和</span>
        <span class="highlight" :class="{ 'pop-up-show': showPop }">“双系统”</span>
        <span class="right-text" :class="{ 'fade-in-show': showRight }">说再见</span>
      </h1>

      <!-- 按钮区 -->
      <div class="action-buttons" :class="{ 'fade-up-show': showBtns }">
        <el-button class="btn-download" round size="large" @click="goToDashboard">查看大屏</el-button>
        <el-button type="primary" class="btn-try" round size="large" @click="$router.push('/login')">免费试用</el-button>
      </div>
    </main>

    <!-- 底部超大背景文字 (一开场就存在) -->
    <div class="footer-watermark">
      TATAVET
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 控制各个元素显示的开关
const showHeader = ref(false)
const showLeft = ref(false)
const showRight = ref(false)
const showPop = ref(false) // 双系统弹出
const showSub = ref(false)
const showBtns = ref(false)

const goToDashboard = () => {
  window.open('http://localhost:5175', '_blank')
}

onMounted(() => {
  // 使用 setTimeout 编排动画时间轴 (单位: 毫秒)
  // 1. 导航栏瞬间出现
  showHeader.value = true 

  // 0.8秒时：左边文字和右边文字淡入
  setTimeout(() => {
    showLeft.value = true
    showRight.value = true
  }, 800)

  // 2.0秒时（左右字站稳后）：“双系统” 弹跳出现
  setTimeout(() => {
    showPop.value = true
  }, 2000)

  // 2.3秒时（双系统弹出后）：副标题和按钮快速上浮
  setTimeout(() => {
    showSub.value = true
    showBtns.value = true
  }, 2300)

  // 2.5秒时：顶部导航栏出现，完成全部入场
//   setTimeout(() => {
//     showHeader.value = true
//   }, 2500)
})
</script>

<style scoped>
/* 基础布局 */
.marketing-page {
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* --- 顶部导航栏 --- */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  height: 80px;
  /* 核心吸顶代码 */
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95); /* 加一点透明背景 */
  backdrop-filter: blur(10px); /* 毛玻璃效果，显得很高级 */
  border-bottom: 1px solid #ebeef5;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.8s ease;
}
.nav-show {
  opacity: 1;
  transform: translateY(0);
}

.logo-area { display: flex; align-items: center; gap: 8px; }
.logo-icon { width: 36px; height: 36px; background: #2b7cff; color: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 20px; }
.logo-text { font-size: 20px; font-weight: bold; color: #2b7cff; letter-spacing: 1px; }
.nav-links { display: flex; gap: 30px; }
.nav-links a { text-decoration: none; color: #606266; font-size: 15px; transition: color 0.3s; }
.nav-links a:hover, .nav-links a.active { color: #2b7cff; font-weight: bold; }
.nav-links a.active { background: #eef5ff; padding: 8px 20px; border-radius: 20px; color: #2b7cff; }
.nav-actions .el-button { background-color: #2b7cff; border-color: #2b7cff; padding: 10px 24px; font-size: 16px; }

/* --- 主体内容区 --- */
.hero-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  z-index: 10;
}

/* 主标题排版 */
.main-title {
  font-size: 56px;
  font-weight: 600;
  color: #303133;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
}

.highlight {
  color: #2b7cff;
  font-style: italic;
  font-weight: 800;
  display: inline-block; /* 必须行内块才能做缩放动画 */
}

/* 副标题 & 按钮 */
.sub-title { font-size: 18px; color: #606266; letter-spacing: 2px; margin-bottom: 30px; opacity: 0; }
.action-buttons { display: flex; gap: 30px; opacity: 0; }
.btn-download { background: #3b4757; color: white; border: none; width: 160px; font-size: 18px; }
.btn-download:hover { background: #2c3645; color: white; }
.btn-try { background: #2b7cff; border: none; width: 160px; font-size: 18px; }

/* --- 底部超大背景文字 --- */
.footer-watermark {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 280px;
  font-weight: 900;
  color: rgba(43, 124, 255, 0.08);
  -webkit-text-stroke: 2px rgba(43, 124, 255, 0.2);
  letter-spacing: 10px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
}

/* =========================================
   动画特效 (核心)
   ========================================= */

/* 1. 左右文字：淡入 + 从两侧向内平移 (蒙氏高级感) */
.left-text { opacity: 0; transform: translateX(-40px); transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.right-text { opacity: 0; transform: translateX(40px); transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.fade-in-show { opacity: 1; transform: translateX(0); }

/* 2. 双系统：弹性放大 (弹跳感) */
.highlight { opacity: 0; transform: scale(0.3); }
.pop-up-show {
  opacity: 1;
  /* 使用带有回弹效果的贝塞尔曲线 */
  animation: popBounce 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
@keyframes popBounce {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.2); } /* 先放大到 1.2 倍 */
  100% { opacity: 1; transform: scale(1); } /* 弹回正常大小 */
}

/* 3. 副标题和按钮：向上浮动淡入 */
.fade-up-show {
  animation: fadeUp 0.6s ease-out forwards;
}
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>