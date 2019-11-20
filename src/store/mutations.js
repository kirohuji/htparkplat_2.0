// eslint-disable-next-line
import * as Types from './mutation-types'

const routeClear = (path) => {
  let location = ''
  if (path.substring(0, 1) === '/') {
    location = path.substring(1)
  }
  if (location.substring(location.length - 1, location.length) === '/') {
    location = path.substring(1, path.length - 1)
  }
  return location
}
const getItem = (state, menuList, result) => {
  const locations = menuList.split('/')
  let location = locations[0]
  let newLocation = menuList.substring(
    location.length + 1,
    menuList.length
  )
  if (locations.length <= 1) {
    if (state.items) {
      let item = state.items.filter(c => c.name === location)[0]
      result.push(item.meta)
      return item
    } else if (state.children) {
      let item = state.children.filter(c => c.name === location)[0]
      console.log(item)
      result.push(item.meta)
      return item
    }
  } else {
    if (state.items) {
      let item = state.items.filter(c => c.name === location)[0]
      result.push(item.meta)
      return getItem(item, newLocation, result)
    } else if (state.children) {
      let item = state.children.filter(c => c.name === location)[0]
      result.push(item.meta)
      return getItem(item, newLocation, result)
    }
  }
}
// 提交新的状态
const mutations = {
  [Types.CURRENT_LOCATION] (state, route) {
    if (route.path !== '/') {
      state.location = routeClear(route.path)
      let result = []
      state.menuCardItems = getItem(state.menu, state.location, result)
      state.navigation = result
    }
  },
  [Types.TOGGLE_TREEMENU] (state) {
    state.components.treeMenu.isCollapse = !state.components.treeMenu.isCollapse
  },
  [Types.TOGGLE_NOTIFICATION] (state, result) {
    console.log(result)
    state.components.message.content = result.content
    state.components.message.length++
    // }
  },
  [Types.MINUS_MESSAGE] (state) {
    state.components.message.content = {}
    state.components.message.length--
  },
  [Types.TOGGLE_DIALOG] (state, data = null) {
    console.log('获取数据和操作')
    console.log(data)
    if (data != null) {
      state.components.dialog.operation.type = data.type
      while (data.slotProps != null) {
        data = data.slotProps
      }
      state.components.dialog.data = data.row
      console.log(data.type)
    }
    state.components.dialog.visible = !state.components.dialog.visible
  },
  [Types.CURRENTTABLEDOMAIN] (state, domain) {
    state.components.table.domain = domain
  }
}

export default mutations
