export default {
  tableColumns: [
    {
      value: 'name',
      label: '姓名'
    },
    {
      value: 'description',
      label: '角色描述'
    },
    {
      value: 'date',
      label: '创建时间'
    },
    {
      value: 'role',
      label: '角色'
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
    {
      value: 'description',
      label: '角色描述',
      roles: [],
      show: true,
      type: 'input',
      option: false
    },
    {
      value: 'date',
      label: '创建时间'
    },
    {
      value: 'role',
      label: '角色'
    }
  ]
}
