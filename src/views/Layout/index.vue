<template>
  <div class="layout">
    <!-- 头部导航 -->
    <van-nav-bar :title="navBarTitle" />
    <!-- 主体 -->
    <main>
      <router-view></router-view>
    </main>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      active: 0
    }
  },
  computed: {
    navBarTitle() {
      return this.$route.path === '/layout/home' ? '首页' : '搜索'
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  padding: 50px 0;
}
.van-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
