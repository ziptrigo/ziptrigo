/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ziptrigo: {
          ink: '#1F2328',
          sage: '#A9B3A4',
          mist: '#C8CEC4',
          stone: '#8B9789',
          moss: '#6F826F',
          forest: '#4E6152',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(31,35,40,0.15)',
      },
    },
  },
  plugins: [],
}
