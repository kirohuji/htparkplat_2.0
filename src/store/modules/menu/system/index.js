import lazyLoading, { loadDefault } from '../lazyLoading'
import identity from './identity'
export default {
  name: 'system',
  path: '/system',
  meta: {
    icon: 'el-icon-setting',
    label: '系统配置',
    link: '/system',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('default', true),
  children: [
    loadDefault('system'),
    identity,
    {
      name: 'syslog',
      path: 'syslog',
      component: lazyLoading('system/Syslog'),
      meta: {
        label: '系统日志',
        link: '/system/syslog',
        show: true,
        description: '系统日志',
        content: '系统日志'
      }
    }
  ]
}
