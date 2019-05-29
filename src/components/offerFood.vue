<template>
  <div>
    <div class="offerfood">
      <div class="of-title">热销商品</div>
      <ul class="of-list">
        <li
          class="of-list-item"
          v-for="item in ofterGoods"
          :key="item.goodsId"
          @click="addOrderList(item)"
        >
          <span class="item-name">{{item.goodsName}} </span>
          <span class="item-price">￥{{item.price}}</span>
        </li>
      </ul>
    </div>
    <div class="offertab">
      <el-tabs v-model="activeName" 
      type="card">
        <el-tab-pane
          label="汉堡"
          name="hanbao"
        >
          <li
            v-for="goods in type0Goods"
            :key="goods.goodsName"
            @click="addOrderList(goods)"
          >
            <span class="foodImg"><img
                :src="goods.goodsImg"
                width="100%"
              ></span>
            <span class="foodName">{{goods.goodsName}}</span>
            <span class="foodPrice">￥{{goods.price}}元</span>
          </li>
        </el-tab-pane>
        <el-tab-pane
          label="小食"
          name="sock"
        >
          <li
            v-for="goods in type1Goods"
            :key="goods.goodsName"
            @click="addOrderList(goods)"
          >
            <span class="foodImg"><img
                :src="goods.goodsImg"
                width="100%"
              ></span>
            <span class="foodName">{{goods.goodsName}}</span>
            <span class="foodPrice">￥{{goods.price}}元</span>
          </li>
        </el-tab-pane>
        <el-tab-pane
          label="饮料"
          name="drink"
        >
          <li
            v-for="goods in type2Goods"
            :key="goods.goodsName"
          >
            <span class="foodImg"><img
                :src="goods.goodsImg"
                width="100%"
                height="80%"
              ></span>
            <span class="foodName">{{goods.goodsName}}</span>
            <span class="foodPrice">￥{{goods.price}}元</span>
          </li>
        </el-tab-pane>
        <el-tab-pane
          label="套餐"
          name="taocan"
        >
          <li
            v-for="goods in type3Goods"
            :key="goods.goodsName"
          >
            <span class="foodImg"><img
                :src="goods.goodsImg"
                width="100%"
                height="70%"
              ></span>
            <span class="foodName">{{goods.goodsName}}</span>
            <span class="foodPrice">￥{{goods.price}}元</span>
          </li>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'hanbao',
      ofterGoods: [],
      typeGoodslist: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    }
  },

  created () {
    this.$axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
      .then(response => {
        this.ofterGoods = response.data;
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      })
    this.$axios.get('https://www.easy-mock.com/mock/5cd9810981f5e5576a8643ff/pos')
      .then(response => {
        
        this.typeGoodslist = response.data;
        this.type0Goods = this.typeGoodslist[0];
        this.type1Goods = this.typeGoodslist[1];
        this.type2Goods = this.typeGoodslist[2];
        this.type3Goods = this.typeGoodslist[3];
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      })
  },
  methods: {
    addOrderList(goods) {
      this.$emit('addGoods',goods)
    }
  }
}
</script>

<style lang="stylus" scoped>
.offerfood {
  height: 300px;
  .of-title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }

  .of-list-item {
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;

    .item-price {
      color: #58B7FF;
    }
  }
}

.offertab {
  height: 300px;
  border 1px solid #E5E9F2
  background-color rgb(248, 249, 251)
  & li {
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;

    & span {
      display: block;
      float: left;
    }

    .foodImg {
      width: 40%;
      height: 85px;
      margin-top: 10px;
    }

    .foodName {
      font-size: 15px;
      padding-left: 10px;
      color: brown;
      margin-top: 10px;
    }

    .foodPrice {
      font-size: 16px;
      padding-left: 10px;
      padding-top: 10px;
      color: #58B7FF;
    }
  }
}
</style>