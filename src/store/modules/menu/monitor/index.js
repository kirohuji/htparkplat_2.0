import lazyLoading, { loadDefault } from '../lazyLoading'
export default {
  name: 'monitor',
  path: '/monitor',
  meta: {
    icon: 'el-icon-attract',
    label: '能耗检测',
    link: '/monitor',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('default', true),
  children: [
    loadDefault('monitor'),
    {
      name: 'monitor',
      path: 'monitor',
      component: lazyLoading('monitor/Index'),
      meta: {
        label: '实时监测',
        link: '/monitor/monitor',
        show: true,
        description: '实时监测'
      }
    }
  ]
}
