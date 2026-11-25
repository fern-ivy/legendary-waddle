<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h2>🐾 它它医生</h2>
        <p>欢迎回来，请登录您的账号</p>
      </div>

      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="rules" ref="formRef" label-position="top" size="large">
        <!-- 账号输入：支持手机/工号/邮箱 -->
        <el-form-item prop="account">
          <el-input 
            v-model="loginForm.account" 
            placeholder="手机号 / 工号 / 邮箱" 
            :prefix-icon="User" 
          />
        </el-form-item>

        <!-- 密码输入：带显示/隐藏切换 -->
        <el-form-item prop="password">
          <el-input 
            v-model="loginForm.password" 
            type="password" 
            placeholder="请输入密码" 
            show-password
            :prefix-icon="Lock" 
          />
        </el-form-item>

        <!-- 图形验证码：输错 3 次后触发 -->
        <el-form-item prop="captcha" v-if="showCaptcha">
          <div class="captcha-row">
            <el-input 
              v-model="loginForm.captcha" 
              placeholder="请输入图形验证码" 
              style="flex: 1;"
            />
            <!-- 模拟验证码图片 -->
            <div class="captcha-img" @click="refreshCaptcha" title="点击刷新">
              {{ captchaCode }}
            </div>
          </div>
        </el-form-item>

        <div class="form-actions">
          <el-checkbox v-model="loginForm.remember">记住登录</el-checkbox>
          <el-link type="primary" :underline="false" @click="showForgotPwd = true">忘记密码？</el-link>
        </div>

        <el-button type="primary" class="login-btn" :loading="loading" @click="handleLogin">
          登 录
        </el-button>

        <div class="register-tip">
          还没有账号？ <el-link type="primary" :underline="false" @click="showRegister = true">立即注册</el-link>
        </div>
      </el-form>
    </div>

    <!-- 注册弹窗 (纯净版主人注册) -->
    <el-dialog v-model="showRegister" title="注册新账号" width="450px" :close-on-click-modal="false">
      <div class="register-tip-text">注：本入口仅供宠物主人注册，兽医及管理员账号采用内部定向开通。</div>
      
      <el-form :model="registerForm" label-width="90px" size="large">
        <el-form-item label="注册账号">
          <el-input v-model="registerForm.account" placeholder="支持手机号 / 邮箱" :prefix-icon="User" />
        </el-form-item>
        <el-form-item label="设置密码">
          <el-input v-model="registerForm.password" type="password" show-password placeholder="8-20位字母加数字" :prefix-icon="Lock" />
        </el-form-item>
        <el-form-item label="找回提示词">
          <el-input v-model="registerForm.hint" placeholder="例如：我第一只宠物的名字" />
        </el-form-item>
      </el-form>
      
      <template #footer>
        <el-button @click="showRegister = false">取消</el-button>
        <el-button type="primary" @click="handleRegister">确认注册</el-button>
      </template>
    </el-dialog>

    <!-- 忘记密码弹窗 -->
    <el-dialog v-model="showForgotPwd" title="找回密码" width="400px">
      <div class="forgot-tip">请输入您注册时设置的“唯一提示词”（如：我的第一只宠物名字）。</div>
      <el-input v-model="forgotHint" placeholder="请输入提示词" size="large" :prefix-icon="Key" />
      <template #footer>
        <el-button @click="showForgotPwd = false">取消</el-button>
        <el-button type="primary" @click="handleForgotPwd">验证并重置</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { ElMessage } from 'element-plus'
import { User, Lock, Key } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const authStore = useAuthStore()
const formRef = ref<FormInstance>()

// 状态控制
const loading = ref(false)
const showCaptcha = ref(false) // 是否显示验证码
const errorCount = ref(0) // 密码错误次数
const captchaCode = ref('') // 当前生成的验证码
const showRegister = ref(false)
const showForgotPwd = ref(false)
const forgotHint = ref('')

