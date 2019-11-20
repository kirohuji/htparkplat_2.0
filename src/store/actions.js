// 通过Action提交新的状态
import * as types from './mutation-types'
export const expandMenu = ({ commit }, menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}

export const currentTableDomain = ({ dispatch, commit }, value) => {
  commit(types.CURRENTTABLEDOMAIN, value)
  dispatch('initTableData')
}

export const initTableData = (store) => {
  store.commit(types.INITTABLEDATA)
}
