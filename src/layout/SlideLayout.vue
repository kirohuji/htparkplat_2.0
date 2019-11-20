<template>
  <div ref="wrapper"
       class="slide-wrapper">
    <div ref="content"
         class="content">
      <div v-show="renderHead"
           class="header">
        <i v-show="icon !== ''"
           @mousedown="toggleMouseEvent('down')"
           @mouseleave="toggleMouseEvent('leave')"
           @mouseup="toggleMouseEvent('up')"
           ref="toggle"
           class="material-icons toggle">{{ icon }}</i>
        <slot v-if="!retract"
              name="header"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ifPresent } from 'starke'
export default {
  name: 'SlideLayout',
  props: {
    left: {
      type: Boolean,
      default: true
    },
    renderHead: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: (window.innerWidth / 5).toString()
    },
    color: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 300
    },
    transparency: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // control status of this layout
      retract: false
    }
  },
  mounted () {
    this.wrapper = this.$refs.wrapper
    this.toggle = this.$refs.toggle
    this.initProps(this.wrapper, this.toggle)
  },
  methods: {
    toggleMouseEvent (type) {
      if (type === 'down') {
        this.toggle.style.background = 'gold'
      } else if (type === 'up') {
        this.toggle.style.background = ''
        if (this.retract === true) {
          if (this.left === true && this.right === false) {
            this.wrapper.style.left = 0
          } else if (this.right === true) {
            this.wrapper.style.right = 0
          }
          this.wrapper.style.background = this.color
          this.wrapper.style.height = '100%'
        } else {
          if (this.left === true && this.right === false) {
            this.wrapper.style.left = -this.width + 35 + 'px'
            this.wrapper.style.height = 0
          } else if (this.right === true) {
            this.wrapper.style.right = -this.width + 35 + 'px'
          }
          this.wrapper.style.background = 'none'
          this.wrapper.style.height = '40px'
        }
        this.retract = !this.retract
        // 提交事件
        this.$emit('onRetract', this.retract)
      } else if (type === 'leave') {
        this.toggle.style.background = ''
      }
    },
    initProps (wrapper, toggle) {
      wrapper.style.width = this.width + 'px'
      wrapper.style.height = window.clientHeight + 'px'
      wrapper.style.textAlign = this.align
      // resolve direction
      if (this.left === true && this.right !== true) {
        wrapper.style.left = 0
        toggle.style.right = 0
      } else if (this.right === true) {
        wrapper.style.right = 0
        toggle.style.left = 0
      }
      if (this.fixed === true) {
        wrapper.style.posiiton = 'fixed'
      }
      ifPresent(this.color, res => {
        wrapper.style.background = res
      })
      wrapper.style.zIndex = this.index
      wrapper.style.opacity = this.transparency
    }
  }
}
</script>

<style lang="less" scoped>
.slide-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 10px;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s;
  .content {
    width: 100%;
    height: 100%;
    margin-bottom: 48px;
    overflow: scroll;
    .header {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      height: 48px;
      .toggle {
        position: absolute;
        font-size: 25px;
        width: 25px;
        height: 25px;
        top: 0;
        cursor: pointer;
        transition: all 0.5s;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        &:hover {
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          font-size: 27px;
          background: rgba(44, 55, 123, 0.96);
          padding: 5px;
          color: white;
          transform: rotate(180deg);
        }
        * {
          font-weight: bold;
          line-height: 25px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
