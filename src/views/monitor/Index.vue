<template>
  <content-layout>
    <template slot="header">
      <content-header-layout />
    </template>
    <div>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
        <el-table-column label="企业名称"
                         prop="company">
        </el-table-column>
        <el-table-column label="运行状态"
                         prop="status">
        </el-table-column>
        <el-table-column label="时间"
                         prop="time">
        </el-table-column>
        <el-table-column label="综合能耗"
                         prop="synthesize">
        </el-table-column>
        <el-table-column label="用电量"
                         prop="electric">
        </el-table-column>
        <el-table-column label="用水量"
                         prop="water">
        </el-table-column>
        <el-table-column label="用气量"
                         prop="gas">
        </el-table-column>
        <el-table-column label="用煤量"
                         prop="coal">
        </el-table-column>

        <el-table-column align="right">
          <template slot="header"
                    slot-scope="scope">
            <el-input v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索" />
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
          synthesize: 2795.65215,
          electric: 65.75,
          water: 7699,
          coal: 2877,
          gas: 0,
          feedCoalTotal: 320 + 421 + 590,
          bunkerCoalTotal: 489 + 568 + 489
        }, {
          number: 2,
          company: '久泰能源',
          feedCoal: [201, 198, 219],
          bunkerCoal: [189, 298, 366],
          status: 1,
          time: '2019/11/11',
          synthesize: 1294.2862,
          electric: 97.8,
          water: 13700,
          coal: 0,
          gas: 0
        }, {
          number: 3,
          company: '中科合成油',
          feedCoal: [201],
          bunkerCoal: [189],
          status: 1,
          time: '2019/11/11',
          synthesize: 8.647285008,
          electric: 4.9,
          water: 27.4,
          coal: 0,
          gas: 1576.4
        }, {
          number: 4,
          company: '天润化肥',
          feedCoal: [0],
          bunkerCoal: [12329],
          status: 0,
          time: '2019/11/11',
          synthesize: 1063.33022,
          electric: 5.48,
          water: 12329,
          coal: 0,
          gas: 0
        }, {
          number: 5,
          company: '西北能化',
          feedCoal: [201, 198],
          bunkerCoal: [189, 298, 366],
          status: 0,
          time: '2019/11/11',
          synthesize: 1086.2142,
          electric: 24.1,
          water: 684.93,
          coal: 1507,
          gas: 0
        }, {
          number: 6,
          company: '易高煤化',
          feedCoal: [424.5],
          bunkerCoal: [3],
          status: 1,
          time: '2019/11/11',
          synthesize: 1942.16255,
          electric: 56.9,
          water: 8443,
          coal: 424.5 + 1195,
          gas: 0
        }, {
          number: 7,
          company: '伊东东华',
          feedCoal: [201, 198, 219, 267],
          bunkerCoal: [189],
          status: 0,
          time: '2019/11/11',
          synthesize: 3781.9247,
          electric: 54.3,
          water: 12412,
          coal: 3712,
          gas: 0
        }, {
          number: 8,
          company: '晶阳能源',
          feedCoal: [201],
          bunkerCoal: [189],
          status: 0,
          time: '2019/11/11',
          synthesize: 625.7663746,
          electric: 140.6,
          water: 3615,
          coal: 196.6,
          gas: 15548
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
