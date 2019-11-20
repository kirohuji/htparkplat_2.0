import Vue from 'vue'
import Router from 'vue-router'
import menuModule from '@/store/modules/menu'
// noinspection JSUnresolvedFunction
Vue.use(Router)
// eslint-disable-next-line no-new
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home/panel'
    },
    ...generateRoutesFromMenu(menuModule.state.items)]
})
// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
export default router
