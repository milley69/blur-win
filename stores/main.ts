import { defineStore } from 'pinia'

export const useMain = defineStore('MainPinia', {
  state: () => ({
    // navbar: {
    // links: useStorage('navbar-links', [{ path: '/', title: 'All chats', icon: 'bxs-chat' }], localStorage, {
    //   mergeDefaults: true,
    // }),
    // title: useStorage('navbar-title', 'blur', localStorage, { mergeDefaults: true }),
    // },
    aside: useStorage(
      'aside',
      {
        links: [{ path: '/', title: 'All chats', icon: 'bxs-chat' }],
        title: 'blur',
      },
      localStorage,
      { mergeDefaults: true }
    ),
  }),
  getters: {},
  actions: {},
})
