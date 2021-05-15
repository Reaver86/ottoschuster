import { ScullyConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';

export const config: ScullyConfig = {
  projectRoot: './apps/frontend/src',
  defaultPostRenderers: ['seoHrefOptimise', criticalCSS, MinifyHtml],
  projectName: 'frontend',
  outDir: './dist/static',
  routes: {},
};
