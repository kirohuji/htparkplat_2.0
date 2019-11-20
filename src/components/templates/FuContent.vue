<template>
  <el-container>
    <!-- <keep-alive :include="['MessagesCardPanel']"> -->
    <router-view class="animated"></router-view>
    <!-- </keep-alive> -->
  </el-container>
</template>
<script>
export default {
  name: 'FuContent'
}
</script>
