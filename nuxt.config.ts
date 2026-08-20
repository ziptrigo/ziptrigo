import tailwindcss from '@tailwindcss/vite'

// Canonical origin for absolute URLs in social/canonical tags.
// Override at build time with NUXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? 'https://ziptrigo.com'

const title = 'ZipTrigo — Simple tools. Fair pricing. No subscriptions.'
const description =
  'QR codes, short links, and email-to-files—built for individuals and small businesses who want utility without recurring costs.'

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

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#A9B3A4' },

        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'ZipTrigo' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: `${siteUrl}/ziptrigo_logo.png` },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${siteUrl}/ziptrigo_logo.png` },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/ziptrigo_logo.png' },
        { rel: 'canonical', href: siteUrl },
      ],
    },
  },
})
