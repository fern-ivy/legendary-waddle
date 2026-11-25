<template>
  <div class="triage-page">
    <div class="triage-card">
      <div class="header">
        <h1>🤖 AI 智能分诊助手</h1>
        <p>请详细描述宠物的症状，AI 将为您推荐最合适的科室</p>
      </div>

      <!-- 聊天展示区 -->
      <div class="chat-area">
        <div class="chat-message ai">
          <div class="avatar">🤖</div>
          <div class="bubble">您好，我是 AI 导诊助手。请问您的宠物哪里不舒服？（例如：拉肚子、皮肤痒、一直咳嗽）</div>
        </div>

        <div class="chat-message user" v-if="userSymptom">
          <div class="bubble">{{ userSymptom }}</div>
          <div class="avatar">👤</div>
        </div>

        <!-- AI 思考中动画 -->
        <div class="chat-message ai" v-if="isThinking">
          <div class="avatar">🤖</div>
          <div class="bubble thinking">
            正在检索医疗知识库<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
          </div>
        </div>

        <!-- AI 诊断结果 -->
                <div class="chat-message ai" v-if="resultDept">
          <div class="avatar">🤖</div>
          <div class="bubble result">
            根据您的描述，建议挂号：
            <el-tag type="success" size="large" effect="dark" class="dept-tag">{{ resultDept }}</el-tag>
            <div style="margin-top: 10px; color: #606266; font-size: 14px;">
              👨‍⚕️ 推荐专家：<b>{{ resultDoctor }}</b>
            </div>
            <div class="action">
              <!-- 跳转到挂号页时，可以带上科室或医生参数 -->
              <el-button type="primary" @click="$router.push('/home/booking')">去预约挂号</el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- 输入区 -->
      <div class="input-area">
        <el-input 
          v-model="symptomInput" 
          placeholder="请输入宠物症状，如：狗狗今天呕吐了三次，没有食欲..."
          size="large"
          @keyup.enter="handleTriage"
        >
          <template #append>
            <el-button type="primary" @click="handleTriage" :disabled="!symptomInput || isThinking">发送</el-button>
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const symptomInput = ref('')
const userSymptom = ref('')
const isThinking = ref(false)
const resultDept = ref('')

// 模拟 AI 知识库匹配逻辑
const resultDoctor = ref('') // 新增

const handleTriage = () => {
  if (!symptomInput.value) return

  userSymptom.value = symptomInput.value
  symptomInput.value = ''
  resultDept.value = ''
  isThinking.value = true

  // 模拟网络请求和 AI 思考时间 (1.5秒)
  setTimeout(() => {
    isThinking.value = false
    const text = userSymptom.value.toLowerCase()

    if (text.includes('吐') || text.includes('拉')) {
      resultDept.value = '消化内科'
      resultDoctor.value = '张医生（内科专家）' // 联动推荐
    } else if (text.includes('皮肤') || text.includes('痒')) {
      resultDept.value = '皮肤科'
      resultDoctor.value = '李医生（主任兽医师）' // 联动推荐
    } else if (text.includes('骨折') || text.includes('腿')) {
      resultDept.value = '骨科'
      resultDoctor.value = '王医生（高级外科专家）' // 联动推荐
    } else {
      resultDept.value = '全科'
      resultDoctor.value = '李医生（主任兽医师）'
    }
  }, 1500)
}
</script>

<style scoped>
.triage-page {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.triage-card {
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px); /* 撑满可视区域 */
}

.header {
  padding: 25px;
  border-bottom: 1px solid #ebeef5;
  text-align: center;
}
.header h1 { font-size: 22px; color: #303133; margin-bottom: 8px; }
.header p { color: #909399; font-size: 14px; }

.chat-area {
  flex: 1;
  padding: 25px;
  overflow-y: auto;
  background: #f9fbfc;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chat-message {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.chat-message.user {
  justify-content: flex-end;
}

.avatar {
  width: 40px;
  height: 40px;
  background: #eef5ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-shrink: 0;
}

.bubble {
  max-width: 70%;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.6;
}

.chat-message.ai .bubble {
  background: #fff;
  border: 1px solid #ebeef5;
  border-top-left-radius: 4px;
  color: #303133;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}

.chat-message.user .bubble {
  background: #2b7cff;
  color: #fff;
  border-top-right-radius: 4px;
}

.thinking { color: #909399; display: flex; align-items: center; }
.dot { animation: blink 1.4s infinite both; font-weight: bold; font-size: 18px; line-height: 1; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }

.result { background: #f0f9eb !important; border-color: #c2e7b0 !important; }
.dept-tag { margin: 0 5px; font-weight: bold; font-size: 16px; }
.action { margin-top: 15px; text-align: right; }

.input-area {
  padding: 20px;
  border-top: 1px solid #ebeef5;
  background: #fff;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>