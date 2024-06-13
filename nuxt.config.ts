// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
     "@nuxtjs/supabase"
    ],

    supabase: {
      redirect: false
      // redirectOptions: {
      //   login: '/en/login',
      //   callback: '/en/confirm',
      //   include: undefined,
      //   exclude: ['/en/auth/signup'],
      //   cookieRedirect: false,
      // }
    }
})