import { defineConfig } from "astro/config";

import lottie from "astro-integration-lottie";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [ lottie() ],

  vite: {
    plugins: [tailwindcss()],
  },
});
