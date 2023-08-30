// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["@/assets/styles/app.css"],
  modules: ["@nuxtjs/supabase"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});