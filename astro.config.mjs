import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import million from "million/compiler"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    port: 80,
  },
  vite: {
    plugins: [million.vite({ mode: "react", auto: true })]
  }
});
