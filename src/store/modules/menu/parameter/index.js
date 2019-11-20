import lazyLoading, { loadDefault } from '../lazyLoading'
export default {
  name: 'parameter',
  path: '/parameter',
  meta: {
    icon: 'el-icon-pie-chart',
    label: '表单管理',
    link: '/parameter',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('default', true),
  children: [
    loadDefault('parameter'),
    {
      name: 'enterprise',
      path: 'enterprise',
      component: lazyLoading('parameter/Enterprise'),
      meta: {
        label: '企业上报',
        link: '/parameter/enterprise',
        show: true,
        description: '企业上报',
        content: '企业上报'
      }
    },
    {
      name: 'warn',
      path: 'warn',
      component: lazyLoading('parameter/Warn'),
      meta: {
        label: '报表系统',
        link: '/parameter/warn',
        show: true,
        description: '报表系统',
        content: '报表系统'
      }
    },
    {
      name: 'tear',
      path: 'tear',
      component: lazyLoading('parameter/Tear'),
      meta: {
        label: '智能抄表',
        link: '/parameter/tear',
        show: true,
        description: '智能抄表',
        content: '智能抄表'
      }
    }
  ]
}
