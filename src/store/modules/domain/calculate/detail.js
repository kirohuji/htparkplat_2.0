export default {
  name: 'detail',
  model: {
    charset: null,
    id: null,
    level: null,
    modifyTime: null,
    name: null,
    state: null,
    system: null,
    type: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '计量器具简称'
    },
    {
      value: 'type',
      label: '能源品种'
    },
    {
      value: 'level',
      label: '器具等级'
    },
    {
      value: 'charset',
      label: '所属上报数据组合编码'
    },
    {
      value: 'system',
      label: '接入系统'
    },
    {
      value: 'state',
      label: '状态'
    },
    {
      value: 'modifyTime',
      label: '状态改变时间'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '计量器具简称',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'type',
      label: '能源品种',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'level',
      label: '器具等级',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'charset',
      label: '所属上报数据组合编码',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'system',
      label: '接入系统',
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
      value: 'modifyTime',
      label: '状态改变时间',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
