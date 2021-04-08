module.exports = [
  {
    name: 'payments',
    methods: [
      {
        name: 'retrieve',
        path: 'payments/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'payments',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'payments',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'payments/[0]',
        method: 'put',
        type: 'update',
      },
      {
        name: 'refund',
        path: 'payments/[0]/refund',
        method: 'post',
        type: 'update',
      },
      {
        name: 'capture',
        path: 'payments/[0]/capture',
        method: 'post',
        type: 'update',
      },
    ],
  },
  {
    name: 'plans',
    methods: [
      {
        name: 'retrieve',
        path: 'plans/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'plans',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'plans',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'plans/[0]',
        method: 'put',
        type: 'update',
      },
    ],
  },
  {
    name: 'subscriptions',
    methods: [
      {
        name: 'retrieve',
        path: 'subscriptions/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'subscriptions',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'subscriptions',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'subscriptions/[0]',
        method: 'put',
        type: 'update',
      },
      {
        name: 'cancel',
        path: 'subscriptions/[0]',
        method: 'delete',
        type: 'delete',
      },
    ],
  },
  {
    name: 'customers',
    methods: [
      {
        name: 'retrieve',
        path: 'customers/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'customers',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'update',
        path: 'customers/[0]',
        method: 'put',
        type: 'update',
      },
    ],
  },
  {
    name: 'products',
    methods: [
      {
        name: 'retrieve',
        path: 'products/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'products',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'products',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'products/[0]',
        method: 'put',
        type: 'update',
      },
    ],
  },
  {
    name: 'tax_rates',
    methods: [
      {
        name: 'retrieve',
        path: 'tax-rates/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'tax-rates',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'tax-rates',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'tax-rates/[0]',
        method: 'put',
        type: 'update',
      },
      {
        name: 'del',
        path: 'tax-rates/[0]',
        method: 'delete',
        type: 'delete',
      },
    ],
  },
  {
    name: 'bank_accounts',
    methods: [
      {
        name: 'list',
        path: 'bank-accounts',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'bank-accounts',
        method: 'post',
        type: 'create',
      },
      {
        name: 'del',
        path: 'bank-accounts/[0]',
        method: 'delete',
        type: 'delete',
      },
    ],
  },
  {
    name: 'invoices',
    methods: [
      {
        name: 'retrieve',
        path: 'invoices/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'invoices',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'invoices',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'invoices/[0]',
        method: 'put',
        type: 'update',
      },
      {
        name: 'finalize',
        path: 'invoices/[0]/finalize',
        method: 'post',
        type: 'update',
      },
      {
        name: 'pay',
        path: 'invoices/[0]/pay',
        method: 'post',
        type: 'update',
      },
      {
        name: 'markUncollectible',
        path: 'invoices/[0]/mark-uncollectible',
        method: 'post',
        type: 'update',
      },
      {
        name: 'void',
        path: 'invoices/[0]/void',
        method: 'post',
        type: 'update',
      },
    ],
  },
];
