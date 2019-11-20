<template>
  <el-aside width="auto"
            class="item aside">
    <fu-c-tree-menu />
  </el-aside>
</template>
<script>
import FuCTreeMenu from '@/containers/FuCTreeMenu'
export default {
  name: 'Sidebar',
  components: {
    FuCTreeMenu
  }
}
</script>
