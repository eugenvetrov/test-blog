export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/index.scss'],
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  components: {
		global: true,
		dirs: ['~/components'],
	},
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables/_colors.scss" as *;'
        }
      }
    }
  },
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }  
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
})
