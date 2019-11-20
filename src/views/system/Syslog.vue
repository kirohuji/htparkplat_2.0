<template>
  <content-layout>
    <template slot="header">
      <content-header-layout />
    </template>
    <div>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
        <el-table-column label="操作页面"
                         prop="page">
        </el-table-column>
        <el-table-column label="操作类型"
                         prop="type">
        </el-table-column>
        <el-table-column label="操作用户"
                         prop="user">
        </el-table-column>
        <el-table-column label="日志信息"
                         prop="info">
        </el-table-column>
        <el-table-column label="操作时间"
                         prop="time">
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
                       @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
        { index: 1, page: '企业信息', type: '修改企业信息', user: 'admin', info: '行政区划由内蒙古自治区修改为内蒙古', time: '2019-11-15 14:37:28' },
        { index: 2, page: '-', type: '登录', user: 'admin', info: '用户admin登录平台', time: '2019-11-15 14:30:28' },
        { index: 3, page: '企业信息', type: '修改企业生产工序', user: 'admin', info: '行业类型由其他制造业改为化工行业', time: '2019-11-15 14:40:28' },
        { index: 4, page: '企业填报', type: '修改企业产值', user: 'admin', info: '产值由7089.2改为7397.1', time: '2019-11-15 14:45:28' },
        { index: 5, page: '企业信息', type: '修改企业信息', user: 'admin', info: '行政区划由内蒙古自治区修改为内蒙古', time: '2019-11-15 14:37:28' },
        { index: 6, page: '-', type: '登录', user: 'admin', info: '用户admin登录平台', time: '2019-11-15 14:30:28' },
        { index: 7, page: '企业信息', type: '修改企业生产工序', user: 'admin', info: '行业类型由其他制造业改为燃料加工行业', time: '2019-11-15 14:46:28' },
        { index: 8, page: '企业填报', type: '修改企业产值', user: 'admin', info: '产值由7059.2改为19725.6', time: '2019-11-15 14:52:28' },
        { index: 9, page: '-', type: '登录', user: 'admin', info: '用户admin登录平台', time: '2019-11-4 14:12:28' },
        { index: 10, page: '-', type: '登录', user: 'admin', info: '用户admin登录平台', time: '2019-11-5 12:30:28' }
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
