<template>
  <div class="app">
    <basic-layout>
      <container-layout>
        <router-view class="animated"
                     style="height:100%"></router-view>
      </container-layout>
    </basic-layout>
  </div>
</template>

<script>
import BasicLayout from '@/layout/BasicLayout.vue'
import ContainerLayout from '@/layout/ContainerLayout.vue'
import * as Rx from '@/plugins/rxemitter'
/**
 * App.vue
 *   1.需要处理向上抛出的异常和封装日志发送
 *   2.处理所有组件发送消息
 */
export default {
  name: 'app',
  components: {
    BasicLayout,
    ContainerLayout
  },
  created () {
    Rx.RxEmitter.on('MESSAGE').subscribe(x => {
      switch (x.type) {
        case 'message':
          this.$message({
            message: x.context,
            type: x.subType,
            durtation: 1500
          })
          break
        case 'notification':
          this.$notify({
            title: x.title,
            type: x.subType,
            message: x.context,
            position: 'bottom-right',
            durtation: 1500
          })
          break
      }
    })
  },
  errorCaptured (err, vm, info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`)
    return true
  }
}
</script>
<style lang="less">
@import "~animate.css";

.animated {
  animation-duration: 0.377s;
}

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
