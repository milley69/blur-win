// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  telemetry: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@formkit/auto-animate/nuxt',
  ],
  css: ['@/assets/css/tailwind.css', '@/assets/css/boxicons.min.css'],
  tailwindcss: {
    configPath: '@/tailwind.config.ts',
    injectPosition: 'first',
    viewer: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'theme',
    storageKey: 'blur-color-mode',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      link: [
        /* PWA */
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/pwa/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/pwa/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/pwa/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/pwa/safari-pinned-tab.svg', color: '#131313' },
        { rel: 'shortcut icon', href: '/pwa/favicon.ico' },
        { rel: 'manifest', href: '/pwa/site.webmanifest' },
      ],
      meta: [
        /* PWA */
        { name: 'apple-mobile-web-app-title', content: 'Blur' },
        { name: 'application-name', content: 'Blur' },
        { name: 'msapplication-TileColor', content: '#131313' },
        { name: 'msapplication-config', content: '/pwa/browserconfig.xml' },
        { name: 'theme-color', content: '#ffffff' },
        // {
        //   name: 'description',
        //   content: ' is a handy collaboration tool that helps you organize projects in the form of boards.',
        // },
        // { property: 'og:title', content: '' },
        // {
        //   property: 'og:description',
        //   content: ' is a handy collaboration tool that helps you organize projects in the form of boards.',
        // },
        // { property: 'og:url', content: 'https://kanbee.milley.uno' },
        // { property: 'og:image', content: '/pwa/ios/128.png' },
        // { property: 'og:site_name', content: '' },
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:image:alt', content: '' },
      ],
    },
  },

  imports: {
    dirs: ['stores'],
    imports: [{ disabled: true, from: '#imports', name: 'useStorage' }],
    presets: [
      {
        from: '@vueuse/core',
        imports: ['useStorage'],
      },
      // import * as emoji from 'node-emoji'
      {
        from: 'node-emoji',
        imports: [{ name: '*', as: 'emoji' }],
      },
    ],
  },

  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
      hmr: { protocol: 'ws', host: '0.0.0.0', port: 5183 },
    },
  },
})
