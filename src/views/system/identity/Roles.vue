<template>
  <content-layout>
    <template slot="header">
      <content-header-layout />
    </template>
    <div>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
        <el-table-column label="角色名称"
                         prop="roleName">
        </el-table-column>
        <el-table-column label="角色描述"
                         prop="extra">
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
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        { index: 1, roleName: '超级管理员', permissionName: '-', extra: '所有页面功能，能进行修改操作' },
        { index: 2, roleName: '管理员', permissionName: '-', extra: '所有页面功能，能进行部分修改操作' },
        { index: 3, roleName: '普通用户', permissionName: '-', extra: '所有页面功能，不能进行部分修改操作' },
        { index: 4, roleName: '企业用户', permissionName: '-', extra: '查看本企业信息' }],
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
