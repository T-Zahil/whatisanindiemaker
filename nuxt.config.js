import frMessages from './locales/fr.js'
import enMessages from './locales/en.js'

export default {
  ssr: true,

  target: 'static',

  head: {
    title: 'What is an Indie Maker?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'You know an indie maker but you don\'t understand what they do? We explain it all to you!' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-title', property: 'og:title', content: 'What is an Indie Maker?' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-description', property: 'og:description', content: 'You know an indie maker but you don\'t understand what they do? We explain it all to you!' },
      { hid: 'og-image', property: 'og:image', content: 'https://whatisanindiemaker.com/og.jpg' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://whatisanindiemaker.com'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: enMessages,
        fr: frMessages
      }
    }
  },

  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      fileName: 'icon.png'
    }
  },

  build: {}
}
