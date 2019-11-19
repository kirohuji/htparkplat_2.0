export default function lazyLoadCompoent ({
  componentFactory,
  loading,
  loadingData
}) {
  let resolveComponent
  return () => ({
    component: new Promise((resolve) => {
      resolveComponent = resolve
    }),
    loading: {
      mounted () {
        if (!('IntersectionObserver' in window)) {
          componentFactory().then(resolveComponent)
          return
        }
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].intersectionRatio <= 0) return
          observer.unobserve(this.$el)
          componentFactory().then(resolveComponent)
          console.log('显示此组件')
        })
        observer.observe(this.$el)
      },
      render (createElement) {
        return createElement(loading, loadingData)
      }
    }
  })
}
