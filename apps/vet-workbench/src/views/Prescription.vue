<template>
  <div class="pres-page">
    <h2>✍️ 接诊开单</h2>
    
    <el-card class="form-card">
      <el-form :model="presForm" label-width="100px">
        <el-form-item label="当前接诊宠物">
          <el-input v-model="presForm.petName" disabled />
        </el-form-item>
        
        <el-form-item label="诊断结果" required>
          <el-input v-model="presForm.diagnosis" type="textarea" rows="2" placeholder="请输入最终诊断结果..." />
        </el-form-item>

        <el-form-item label="开具药品" required>
          <el-select v-model="presForm.medicine" placeholder="请选择药品（从药库拉取）" style="width: 100%;">
            <el-option label="阿莫西林克拉维酸钾片" value="阿莫西林克拉维酸钾片" />
            <el-option label="宠物专用益生菌" value="宠物专用益生菌" />
            <el-option label="体外驱虫滴剂" value="体外驱虫滴剂" />
          </el-select>
        </el-form-item>

        <el-form-item label="用法用量" required>
          <el-input v-model="presForm.usage" placeholder="如：每日两次，每次半片" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitPrescription">提交病历并生成处方单</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const presForm = ref({
  petName: '旺财',
  diagnosis: '',
  medicine: '',
  usage: ''
})

const submitPrescription = () => {
  if (!presForm.value.diagnosis || !presForm.value.medicine) {
    return ElMessage.warning('请填写完整诊断和药品信息')
  }
  ElMessage.success('处方开具成功！已同步至主人端待支付订单')
  presForm.value.diagnosis = ''
  presForm.value.medicine = ''
  presForm.value.usage = ''
}
</script>

<style scoped>
.pres-page { padding: 20px; background: #fff; border-radius: 8px; margin: 20px; }
h2 { margin-bottom: 20px; color: #303133; }
.form-card { max-width: 600px; box-shadow: none; border: 1px solid #ebeef5; }
</style>