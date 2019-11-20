// import FuDataShowTable from '@/components/organism/FuDataShowTable'
export const columns = (state, locations) => {
  let domain = state.domain
  locations.split('/').forEach((location) => {
    domain = domain[location]
  })
  return domain
}
// export const fuCDataShowTable = (domain, connect) => {
//   return connect({
//     stateToProps: {
//       tableColumns: state => columns(state, domain).tableColumns,
//       dialogColumns: state => columns(state, domain).dialogColumns
//     }
//   })('FuCDataShowTable', FuDataShowTable)
// }
