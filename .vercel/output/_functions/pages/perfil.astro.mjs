import { c as createComponent, a as createAstro, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_VTlEXlHS.mjs';
import { $ as $$Layout } from '../chunks/Layout_CCVJu0Mz.mjs';
import { $ as $$Menu, a as $$Footer } from '../chunks/Footer_R9lhjvII.mjs';
import { $ as $$Hero } from '../chunks/Hero_5GFFUHCZ.mjs';
import { a as $$SignOut } from '../chunks/SignOut_BnQi3k_J.mjs';
import { g as getSession } from '../chunks/server_aQEM-WkU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const session = await getSession(Astro2.request);
  if (!session) {
    return Astro2.redirect("/login");
  }
  const usuario = {
    nombre: "Laura S\xE1nchez",
    role: "alumno",
    email: "laura.sanchez@example.com",
    telefono: "612345678",
    date_joined: "2024-11-15T10:00:00Z",
    progresoTeorico: 65,
    clasesCompletadas: 14,
    proximasClases: [
      {
        id: 1,
        fecha: "2025-05-23",
        hora: "10:00",
        instructor: "Carlos M.",
        tipo: "Pista"
      },
      {
        id: 2,
        fecha: "2025-05-26",
        hora: "12:30",
        instructor: "Eva G.",
        tipo: "Circulaci\xF3n"
      }
    ],
    historialClases: [
      {
        fecha: "2025-05-15",
        estado: "Asistida",
        instructor: "Carlos M.",
        tipo: "Te\xF3rica"
      },
      {
        fecha: "2025-05-18",
        estado: "No asistida",
        instructor: "Eva G.",
        tipo: "Pista"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi Perfil", "data-astro-cid-w4psofs5": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "imageSrc": "/img/logo-letras.png", "imageAlt": "logo de la empresa", "data-astro-cid-w4psofs5": true })} ${renderComponent($$result2, "Hero", $$Hero, { "title": usuario.nombre, "subtitle": usuario.role, "buttonText": "Editar Perfil", "buttonLink": "/editar-perfil", "imageSrc": "./img/hero-image.jpg", "data-astro-cid-w4psofs5": true })} ${maybeRenderHead()}<main class="perfil-container" data-astro-cid-w4psofs5> <section class="perfil-grid" data-astro-cid-w4psofs5> <article class="seccion" data-astro-cid-w4psofs5> <h2 data-astro-cid-w4psofs5>Información Personal</h2> <div class="info-personal" data-astro-cid-w4psofs5> <div class="campo" data-astro-cid-w4psofs5> <span class="etiqueta" data-astro-cid-w4psofs5>Email:</span> <span data-astro-cid-w4psofs5>${usuario.email}</span> </div> <div class="campo" data-astro-cid-w4psofs5> <span class="etiqueta" data-astro-cid-w4psofs5>Teléfono:</span> <span data-astro-cid-w4psofs5>${usuario.telefono}</span> </div> <div class="campo" data-astro-cid-w4psofs5> <span class="etiqueta" data-astro-cid-w4psofs5>Fecha de registro:</span> <span data-astro-cid-w4psofs5>${new Date(usuario.date_joined).toLocaleDateString("es-ES")}</span> </div> <div class="campo" data-astro-cid-w4psofs5> <span class="etiqueta" data-astro-cid-w4psofs5>Tipo de usuario:</span> <span class="tipo-usuario" data-astro-cid-w4psofs5>${usuario.role}</span> </div> </div> </article> <article class="seccion" data-astro-cid-w4psofs5> <h2 data-astro-cid-w4psofs5>Progreso</h2> <div class="progreso" data-astro-cid-w4psofs5> <div class="barra-progreso" data-astro-cid-w4psofs5> <div class="progreso-completado"${addAttribute(`width: ${usuario.progresoTeorico}%`, "style")} data-astro-cid-w4psofs5> <span data-astro-cid-w4psofs5>${usuario.progresoTeorico}%</span> </div> </div> <p data-astro-cid-w4psofs5>Clases completadas: <span data-astro-cid-w4psofs5>${usuario.clasesCompletadas}</span></p> <p data-astro-cid-w4psofs5>Clases restantes: <span data-astro-cid-w4psofs5>${100 - usuario.progresoTeorico}%</span></p> ${renderComponent($$result2, "SignOut", $$SignOut, { "class": "btn btn-primary btn-lg", "data-astro-cid-w4psofs5": true }, { "default": async ($$result3) => renderTemplate`Cerrar sesión` })} </div> </article> <article class="seccion" data-astro-cid-w4psofs5> <h2 data-astro-cid-w4psofs5>Próximas Clases</h2> <div class="lista-clases" data-astro-cid-w4psofs5> ${usuario.proximasClases.map((clase) => renderTemplate`<div class="clase-card" data-astro-cid-w4psofs5> <div class="clase-info" data-astro-cid-w4psofs5> <strong data-astro-cid-w4psofs5>${clase.fecha}</strong> <span data-astro-cid-w4psofs5>${clase.hora}</span> </div> <div class="clase-detalles" data-astro-cid-w4psofs5> <p data-astro-cid-w4psofs5>Instructor: ${clase.instructor}</p> <p data-astro-cid-w4psofs5>Tipo: ${clase.tipo}</p> </div> </div>
              <button class="btn-cancelar" disabled data-astro-cid-w4psofs5>Cancelar</button>`)} </div> </article> <article class="seccion" data-astro-cid-w4psofs5> <h2 data-astro-cid-w4psofs5>Historial de Clases</h2> <div class="lista-clases" data-astro-cid-w4psofs5> ${usuario.historialClases.map((clase, index) => renderTemplate`<div class="clase-card historico" data-astro-cid-w4psofs5> <div class="clase-info" data-astro-cid-w4psofs5> <strong data-astro-cid-w4psofs5>${clase.fecha}</strong> <span class="estado" data-astro-cid-w4psofs5>${clase.estado}</span> </div> <div class="clase-detalles" data-astro-cid-w4psofs5> <p data-astro-cid-w4psofs5>Instructor: ${clase.instructor}</p> <p data-astro-cid-w4psofs5>Tipo: ${clase.tipo}</p> </div> </div>`)} </div> </article> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-w4psofs5": true })} ` })} `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/perfil/index.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/perfil/index.astro";
const $$url = "/perfil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
