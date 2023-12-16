import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://reaver86.github.io/ottoschuster/de",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "ro"],
    fallback: {
      ro: "de",
    },
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
