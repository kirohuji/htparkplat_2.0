import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont'
import 'style/index.styl'
// 全局注册组件也在plugins文件夹
import 'plugins'
import './icons' // icon
router.beforeEach((to, from, next) => {
  store.commit('CURRENT_LOCATION', to)
  next()
})
// Vue.config.errorHandler = function (err, vm, info) {
//   console.log(`Error: ${err.toString()}\nInfo:${info}`)
// }
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
