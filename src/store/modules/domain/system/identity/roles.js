export default {
  name: 'roles',
  model: {
    description: null,
    id: null,
    name: null,
    role: null,
    time: null
  },
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
      value: 'time',
      label: '创建时间'
    },

    {
      value: 'role',
      label: '角色'
    }
  ],
  dialogColumns:
  [
    {
      value: 'name',
      label: '姓名',
      roles: [],
      show: true,
      type: 'input',
      options: false,
      placeholder: '请输入名字'
    },
    {
      value: 'description',
      label: '角色描述',
      roles: [],
      show: true,
      type: 'textarea',
      options: false,
      placeholder: '请输入描述'
    },
    {
      value: 'time',
      label: '创建时间',
      roles: [],
      show: true,
      type: 'input',
      options: false,
      placeholder: '请输入时间'
    }
  ]
}
