<template>
  <div class="admin-layout">
    <!-- 侧边栏 -->
    <aside class="sidebar">
      <div class="logo">
        <h2>🛡️ 平台管理端</h2>
        <p>SaaS 运营大屏</p>
      </div>
      <nav class="menu">
        <router-link to="/dashboard">📊 数据总览大屏</router-link>
        <router-link to="/tenants">🏢 租户与门店管理</router-link>
        <router-link to="/audit">📜 全局审计日志</router-link>
      </nav>
    </aside>

    <!-- 内容区 -->
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.admin-layout { display: flex; height: 100vh; font-family: sans-serif; color: #fff; }
.sidebar { width: 240px; background: #091021; border-right: 1px solid rgba(0, 162, 255, 0.2); display: flex; flex-direction: column; }
.logo { padding: 30px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
.logo h2 { color: #00a2ff; font-size: 20px; margin-bottom: 5px; }
.logo p { color: #889fbb; font-size: 12px; }
.menu { padding: 20px 10px; display: flex; flex-direction: column; gap: 10px; }
.menu a { color: #889fbb; text-decoration: none; padding: 12px 20px; border-radius: 8px; transition: all 0.3s; }
.menu a:hover, .menu a.router-link-active { background: rgba(0, 162, 255, 0.1); color: #00a2ff; border-left: 3px solid #00a2ff; }
.main-content { flex: 1; overflow-y: auto; }
</style>