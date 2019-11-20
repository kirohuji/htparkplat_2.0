<template>
  <el-button class="button-return-tag"
             size="mini"
             @click="handleClick"><i class="el-icon-arrow-left"
       style="font-weight:900" /> 返回</el-button>
</template>
<script>
export default {
  name: 'FuReturnTag',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
<style lang='less' scoped>
.button-return-tag {
  margin-left: 10px;
  padding-left: 8px;
  padding-right: 10px;
}
</style>
