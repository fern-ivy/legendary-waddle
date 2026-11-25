<template>
  <div class="dashboard">
    <header class="header">
      <h1>📊 运营数据总览大屏</h1>
      <span>实时监控 · 多租户全局视图</span>
    </header>

    <!-- 数据指标卡片 -->
    <div class="stats-row">
      <div class="stat-card">
        <p>累计服务宠物</p>
        <h2>12,450 <span>只</span></h2>
      </div>
      <div class="stat-card">
        <p>今日接诊量</p>
        <h2>342 <span>次</span></h2>
      </div>
      <div class="stat-card">
        <p>活跃连锁门店</p>
        <h2>28 <span>家</span></h2>
      </div>
      <div class="stat-card">
        <p>平均挂号等待</p>
        <h2>14 <span>分钟</span></h2>
      </div>
    </div>

    <!-- 图表区 -->
    <div class="charts-row">
      <div class="chart-box">
        <h3>疾病分布占比</h3>
        <div ref="pieChartRef" style="width: 100%; height: 350px;"></div>
      </div>
      <div class="chart-box">
        <h3>近 7 天接诊趋势</h3>
        <div ref="lineChartRef" style="width: 100%; height: 350px;"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const pieChartRef = ref<HTMLElement | null>(null)
const lineChartRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // 这里放你之前的 ECharts 配置代码（可以直接复制之前的）
  // 注意把颜色改成深色背景适配的亮色。
  if (pieChartRef.value) {
    const pie = echarts.init(pieChartRef.value)
    pie.setOption({
      tooltip: { trigger: 'item' },
      series: [{ type: 'pie', radius: ['40%', '70%'], data: [
        { value: 1048, name: '皮肤病' }, { value: 735, name: '肠胃炎' }, 
        { value: 580, name: '骨科疾病' }, { value: 300, name: '其他' }
      ]}]
    })
  }
  
  if (lineChartRef.value) {
    const line = echarts.init(lineChartRef.value)
    line.setOption({
      xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
      yAxis: { type: 'value' },
      series: [{ data: [120, 132, 101, 134, 90, 230, 210], type: 'line', smooth: true }]
    })
  }
})
</script>

<style scoped>
.dashboard { padding: 30px; }
.header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; }
.header h1 { font-size: 26px; color: #00a2ff; margin: 0; }
.header span { color: #889fbb; font-size: 14px; }
.stats-row { display: flex; gap: 20px; margin-bottom: 30px; }
.stat-card { flex: 1; background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 162, 255, 0.2); padding: 20px; border-radius: 8px; }
.stat-card p { color: #889fbb; font-size: 14px; margin-bottom: 10px; }
.stat-card h2 { color: #fff; font-size: 32px; margin: 0; }
.stat-card h2 span { font-size: 14px; color: #889fbb; font-weight: normal; }
.charts-row { display: flex; gap: 20px; }
.chart-box { flex: 1; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; }
.chart-box h3 { color: #fff; margin-bottom: 15px; font-size: 16px; font-weight: normal;}
</style>