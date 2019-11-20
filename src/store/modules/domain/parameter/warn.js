export default {
  name: 'warn',
  model: {
    date: null,
    id: null,
    name: null,
    type: null,
    unit: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '企业名称'
    },
    {
      value: 'type',
      label: '能源等级'
    },
    {
      value: 'level',
      label: '告警等级'
    },
    {
      value: 'limit',
      label: '能源限额'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '企业名称',
      roles: []

    },
    {
      value: 'type',
      label: '能源等级',
      roles: []

    },
    {
      value: 'level',
      label: '告警等级',
      roles: []

    },
    {
      value: 'limit',
      label: '能源限额',
      roles: []

    }
  ]
}
