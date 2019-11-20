export default {
  name: 'consume',
  model: {
    address: null,
    date: null,
    grade: null,
    id: null,
    name: null,
    sumConsume: null,
    unitConsume: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '企业名称'
    },
    {
      value: 'sumConsume',
      label: '消耗总量'
    },
    {
      value: 'unitConsume',
      label: '单位产值能耗'
    },
    {
      value: 'grade',
      label: '评分'
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
      value: 'sumConsume',
      label: '消耗总量',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'unitConsume',
      label: '单位产值能耗',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'grade',
      label: '评分',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
