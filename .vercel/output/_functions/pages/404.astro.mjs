import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_VTlEXlHS.mjs';
import { $ as $$Layout } from '../chunks/Layout_CCVJu0Mz.mjs';
import { $ as $$Menu, a as $$Footer } from '../chunks/Footer_R9lhjvII.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404, no lo he encontrado" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "imageSrc": "./img/logo-letras.png", "imageAlt": "logo de la empresa" })} ${maybeRenderHead()}<main class="d-flex justify-content-center align-items-center text-center"> <div class="error-container"> <h1 class="error-title">Ups... Página no encontrada</h1> <p class="error-text">
Parece que esta página no existe. Puedes volver al inicio o explorar otro contenido.
</p> <img src="https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif" alt="Error 404" class="error-img mt-3"> <div class="mt-4"> <a href="/" class="btn-custom">Volver al inicio</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/404/index.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/404/index.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
