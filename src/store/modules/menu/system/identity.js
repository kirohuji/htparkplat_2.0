import lazyLoading, { loadDefault } from '../lazyLoading'
export default {
  name: 'identity',
  path: 'identity',
  meta: {
    icon: 'ion-speedometer titleIcon icon',
    label: '认证系统',
    link: '/system/identity',
    description: '管理用户角色和权限',
    expanded: true,
    auth: true,
    show: true
  },
  component: lazyLoading('default', true),
  children: [
    loadDefault('economize', '/system/identity'),
    {
      name: 'roles',
      path: 'roles',
      component: lazyLoading('system/identity/Roles'),
      meta: {
        label: '角色管理',
        link: '/system/identity/roles',
        show: true,
        description: '角色管理',
        content: '角色管理'
      }
    },
    {
      name: 'permission',
      path: 'permission',
      component: lazyLoading('system/identity/Permission'),
      meta: {
        label: '权限管理',
        link: '/system/identity/permission',
        show: true,
        description: '权限管理',
        content: '权限管理'
      }
    }
    // {
    //   name: 'organism',
    //   path: 'organism',
    //   component: lazyLoading('system/identity/Permission'),
    //   meta: {
    //     label: '组织管理',
    //     link: '/system/identity/organism',
    //     show: true,
    //     description: '组织管理',
    //     content: '组织管理'
    //   }
    // }
  ]
}
