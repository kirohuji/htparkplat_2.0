export default {
  tableColumns: [
    {
      value: 'date',
      label: '日期'
    },
    {
      value: 'name',
      label: '名字'
    },
    {
      value: 'address',
      label: '地址'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '姓名',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    // {
    //   value: 'description',
    //   label: '角色描述',
    //   roles: [],
    //   show: true,
    //   type: 'input',
    //   option: false
    // },
    {
      value: 'date',
      label: '日期',
      roles: [],
      show: true,
      type: 'input',
      option: false
    },
    {
      value: 'address',
      label: '地址',
      roles: [],
      show: true,
      type: 'input',
      option: false
    }
    // {
    //   value: 'role',
    //   label: '角色',
    //   type: 'select',
    //   show: true,
    //   roles: [],
    //   options: [
    //     {
    //       label: '管理员',
    //       value: 'manager'
    //     },
    //     {
    //       label: '客户',
    //       value: 'client'
    //     }]
    // }
  ]
}
