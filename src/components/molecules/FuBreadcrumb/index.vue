<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: item.link }"
                        :key="index"
                        v-for="(item,index) in navigation">
      <a>{{item.label}}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'FuBreadcrumb',
  props: {
    /**
     * 根据数组,循环显示
     */
    navigation: {
      type: Array,
      default: () => []
    }
  }
}
</script>
