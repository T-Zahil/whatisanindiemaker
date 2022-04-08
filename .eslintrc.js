const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    google: 'readonly',
    UniversalAnalytics: 'readonly',
    HTMLCollectionOf: 'readonly',
    GlobalEventHandlers: 'readonly',
    OnErrorEventHandlerNonNull: 'readonly',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  ignorePatterns: ['local_modules/*'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '(^_|Vue)' }],
    'vue/no-template-shadow': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    camelcase: 'off',
    'dot-notation': 'off',
    'no-case-declarations': 'off',
    'no-console': isProduction ? 'error' : 'warn',
    'no-debugger': isProduction ? 'error' : 'warn',
    'no-redeclare': 'off',
    'import/order': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],
    'no-nested-ternary': 'error',
  },
}
