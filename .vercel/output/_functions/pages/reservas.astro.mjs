import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_VTlEXlHS.mjs';
import { $ as $$Layout } from '../chunks/Layout_CCVJu0Mz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const instructores = [
    {
      id: 1,
      nombre: "Carlos Rodr\xEDguez",
      especialidad: "Coche",
      experiencia: "10 a\xF1os",
      imagen: "/images/instructor1.jpg",
      disponibilidad: true
    },
    {
      id: 2,
      nombre: "Ana Garc\xEDa",
      especialidad: "Moto",
      experiencia: "8 a\xF1os",
      imagen: "/images/instructor2.jpg",
      disponibilidad: true
    },
    {
      id: 3,
      nombre: "Miguel S\xE1nchez",
      especialidad: "Coche y Moto",
      experiencia: "15 a\xF1os",
      imagen: "/images/instructor3.jpg",
      disponibilidad: true
    }
  ];
  const horarios = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reserva tu Clase", "data-astro-cid-qrri7jjf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="reservas-container" data-astro-cid-qrri7jjf> <h1 data-astro-cid-qrri7jjf>Reserva tu Clase Práctica</h1> <p class="descripcion" data-astro-cid-qrri7jjf>Selecciona tu instructor, fecha y hora preferida</p> <form class="formulario-reserva" data-astro-cid-qrri7jjf> <div class="seccion-form" data-astro-cid-qrri7jjf> <h2 data-astro-cid-qrri7jjf>1. Selecciona el Tipo de Clase</h2> <div class="opciones-tipo" data-astro-cid-qrri7jjf> <label class="opcion" data-astro-cid-qrri7jjf> <input type="radio" name="tipo" value="coche" checked data-astro-cid-qrri7jjf> <span data-astro-cid-qrri7jjf>Coche</span> </label> <label class="opcion" data-astro-cid-qrri7jjf> <input type="radio" name="tipo" value="moto" data-astro-cid-qrri7jjf> <span data-astro-cid-qrri7jjf>Moto</span> </label> </div> </div> <div class="seccion-form" data-astro-cid-qrri7jjf> <h2 data-astro-cid-qrri7jjf>2. Elige tu Instructor</h2> <div class="instructores-grid" data-astro-cid-qrri7jjf> ${instructores.map((instructor) => renderTemplate`<label class="instructor-card" data-astro-cid-qrri7jjf> <input type="radio" name="instructor"${addAttribute(instructor.id, "value")} data-astro-cid-qrri7jjf> <div class="instructor-info" data-astro-cid-qrri7jjf> <img${addAttribute(instructor.imagen, "src")}${addAttribute(instructor.nombre, "alt")} data-astro-cid-qrri7jjf> <h3 data-astro-cid-qrri7jjf>${instructor.nombre}</h3> <p data-astro-cid-qrri7jjf>${instructor.especialidad}</p> <span class="experiencia" data-astro-cid-qrri7jjf>${instructor.experiencia}</span> </div> </label>`)} </div> </div> <div class="seccion-form" data-astro-cid-qrri7jjf> <h2 data-astro-cid-qrri7jjf>3. Selecciona Fecha y Hora</h2> <div class="fecha-hora" data-astro-cid-qrri7jjf> <div class="campo" data-astro-cid-qrri7jjf> <label for="fecha" data-astro-cid-qrri7jjf>Fecha:</label> <input type="date" id="fecha" name="fecha" required data-astro-cid-qrri7jjf> </div> <div class="campo" data-astro-cid-qrri7jjf> <label for="hora" data-astro-cid-qrri7jjf>Hora:</label> <select id="hora" name="hora" required data-astro-cid-qrri7jjf> ${horarios.map((hora) => renderTemplate`<option${addAttribute(hora, "value")} data-astro-cid-qrri7jjf>${hora}</option>`)} </select> </div> </div> </div> <button type="submit" class="btn-reservar" data-astro-cid-qrri7jjf>Confirmar Reserva</button> </form> </div> ` })} `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/reservas/index.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/reservas/index.astro";
const $$url = "/reservas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
