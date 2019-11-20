import pkg from 'package'
// 声明状态
const defaultPageSizes = [10, 15, 30, 50]
const state = {
  location: '',
  menuCardItems: {},
  navigation: [],
  components: {
    treeMenu: {
      isCollapse: true
    },
    message: {
      length: 0,
      content: {}
    },
    dialog: {
      visible: false,
      data: {},
      operation: {
        type: 'none'
      }
    },
    table: {
      domain: 'analysis/ana'
    }
  },
  pkg
}

export default state
