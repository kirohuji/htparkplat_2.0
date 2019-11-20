<template>
  <el-pagination @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :current-page="currentPage"
                 :page-sizes="pageSizes"
                 :page-size="pageSize"
                 layout="total, sizes, prev, pager, next, jumper"
                 :total="totalElements"></el-pagination>
</template>
<script>
const defaultPageSizes = [10, 15, 30, 50]
export default {
  name: 'FuPagination',
  props: {
    totalElements: {
      type: Number,
      default: 100
    },
    /** defaultPageSizes = [10, 15, 30, 50] */
    pageSizes: {
      type: Array,
      default: () => {
        return defaultPageSizes
      }
    },
    pageSize: {
      type: Number,
      default: defaultPageSizes[0]
    },
    currentPage: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSizeChange (value) {
      this.$emit('sizeChange', value)
    },
    handleCurrentChange (value) {
      this.$emit('currentChange', value)
    }
  }
}
</script>