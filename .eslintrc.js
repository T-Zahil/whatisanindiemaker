module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {}
}
