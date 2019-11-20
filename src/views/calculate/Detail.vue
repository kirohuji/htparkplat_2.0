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
          label="计量器具名称"
          prop="name"
        >
        </el-table-column>
        <el-table-column
          label="类型"
          prop="type"
        >
        </el-table-column>
        <el-table-column
          label="接入系统"
          prop="inputType"
        >
        </el-table-column>
        <el-table-column
          label="所属上报数据组合编码"
          prop="uploadCode"
        >
        </el-table-column>
        <el-table-column
          label="状态"
          prop="status"
        >
        </el-table-column>
        <el-table-column
          label="修改时间"
          prop="date"
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
          <!-- <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template> -->
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
          name: '2号进场地磅',
          type: '原煤',
          inputType: '用能单位自身管理系统',
          uploadCode: '04-01-09-89-11-411',
          status: '正常',
          date: '2019-11-06 12:33:11'
        },
        {
          name: '3号入磨皮带称',
          type: '原煤',
          inputType: '能源供应公司系统',
          uploadCode: '02-01-06-71-12-423',
          status: '正常',
          date: '2019-11-06 11:32:45'
        },
        {
          name: '2号进场地磅',
          type: '原煤',
          inputType: '用能单位自身管理系统',
          uploadCode: '04-01-09-89-11-424',
          status: '正常',
          date: '2019-11-01 12:33:11'
        },
        {
          name: '3号入磨皮带称',
          type: '原煤',
          inputType: '能源供应公司系统',
          uploadCode: '02-01-06-71-12-445',
          status: '正常',
          date: '2019-11-01 11:32:45'
        },
        {
          name: '3号进场地磅',
          type: '原煤',
          inputType: '用能单位自身管理系统',
          uploadCode: '04-01-09-89-11-413',
          status: '正常',
          date: '2019-10-06 12:33:11'
        },
        {
          name: '4号入磨皮带称',
          type: '原煤',
          inputType: '用能单位自身管理系统',
          uploadCode: '02-01-06-71-12-429',
          status: '正常',
          date: '2019-10-06 11:32:45'
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
