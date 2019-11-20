export default {
  name: 'terminal',
  model: {
    id: null,
    plateNo: null,
    vehicleType: null,
    cargo: null,
    capacity: null,
    driver: null,
    driverMobile: null,
    driverLicense: null,
    monitor: null,
    monitorMobile: null,
    termId: null,
    bind: null
  },
  tableColumns: [
    {
      value: 'plateNo',
      label: '车牌号'
    },
    {
      value: 'vehicleType',
      label: '车辆类型'
    },
    {
      value: 'cargo',
      label: '货品名称'
    },
    {
      value: 'capacity',
      label: '装载量'
    },
    {
      value: 'driver',
      label: '司机姓名'
    },
    {
      value: 'driverMobile',
      label: '司机电话'
    },
    {
      value: 'driverLicense',
      label: '驾驶证号'
    },
    {
      value: 'monitor',
      label: '押送员'
    },
    {
      value: 'monitorMobile',
      label: '押送员电话'
    },
    {
      value: 'termId',
      label: '终端号'
    },
    {
      value: 'bind',
      label: '是否绑定'
    }
  ],
  dialogColumns: [
    {
      value: 'plateNo',
      label: '车牌号',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'vehicleType',
      label: '车辆类型',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'cargo',
      label: '货品名称',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'capacity',
      label: '装载量',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'driver',
      label: '司机姓名',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'driverMobile',
      label: '司机电话',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'driverLicense',
      label: '驾驶证号',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'monitor',
      label: '押送员',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'monitorMobile',
      label: '押送员电话',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'termId',
      label: '终端号',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'bind',
      label: '是否绑定',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
