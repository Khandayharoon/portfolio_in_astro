// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// @ts-ignore
import cloudflare from "@astrojs/cloudflare"; // ✅ Correct import

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  output: "server",
  adapter: cloudflare(), // ✅ Use the correct adapter
});
