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
        <el-table-column label="问题类型"
                         prop="type">
        </el-table-column>
        <el-table-column label="详细情况"
                         prop="description">
        </el-table-column>
        <el-table-column label="处理情况"
                         prop="status">
        </el-table-column>

        <el-table-column align="right">
          <template slot="header"
                    slot-scope="scope">
            <el-input v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">处理</el-button>
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
      tableData: [{
        date: '2019-11-03',
        name: '中科合成油',
        description: '9月份 用煤量超标',
        type: '超标',
        status: '已处理'
      }, {
        date: '2019-11-09',
        name: '西北能化',
        description: '用电量超标',
        type: '超标',
        status: '未处理'
      }, {
        date: '2019-11-18',
        name: '易高煤化',
        description: '工序[煤气化]发生异常',
        type: '工序出错',
        status: '未处理'
      },
      {
        date: '2019-11-18',
        name: '伊泰煤制油',
        description: '10月份 用煤量超标',
        type: '超标',
        status: '正处理'
      }, {
        date: '2019-11-12',
        name: '久泰能源',
        description: '8月份 用煤量超标',
        type: '超标',
        status: '正处理'
      }, {
        date: '2019-11-18',
        name: '易高煤化',
        description: '工序[煤气化]发生异常',
        type: '工序出错',
        status: '未处理'
      },
      {
        date: '2019-11-11',
        name: '中科合成油',
        description: '10 月份呢 用电量超标',
        type: '超标',
        status: '已处理'
      },
      {
        date: '2019-11-10',
        name: '易高煤化',
        description: '10 月份呢 用气量超标',
        type: '超标',
        status: '正处理'
      },
      {
        date: '2019-11-09',
        name: '晶阳能源',
        description: '用水量超标',
        type: '超标',
        status: '正处理'
      }, {
        date: '2019-11-15',
        name: '伊东东华',
        description: '9 月份呢 用煤量超标',
        type: '超标',
        status: '未处理'
      }],
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
