<template>
  <el-tabs type="card"
           :closable="isDynamic"
           @tab-remove="removeTab">
    <el-tab-pane v-for="item in editableTabs"
                 :key="item.name"
                 :label="item.title"
                 :name="item.name">
      {{item.content}}
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  props: {
    editableTabs: {
      type: Array,
      default: () => {
        return [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }]
      }
    },
    isDynamic: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      editableTabsValue: '1'
    }
  },
  methods: {
    addTab (targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>
