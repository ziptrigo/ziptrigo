// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/tailwind.css'],

  // Static Site Generation (SSG)
  nitro: {
    preset: 'static',
  },

  app: {
    head: {
      title: 'ZipTrigo — The All-in-One OS for Your Small Business',
      meta: [
        { name: 'description', content: 'CRM, invoicing, and project management built for growth.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/ziptrigo_logo.png' },
      ],
    },
  },
})
