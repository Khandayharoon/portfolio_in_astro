// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// @ts-ignore
import cloudflare from "@astrojs/cloudflare"; // ✅ Correct import

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  output: "static", // or omit this line
  // adapter: cloudflare(), // comment this out for now
});
