<template>
  <content-layout>
    <template slot="header">
      <content-header-layout />
    </template>
    <div>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column
          label="账户"
          prop="loginName"
        >
        </el-table-column>
        <el-table-column
          label="页面功能"
          prop="pageName"
        >
        </el-table-column>
        <el-table-column
          label="操作权限"
          prop="permission"
        >
        </el-table-column>
        <el-table-column align="right">
          <template
            slot="header"
            slot-scope="scope"
          >
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
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
        {
          index: 1,
          loginName: 'admin',
          pageName: '所有页面',
          permission: '查看/修改/删除'
        },
        {
          index: 2,
          loginName: 'user02',
          pageName: '所有页面',
          permission: '查看/修改/删除'
        },
        {
          index: 3,
          loginName: 'user03',
          pageName: '所有页面',
          permission: '查看/修改/删除'
        },
        {
          index: 4,
          loginName: 'user04',
          pageName: '所有页面',
          permission: '查看/修改/删除'
        },
        {
          index: 8,
          loginName: 'user05',
          pageName: '所有页面',
          permission: '查看/修改/删除'
        },
        {
          index: 9,
          loginName: 'user06',
          pageName: '能耗监测/设备管理',
          permission: '查看'
        },
        {
          index: 10,
          loginName: 'user07',
          pageName: '能耗监测/设备管理',
          permission: '查看'
        }
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
