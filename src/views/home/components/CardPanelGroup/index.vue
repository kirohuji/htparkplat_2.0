<template>
  <el-row :gutter="40"
          class="panel-group">
    <el-col :xs="12"
            :sm="12"
            :lg="6"
            class="card-panel-col">
      <card-panel divider
                  :model="newVisitis"
                  v-on="$listeners">
        <template v-slot:header>
          <div class="card-panel-text">
            用电量(万度)
          </div>
          <count-to :start-val="0"
                    :end-val="14833"
                    :duration="2600"
                    class="card-panel-num" />
        </template>
        <template v-slot:content>
          <div class="card-panel-text">
            <span>
              <span>周同比</span>
              <span style="margin-left: 8px;">13% </span>
            </span>
            <span><i class="el-icon-caret-top"
                 style="color:#f5222d"></i></span>
          </div>
          <div class="card-panel-text">
            <span>
              <span>日同比</span>
              <span style="margin-left: 8px;">11% </span>
            </span>
            <span><i class="el-icon-caret-bottom"
                 style="color:#52c41a"></i></span>
          </div>
        </template>
        <template v-slot:footer>
          <div class="card-panel-text">
            <span>
              <span>平均用电</span>
              <span style="margin-left: 8px;">34867 万吨</span>
            </span>
          </div>
        </template>
      </card-panel>
    </el-col>
    <el-col :xs="12"
            :sm="12"
            :lg="6"
            class="card-panel-col">
      <card-panel divider
                  :model="messages"
                  v-on="$listeners">
        <template v-slot:header>
          <div class="card-panel-text">
            用水量(万吨)
          </div>
          <count-to :start-val="0"
                    :end-val="148"
                    :duration="2600"
                    class="card-panel-num" />
        </template>
        <template v-slot:content>
          <small-line-chart :chart-data="lineChartData"
                            :xAxisData="xAxisData"
                            height="100%"
                            width="100%" />
        </template>
        <template v-slot:footer>
          <div class="card-panel-text">
            <span>
              <span>平均取量</span>
              <span style="margin-left: 8px;">4.617吨</span>
            </span>
          </div>
        </template>
      </card-panel>
    </el-col>
    <el-col :xs="12"
            :sm="12"
            :lg="6"
            class="card-panel-col">
      <card-panel divider
                  :model="purchases"
                  v-on="$listeners">
        <template v-slot:header>
          <div class="card-panel-text">
            用煤量(万吨)
          </div>
          <count-to :start-val="0"
                    :end-val="215"
                    :duration="2600"
                    class="card-panel-num" />
        </template>
        <template v-slot:content>
          <small-bar-chart :chart-data="lineChartData"
                           :xAxisData="xAxisData"
                           height="100%"
                           width="100%" />
        </template>
        <template v-slot:footer>
          <div class="card-panel-text">
            <span>
              <span>转化率</span>
              <span style="margin-left: 8px;">60 %</span>
            </span>
          </div>
        </template>
      </card-panel>
    </el-col>
    <el-col :xs="12"
            :sm="12"
            :lg="6"
            class="card-panel-col">
      <card-panel divider
                  :model="shoppings"
                  v-on="$listeners">
        <template v-slot:header>
          <div class="card-panel-text">
            用气量(万方)
          </div>
          <span class="card-panel-num"> 950</span>
        </template>
        <template v-slot:content>
          <!-- <el-progress :percentage="70"
                       style="width: 100%;"></el-progress> -->
          <small-line-chart :chart-data="qlineChartData"
                            :xAxisData="xAxisData"
                            height="100%"
                            width="100%" />
        </template>
        <template v-slot:footer>
          <div style="display: flex;justify-content: space-between;">
            <div class="card-panel-text">
              <span>
                <span>周同比</span>
                <span style="margin-left: 8px;">13% </span>
              </span>
              <span><i class="el-icon-caret-top"
                   style="color:#f5222d"></i></span>
            </div>
            <div class="card-panel-text">
              <span>
                <span>日同比</span>
                <span style="margin-left: 8px;">11% </span>
              </span>
              <span><i class="el-icon-caret-bottom"
                   style="color:#52c41a"></i></span>
            </div>
          </div>
        </template>
      </card-panel>
    </el-col>
  </el-row>
</template>

<script>
import SmallLineChart from '../SmallLineChart'
import SmallBarChart from '../SmallBarChart'
import CountTo from 'vue-count-to'
import CardPanel from '../CardPanel'
let xAxisData = []
let result = 0
const lineChartData = {
  newVisitis: {
    actualData: []
  }
}
for (let i = 1; i <= 24; i++) {
  xAxisData.push(i)
  let h = parseInt(Math.random() * (110 - 10 + 1) + 10, 10)
  lineChartData.newVisitis.actualData.push(h)
  result += h
}

const qlineChartData = {
  newVisitis: {
    actualData: []
  }
}
for (let i = 1; i <= 24; i++) {
  xAxisData.push(i)
  let h = parseInt(Math.random() * (100 - 10 + 1) + 10, 10)
  qlineChartData.newVisitis.actualData.push(h)
  result += h
}
export default {
  components: {
    CountTo,
    CardPanel,
    SmallLineChart,
    SmallBarChart
  },
  data () {
    return {
      result: result,
      xAxisData: xAxisData,
      lineChartData: lineChartData.newVisitis,
      qlineChartData: qlineChartData.newVisitis,
      newVisitis: {
        name: 'newVisitis'
      },
      messages: {
        name: 'messages'
      },
      purchases: {
        name: 'purchases'
      },
      shoppings: {
        name: 'shoppings'
      }
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
.card-panel-text {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}

.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      text-align: left;
      font-weight: bold;
      margin: 26px;

      .card-panel-top {
        .card-panel-num {
          font-size: 30px;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
