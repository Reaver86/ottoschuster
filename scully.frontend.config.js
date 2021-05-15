"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var scully_plugin_minify_html_1 = require("scully-plugin-minify-html");
var scully_plugin_critical_css_1 = require("@scullyio/scully-plugin-critical-css");
exports.config = {
    projectRoot: './apps/frontend/src',
    defaultPostRenderers: ['seoHrefOptimise', scully_plugin_critical_css_1.criticalCSS, scully_plugin_minify_html_1.MinifyHtml],
    projectName: 'frontend',
    outDir: './dist/static',
    routes: {},
};
