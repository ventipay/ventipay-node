module.exports = [
  {
    name: 'checkouts',
    methods: [
      {
        name: 'retrieve',
        path: 'checkouts/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'checkouts',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'checkouts',
        method: 'post',
        type: 'create',
      },
      {
        name: 'refund',
        path: 'checkouts/[0]/refund',
        method: 'post',
        type: 'update',
      },
    ],
  },
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
    name: 'refunds',
    methods: [
      {
        name: 'retrieve',
        path: 'refunds/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'refunds',
        method: 'get',
        type: 'retrieveAll',
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
      {
        name: 'suspend',
        path: 'subscriptions/[0]',
        method: 'post',
        type: 'update',
      },
      {
        name: 'unsuspend',
        path: 'subscriptions/[0]',
        method: 'post',
        type: 'update',
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
        name: 'create',
        path: 'customers',
        method: 'post',
        type: 'create',
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
        path: 'tax_rates/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'tax_rates',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'tax_rates',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'tax_rates/[0]',
        method: 'put',
        type: 'update',
      },
      {
        name: 'del',
        path: 'tax_rates/[0]',
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
        path: 'bank_accounts',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'bank_accounts',
        method: 'post',
        type: 'create',
      },
      {
        name: 'del',
        path: 'bank_accounts/[0]',
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
        name: 'send',
        path: 'invoices/[0]/send',
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
  {
    name: 'loan_intents',
    methods: [
      {
        name: 'retrieve',
        path: 'loan-intents/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'loan-intents',
        method: 'get',
        type: 'retrieveAll',
      },
      {
        name: 'create',
        path: 'loan-intents',
        method: 'post',
        type: 'create',
      },
      {
        name: 'authorize',
        path: 'loan-intents/[0]/authorize',
        method: 'post',
        type: 'update',
      },
    ],
  },
  {
    name: 'setup_intents',
    methods: [
      {
        name: 'retrieve',
        path: 'setup_intents/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'create',
        path: 'setup_intents',
        method: 'post',
        type: 'create',
      },
      {
        name: 'update',
        path: 'setup_intents/[0]',
        method: 'put',
        type: 'update',
      },
      {
        name: 'del',
        path: 'setup_intents/[0]',
        method: 'delete',
        type: 'delete',
      },
    ],
  },
  {
    name: 'payment_methods',
    methods: [
      {
        name: 'retrieve',
        path: 'payment_methods/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'payment_methods',
        method: 'get',
        type: 'retrieveAll',
      },
    ],
  },
  {
    name: 'events',
    methods: [
      {
        name: 'retrieve',
        path: 'events/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'events',
        method: 'get',
        type: 'retrieveAll',
      },
    ],
  },
  {
    name: 'balance_transactions',
    methods: [
      {
        name: 'retrieve',
        path: 'balance_transactions/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'balance_transactions',
        method: 'get',
        type: 'retrieveAll',
      },
    ],
  },
  {
    name: 'payouts',
    methods: [
      {
        name: 'retrieve',
        path: 'payouts/[0]',
        method: 'get',
        type: 'retrieveOne',
      },
      {
        name: 'list',
        path: 'payouts',
        method: 'get',
        type: 'retrieveAll',
      },
    ],
  },
];
