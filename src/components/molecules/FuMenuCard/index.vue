<template>
  <content-layout>
    <el-row :gutter="20"
            style="width: 100%;display: flex;">
      <el-col :key="index + '*'"
              v-for="(item, index) in items">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>{{item.meta.label}}</span>
            <router-link style="float: right; padding: 3px 0"
                         type="text"
                         :to="item.meta.link">前往</router-link>
          </div>
          <div>{{getDescription(item)}}</div>
        </el-card>
      </el-col>
    </el-row>
  </content-layout>
</template>

<script>
export default {
  name: 'FuMenuCard',
  props: {
    parent: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    parentPath () {
      return this.parent ? this.parent.path : ''
    },
    items () {
      if (this.parent && this.parent.children) {
        return (this.parent ? this.parent.children : []).filter(
          item => item.path
        )
      } else {
        return null
      }
    }
  },
  methods: {
    getActions (item) {
      return [
        {
          text: 'Repository',
          icon: 'github',
          href: item.meta && item.meta.repository
        },
        {
          text: 'Demo',
          icon: 'link',
          name: item.name
        }
      ]
    },
    getDescription (item) {
      return item.meta && item.meta.description
    }
  }
}
</script>

<style lang="stylus" scoped>
.text
  font-size: 14px;
.item
  margin-bottom: 18px;
.clearfix:before, .clearfix:after
  display: table;
  content: '';
.clearfix:after
  clear: both;
.box-card
  width: 100%;
  height: 150px;
</style>
