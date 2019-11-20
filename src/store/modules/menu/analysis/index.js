import lazyLoading, { loadDefault } from '../lazyLoading'
export default {
  name: 'analysis',
  path: '/analysis',
  meta: {
    icon: 'el-icon-data-line',
    label: '能耗管理',
    link: '/analysis',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('analysis/Ana'),
  children: [
    loadDefault('analysis'),
    {
      name: 'ana',
      path: 'ana',
      component: lazyLoading('analysis/Ana'),
      meta: {
        label: '问题管理',
        link: '/analysis/ana',
        show: true,
        description: '问题管理',
        content: '问题管理'
      }
    },
    {
      name: 'alarm',
      path: 'alarm',
      component: lazyLoading('analysis/Alarm'),
      meta: {
        label: '计划管理',
        link: '/analysis/alarm',
        show: true,
        description: '计划管理',
        content: '计划管理'
      }
    }
    // {
    //   name: 'consume',
    //   path: 'consume',
    //   component: lazyLoading('analysis/Consume'),
    //   meta: {
    //     label: '指标管理',
    //     link: '/analysis/consume',
    //     show: true,
    //     description: '指标管理',
    //     content: '指标管理'
    //   }
    // }
  ]
}
