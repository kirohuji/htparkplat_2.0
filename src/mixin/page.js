import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      component: undefined,
      pageSize: 10,
      currentPage: 1,
      row: {}
    }
  },
  computed: {
    ...mapState({
      dialogData: state => state.components.dialog
    }),
    tableData () {
      return {
        page: {
          currentChange: this.currentPage,
          pageSize: this.pageSize
        },
        domain: this.domain
      }
    }
  },
  methods: {
    handleSizeChange (value) {
      this.pageSize = value
      console.info(`每页 ${value} 条`)
    },
    handleCurrentChange (value) {
      this.currentPage = value
      console.info(`当前页: ${value}`)
    },
    ...mapActions([
      'currentTableDomain'
    ]),
    ...mapMutations({
      toggle: 'TOGGLE_DIALOG'
    })
  }
}
