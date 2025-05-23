import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_VTlEXlHS.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CCVJu0Mz.mjs';
import { $ as $$Menu, a as $$Footer } from '../../chunks/Footer_R9lhjvII.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Citas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "imageSrc": "/img/logo-letras.png", "imageAlt": "logo de la empresa" })} ${maybeRenderHead()}<main class="citas-dashboard"> <aside class="sidebar"> <h2>Admin</h2> <nav> <ul> <li><a href="/admin-dashboard">Dashboard</a></li> <li><a href="/usuarios">Usuarios</a></li> <li><a href="/citas">Citas</a></li> <li><a href="/configuracion">Configuración</a></li> <li><button id="logout">Cerrar sesión</button></li> </ul> </nav> </aside> <section class="dashboard-content"> <h1>Gestión de Citas</h1> <p>Consulta las citas programadas en la autoescuela.</p> <div class="table-container"> <h2>Lista de Citas</h2> <table> <thead> <tr> <th>Alumno</th> <th>Profesor</th> <th>Fecha</th> <th>Hora</th> <th>Estado</th> <th>Acciones</th> </tr> </thead> <tbody id="citasTable"> <tr> <td colspan="5">Cargando citas...</td> </tr> </tbody> </table> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/login/citas.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/login/citas.astro";
const $$url = "/login/citas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Citas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
