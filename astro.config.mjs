import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lottie()],
});
