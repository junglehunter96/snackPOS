<template>
  <div class="pos">
    <el-row>
      <el-col :span="7">
        <order-tab
          :pushGood="goods"
          @delAllGoods="delAllGoods"
        ></order-tab>
      </el-col>
      <el-col :span="17">
        <offer-food @addGoods="getGoods"></offer-food>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import orderTab from 'components/order-tab'
import OfferFood from 'components/offerFood'

export default {
  name: "pos",
  data () {
    return {
      goods: []
    }
  },
  components: {
    orderTab, OfferFood
  },
  methods: {
    delAllGoods() {
      this.goods = []
    },
    getGoods (msg) {
      //判断列表中是否有此商品
      console.log(msg)
      let ishave = false;
      for (let i = 0; i < this.goods.length; i++) {
        if (this.goods[i].goodsId === msg.goodsId) {
          ishave = true
          console.log(ishave)
        }
      };
      //将商品加入到结算列表中
      //如果列表中有此项 count++
      if (ishave) {
        this.goods.forEach(el => {
          if (el.goodsId == msg.goodsId) {
            el.count++
          }
        })
      }
      else {
        //如果列表中没有这项 则新建一个对应项
        let newGoodslist = {
          goodsId: msg.goodsId,
          goodsName: msg.goodsName,
          price: msg.price,
          count: 1
        }
        this.goods.push(newGoodslist)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.pos {
  height: 100%;

  .el-row {
    height: 100%;

    .el-col {
      height: 100%;
    }
  }
}
</style>