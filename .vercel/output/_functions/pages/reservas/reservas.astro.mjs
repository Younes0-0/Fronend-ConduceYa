import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Ddgsiow-.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CitvV8Hb.mjs';
import { $ as $$Menu, a as $$Footer } from '../../chunks/Footer_sl-iXt9q.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Reservas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-tfssmyih": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "imageSrc": "./img/logo-letras.png", "imageAlt": "logo de ConduceYa", "data-astro-cid-tfssmyih": true })} ${maybeRenderHead()}<main class="reservas-bg" data-astro-cid-tfssmyih> <section class="col-md-6 reservas-container" data-astro-cid-tfssmyih> <h2 data-astro-cid-tfssmyih>📅 Reserva tu Clase de Conducción</h2> <form id="reservaForm" data-astro-cid-tfssmyih> <div class="form-group" data-astro-cid-tfssmyih> <label for="profesor" data-astro-cid-tfssmyih>Instructor</label> <select id="profesor" name="profesor" required data-astro-cid-tfssmyih> <option value="" data-astro-cid-tfssmyih>Selecciona un instructor</option> </select> </div> <div class="form-group" data-astro-cid-tfssmyih> <label for="fecha" data-astro-cid-tfssmyih>Fecha</label> <input type="date" id="fecha" name="fecha" required data-astro-cid-tfssmyih> </div> <div class="form-group" data-astro-cid-tfssmyih> <label for="hora" data-astro-cid-tfssmyih>Horario</label> <select id="hora" name="hora" required data-astro-cid-tfssmyih> <option value="" data-astro-cid-tfssmyih>Selecciona un horario</option> <option value="10:00" data-astro-cid-tfssmyih>10:00</option> <option value="11:00" data-astro-cid-tfssmyih>11:00</option> <option value="12:00" data-astro-cid-tfssmyih>12:00</option> <option value="13:00" data-astro-cid-tfssmyih>13:00</option> <option value="14:00" data-astro-cid-tfssmyih>14:00</option> <option value="15:00" data-astro-cid-tfssmyih>15:00</option> </select> </div> <button type="submit" class="btn" data-astro-cid-tfssmyih>📌 Reservar Clase</button> <p id="reservaMsg" class="msg" data-astro-cid-tfssmyih></p> </form> </section> <section class="citas-container col-md-6" data-astro-cid-tfssmyih> <h3 data-astro-cid-tfssmyih>📋 Tus Clases Reservadas</h3> <ul id="citasList" data-astro-cid-tfssmyih></ul> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-tfssmyih": true })} ` })} `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/reservas/reservas.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/reservas/reservas.astro";
const $$url = "/reservas/reservas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Reservas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
