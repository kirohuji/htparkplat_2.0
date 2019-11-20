import Vue from 'vue'
import chart from 'echarts'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
Vue.prototype.$echarts = chart
Vue.component('v-chart', ECharts)
