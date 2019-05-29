<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="点餐">
        <el-table
          :data="tableData"
          show-summary
          style="width: 100%"
          border
        >
          <el-table-column
            prop="goodsName"
            label="商品"
          ></el-table-column>
          <el-table-column
            prop="count"
            label="量"
            width="50"
          ></el-table-column>
          <el-table-column
            prop="price"
            label="金额"
            width="70"
          ></el-table-column>
          <el-table-column
            label="操作"
            width="100"
            fixed="right"
          >
            <template slot-scope="scope">
              <el-button
                @click="delData(scope.$index,scope.row)"
                type="text"
                size="small"
              >删除</el-button>
              <el-button
                @click="addData(scope.$index,scope.row)"
                type="text"
                size="small"
              >增加</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="caozuo">
          <el-button type="warning">挂单</el-button>
          <el-button
            type="danger"
            @click="delAllData"
          >删除</el-button>
          <el-button type="success"
          @click="open"
          >结账</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="挂单">
        <el-table
          :data="tableData"
          show-summary
          style="width: 100%"
          border
        >
          <el-table-column
            prop="goodsName"
            label="商品"
          ></el-table-column>
          <el-table-column
            prop="count"
            label="量"
            width="50"
          ></el-table-column>
          <el-table-column
            prop="price"
            label="金额"
            width="70"
          ></el-table-column>
          <el-table-column
            label="操作"
            width="100"
            fixed="right"
          >
            <template slot-scope="scope">
              <el-button
                @click="delData(scope.$index,scope.row)"
                type="text"
                size="small"
              >删除</el-button>
              <el-button
                @click="addData(scope.$index,scope.row)"
                type="text"
                size="small"
              >增加</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="caozuo">
          <el-button type="warning">挂单</el-button>
          <el-button
            type="danger"
            @click="delAllData"
          >删除</el-button>
          <el-button type="success">结账</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="外卖">
        <el-table
          :data="tableData"
          show-summary
          style="width: 100%"
          border
        >
          <el-table-column
            prop="goodsName"
            label="商品"
          ></el-table-column>
          <el-table-column
            prop="count"
            label="量"
            width="50"
          ></el-table-column>
          <el-table-column
            prop="price"
            label="金额"
            width="70"
          ></el-table-column>
          <el-table-column
            label="操作"
            width="100"
            fixed="right"
          >
            <template slot-scope="scope">
              <el-button
                @click="delData(scope.$index,scope.row)"
                type="text"
                size="small"
              >删除</el-button>
              <el-button
                @click="addData(scope.$index,scope.row)"
                type="text"
                size="small"
              >增加</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="caozuo">
          <el-button type="warning">挂单</el-button>
          <el-button
            type="danger"
            @click="delAllData"
          >删除</el-button>
          <el-button type="success"
          @click="open"
          >结账</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: {
    pushGood: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  watch: {
    pushGood: function (val) {
      this.tableData = val
    }
  },
  methods: {
    open () {
      setTimeout(() => {
        this.$alert('支付成功!谢谢', '结账', {
          confirmButtonText: '确定'
          })
          this.delAllData()
      }, 2000);
    },
    delData (index) {
      if (this.tableData[index].count > 1) {
        this.tableData[index].count--
      }
      else {
        this.tableData.splice(index, 1)
      }
    },
    addData (index) {
      this.tableData[index].count++
    },
    delAllData () {
      this.$emit("delAllGoods")
    }
  }

}
</script>

<style lang="stylus" scoped>
.el-tabs {
  height: 600px;

  .caozuo {
    margin: 20px 0;
    text-align: center;
  }
}
</style>