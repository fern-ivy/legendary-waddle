<template>
  <div class="about-page">
    <!-- 顶部标题 -->
    <div class="header">
      <h1>爱宠云 · 核心医疗团队</h1>
      <p>汇聚行业顶尖兽医资源，多学科联合诊疗，为您爱宠的健康保驾护航</p>
    </div>
    
    <!-- 综合实力展示区 -->
    <div class="showcase-container">
      
      <!-- 左侧：主推介绍 (大块文字) -->
      <div class="main-intro">
        <h2>专业团队，实力背书</h2>
        <p class="desc">
          我们的全职执业兽医团队均具备 <strong>10 年以上临床经验</strong>，核心成员多次荣获 
          <strong>“省级杰出青年兽医”</strong>、<strong>“小动物临床协会常务理事”</strong> 等美称。
          我们拒绝流水线看病，坚持为每一只宠物提供定制化的诊疗方案。
        </p>
        <div class="tags">
          <el-tag type="primary" effect="plain" size="large">AOVET 国际骨科认证</el-tag>
          <el-tag type="success" effect="plain" size="large">零医疗事故记录</el-tag>
        </div>
      </div>

      <!-- 右侧：接诊病症图谱 (网格卡片) -->
      <div class="symptom-grid">
        <div class="symptom-box">
          <div class="icon">🩺</div>
          <h3>皮肤与内分泌</h3>
          <p>顽固性皮肤病、真菌感染、甲状腺功能异常等复杂病例。</p>
        </div>
        <div class="symptom-box">
          <div class="icon">🦴</div>
          <h3>骨科与软组织外科</h3>
          <p>骨折修复、髌骨脱位矫正及高难度微创绝育手术。</p>
        </div>
        <div class="symptom-box">
          <div class="icon">❤️</div>
          <h3>心血管与消化内科</h3>
          <p>急慢性肠胃炎、胰腺炎、老年犬猫心脏病长期调理。</p>
        </div>
        <div class="symptom-box">
          <div class="icon">🧬</div>
          <h3>影像与检验科</h3>
          <p>配备 DR、彩超及全套生化仪，提供精准的辅助诊断依据。</p>
        </div>
      </div>

    </div>

    <!-- 底部转化引导 -->
    <div class="bottom-cta">
      <h3>想查看具体医生的出诊时间与患者评价？</h3>
      <p>注册并登录后，即可查看医生排班、在线预约挂号。</p>
      <el-button type="primary" size="large" round class="btn-cta" @click="$router.push('/login')">
        立即注册体验
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 这里不需要再写医生数组了，我们是综合展现实力
</script>

<style scoped>
.about-page { 
  min-height: 100vh; 
  background: #f9fbfc; 
  padding: 80px 20px; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
}

.header { text-align: center; margin-bottom: 60px; }
.header h1 { font-size: 38px; color: #1a1a1a; margin-bottom: 15px; font-weight: 600; letter-spacing: 2px; }
.header p { color: #666; font-size: 16px; letter-spacing: 1px; }

/* 核心展示区：左右分栏 */
.showcase-container {
  display: flex;
  gap: 50px;
  max-width: 1100px;
  width: 100%;
  margin-bottom: 80px;
}

/* 左侧介绍 */
.main-intro {
  flex: 1;
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border-left: 6px solid #2b7cff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main-intro h2 { font-size: 26px; color: #303133; margin-bottom: 20px; }
.desc { font-size: 15px; color: #606266; line-height: 2; margin-bottom: 30px; }
.desc strong { color: #2b7cff; font-weight: bold; }
.tags { display: flex; gap: 15px; flex-wrap: wrap; }

/* 右侧病症网格 */
.symptom-grid {
  flex: 1.2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.symptom-box {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #ebeef5;
  transition: all 0.3s ease;
}
.symptom-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(43, 124, 255, 0.08);
  border-color: #b3d4ff;
}
.symptom-box .icon { font-size: 32px; margin-bottom: 15px; }
.symptom-box h3 { font-size: 17px; color: #303133; margin-bottom: 10px; }
.symptom-box p { font-size: 13px; color: #909399; line-height: 1.6; }

/* 底部转化引导 */
.bottom-cta {
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%);
  padding: 50px;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 15px 40px rgba(43, 124, 255, 0.08);
  border: 1px solid #e6f0ff;
}
.bottom-cta h3 { font-size: 22px; color: #303133; margin-bottom: 10px; font-weight: 600;}
.bottom-cta p { color: #909399; margin-bottom: 25px; }
.btn-cta { padding: 12px 40px; font-size: 16px; font-weight: bold; }
</style>