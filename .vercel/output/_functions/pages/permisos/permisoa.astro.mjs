import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, f as renderComponent } from '../../chunks/astro/server_VTlEXlHS.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CCVJu0Mz.mjs';
import { $ as $$Menu, a as $$Footer } from '../../chunks/Footer_R9lhjvII.mjs';
import { $ as $$Hero } from '../../chunks/Hero_5GFFUHCZ.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Category;
  const props = Astro2.props;
  const rowClass = props.reverse ? "row category text-center flex-row-reverse mb-4" : "row category text-center mb-4";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(rowClass, "class")} data-astro-cid-axxjgtsp> <div class="col-md-6 d-flex justify-content-center" data-astro-cid-axxjgtsp> <img${addAttribute(props.image, "src")} class="img-fluid rounded"${addAttribute(props.imageAlt, "alt")} data-astro-cid-axxjgtsp> </div> <div class="col-md-6 d-flex flex-column align-items-center justify-content-center" data-astro-cid-axxjgtsp> <h3 class="mt-sm-4" data-astro-cid-axxjgtsp>${props.title}</h3> <p class="lead" data-astro-cid-axxjgtsp>${props.description}</p> <p class="text-primary font-weight-bold text-uppercase" data-astro-cid-axxjgtsp>Edad mínima: ${props.minAge} años.</p> </div> </div> `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/components/permisos/Category.astro", void 0);

const $$PermisoA$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "title": "Permiso A", "subtitle": "Descubre las diferentes categor\xEDas del Permiso A y elige la adecuada para ti", "buttonText": "M\xE1s informaci\xF3n", "buttonLink": "#info" })} ${maybeRenderHead()}<section id="info" class="info-section"> <div class="container"> <h2 class="text-center my-4">Categorías del Permiso A</h2> ${renderComponent($$result, "Category", $$Category, { "title": "Permiso AM", "description": "El Permiso AM te permite conducir ciclomotores de hasta 50 cc y velocidad m\xE1xima de 45 km/h. Es ideal para quienes desean empezar a conducir veh\xEDculos ligeros y de baja cilindrada.", "minAge": 15, "image": "/img/permisoA.webp", "imageAlt": "Permiso AM - Ciclomotor", "reverse": false, "style": "view-transition-name: permisoB;" })} ${renderComponent($$result, "Category", $$Category, { "title": "Permiso A1", "description": "El Permiso A1 te permite conducir motocicletas de hasta 125 cc, con una potencia m\xE1xima de 11 kW y una relaci\xF3n potencia/peso de hasta 0.1 kW/kg. Perfecto para scooters y motocicletas peque\xF1as.", "minAge": 16, "image": "/img/a22.jpg", "imageAlt": "Permiso A1 - Scooter", "reverse": true })} ${renderComponent($$result, "Category", $$Category, { "title": "Permiso A2", "description": "El Permiso A2 te habilita para conducir motocicletas de hasta 35 kW (47 CV) y una relaci\xF3n potencia/peso de hasta 0.2 kW/kg. Es el paso intermedio hacia el Permiso A.", "minAge": 18, "image": "/img/a3.jpg", "imageAlt": "Permiso A2 - Motocicleta", "reverse": false })} ${renderComponent($$result, "Category", $$Category, { "title": "Permiso A", "description": "El Permiso A es el nivel m\xE1s avanzado, que te permite conducir motocicletas de cualquier cilindrada y potencia sin restricciones. Perfecto para quienes buscan libertad total sobre dos ruedas.", "minAge": 20, "image": "/img/a4.jpg", "imageAlt": "Permiso A - Superbike", "reverse": true })} </div> </section>`;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/components/permisos/PermisoA.astro", void 0);

const $$PermisoA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "imageSrc": "/img/logo-letras.png", "imageAlt": "logo de la empresa" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Moto", $$PermisoA$1, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/permisos/permisoA.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/permisos/permisoA.astro";
const $$url = "/permisos/permisoA";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PermisoA,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
