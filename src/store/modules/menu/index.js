import * as types from '@/store/mutation-types'
import system from './system'
import analysis from './analysis'
import calculate from './calculate'
import economize from './economize'
import monitor from './monitor'
import parameter from './parameter'
import home from './home'
// show: meta.label -> name
// name: component name
// meta.label: display label
const state = {
  items: [
    home,
    analysis,
    economize,
    calculate,
    monitor,
    parameter,
    system
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
