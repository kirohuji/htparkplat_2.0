import lazyLoading, { loadDefault } from '../lazyLoading'
export default {
  name: 'economize',
  path: '/economize',
  meta: {
    icon: 'el-icon-connection',
    label: '能效对标',
    link: '/economize',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('default', true),
  children: [
    loadDefault('economize'),
    {
      name: 'target',
      path: 'target',
      component: lazyLoading('economize/Target'),
      meta: {
        label: '详细信息',
        link: '/economize/target',
        show: true,
        description: '详细信息'
      }
    }
  ]
}
