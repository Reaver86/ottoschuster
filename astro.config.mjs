import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://reaver86.github.io/de",
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
