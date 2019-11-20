// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
export default (name, index = false) => () =>
  import(`@/views/${name}${index ? '/index' : ''}.vue`)

export const loadDefault = (name, link = null, label = null) => {
  return {
    name: `${name}`,
    path: '',
    component: () => import(`@/containers/FuCMenuCard`),
    meta: {
      link: link || `${name}/index`,
      label: label || '默认',
      show: false
    }
  }
}
