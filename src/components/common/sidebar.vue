<template>
  <div class="sidebar" ref="sidebar">
    <ul>
      <li>
        <i class="iconfont icon-goumai"></i>
        <div>收银台</div>
      </li>
      <li>
        <i class="iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="iconfont icon-huiyuan"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="iconfont icon-caidan"></i>
        <div>统计</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

<style lang="stylus" scoped>
.sidebar
 height 100%
 width 5%
 float left
 color #fff
 font-size 10px
 background-color #1d8ce0
 .iconfont
   font-size 24px
  & li 
    text-align center
    border-bottom 1px solid #20a0ff
    padding 10px

    
</style>