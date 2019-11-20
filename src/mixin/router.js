export default {
  methods: {
    rollback () {
      this.$router.go(-1)
    },
    forward (value = '/') {
      this.$router.push(value)
    },
    generatePath (item, subItem) {
      return `${item.component ? item.path + '/' : ''}${subItem.path}`
    }
  }
}
