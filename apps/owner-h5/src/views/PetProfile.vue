<template>
  <div class="pet-page">
    <div class="header">
      <div>
        <h1>🐾 宠物档案管理</h1>
        <p class="sub-title">建立标准化健康档案，为精准诊疗提供依据</p>
      </div>
      <el-button type="primary" size="large" @click="showAddDialog = true">+ 新增宠物建档</el-button>
    </div>

    <!-- 宠物卡片列表 -->
    <div class="pet-grid">
      <el-card v-for="pet in petList" :key="pet.id" class="pet-card" shadow="hover">
        <div class="pet-header">
          <div class="pet-avatar">{{ pet.petName.charAt(0) }}</div>
          <div class="pet-basic">
            <h2>{{ pet.petName }}</h2>
            <p>{{ pet.species }} · {{ pet.breed }}</p>
          </div>
        </div>
        
        <div class="pet-info">
          <div class="info-item"><span>性别：</span>{{ pet.gender }}</div>
          <div class="info-item"><span>年龄：</span>{{ calculateAge(pet.birthDate) }}</div>
          <div class="info-item"><span>体重：</span>{{ pet.weight ? pet.weight + ' kg' : '未记录' }}</div>
          <div class="info-item"><span>主人：</span>{{ pet.ownerName }}</div>
        </div>

        <div v-if="pet.medicalHistory" class="alert-box">
          ⚠️ 过敏/病史：{{ pet.medicalHistory }}
        </div>
      </el-card>
      
      <el-empty v-if="petList.length === 0" description="暂无宠物档案，快去建档吧" />
    </div>

    <!-- 新增建档弹窗 -->
    <el-dialog v-model="showAddDialog" title="新建宠物健康档案" width="600px" :close-on-click-modal="false">
      <el-form :model="petForm" label-width="100px" label-position="top" class="custom-form">
        <div class="section-title">👤 主人信息</div>
        <div class="form-row">
          <el-form-item label="主人称呼" required>
            <el-input v-model="petForm.ownerName" placeholder="如：张女士" />
          </el-form-item>
        </div>

        <div class="section-title">🐶 宠物基础信息</div>
        <div class="form-row two-cols">
          <el-form-item label="宠物昵称" required>
            <el-input v-model="petForm.petName" placeholder="如：旺财" />
          </el-form-item>
          <el-form-item label="物种" required>
            <el-select v-model="petForm.species" placeholder="请选择物种">
              <el-option label="犬" value="犬" />
              <el-option label="猫" value="猫" />
              <el-option label="异宠（兔/鸟/龟等）" value="异宠" />
            </el-select>
          </el-form-item>
        </div>

        <div class="form-row two-cols">
          <el-form-item label="品种" required>
            <el-input v-model="petForm.breed" placeholder="如：金毛、英短" />
          </el-form-item>
          <el-form-item label="性别与绝育" required>
            <el-select v-model="petForm.gender" placeholder="请选择">
              <el-option label="公（未绝育）" value="公（未绝育）" />
              <el-option label="公（已绝育）" value="公（已绝育）" />
              <el-option label="母（未绝育）" value="母（未绝育）" />
              <el-option label="母（已绝育）" value="母（已绝育）" />
            </el-select>
          </el-form-item>
        </div>

        <div class="form-row two-cols">
          <el-form-item label="出生日期" required>
            <el-date-picker v-model="petForm.birthDate" type="date" placeholder="选择日期" value-format="YYYY-MM-DD" style="width: 100%;" />
          </el-form-item>
          <el-form-item label="体重 (kg)">
            <el-input-number v-model="petForm.weight" :precision="2" :step="0.1" :min="0" style="width: 100%;" />
          </el-form-item>
        </div>

        <div class="section-title">🏥 医疗提示</div>
        <div class="form-row">
          <el-form-item label="既往病史 / 过敏史">
            <el-input v-model="petForm.medicalHistory" type="textarea" rows="2" placeholder="如：对青霉素过敏等" />
          </el-form-item>
        </div>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddPet">确认建档</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

const showAddDialog = ref(false)
const petList = ref<any[]>([])

const petForm = ref({
  ownerName: '', petName: '', species: '犬', breed: '', 
  gender: '公（未绝育）', birthDate: '', weight: 0, medicalHistory: ''
})

// 自动计算年龄
const calculateAge = (birthDate: string) => {
  if (!birthDate) return '未知'
  const age = new Date().getFullYear() - new Date(birthDate).getFullYear()
  return age > 0 ? `${age} 岁` : '不到 1 岁'
}

// 从 localStorage 读取数据
const fetchPets = () => {
  const data = localStorage.getItem('mock_pets')
  petList.value = data ? JSON.parse(data) : []
}

// 建档逻辑（存入 localStorage）
const handleAddPet = () => {
  if (!petForm.value.petName || !petForm.value.breed || !petForm.value.birthDate || !petForm.value.ownerName) {
    return ElMessage.warning('请填写所有必填项')
  }

  const newPet = {
    id: Date.now(),
    ...petForm.value,
    createdAt: new Date().toLocaleDateString()
  }

  // 追加到数组并保存
  petList.value.unshift(newPet)
  localStorage.setItem('mock_pets', JSON.stringify(petList.value))

  ElMessage.success('建档成功！')
  showAddDialog.value = false
  petForm.value = { ownerName: '', petName: '', species: '犬', breed: '', gender: '公（未绝育）', birthDate: '', weight: 0, medicalHistory: '' }
}

onMounted(() => {
  fetchPets()
})
</script>

<style scoped>
.pet-page { padding: 30px 40px; max-width: 1000px; margin: 0 auto; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.header h1 { font-size: 26px; color: #303133; margin: 0 0 5px 0; }
.sub-title { color: #909399; font-size: 14px; margin: 0; }
.pet-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.pet-card { border-radius: 12px; transition: all 0.3s; border-top: 4px solid #2b7cff; }
.pet-card:hover { transform: translateY(-5px); }
.pet-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; border-bottom: 1px dashed #ebeef5; padding-bottom: 15px; }
.pet-avatar { width: 60px; height: 60px; background: #eef5ff; color: #2b7cff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 28px; font-weight: bold; }
.pet-basic h2 { margin: 0 0 5px 0; font-size: 20px; color: #303133; }
.pet-basic p { margin: 0; color: #909399; font-size: 13px; }
.pet-info { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 14px; color: #606266; margin-bottom: 15px; }
.info-item span { color: #909399; }
.alert-box { background: #fef0f0; color: #f56c6c; font-size: 13px; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #f56c6c; }
.section-title { font-size: 15px; font-weight: bold; color: #2b7cff; margin: 10px 0 15px 0; padding-left: 10px; border-left: 3px solid #2b7cff; }
.form-row { margin-bottom: 5px; }
.form-row.two-cols { display: flex; gap: 20px; }
.form-row.two-cols .el-form-item { flex: 1; }
:deep(.el-form-item__label) { font-weight: 500; color: #606266; padding-bottom: 5px; }
</style>