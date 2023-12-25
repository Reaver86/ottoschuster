import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://reaver86.github.io",
  base: "/ottoschuster",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "ro"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      ro: "de",
    },
  },
  integrations: [
    storyblok({
      accessToken: "4weNQdm02tTvBQKh3qIvywtt",
      components: {
        check: "components/Check",
      },
    }),
  ],
});
