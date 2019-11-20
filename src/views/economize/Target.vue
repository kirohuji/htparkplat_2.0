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
          label="主要生产用能"
          prop="MPE"
        >
        </el-table-column>
        <el-table-column
          label="产值综合能耗"
          prop="CECOV"
        >
        </el-table-column>
        <el-table-column
          label="能源利用效率"
          prop="efficiency"
        >
        </el-table-column>
        <el-table-column
          label="消耗总量"
          prop="consumption"
        >
        </el-table-column>
        <el-table-column
          label="评分"
          prop="rank"
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
          MPE: 722327,
          CECOV: 83486,
          efficiency: '77.21%',
          consumption: '712497',
          rank: 1
        },
        {
          number: 2,
          company: '久泰能源',
          MPE: 743379,
          CECOV: 423379,
          efficiency: '90.10%',
          consumption: '198273',
          rank: 2
        },
        {
          number: 3,
          company: '中科合成油',
          MPE: 524520,
          CECOV: 424589,
          efficiency: '63.56%',
          consumption: '298374',
          rank: 3
        },
        {
          number: 4,
          company: '天润化肥',
          MPE: 234575,
          CECOV: 256747,
          efficiency: '62.91%',
          consumption: '213987',
          rank: 4
        },
        {
          number: 5,
          company: '西北能化',
          MPE: 246747,
          CECOV: 145677,
          efficiency: '93.17%',
          consumption: '329842',
          rank: 5
        },
        {
          number: 6,
          company: '易高煤化',
          MPE: 224556,
          CECOV: 13452,
          efficiency: '53.81%',
          consumption: '493284',
          rank: 6
        },
        {
          number: 7,
          company: '伊东东华',
          MPE: 13635,
          CECOV: 83635,
          efficiency: '64.91%',
          consumption: '93847',
          rank: 7
        },
        {
          number: 8,
          company: '晶阳能源',
          MPE: 936537,
          CECOV: 93367,
          efficiency: '72.12%',
          consumption: '387486',
          rank: 8
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
