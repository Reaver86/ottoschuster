import { ScullyConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';

export const config: ScullyConfig = {
  projectRoot: './apps/frontend/src',
  defaultPostRenderers: ['seoHrefOptimise', MinifyHtml],
  projectName: 'frontend',
  outDir: './dist/static',
  routes: {},
};
