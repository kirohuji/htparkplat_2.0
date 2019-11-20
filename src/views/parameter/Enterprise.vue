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
          label="企业名称"
          prop="company"
        >
        </el-table-column>
        <el-table-column
          label="上报时间"
          prop="time"
        >
        </el-table-column>
        <el-table-column
          label="用电量"
          prop="electric"
        >
        </el-table-column>
        <el-table-column
          label="用水量"
          prop="water"
        >
        </el-table-column>
        <el-table-column
          label="用气量"
          prop="gas"
        >
        </el-table-column>
        <el-table-column
          label="用煤量"
          prop="coal"
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
          number: 1,
          company: '伊泰煤制油',
          feedCoal: [320, 421, 590],
          bunkerCoal: [489, 568, 489],
          status: 0,
          time: '2019/11/11',
          synthesize: 2800,
          electric: 80,
          water: 8000,
          coal: 4000,
          gas: 0,
          feedCoalTotal: 320 + 421 + 590,
          bunkerCoalTotal: 489 + 568 + 489
        },
        {
          number: 2,
          company: '久泰能源',
          feedCoal: [201, 198, 219],
          bunkerCoal: [189, 298, 366],
          status: 1,
          time: '2019/11/18',
          synthesize: 1500,
          electric: 105,
          water: 13700,
          coal: 0,
          gas: 0
        },
        {
          number: 3,
          company: '中科合成油',
          feedCoal: [201],
          bunkerCoal: [189],
          status: 1,
          time: '2019/11/16',
          synthesize: 8.647285008,
          electric: 6.0,
          water: 30,
          coal: 0,
          gas: 1700
        },
        {
          number: 4,
          company: '天润化肥',
          feedCoal: [0],
          bunkerCoal: [12329],
          status: 0,
          time: '2019/11/18',
          synthesize: 1200,
          electric: 8,
          water: 13000,
          coal: 0,
          gas: 0
        },
        {
          number: 5,
          company: '西北能化',
          feedCoal: [201, 198],
          bunkerCoal: [189, 298, 366],
          status: 0,
          time: '2019/11/12',
          synthesize: 1200,
          electric: 30,
          water: 800,
          coal: 1800,
          gas: 0
        },
        {
          number: 6,
          company: '易高煤化',
          feedCoal: [424.5],
          bunkerCoal: [3],
          status: 1,
          time: '2019/11/13',
          synthesize: 2000,
          electric: 80,
          water: 10000,
          coal: 1900,
          gas: 0
        },
        {
          number: 7,
          company: '伊东东华',
          feedCoal: [201, 198, 219, 267],
          bunkerCoal: [189],
          status: 0,
          time: '2019/11/12',
          synthesize: 4000,
          electric: 60,
          water: 12500,
          coal: 3700,
          gas: 0
        },
        {
          number: 8,
          company: '晶阳能源',
          feedCoal: [201],
          bunkerCoal: [189],
          status: 0,
          time: '2019/11/11',
          synthesize: 625,
          electric: 140,
          water: 3600,
          coal: 2500,
          gas: 18000
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
