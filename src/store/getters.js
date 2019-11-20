// 获取当前状态值
const menuitems = state => state.menu.items
const components = state => state.components
const location = state => state.location
const system = state => {
  return state.menu.items.filter(c => c.name === 'system')[0]
}
const identity = state => {
  const parent = state.menu.items.filter(c => c.name === 'system')[0]
  return parent.children.filter(c => c.name === 'identity')[0]
}
export {
  menuitems,
  system,
  identity,
  location,
  components
}
