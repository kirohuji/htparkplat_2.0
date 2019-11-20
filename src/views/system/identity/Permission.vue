<template>
  <content-layout>
    <template slot="header">
      <content-header-layout />
    </template>
    <div>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
        <el-table-column label="登录账户"
                         prop="loginName">
        </el-table-column>
        <el-table-column label="页面功能"
                         prop="pageName">
        </el-table-column>
        <el-table-column label="操作权限"
                         prop="permission">
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
        { index: 1, loginName: 'root01', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 2, loginName: 'root02', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 3, loginName: 'root03', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 4, loginName: 'root04', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 5, loginName: 'root05', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 6, loginName: 'root06', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 7, loginName: 'root07', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 8, loginName: 'root08', pageName: '所有页面', permission: '查看/修改/删除' },
        { index: 9, loginName: 'user01', pageName: '能耗监测/设备管理', permission: '查看' },
        { index: 10, loginName: 'user02', pageName: '能耗监测/设备管理', permission: '查看' }
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
