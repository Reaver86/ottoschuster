import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://Reaver86.github.io",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "ro"],
  },
});
