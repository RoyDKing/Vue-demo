<template>
  <div id="app" class="page page-current">
      <nav class="bar bar-tab">
          <router-link  to="/home" active-class="active" class="tab-item">
              <span class="icon icon-home"></span>
              <span class="tab-label">首页</span>
          </router-link>
          <router-link to="/message" active-class="active" class="tab-item">
              <span class="icon icon-message"></span>
              <span class="tab-label">消息</span>
          </router-link>
          <router-link to="/scroll" active-class="active" class="tab-item">
              <span class="icon icon-search"></span>
              <span class="tab-label">列表</span>
          </router-link>
          <router-link to="/me" active-class="active" class="tab-item">
              <span class="icon icon-me"></span>
              <span class="tab-label">我</span>
          </router-link>
      </nav>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

</script>

<style>
    .container{
        height:100%;
    }
</style>
