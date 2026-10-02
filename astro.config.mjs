import { defineConfig } from "astro/config";

import lottie from "astro-integration-lottie";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['images.unsplash.com']
  }
});