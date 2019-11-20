export default {
  name: 'tear',
  model: {
    id: null,
    level: null,
    limit: null,
    name: null,
    type: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '能源名称'
    },
    {
      value: 'type',
      label: '参考折标系数'
    },
    {
      value: 'unit',
      label: '折标系单位'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '能源名称',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'type',
      label: '参考折标系数',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'unit',
      label: '折标系单位',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
