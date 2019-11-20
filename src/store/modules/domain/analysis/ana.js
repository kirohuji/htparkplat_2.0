export default {
  name: 'ana',
  model: {
    address: null,
    date: null,
    id: null,
    mainProduction: null,
    name: null,
    nonIndustrial: null,
    synthesize: null,
    transEff: null,
    transInto: null,
    transLoss: null,
    utilizeEff: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '企业名称'
    },
    {
      value: 'nonIndustrial',
      label: '非工业生产用能'
    },
    {
      value: 'mainProduction',
      label: '主要生产用能'
    },
    {
      value: 'transInto',
      label: '能源加工转换产出量'
    },
    {
      value: 'transEff',
      label: '能源加工转换效率'
    },
    {
      value: 'transLoss',
      label: '能源加工转换损失率'
    },
    {
      value: 'synthesize',
      label: '产值综合能耗'
    },
    {
      value: 'utilizeEff',
      label: '能源利用效率'
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
      value: 'nonIndustrial',
      label: '非工业生产用能',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'mainProduction',
      label: '主要生产用能',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'transInto',
      label: '能源加工转换产出量',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'transEff',
      label: '能源加工转换效率',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'transLoss',
      label: '能源加工转换损失率',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'synthesize',
      label: '产值综合能耗',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'utilizeEff',
      label: '能源利用效率',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
