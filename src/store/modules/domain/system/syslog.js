export default {
  name: 'syslog',
  model: {
    id: null,
    ipAddress: null,
    loginTime: null,
    name: null
  },
  tableColumns: [
    {
      value: 'name',
      label: '账户名/邮件名'
    },
    {
      value: 'loginTime',
      label: '登录时间'
    },
    {
      value: 'ipAddress',
      label: 'ip地址'
    }
  ],
  dialogColumns: [
    {
      value: 'name',
      label: '账户名/邮件名',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'loginTime',
      label: '登录时间',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    },
    {
      value: 'ipAddress',
      label: 'ip地址',
      roles: [],
      show: true,
      type: 'input',
      option: false,
      placeholder: '请输入内容'
    }
  ]
}
