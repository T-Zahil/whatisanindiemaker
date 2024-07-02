export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    githubToken: '',
  },

  nitro: {
    static: true
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxtjs/plausible'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'fr',
        iso: 'fr-FR'
      },
      {
        code: 'de',
        iso: 'de-DE'
      },
      {
        code: 'it',
        iso: 'it-IT'
      },
      {
        code: 'pt-br',
        iso: 'pt-BR'
      },
      {
        code: 'ru',
        iso: 'ru-RU'
      },
      {
        code: 'ara',
        iso: 'ar-AR'
      },
      {
        code: 'sp',
        iso: 'es-ES'
      },
      {
        code: 'tr',
        iso: 'tr-TR'
      }
    ],
    baseUrl: 'https://whatisanindiemaker.com',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },

  plausible: {
    apiHost: ''
  },
})
