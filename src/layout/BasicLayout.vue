<template>
  <el-container class="container">
    <Sidebar />
    <el-container>
      <!-- <el-header class="item header">
        <Header />
      </el-header> -->
      <slot></slot>
      <!-- <el-footer class="item footer">
        <Footer />
      </el-footer> -->
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from '@/components/templates/Sidebar.vue'
export default {
  components: {
    Sidebar
  }

}
</script>
<style lang='less' scoped>
.container {
  height: 100%;
}
</style>
