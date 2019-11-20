<template>
  <el-dropdown trigger="click">
    <div class="avatar-wrapper">
      <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
           class="user-avatar">
      <i class="el-icon-caret-bottom" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <router-link to="/profile/index">
        <el-dropdown-item>工作台</el-dropdown-item>
      </router-link>
      <router-link to="/">
        <el-dropdown-item>监控中心</el-dropdown-item>
      </router-link>
      <el-dropdown-item divided>
        <span style="display:block;">注销</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'FuUserDropdown'
}
</script>
<style lang="less" scoped>
.avatar-wrapper {
  margin-top: 5px;
  position: relative;

  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }

  .el-icon-caret-bottom {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 25px;
    font-size: 12px;
  }
}
</style>
