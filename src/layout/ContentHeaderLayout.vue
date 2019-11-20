<template>
  <el-container class="content-header"
                divider={false}>
    <el-main style="display: flex;justify-content: space-between;padding: 5px 5px; text-align: start">
      <div class="left">
        <div class="title">
          <h4 style="
                   color: rgba(0,0,0,.85);
                   font-weight: 600;
                   font-size: 20px;
                   line-height: 1.4;
                   margin-top:8px;
                   margin-bottom:8px;">
            <slot name="title">{{$route.meta.description}}</slot>
          </h4>
        </div>
        <div class="description"
             style="
                   color: rgba(0,0,0,.65);
                   font-size: 14px;
                   font-variant: tabular-nums;
                   line-height: 1.5;
                   list-style: none;
                   font-feature-settings: 'tnum';
                  ">
          <slot name="description">{{$route.meta.content}}</slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="right"
           style="display: flex;align-items: flex-end;margin-right:2em">
        <div class="operation">
          <slot name="operation"></slot>
        </div>
      </div>
    </el-main>
    <!-- 开启Tab模式 -->
    <!-- <el-footer style="padding:0">
      <slot name="footer">
        <el-menu class="el-menu-demo"
                 mode="horizontal">
          <el-menu-item index="1">Tab1</el-menu-item>
          <el-menu-item index="2">Tab2</el-menu-item>
          <el-menu-item index="3">Tab3</el-menu-item>
        </el-menu>
      </slot>
    </el-footer> -->
  </el-container>
</template>
<script>
export default {

}
</script>
<style scoped>
.content-header {
  z-index: 1;
  font-family: Helvetica, Arial;
  font-size: 13px;
  box-sizing: border-box;
  width: 100%;
  line-height: 1.5;
  display: block;
  background-color: #f8f8f8;
  text-align: left;
  padding: 12px 11px;
}
</style>
