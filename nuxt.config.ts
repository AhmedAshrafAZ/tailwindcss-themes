// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TailwindCSS Custom Themes",
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"]
})
