<script>
import FuStatistic from '@/components/atoms/FuStatistic'
export default {
  name: 'FuStatisticGroup',
  functional: true,
  components: {
    FuStatistic
  },
  render (h, context) {
    const layout = {
      display: 'flex',
      alignItems: 'center'
    }
    return (
      <div class="statistic-group" style={{ display: 'flex' }}>
        {
          context.props.items.map(item => (
            <div class="layout" style={layout}>
              <FuStatistic>
                <template slot="label">{item.label}</template>
                <template slot="value">{item.value}</template>
              </FuStatistic>
              <el-divider direction="vertical"></el-divider>
            </div>
          ))
        }
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
.el-divider--vertical {
  height: 3em;
  margin: 0 16px;
}

.statistic-grouplast-child {
  display: none;
}
</style>
