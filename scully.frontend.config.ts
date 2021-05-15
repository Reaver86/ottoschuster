import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

require('./scully/fixStaticLinks');
require('./scully/sitemapGenerator');

setPluginConfig(baseHrefRewrite, { href: `/${process.env.LOCALE}/` });

export const config: ScullyConfig = {
  projectRoot: './apps/frontend/src',
  defaultPostRenderers: ['seoHrefOptimise', 'sitemapGenerator', 'fixStaticLinks', baseHrefRewrite, MinifyHtml],
  projectName: 'frontend',
  outDir: `./dist/static${process.env.LOCALE}`,
  distFolder: `./dist/frontend/${process.env.LOCALE}`,
  routes: {},
};
