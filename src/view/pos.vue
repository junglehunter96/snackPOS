<template>
  <div class="pos">
   <el-row>
  <el-col :span="7">
      <order-tab></order-tab>
    </el-col>
  <el-col :span="17">

    </el-col>
  </el-row>
  </div>
</template>

<script>
import orderTab from 'components/order-tab'
  export default {
    name: "pos",
    components:{
      orderTab,
    }
  }
</script>

<style lang="stylus" scoped>
.pos
  height 100%
  .el-row
    height 100%
    .el-col
      height 100%
</style>