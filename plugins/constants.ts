export default defineNuxtPlugin((nuxtApp) => {
  const isApp = computed(() => '__TAURI__' in window)

  return { provide: { isApp: isApp.value } }
})
