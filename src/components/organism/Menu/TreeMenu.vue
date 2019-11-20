<template>
  <el-menu class="el-menu-vertical"
           active-text-color="#ffd04b"
           default-active="1"
           :unique-opened="true"
           @open="handleOpen"
           @close="handleClose"
           :collapse="isCollapse">
    <fu-menu-item :item="menu" />
  </el-menu>
</template>
<script>
import FuMenuItem from './FuMenuItem.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'TreeMenu',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FuMenuItem
  },
  computed: {
    ...mapGetters({
      // 获取菜单
      menu: 'menuitems'
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang='less' scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
  text-align: left;
  height: 100%;
}
.el-menu {
  text-align: left;
  height: 100%;
}
</style>
