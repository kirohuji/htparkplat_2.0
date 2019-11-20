<template>
  <!--  style="margin:8px" 此样式在有header和footer布局时 添加才此-->
  <el-container class="item"
                style="margin-bottom:0"
                direction="vertical">
    <slot name="header">
    </slot>
    <!-- 在配合Tab等需要有明确的分割线时应该开启此标签 -->
    <!-- <el-divider :style="{display:divider?'block':'none'}"></el-divider> -->
    <el-main class="item"
             style="height: 100%;"
             :style="{padding:padding}">
      <slot></slot>
    </el-main>
  </el-container>
</template>
<script>
export default {
  props: {
    divider: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: '20px'
    }
  }
}
</script>
<style scoped>
.el-divider--horizontal {
  margin-top: 8px;
  margin-bottom: 0px;
}
</style>
