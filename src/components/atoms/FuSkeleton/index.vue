<script>
export default {
  name: 'FuSkeleton',
  props: {
    /**
     * The default maxiumum width is 100%.
     */
    maxWidth: {
      default: 100,
      type: Number
    },
    /**
     * Lines have a minimum width of 80%.
     */
    minWidth: {
      default: 100,
      type: Number
    },
    /**
     * Make lines the same height as text.
     */
    height: {
      default: '100%',
      type: String
    },
    /**
     * Make it possible to define a fixed
     * width instead of using a random one.
     */
    width: {
      default: '100px',
      type: String
    }
  },
  computed: {
    /**
     * @public
     * Either use the given fixed width or
     * a random width between the given min
     * and max values.
     */
    computedWidth () {
      return (
        this.width ||
        `${Math.floor(
          Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
        )}%`
      )
    }
  },
  render () {
    return (
      <span
        class="skeleton-box"
        style={{ height: this.computedWidth, width: this.computedWidth }}
      />
    )
  }
}
</script>
<style lang="less" scoped>
.skeleton-box {
  display: inline-block;
  vertical-align: middle;
  background-color: #dddbdd;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: "";

    @keyframes shimmer {
      100% {
        transform: translate(100%);
      }
    }
  }
}
</style>