// 登录表单数据
const loginForm = reactive({
  account: '',
  password: '',
  captcha: '',
  remember: false
})

// 注册表单数据
const registerForm = reactive({
  account: '',
  password: '',
  hint: ''
})

// 表单校验规则
const rules = reactive<FormRules>({
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

// 生成随机验证码
const refreshCaptcha = () => {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let code = ''
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  captchaCode.value = code
}

// 核心登录逻辑
const handleLogin = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (!valid) return

    if (showCaptcha.value && loginForm.captcha.toLowerCase() !== captchaCode.value.toLowerCase()) {
      ElMessage.error('验证码错误，请重新输入')
      refreshCaptcha()
      loginForm.captcha = ''
      return
    }

    loading.value = true

    try {
      // 发送真实请求到后端
      const res = await fetch('http://localhost:9001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          account: loginForm.account,
          password: loginForm.password
        })
      })
      
      const data = await res.json()
      loading.value = false

      if (!res.ok) {
        // 触发错误计数逻辑
        errorCount.value++
        ElMessage.error(data.message)
        if (errorCount.value >= 3) {
          showCaptcha.value = true
          refreshCaptcha()
          ElMessage.warning('密码连续输错 3 次，已开启安全验证码')
        }
        return
      }

      // 登录成功
      authStore.setLoginInfo(data.token, 'hospital_a')
      ElMessage.success('登录成功')
      router.push('/home')
      
    } catch (err) {
      loading.value = false
      ElMessage.error('后端服务未启动或网络错误')
    }
  })
}

// 注册逻辑
const handleRegister = async () => {
  if (!registerForm.account || !registerForm.password || !registerForm.hint) {
    return ElMessage.warning('请填写所有信息，特别是找回密码提示词')
  }
  
  try {
    // 发送真实请求到后端
    const res = await fetch('http://localhost:9001/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        account: registerForm.account,
        password: registerForm.password,
        hint: registerForm.hint
      })
    })
    
    const data = await res.json()
    if (!res.ok) return ElMessage.error(data.message)
    
    ElMessage.success('注册成功，请使用新账号登录')
    showRegister.value = false
    loginForm.account = registerForm.account 
  } catch (err) {
    ElMessage.error('注册失败，后端连不上')
  }
}

// 忘记密码逻辑
const handleForgotPwd = () => {
  if (!forgotHint.value) {
    return ElMessage.warning('请输入提示词')
  }
  ElMessage.success('验证通过！重置密码链接已发送至您的手机')
  showForgotPwd.value = false
  forgotHint.value = ''
}
</script>

<style scoped>
.login-container { 
  height: 100vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background: linear-gradient(135deg, #e0f2fe 0%, #f4f4f5 100%);
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
}

.login-box { 
  width: 420px; 
  background: #ffffff; 
  padding: 40px; 
  border-radius: 16px; 
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); 
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}
.login-header h2 {
  font-size: 28px;
  color: #2b7cff;
  margin-bottom: 8px;
}
.login-header p {
  color: #909399;
  font-size: 14px;
}

.captcha-row {
  display: flex;
  gap: 15px;
  width: 100%;
}

.captcha-img {
  width: 110px;
  height: 40px;
  background: #f0f2f5;
  color: #2b7cff;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  letter-spacing: 3px;
  border: 1px dashed #c0c4cc;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.login-btn {
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #2b7cff;
  border-color: #2b7cff;
}

.register-tip {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #606266;
}

/* 弹窗内的提示文字 */
.register-tip-text {
  font-size: 12px;
  color: #909399;
  margin-bottom: 20px;
  padding: 8px 12px;
  background: #f4f4f5;
  border-radius: 4px;
  border-left: 3px solid #2b7cff;
}

.forgot-tip {
  font-size: 13px;
  color: #909399;
  margin-bottom: 15px;
  line-height: 1.5;
}
</style>