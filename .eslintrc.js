module.exports = {
  "extends": [
    "airbnb-base",
  ],
  "env": {
    "browser": false,
    "node": true,
    "jasmine": false
  },
  "rules": {
    "no-promise-executor-return": 0,
    "max-len": [
      "error",
      {
        "code": 150
      }
    ]
  },
};
