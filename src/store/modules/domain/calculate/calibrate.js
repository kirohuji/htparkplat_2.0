export default {
  name: 'calibrate',
  model: {
    circle: null,
    id: null,
    modifyTime: null,
    name: null,
    org: null,
    planTime: null,
    reason: null,
    state: null,
    type: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '器具名称'
    },
    {
      value: 'type',
      label: '器具类型'
    },
    {
      value: 'state',
      label: '检定/校准状态'
    },
    {
      value: 'circle',
      label: '检定/检定周期'
    },
    {
      value: 'planTime',
      label: '上次检定/校准时间'
    },
    {
      value: 'modifyTime',
      label: '下一次检定/校准时间'
    },
    {
      value: 'org',
      label: '检验机构'
    },
    {
      value: 'reason',
      label: '未检定/校准原因'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '器具名称',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'type',
      label: '器具类型',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'state',
      label: '检定/校准状态',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'circle',
      label: '检定/检定周期',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'planTime',
      label: '上次检定/校准时间',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'modifyTime',
      label: '下一次检定/校准时间',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'org',
      label: '检验机构',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'reason',
      label: '未检定/校准原因',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
