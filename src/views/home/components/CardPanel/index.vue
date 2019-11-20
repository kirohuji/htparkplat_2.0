<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {
          name: 'test'
        }
      }
    },
    divider: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSetLineChartData (type) {
      this.$emit('handleSetLineChartData', type)
    }
  },
  render () {
    return (
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-top">
            {this.$slots.header}
          </div>
          <div class="card-panel-content">
            {this.$slots.content}
          </div>
          <div style={{ display: this.divider ? 'block' : 'none' }}>
            <el-divider style="display:none;margin-bottom: 16px;margin-top: 8px;"></el-divider>
          </div>
          <div class="card-panel-footer">
            {this.$slots.footer}
          </div>
        </div>
      </div>
    )
  }
}
</script>
<style lang='stylus' scoped>
.card-panel-text
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
.card-panel
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  .card-panel-icon-wrapper
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  .card-panel-icon
    float: left;
    font-size: 48px;
  .card-panel-description
    text-align: left;
    font-weight: bold;
    margin: 26px;
    .card-panel-content
      height: 46px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    .card-panel-top
      .card-panel-num
        font-size: 20px;
@media (max-width: 550px)
  .card-panel-description
    display: none;
  .card-panel-icon-wrapper
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    .svg-icon
      display: block;
      margin: 14px auto !important;
      float: none !important;
</style>
