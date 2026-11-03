import { defineConfig, memoryCache } from "astro/config";

import lottie from "astro-integration-lottie";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['images.unsplash.com']
  },

  cache: {
    provider: memoryCache(),
  },

  adapter: node({
    mode: "standalone"
  }),

  server: {
    host: true
  }
});
