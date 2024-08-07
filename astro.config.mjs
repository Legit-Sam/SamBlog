import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity(
{
      projectId: 'qgd65eis',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: true,
      studioBasePath: "/admin"
    }
  )],

  output: 'server',
  devToolbar: {
    enabled: false
  },
  adapter: netlify(),

  image: {
    remotePatterns: [{ protocol: "http" }, { protocol: "https" }],
  },
});