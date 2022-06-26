module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-expressions': 'off',
    'no-lone-blocks': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
  },
};
