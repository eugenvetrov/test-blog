// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/index.scss'],
  modules: [
    '@nuxt/image',
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
  }
})
