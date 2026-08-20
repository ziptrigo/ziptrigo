import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-20',
  devtools: { enabled: false },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // Static Site Generation (SSG)
  nitro: {
    preset: 'static',
  },

  app: {
    head: {
      title: 'ZipTrigo — Simple tools. Fair pricing. No subscriptions.',
      meta: [
        {
          name: 'description',
          content:
            'QR codes, short links, and email-to-files—built for individuals and small businesses who want utility without recurring costs.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/ziptrigo_logo.png' }],
    },
  },
})
