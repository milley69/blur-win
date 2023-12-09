import { invoke } from '@tauri-apps/api/tauri'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    if ('__TAURI__' in window) invoke('close_splashscreen')
  })
})
