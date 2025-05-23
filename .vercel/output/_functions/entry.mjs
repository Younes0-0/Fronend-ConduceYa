import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_mcoXbRIz.mjs';
import { manifest } from './manifest_D0Mp1h-2.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin-dashboard.astro.mjs');
const _page3 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page4 = () => import('./pages/login/citas.astro.mjs');
const _page5 = () => import('./pages/login/formulario.astro.mjs');
const _page6 = () => import('./pages/login.astro.mjs');
const _page7 = () => import('./pages/perfil.astro.mjs');
const _page8 = () => import('./pages/permisos/permisoa.astro.mjs');
const _page9 = () => import('./pages/permisos/permisob.astro.mjs');
const _page10 = () => import('./pages/permisos/permisoc.astro.mjs');
const _page11 = () => import('./pages/reservas/reservas.astro.mjs');
const _page12 = () => import('./pages/reservas.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.8.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404/index.astro", _page1],
    ["src/pages/admin-dashboard/index.astro", _page2],
    ["node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.8.0/node_modules/auth-astro/src/api/[...auth].ts", _page3],
    ["src/pages/login/citas.astro", _page4],
    ["src/pages/login/formulario.astro", _page5],
    ["src/pages/login/index.astro", _page6],
    ["src/pages/perfil/index.astro", _page7],
    ["src/pages/permisos/permisoA.astro", _page8],
    ["src/pages/permisos/permisoB.astro", _page9],
    ["src/pages/permisos/permisoC.astro", _page10],
    ["src/pages/reservas/reservas.astro", _page11],
    ["src/pages/reservas/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "628df11f-6522-4837-9aca-31d17909581c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
