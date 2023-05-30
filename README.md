# VentiPay Node.js library

This library provides convenient access to VentiPay's REST API from Node.js server-side applications.

## Requirements

Node.js 12+.

## Versioning

We use [SemVer](https://semver.org) for versioning, so you can safely update minor and patch releases regularly.

## Changelog

We use GitHub's [release page](https://github.com/ventipay/ventipay-node/releases) to document each release changes.

## Installation

Install the library using your favourite package manager.

```bash
npm install @ventipay/ventipay

# or

yarn add @ventipay/ventipay
```

## Usage

### API Keys

To start you need to configure the library with your API Key. You can get one in your [Dashboard](https://dashboard.ventipay.com/).

Remember that API Keys can be used in [live or test mode](https://docs.ventipay.com/reference/modes).

### Promises

Provided methods return Promises, meaning you can chain them with `then` and `catch` or use `async/await`.

### Example using async/await

```javascript
// Load the library and configure your API Key
const ventipay = require('@ventipay/ventipay')('key_test_...'); // Provide your live or test API Key

(async () => {
  // Create a new payment
  // Create methods usually require a config object as first argument
  const payment = await ventipay.payments.create({
    amount: 1000,
    currency: 'clp',
  });

  console.log(payment.id); // Should print the new Payment ID

  // Retrieve an existing payment
  // Retrieve methods usually require the ID of the object as first argument
  const checkPayment = await ventipay.payments.retrieve('pay_...');

  console.log(checkPayment.id) // Should print the existing Payment ID (if found)

  // Update an existing payment
  // Update methods usually require the ID of the object as first argument and a config object as second argument
  const updatedPayment = await ventipay.payments.update('pay_...', {
    description: 'My payment info...',
  })

  console.log(updatedPayment.id); // Should print the updated Payment ID
})();
```

### Available Resources

| Resource | Methods |
| ------ | ------ |
| checkouts | `retrieve`, `list`, `create`, `refund` |
| subscriptions | `retrieve`, `list`, `create`, `update`, `cancel`, `suspend`, `unsuspend` |
| plans | `retrieve`, `list`, `create`, `update` |
| invoices | `retrieve`, `list`, `create`, `update`, `finalize`, `pay`, `send`, `markUncollectible`, `void` |
| products | `retrieve`, `list`, `create`, `update` |
| tax_rates | `retrieve`, `list`, `create`, `update`, `del` |
| customers | `retrieve`, `list`, `update` |
| bank_accounts | `list`, `create`, `del` |
| loan_intents | `retrieve`, `list`, `create`, `authorize` |
| payments | `retrieve`, `list`, `create`, `update`, `refund`, `capture` |

## License

MIT
