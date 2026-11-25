<template>
  <div class="news-page">
    <div class="header">
      <h1>📰 行业资讯与动态</h1>
      <p>洞察宠物医疗行业趋势，分享科学养宠前沿知识</p>
    </div>

    <div class="news-container">
      <!-- 左侧：头条推荐 -->
      <div class="featured-news">
        <div class="featured-cover">
          <span class="badge">🔥 头条推荐</span>
        </div>
        <div class="featured-content">
          <h2>2024 中国宠物医疗行业白皮书：数字化 SaaS 成为连锁医院标配</h2>
          <p>随着宠物经济的爆发，传统宠物医院面临“系统孤岛”与“数据不互通”的痛点。报告指出，采用多租户 SaaS 架构和 AI 辅助诊断的医疗机构，接诊效率提升了 45%，客户流失率降低了 30%...</p>
          <div class="meta">
            <span>📅 2024-11-15</span>
            <span>👁️ 阅读 3.2w</span>
          </div>
        </div>
      </div>

      <!-- 右侧：资讯列表 -->
      <div class="news-list">
        <div class="news-item" v-for="(item, index) in newsList" :key="index">
          <div class="item-date">
            <span class="day">{{ item.day }}</span>
            <span class="month">{{ item.month }}</span>
          </div>
          <div class="item-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="tags">
              <el-tag size="small" type="info">{{ item.category }}</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="load-more">
      <el-button round @click="loadMore">加载更多资讯</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const newsList = ref([
  {
    day: '12',
    month: '2024-11',
    title: '如何预防秋冬季犬猫高发的呼吸道疾病？',
    desc: '气温骤降，犬猫传染病进入高发期。本文整理了兽医专家的预防建议，包括疫苗接种时间表与环境消杀指南。',
    category: '科学养宠'
  },
  {
    day: '08',
    month: '2024-11',
    title: 'AI 大模型在宠物医疗中的落地实践：从“瞎编”到“可溯源”',
    desc: '传统大语言模型在医疗问诊中容易产生幻觉。引入 RAG（检索增强生成）技术后，AI 诊断不仅准确率大幅提升，还能提供文献页码溯源，成为医生的得力助手。',
    category: '前沿技术'
  },
  {
    day: '25',
    month: '2024-10',
    title: '连锁宠物医院进销存管理避坑指南：库存盘亏怎么办？',
    desc: '药品过期、库存对不上、频繁调拨导致数据混乱？SaaS 系统如何通过扫码出入库与自动预警，帮医院挽回隐形利润。',
    category: '运营管理'
  },
  {
    day: '15',
    month: '2024-10',
    title: '高并发下的秒杀级抢号：如何保证线上预约不超卖？',
    desc: '节假日挂号高峰极易导致系统崩溃。揭秘底层技术：Redis Lua 脚本原子扣减与 MySQL 乐观锁，全面保障号源零超卖。',
    category: '技术分享'
  }
])

const loadMore = () => {
  ElMessage.info('已加载全部资讯')
}
</script>

<style scoped>
.news-page {
  min-height: 100vh;
  background: #f9fbfc;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
}

.header { text-align: center; margin-bottom: 50px; }
.header h1 { font-size: 36px; color: #303133; margin-bottom: 15px; font-weight: 600; letter-spacing: 2px; }
.header p { color: #909399; font-size: 16px; }

.news-container {
  display: flex;
  gap: 40px;
  max-width: 1100px;
  width: 100%;
}

/* 左侧头条 */
.featured-news {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: transform 0.3s;
}
.featured-news:hover { transform: translateY(-5px); }

.featured-cover {
  height: 300px;
  background: linear-gradient(135deg, #2b7cff 0%, #00d2ff 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  backdrop-filter: blur(4px);
}

.featured-content { padding: 30px; }
.featured-content h2 { font-size: 24px; color: #303133; margin-bottom: 15px; line-height: 1.4; }
.featured-content p { color: #606266; font-size: 15px; line-height: 1.8; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.meta { display: flex; gap: 20px; color: #909399; font-size: 13px; }

/* 右侧列表 */
.news-list {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-item {
  display: flex;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  transition: all 0.3s;
}
.news-item:hover {
  box-shadow: 0 8px 24px rgba(43, 124, 255, 0.08);
  transform: translateX(5px);
}

.item-date {
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ebeef5;
  margin-right: 20px;
  padding-right: 20px;
}
.item-date .day { font-size: 28px; font-weight: bold; color: #2b7cff; line-height: 1; margin-bottom: 5px; }
.item-date .month { font-size: 13px; color: #909399; }

.item-content { flex: 1; }
.item-content h3 { font-size: 18px; color: #303133; margin-bottom: 10px; transition: color 0.3s; }
.news-item:hover h3 { color: #2b7cff; }
.item-content p { color: #606266; font-size: 14px; line-height: 1.6; margin-bottom: 15px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

.load-more { margin-top: 50px; }
</style>