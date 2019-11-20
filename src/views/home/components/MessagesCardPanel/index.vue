<template>
  <div class="card-panel">
    <div class="card-panel-wrapper icon-people">
      <span style="font-size:16px">动态</span>
    </div>
    <el-divider></el-divider>
    <div class="card-panel-description"
         style="padding:16px">
      <div style="padding-top: 24px;text-align: center;max-height: 500px; overflow: auto;">
        <div class="scroll">
          <messages v-infinite-scroll="load"
                    :items="list"
                    infinite-scroll-disabled="disabled" />
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const list = [
  {
    value: '水表和平台断开连接',
    date: '天润化肥公司'
  },
  {
    value: '能耗数据采集器发生异常',
    date: '久泰能源有限公司'
  },
  {
    value: '地磅超过24个小时未发送数据',
    date: '伊泰治油有限公司'
  }
]
const MessageItem = {
  name: 'MessageItem',
  functional: true,
  render (h, context) {
    return (
      <div>
        <div class="message" style="display: flex;align-items: start;">
          <div style="text-align: left;">
            <div style="margin-bottom: 4px;color: rgba(0,0,0,.65);font-size: 14px;line-height: 22px;">{context.props.item.value}</div>
            <div style="color: rgba(0,0,0,.45);font-size: 14px;line-height: 22px;">{context.props.item.date}</div>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
    )
  }
}
const Messages = {
  name: 'Messages',
  components: {
    MessageItem
  },
  props: {
    items: {
      type: Array
    }
  },
  render () {
    return (
      <div class="messages">
        {this.items.map((item) => {
          return (
            <message-item item={item} />
          )
        })}</div>
    )
  }
}
export default {
  name: 'MessagesCardPanel',
  components: {
    Messages
  },
  data () {
    return {
      loading: false,
      list: [
        {
          value: '水表发生异常',
          date: '中科合成'
        }
      ]
    }
  },
  computed: {
    noMore () {
      return this.list.length >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.list.push(
          {
            value: '水表和平台断开连接',
            date: '天润化肥公司'
          },
          {
            value: '能耗数据采集器发生异常',
            date: '久泰能源有限公司'
          },
          {
            value: '地磅超过24个小时未发送数据',
            date: '伊泰治油有限公司'
          }
        )
        this.loading = false
      }, 5000)
      console.log('滚到底部了')
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-divider--horizontal {
  margin: 0;
  height: 1x;
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

  .card-panel-wrapper {
    display: flex;
    padding: 20px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }

  .card-panel-description {
    font-weight: bold;
    margin-left: 0px;

    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }

    .card-panel-num {
      font-size: 20px;
    }
  }
}
</style>
