export default {
  name: 'enterprise',
  model: {
    area: null,
    id: null,
    industryCode: null,
    isCounty: null,
    isEnergy: null,
    name: null,
    type: null,
    typeName: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '单位名称'
    },
    {
      value: 'type',
      label: '单位类型'
    },
    {
      value: 'typeName',
      label: '单位类型名'
    },
    {
      value: 'industryCode',
      label: '行业编码'
    },
    {
      value: 'area',
      label: '地区名'
    },
    {
      value: 'isCounty',
      label: '是否央企'
    },
    {
      value: 'isEnergy',
      label: '是否能源加工转换类企业'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '单位名称',
      roles: [],

      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'type',
      label: '单位类型',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'typeName',
      label: '单位类型名',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'industryCode',
      label: '行业编码',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'area',
      label: '地区名',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'isCounty',
      label: '是否央企',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'isEnergy',
      label: '是否能源加工转换类企业',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
