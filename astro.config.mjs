import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ruxwez.github.io",
  base: "fastforward",
  integrations: [react(), tailwind()],
  server: {
    port: 80,
  }
});
