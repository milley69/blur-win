// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  telemetry: false,

  modules: ['@vueuse/nuxt'],
  css: ['@/assets/css/tailwind.css'],
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

  imports: { dirs: ['stores'] },

  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
      hmr: { protocol: 'ws', host: '0.0.0.0', port: 5183 },
    },
  },
})
