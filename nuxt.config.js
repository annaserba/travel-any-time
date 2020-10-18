import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Anna Serba',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'yandex-verification', name: 'yandex-verification', content: 'd6571e25eaa0b5a9' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'https://localhost:44354',
    thisUrl: process.env.THISURL || '.',
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || 'jqlq9k14yhkd',
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || 'HXkeAU9lHEfPkKJBQjwgOQjmHkTxQURPxCer9KJ7uFc',
    CTF_PERSON_ID: process.env.CTF_PERSON_ID || '15jwOBqpxqSAOy2eOO4S0m',
    CTF_ASSET_ID: process.env.CTF_ASSET_ID || 'F3Jo22DFufZBUYARmYX62'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '49279987',
        webvisor: true
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en-US.js',
            contentfulName: 'en'
          },
          {
            code: 'ru',
            file: 'ru-RU.js',
            contentfulName: 'ru'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'ru',
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: process.env.THISURL || 'https://annaserba.ru'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'Anna Serba - Programmer',
      short_name: 'Anna Serba',
      start_url: '.',
      background_color: '#fff',
      theme_color: '#fff'
    }
  }
}
