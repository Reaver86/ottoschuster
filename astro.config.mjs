import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://reaver86.github.io",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "ro"],
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
