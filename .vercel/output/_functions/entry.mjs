import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BbOVFqJB.mjs';
import { manifest } from './manifest_OYab8-l2.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_Cbrsyasn.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CB8tLBs5.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/libro/_id_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.0_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.8_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/libro/[id].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "233fd3de-bb38-4ae6-80b3-d962903cdf36",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
