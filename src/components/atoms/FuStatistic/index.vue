<script>
export default {
  name: 'FuStatistic',
  functional: true,
  render (h, context) {
    return (
      <div class="statistic">
        <div class="label">
          {context.slots().label}
        </div>
        <div class="value">
          {context.slots().value}
        </div>
      </div>
    )
  }
}
</script>
<style lang="stylus" scoped>
.statistic
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  .label
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  .value
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
</style>
