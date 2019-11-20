<script>
import 'echarts/map/js/china.js'
const Basic = {
  data () {
    const realtime = [
      { id: 1, name: '周一', ele: 4.4983, water: 5.89, gas: 1.7, coal: 0.99 },
      { id: 2, name: '周二', ele: 3.5986, water: 4.712, gas: 1.3, coal: 0.79 },
      { id: 3, name: '周三', ele: 4.2883, water: 5.68, gas: 1.4, coal: 0.69 },
      { id: 4, name: '周四', ele: 4.3883, water: 4.83, gas: 1.3, coal: 0.75 },
      { id: 5, name: '周五', ele: 4.4083, water: 5.89, gas: 1.3, coal: 0.87 },
      { id: 6, name: '周六', ele: 4.1078, water: 4.96, gas: 1.4, coal: 0.55 },
      { id: 7, name: '周日', ele: 4.3045, water: 5.15, gas: 1.6, coal: 0.79 }
    ]
    const lineOption = {
      title: {
        text: '实时能耗情况',
        subtext: '一周'
      },
      tooltip: {
        trigger: 'axis',
        formatter (param) {
          let div = ''
          param.forEach(item => {
            const unit = item.seriesName === '气' ? '万方' : item.seriesName === '电' ? '百万度' : '万吨'
            const i = '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color: ' + item.color + '"></span>' + item.seriesName + '：' + item.value + ' ' + unit + '<br/>'
            div += i
          })
          return div
        }
      },
      legend: {
        icon: 'roundRect',
        data: ['电', '水', '气', '煤'],
        textStyle: {
          color: '#000',
          fontSize: 14
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
          lineStyle: {
            color: '#000'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#000'
          }
        }
      },
      series: [
        {
          name: '电',
          type: 'line',
          stack: '总量',
          data: []
        },
        {
          name: '水',
          type: 'line',
          stack: '总量',
          data: []
        },
        {
          name: '气',
          type: 'line',
          stack: '总量',
          data: []
        },
        {
          name: '煤',
          type: 'line',
          stack: '总量',
          data: []
        }
      ]
    }
    realtime.forEach(item => {
      lineOption.series[0].data.push(item.ele)
      lineOption.series[1].data.push(item.water)
      lineOption.series[2].data.push(item.gas)
      lineOption.series[3].data.push(item.coal)
    })
    return {
      options: lineOption
    }
  },
  render () {
    return (
      <v-chart options={this.options} />
    )
  }
}
export default {
  components: {
    Basic
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  render () {
    return (
      // <el-tabs class="tabs" activeName={this.activeName}
      //   tab-click={this.handleClick}>
      //   <el-tab-pane label="数据分析"
      //     lazy={true}
      //     name="first">
      //     <world-map />
      //   </el-tab-pane>
      //   <el-tab-pane label="形势预测"
      //     lazy={true}
      //     name="second">
      //     <basic />
      //   </el-tab-pane>
      // </el-tabs>
      <div class="tabs">
        <Basic />
      </div>
    )
  }
}
</script>
<style lang='stylus' scoped>
.tabs {
  >>>.echarts {
    width: 100%;
    height: 500px;
  }
}
</style>
