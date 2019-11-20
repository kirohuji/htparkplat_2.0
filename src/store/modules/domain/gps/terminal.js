export default {
  name: 'terminal',
  model: {
    id: null,
    makeFactory: null,
    termNo: null,
    simNo: null,
    state: null,
    bind: null
  },
  tableColumns: [
    {
      value: 'makeFactory',
      label: '生产厂家'
    },
    {
      value: 'termNo',
      label: '设备编号'
    },
    {
      value: 'simNo',
      label: 'sim卡号'
    },
    {
      value: 'state',
      label: '状态'
    },
    {
      value: 'bind',
      label: '绑定状态'
    }
  ],
  dialogColumns: [
    {
      value: 'makeFactory',
      label: '生产厂家',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'termNo',
      label: '设备编号',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'simNo',
      label: 'sim卡号',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'state',
      label: '状态',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'bind',
      label: '绑定状态',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
