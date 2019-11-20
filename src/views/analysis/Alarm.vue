<template>
  <content-layout>
    <template slot="header">
      <content-header-layout />
    </template>
    <div>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
        <el-table-column label="企业名称"
                         prop="name">
        </el-table-column>
        <el-table-column label="时间"
                         prop="date">
        </el-table-column>
        <el-table-column label="产品"
                         prop="product">
        </el-table-column>
        <el-table-column label="总产值(万元)"
                         prop="total">
        </el-table-column>
        <el-table-column label="综合能耗(吨标煤)"
                         prop="complex ">
        </el-table-column>
        <el-table-column label="水(千吨)"
                         prop="water">
        </el-table-column>
        <el-table-column label="电(万度)"
                         prop="electricity ">
        </el-table-column>
        <el-table-column label="煤(吨)"
                         prop="coal">
        </el-table-column>
        <el-table-column label="气(立方米)"
                         prop="gas">
        </el-table-column>

        <el-table-column align="right">
          <template slot="header"
                    slot-scope="scope">
            <el-input v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </content-layout>
</template>
<script>

export default {
  data () {
    return {
      tableData: [
        { index: 1, name: '久泰能源', product: '甲醇', date: '2019-01', total: 821.917, complex: 1286.65, water: 11.11, electricity: 71.84, coal: '-', gas: '-' },
        { index: 2, name: '久泰能源', product: '烯烃', date: '2019-01', total: 547.945, complex: 1024.79, water: 2.59, electricity: 25.95, coal: '-', gas: '-' },
        { index: 3, name: '晶阳能源', product: '多晶硅', date: '2019-01', total: 164.38, complex: 427.81, water: 2.92, electricity: 15.95, coal: 151.94, gas: 6291 },
        { index: 4, name: '晶阳能源', product: '太阳能硅片', date: '2019-01', total: 123.28, complex: 546.01, water: 0.69, electricity: 15.95, coal: 44.66, gas: 9257 },
        { index: 5, name: '伊东东华能源', product: '甲醇', date: '2019-01', total: 1643.83, complex: 3156.57, water: 8.42, electricity: 1.8, coal: 2746.95, gas: '-' },
        { index: 6, name: '伊东东华能源', product: '醋酸', date: '2019-01', total: 1095.89, complex: 2712.62, water: 3.99, electricity: 2.19, coal: 965.05, gas: '-' },
        { index: 7, name: '伊泰煤制油', product: '各种油品', date: '2019-01', total: 246.57, complex: 2795.65, water: 7.699, electricity: 65.75, coal: 2877, gas: '-' },
        { index: 8, name: '天润化肥', product: '合成氨', date: '2019-01', total: 410.95, complex: 762.78, water: 8.3, electricity: 2.77, coal: '-', gas: '-' },
        { index: 9, name: '天润化肥', product: '尿素', date: '2019-01', total: 246.57, complex: 852.91, water: 4.029, electricity: 2.71, coal: '-', gas: '-' },
        { index: 10, name: '西北能化', product: '煤制甲醇', date: '2019-01', total: 136.98, complex: 1086.2142, water: 0.68493, electricity: 24.1, coal: 1507, gas: '-' },
        { index: 11, name: '易高煤化', product: '甲醇', date: '2019-01', total: 54.79, complex: 1477.55, water: 1.14, electricity: 23.8, coal: 757.69, gas: '-' },
        { index: 12, name: '易高煤化', product: '轻烃', date: '2019-01', total: 41.09, complex: 1294.98, water: 4.03, electricity: 15.25, coal: 338.84, gas: '-' },
        { index: 13, name: '易高煤化', product: '乙二醇', date: '2019-01', total: 68.49, complex: 1253.04, water: 3.173, electricity: 17.75, coal: 522.97, gas: '-' },
        { index: 14, name: '中科合成油', product: '煤制油催化剂', date: '2019-01', total: 109.5, complex: 8.647285008, water: 0.0274, electricity: 4.9, coal: '-', gas: 1576.4 }
      ],
      search: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style lang='stylus' scoped></style>
