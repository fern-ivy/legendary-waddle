<template>
  <div class="faq-page">
    <div class="header">
      <h1>❓ 常见问题</h1>
      <p>如果您在系统使用过程中遇到问题，这里也许有您想要的答案</p>
    </div>

    <div class="faq-container">
      <!-- 分类 1：账号与收费 -->
      <div class="faq-category">
        <h2>💳 账号开通与收费</h2>
        <el-collapse v-model="activeNames1">
          <el-collapse-item title="1. 如何注册账号并开通门店系统？" name="1">
            <div class="answer">
              您可以在首页点击“注册体验”，填写手机号并验证。注册成功后，系统会自动为您生成一个独立的租户空间（默认门店）。如果是连锁医院，可以在后台申请多门店关联，平台管理员审核资质后即可开通多店管理。
            </div>
          </el-collapse-item>
          <el-collapse-item title="2. 系统怎么收费？后续功能升级需要额外付费吗？" name="2">
            <div class="answer">
              我们采用 SaaS 订阅制（按年付费）。基础版包含挂号、病历、基础库存功能；专业版增加了 AI 智能诊断和运营大屏。在订阅期内，所有同大版本的功能更新均免费提供，无需二次付费。
            </div>
          </el-collapse-item>
          <el-collapse-item title="3. 会员卡充值、积分、次卡是怎么设置的？" name="3">
            <div class="answer">
              在“会员管理”模块中，您可以自定义创建多种卡类型。例如：充值卡（充1000送100）、积分卡（消费1元积1分，可抵现）、次卡（如洗澡10次卡）。系统会自动记录余额与扣减流水，支持跨店核销。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <!-- 分类 2：库存管理 -->
      <div class="faq-category">
        <h2>📦 药品与库存管理</h2>
        <el-collapse v-model="activeNames2">
          <el-collapse-item title="4. 药品入库、出库和盘点怎么记账？" name="4">
            <div class="answer">
              系统支持扫码枪录入。采购药品时进行“入库”操作，系统自动增加库存；医生开处方后，系统自动执行“出库”扣减库存。每日结业或月末支持“一键盘点”，输入实际数量后，系统自动生成盈亏报表。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <!-- 分类 3：业务流程 -->
      <div class="faq-category">
        <h2>🏥 诊疗与预约流程</h2>
        <el-collapse v-model="activeNames3">
          <el-collapse-item title="5. 挂号、复诊和预约的具体流程是什么？" name="5">
            <div class="answer">
              ① 主人端在线选择医生和时段进行“预约挂号”；<br>
              ② 到店后前台确认，系统进入“候诊队列”；<br>
              ③ 医生接诊，开具电子处方和病历；<br>
              ④ 若需复诊，医生在写病历时一键生成“复诊建议”，系统会自动发送提醒给宠物主人，主人可直接点击消息完成复诊预约。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div class="contact-area">
      <p>没有找到您想要的答案？</p>
      <el-button type="primary" round @click="$router.push('/login')">联系客服 / 申请试用</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 控制各个分类默认展开哪一项（默认展开第一项）
const activeNames1 = ref(['1'])
const activeNames2 = ref([])
const activeNames3 = ref([])
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
}

.header { text-align: center; margin-bottom: 50px; }
.header h1 { font-size: 36px; color: #303133; margin-bottom: 15px; font-weight: 600; letter-spacing: 2px; }
.header p { color: #909399; font-size: 16px; }

.faq-container {
  width: 100%;
  max-width: 800px;
}

.faq-category {
  margin-bottom: 40px;
  background: #fff;
  border-radius: 12px;
  padding: 20px 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.faq-category h2 {
  font-size: 20px;
  color: #2b7cff;
  margin-bottom: 15px;
  border-left: 4px solid #2b7cff;
  padding-left: 10px;
}

/* 覆盖一下 Element Plus 的默认样式，让它更大气 */
:deep(.el-collapse) {
  border: none;
}
:deep(.el-collapse-item__header) {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
  padding: 15px 0;
  border-bottom: 1px dashed #ebeef5;
}
:deep(.el-collapse-item__wrap) {
  border-bottom: none;
}

.answer {
  color: #606266;
  font-size: 14px;
  line-height: 1.8;
  padding: 10px 0;
  background: #f9fbfc;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.contact-area {
  margin-top: 20px;
  text-align: center;
}
.contact-area p {
  color: #909399;
  margin-bottom: 15px;
}
</style>