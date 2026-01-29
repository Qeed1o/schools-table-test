// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/icon'
  ],

  devtools: {
    enabled: true
  },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/schools-table-test/' : '/assets',
    buildAssetsDir: 'assets'
  },

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  },

  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/ui': { ssr: false, prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'app',
        dir: './app/assets/icons'
      }
    ]
  }
})
