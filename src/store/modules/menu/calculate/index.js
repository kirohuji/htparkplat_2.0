import lazyLoading, { loadDefault } from '../lazyLoading'

export default {
  name: 'calculate',
  path: '/calculate',
  meta: {
    icon: 'el-icon-cpu',
    label: '设备管理',
    link: '/calculate',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('default', true),
  children: [
    loadDefault('calculate'),
    {
      name: 'detail',
      path: 'detail',
      component: lazyLoading('calculate/Detail'),
      meta: {
        label: '器具信息',
        link: '/calculate/detail',
        show: true,
        description: '器具信息',
        content: '器具信息'
      }
    }
    // {
    //   name: 'calibrate',
    //   path: 'calibrate',
    //   component: lazyLoading('calculate/Calibrate'),
    //   meta: {
    //     label: '设备故障管理',
    //     link: '/calculate/calibrate',
    //     show: true,
    //     description: '设备故障管理',
    //     content: '设备故障管理'
    //   }
    // },
    // {
    //   name: 'remote',
    //   path: 'remote',
    //   component: lazyLoading('calculate/Calibrate'),
    //   meta: {
    //     label: '远程维护管理',
    //     link: '/calculate/remote',
    //     show: true,
    //     description: '远程维护管理',
    //     content: '远程维护管理'
    //   }
    // }
  ]
}
