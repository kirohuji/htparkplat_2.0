<template>
  <div>
    <template v-for=" (subItem ,index) in item">
      <router-link :to="subItem.meta.link"
                   :key="index"
                   v-if="subItem.children && subItem.children.length">
        <el-submenu :index="subItem.name">
          <template slot="title">
            <i :class="subItem.meta.icon"></i>
            <span>{{subItem.meta.label}}</span>
          </template>
          <fu-menu-item :item="subItem.children" />
        </el-submenu>
      </router-link>
      <router-link :to="subItem.meta.link"
                   v-show="isShow(subItem)"
                   :key="index"
                   v-else>
        <el-menu-item-group>
          <el-menu-item popper-class="none"
                        :index="subItem.name"
                        class="none-icon">
            <span>{{subItem.meta.label}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: 'FuMenuItem',
  props: {
    item: Array
  },
  methods: {
    // 获取item的expanded属性
    isExpanded (item) {
      return item.meta.expanded
    },
    isShow (item) {
      return item.meta.show
    }
  }
}
</script>
<style>
.el-menu--collapse .el-submenu > .el-submenu__title span,
.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu-item-group__title {
  display: none;
}
</style>
