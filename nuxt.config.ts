export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    githubToken: '',
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxtjs/plausible'
  ],

  i18n: {
    locales: ['de', 'en', 'fr', 'it', 'ru', 'pt-br', 'ara', 'sp', 'tr'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },

  plausible: {
    apiHost: ''
  },
})
