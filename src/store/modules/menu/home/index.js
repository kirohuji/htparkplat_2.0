import lazyLoading, { loadDefault } from '../lazyLoading'

export default {
  name: 'home',
  path: '/home',
  meta: {
    icon: 'el-icon-office-building',
    label: '首页',
    link: '/home',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('default', true),
  children: [
    loadDefault('home'),
    {
      name: 'dashboard',
      path: 'dashboard',
      component: lazyLoading('home/Dashboard'),
      keepAlive: true,
      meta: {
        label: '能源看板',
        link: '/home/dashboard',
        show: true,
        description: '能源看板'
      }
    },
    {
      name: 'workspace',
      path: 'workspace',
      component: lazyLoading('home/WorkSpace'),
      meta: {
        label: '工作台',
        link: '/home/workspace',
        show: true,
        description: '工作台'
      }
    },
    {
      name: 'map',
      path: 'map',
      component: lazyLoading('home/Map'),
      meta: {
        label: '地图展示',
        link: '/home/map',
        show: true,
        description: '地图展示'
      }
    }
  ]
}
