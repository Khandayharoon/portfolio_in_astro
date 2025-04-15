import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DOUaFe2G.mjs';
import { manifest } from './manifest_CaJX0Ckj.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/projects/ahmed adventures - custom kashmir tour booking website.astro.mjs');
const _page5 = () => import('./pages/projects/bismillah - tour and travel.astro.mjs');
const _page6 = () => import('./pages/projects/full stack todo application with ui ux.astro.mjs');
const _page7 = () => import('./pages/projects/real estate -  kashmir real estate website.astro.mjs');
const _page8 = () => import('./pages/projects/rejouice - dynamic and multilingual website.astro.mjs');
const _page9 = () => import('./pages/projects.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/projects/Ahmed Adventures - Custom Kashmir Tour Booking Website.md", _page4],
    ["src/pages/projects/Bismillah - Tour and Travel.md", _page5],
    ["src/pages/projects/Full Stack Todo Application With UI UX.md", _page6],
    ["src/pages/projects/Real Estate -  Kashmir Real Estate Website.md", _page7],
    ["src/pages/projects/Rejouice - Dynamic and Multilingual Website.md", _page8],
    ["src/pages/projects/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "9ea4e6d2-ee2e-45e1-8a54-66e96c856c73",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
