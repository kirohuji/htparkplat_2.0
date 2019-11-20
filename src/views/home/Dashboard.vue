<template>
  <content-layout>
    <div class="dashboard-container">
      <card-panel-group @handleSetLineChartData="handleSetLineChartData" />
      <el-row class="chart-wrapper">
        <chart-tab-bar />
      </el-row>
      <!-- <map-chart @handleSetLineChartData="handleSetLineChartData" /> -->
    </div>
  </content-layout>
</template>
<script>
import FuSkeleton from '@/components/atoms/FuSkeleton'
import lazyLoadComponent from '@/utils/lazy-load-component.js'
import CardPanelGroup from './components/CardPanelGroup'
import ChartTabBar from './components/ChartTabBar'
export default {
  name: 'Dashboard',
  components: {
    CardPanelGroup,
    ChartTabBar,
    MapChart: lazyLoadComponent({
      componentFactory: () => import('./components/MapChart'),
      loading: FuSkeleton
    })
  },
  methods: {
    handleSetLineChartData (type) {
      console.log('收到')
    }
  }
}
</script>
<style lang='less' scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
  text-align: center;
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
