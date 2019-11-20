<template>
  <el-row :gutter="40"
          class="panel-group">
    <el-col :xs="12"
            :sm="12"
            :lg="18"
            class="card-panel-col">
      <div class="card-panel"
           style="height: 100%;"
           @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-wrapper icon-people">
          <span style="font-size:16px">地图实时生产情况</span>
        </div>
        <el-divider></el-divider>
        <div class="card-panel-description"
             style="padding:16px">
          <el-row style="text-align: left;">
            <el-col v-for="i in 4"
                    :key="i"
                    :xs="12"
                    :sm="12"
                    :lg="6">
              <div class="card-panel-text">
                New Visits
              </div>
              <count-to :start-val="0"
                        :end-val="102400"
                        :duration="2600"
                        class="card-panel-num" />
            </el-col>
          </el-row>
          <div style="padding-top: 24px;text-align: center;">
            <img style="
                display: inline-block;
                max-width: 100%;"
                 src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                 alt="map">
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12"
            :sm="12"
            :lg="6"
            style="padding-left:20"
            class="card-panel-col">
      <div class="card-panel"
           style="margin-bottom: 24px;"
           @click="handleSetLineChartData('messages')">
        <div class="card-panel-wrapper icon-people">
          <span style="font-size:16px">生产能源预测</span>
        </div>
        <el-divider></el-divider>
        <div class="card-panel-description"
             style="padding:16px;display:flex;text-align: left;flex-direction: column;">
          <div>
            <div class="card-panel-text">
              目标评估
            </div>
            <div class="card-panel-num">
              有望达到预期
            </div>
          </div>
          <div style="padding-top: 16px;">
            <small-line-chart :chart-data="lineChartData"
                              :xAxisData="xAxisData"
                              height="100%"
                              width="100%" />
          </div>
        </div>
      </div>
      <div class="card-panel"
           @click="handleSetLineChartData('messages')">
        <div class="card-panel-wrapper icon-people">
          <span style="font-size:16px">地图实时交易情况</span>
        </div>
        <el-divider></el-divider>
        <div class="card-panel-description"
             style="padding:16px;display:flex;text-align: left;flex-direction: column;">
          <raddar-chart />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import SmallLineChart from '../SmallLineChart'
import RaddarChart from '../RaddarChart'
import CountTo from 'vue-count-to'
let xAxisData = []
const lineChartData = {
  newVisitis: {
    actualData: []
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
for (let i = 1; i <= 24; i++) {
  xAxisData.push(i)
  lineChartData.newVisitis.actualData.push(i * 10)
}
export default {
  components: {
    CountTo,
    SmallLineChart,
    RaddarChart
  },
  data () {
    return {
      xAxisData: xAxisData,
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData (type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-divider--horizontal
  margin: 0;
  height: 1x;
.panel-group
  align-items: stretch;
  display: flex;
  margin-top: 18px;
  .card-panel-col
    margin-bottom: 32px;
  .card-panel
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    .card-panel-wrapper
      display: flex;
      padding: 20px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    .card-panel-description
      font-weight: bold;
      margin-left: 0px;
      .card-panel-text
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      .card-panel-num
        font-size: 20px;
</style>
