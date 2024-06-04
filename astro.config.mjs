import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://astro4-demo-blog.netlify.app",
  integrations: [icon(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
});
