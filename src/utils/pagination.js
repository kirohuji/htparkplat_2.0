export const payload = (state) => {
  const currentPage = state.components.table.page.currentPage
  const pageSize = state.components.table.page.pageSize
  const domain = state.components.table.domain
  const operationType = state.components.dialog.operation.type
  return {
    page: {
      currentPage, pageSize
    },
    domain,
    operationType
  }
}
