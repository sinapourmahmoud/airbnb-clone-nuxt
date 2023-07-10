import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  imports: {
    dirs: ["composables/**"],
  },
  modules: ["nuxt-headlessui", "@formkit/nuxt", "@pinia/nuxt"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  appConfig: {
    jwtRefreshToken: process.env.JWT_REFRESH_TOKEN,
    jwtAccessToken: process.env.JWT_ACCESS_TOKEN,
    appCloudName: process.env.CLOUDNAME,
    appApiKey: process.env.API_KEY,
    appApiSecret: process.env.API_SECRET,
  },
});
