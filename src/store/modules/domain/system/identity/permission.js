export default {
  name: 'permission',
  model: {
    account: null,
    age: null,
    date: null,
    id: null,
    mail: null,
    name: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '姓名'
    },
    {
      value: 'age',
      label: '年龄'
    },
    {
      value: 'account',
      label: '账户名'
    },
    {
      value: 'mail',
      label: '邮箱'
    }
  ],
  dialogColumns: [
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
      value: 'age',
      label: '年龄',
      roles: [],
      show: true,
      type: 'input',
      options: false,
      placeholder: '请输入年龄'
    },
    {
      value: 'account',
      label: '账户',
      roles: [],
      show: true,
      type: 'input',
      options: false,
      placeholder: '请输入账户名'
    },
    {
      value: 'mail',
      label: '邮箱',
      roles: [],
      show: true,
      type: 'input',
      options: false,
      placeholder: '请输入邮箱'
    }
  ]
}
