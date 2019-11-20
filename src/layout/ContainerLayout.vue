<template>
  <el-container>
    <el-main class="item main"
             style="padding: 0px;">
      <el-header class="nav-header"
                 style="height:auto">
        <FuBreadcrumbBanner class="item" />
      </el-header>
      <slot>
      </slot>
    </el-main>
  </el-container>
</template>
<script>
import FuBreadcrumbBanner from '@/components/organism/FuBreadcrumbBanner'
export default {
  components: {
    FuBreadcrumbBanner
  }
}
</script>
<style scoped>
.nav-header {
  height: 50px;
  padding: 15px 0;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
