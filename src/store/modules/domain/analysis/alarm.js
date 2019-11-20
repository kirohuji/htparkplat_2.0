export default {
  name: 'alarm',
  model: {
    address: null,
    consume: null,
    date: null,
    id: null,
    limit: null,
    name: null,
    rank: null,
    type: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '企业名称'
    },
    {
      value: 'type',
      label: '能源类型'
    },
    {
      value: 'limit',
      label: '能源限额'
    },
    {
      value: 'consume',
      label: '实际消耗'
    },
    {
      value: 'date',
      label: '发生时间'
    },
    {
      value: 'rank',
      label: '告警等级'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '企业名称',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'type',
      label: '能源类型',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'limit',
      label: '能源限额',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'consume',
      label: '实际消耗',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'date',
      label: '发生时间',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'rank',
      label: '告警等级',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
