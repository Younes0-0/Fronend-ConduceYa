import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, f as renderComponent, b as addAttribute } from '../chunks/astro/server_Ddgsiow-.mjs';
import { $ as $$Layout } from '../chunks/Layout_CitvV8Hb.mjs';
import { $ as $$Menu, a as $$Footer } from '../chunks/Footer_sl-iXt9q.mjs';
import { a as $$SignOut } from '../chunks/SignOut_27PmAgXv.mjs';
import { g as getSession } from '../chunks/server_aQEM-WkU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$TableSolicitudes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableSolicitudes;
  const { solicitudes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="table-container"> <h2>Solicitudes de Prácticas</h2> <table> <thead> <tr> <th>Nombre</th> <th>Teléfono</th> <th>Sesión</th> <th>Teórico</th> <th>Zona</th> <th>Inscripción</th> <th>Estado</th> </tr> </thead> <tbody id="citasTable"> ${solicitudes.length === 0 ? renderTemplate`<tr><td colspan="7">No hay solicitudes.</td></tr>` : solicitudes.map((s) => renderTemplate`<tr> <td>${s.nombre}</td> <td>${s.telefono}</td> <td>${s.sesion_preferida}</td> <td>${s.fecha_teorico ? new Date(s.fecha_teorico).toLocaleDateString() : "-"}</td> <td>${new Date(s.fecha_inscripcion).toLocaleDateString()}</td> <td>${s.zona_nombre}</td> <td>${s.estado_display || s.estado}</td> </tr>`)} </tbody> </table> </div>`;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/components/admin/TableSolicitudes.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const session = await getSession(Astro2.request);
  if (!session) {
    return Astro2.redirect("/login");
  }
  const solicitud = [
    {
      nombre: "Juan P\xE9rez",
      telefono: "123456789",
      sesion_preferida: "Ma\xF1ana",
      teorico_aprobado: "",
      zona_nombre: "Zona 1",
      fecha_inscripcion: "2023-10-01T12:00:00Z",
      estado_display: "Aprobado"
    },
    {
      nombre: "Mar\xEDa L\xF3pez",
      telefono: "987654321",
      sesion_preferida: "Tarde",
      teorico_aprobado: false,
      zona_nombre: "Zona 2",
      fecha_inscripcion: "2023-10-02T12:00:00Z",
      estado_display: "Pendiente"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "imageSrc": "/img/logo-letras.png", "imageAlt": "logo de ConduceYa" })} ${maybeRenderHead()}<main class="admin-dashboard"> <aside class="sidebar"> <h2>Admin</h2> <nav> <ul> <li><a href="/admin-dashboard">Dashboard</a></li> <li><a href="/usuarios">Usuarios</a></li> <li><a href="/citas">Citas</a></li> <li><a href="/configuracion">Configuración</a></li> <li>${renderComponent($$result2, "SignOut", $$SignOut, {}, { "default": async ($$result3) => renderTemplate`Cerrar session` })}</li> </ul> </nav> </aside> <section class="dashboard-content"> <h1> <img${addAttribute(session.user?.image, "src")} alt="Imagen de perfil" class="rounded-circle" width="38" height="38">
Panel de Administración
${session.user?.name} </h1> <p>Bienvenido al panel de administración de ConduceYa.</p> <div class="table-container"> ${renderComponent($$result2, "TableSolicitudes", $$TableSolicitudes, { "solicitudes": solicitud })} </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/admin-dashboard/index.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/admin-dashboard/index.astro";
const $$url = "/admin-dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
