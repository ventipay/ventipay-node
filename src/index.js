/* eslint-disable prefer-destructuring */
/**
 * Libraries
 */
const axios = require('axios');
const utils = require('./utils');
const errors = require('./errors');

/**
 * Setup
 */
const VERSION = require('../package.json').version;
const RESOURCES = require('./resources');

const DEFAULT_HOST = 'api.ventipay.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_SCHEMA = 'https:';

/**
 * Main Component
 */
function VentiPay(apiKey, config = {}) {
  /**
   * Bootstrap
   */
  if (!(this instanceof VentiPay)) {
    return new VentiPay(apiKey, config);
  }
  const self = this;

  /**
   * Default API config
   */
  const api = axios.create({
    baseURL: `${config.schema || DEFAULT_SCHEMA}//${config.host || DEFAULT_HOST}:${config.host || DEFAULT_PORT}${DEFAULT_BASE_PATH}`,
    headers: {
      'User-Agent': `VentiPaySDK/nodejs/${VERSION}`,
    },
    auth: {
      username: apiKey,
    },
  });

  /**
   * Fn API Resources properties
   */
  RESOURCES.forEach((resource) => {
    self[resource.name] = self[resource.name] || {};
    resource.methods.forEach((method) => {
      // eslint-disable-next-line func-names
      self[resource.name][method.name] = function (...args) {
        const requestConfig = {
          url: method.path,
          method: method.method,
        };
        switch (method.type) {
          case 'retrieveOne':
            requestConfig.url = requestConfig.url.replace('[0]', args[0]);
            if (utils.isObjectLike(args[1])) {
              requestConfig.params = args[1];
            }
            break;
          case 'retrieveAll':
            if (utils.isObjectLike(args[0])) {
              requestConfig.params = args[0];
            }
            break;
          case 'create':
            if (utils.isObjectLike(args[0])) {
              requestConfig.data = args[0];
            }
            break;
          case 'update':
            requestConfig.url = requestConfig.url.replace('[0]', args[0]);
            if (utils.isObjectLike(args[1])) {
              requestConfig.data = args[1];
            }
            break;
          case 'delete':
            requestConfig.url = requestConfig.url.replace('[0]', args[0]);
            if (utils.isObjectLike(args[1])) {
              requestConfig.data = args[1];
            }
            break;
          default:
        }
        return new Promise((resolve, reject) => {
          api.request(requestConfig)
            .then((data) => {
              if (typeof data === 'object' && typeof data.data !== 'undefined') {
                return resolve(data.data);
              }
              throw new Error();
            })
            .catch((error) => {
              const errorType = error && error.response && error.response.data && error.response.data.error && error.response.data.error.type;
              const errorCode = error && error.response && error.response.data && error.response.data.error && error.response.data.error.code;
              return reject(errors.generate({ type: errorType, code: errorCode }));
            });
        });
      };
    });
  });
}

/**
 * Export
 */
module.exports = VentiPay;
