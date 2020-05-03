export const userInfo = [
  {
    email: 'nam',
    password: '1234',
    roles: [
      {
        id: 1,
        name: 'Thủ trưởng',
        code: 'ROLE_MANAGER',
        permissions: [
          {
            id: 1,
            name: 'Hệ thống',
            code: 'PERMISSION_SYSTEM',
            parent: null,
            href: null,
            after: null,
            isNavBar: true,
            isAllow : true
          },
          {
            id: 2,
            name: 'Tài khoản',
            code: 'PERMISSION_ACCOUNT',
            parent: 1,
            href: '/account',
            after: null,
            isNavBar: true,
            isAllow : true
          },
          {
            id: 3,
            name: '',
            code: 'PERMISSION_ACCOUNT_ADD',
            parent: 2,
            href: null,
            after: null,
            isNavBar: false,
            isAllow : true
          },
          {
            id: 4,
            name: '',
            code: 'PERMISSION_ACCOUNT_EDIT',
            parent: 2,
            href: null,
            after: null,
            isNavBar: false,
            isAllow : true
          },
          {
            id: 5,
            name: '',
            code: 'PERMISSION_ACCOUNT_DELETE',
            parent: 2,
            href: null,
            after: null,
            isNavBar: false,
            isAllow : true
          },
          {
            id: 6,
            name: '',
            code: 'PERMISSION_ACCOUNT_GET',
            parent: 2,
            href: null,
            after: null,
            isNavBar: false,
            isAllow : true
          },
          {
            id: 7,
            name: '',
            code: 'PERMISSION_ACCOUNT_LIST',
            parent: 2,
            href: null,
            after: null,
            isNavBar: false,
            isAllow : true
          },
          {
            id: 8,
            name: 'Vai trò',
            code: 'PERMISSION_ROLE',
            parent: 1,
            href: '/role',
            after: 2,
            isNavBar: true,
            isAllow : true
          },
          {
            id: 9,
            name: 'Quyền',
            code: 'PERMISSION_PERMISSION',
            parent: 1,
            href: '/permission',
            after: 8,
            isNavBar: true,
            isAllow : true
          },
          {
            id: 9,
            name: 'Đơn hàng',
            code: 'PERMISSION_ORDER',
            parent: null,
            href: '/order',
            after: null,
            isNavBar: true,
            isAllow : true
          }
        ]
      },
      {
        id: 2,
        name: 'Nhân viên',
        code: 'ROLE_STAFF',
        permissions: [
          {
            id: 9,
            name: 'Đơn hàng',
            code: 'PERMISSION_ORDER',
            parent: null,
            href: '/order',
            after: null,
            isNavBar: true,
            isAllow : true
          }
        ]
      }
    ]
  }
];

