<template>
  <div class="workbench">
    <h1>医生工作台 - 接诊室</h1>
    
    <div class="pet-info">
      <h3>当前就诊宠物：旺财（金毛，3岁）</h3>
      <p>主诉：最近一周皮肤瘙痒，掉毛严重。</p>
    </div>

    <div class="ai-section">
      <h3>🤖 AI 辅助诊断建议</h3>
      <div class="ai-answer">
        <p>根据症状描述，该宠物疑似患有<b>犬猫皮肤病</b>。建议进行皮肤刮片检查，排除真菌或螨虫感染。</p>
      </div>

      <!-- 溯源引用卡片 -->
      <div class="citation-card">
        <span class="cite-title">📚 参考来源</span>
        <div class="cite-item">
          [1] 《犬猫皮肤病学》P142 - 瘙痒性皮肤病的诊断流程
        </div>
      </div>

      <!-- 写操作的二次确认红线 -->
      <div class="confirm-box">
        <p>⚠️ AI 建议执行写操作：</p>
        <p><b>创建病历草稿：诊断结果填写为“疑似皮肤病”</b></p>
        <button class="btn-confirm">确认写入</button>
        <button class="btn-cancel">忽略</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.workbench { padding: 20px; font-family: sans-serif; max-width: 800px; }
.pet-info { background: #f4f4f5; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
.ai-section { border: 1px solid #409eff; border-radius: 8px; padding: 20px; background: #f0f7ff; }
.ai-answer { margin: 15px 0; line-height: 1.6; }
.citation-card { background: #fff; border-left: 4px solid #e6a23c; padding: 10px; margin-bottom: 20px; font-size: 14px; color: #666;}
.cite-title { font-weight: bold; color: #e6a23c; display: block; margin-bottom: 5px; }
.confirm-box { background: #fef0f0; border: 1px solid #f56c6c; padding: 15px; border-radius: 6px; }
.btn-confirm { background: #f56c6c; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-right: 10px;}
.btn-cancel { background: #fff; color: #666; border: 1px solid #ccc; padding: 8px 16px; border-radius: 4px; cursor: pointer;}
</style>