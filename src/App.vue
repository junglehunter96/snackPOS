<template>
  <div id="app">
    <!--左侧导航区 -->
    <sidebar></sidebar>

    <!-- 路由区 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Sidebar from "components/common/sidebar";
export default {
  components: {
    Sidebar
  }
}
</script>
<style lang="stylus">
@import '~common/stylus/index.styl';

.main {
  float: left;
  width: 95%;
  background-color: #EFF2F7;
  height: 600px;
  overflow: auto;
}
</style>
