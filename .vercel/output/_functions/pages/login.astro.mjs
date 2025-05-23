import { c as createComponent, a as createAstro, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_VTlEXlHS.mjs';
import { $ as $$Layout } from '../chunks/Layout_CCVJu0Mz.mjs';
import { $ as $$Menu, a as $$Footer } from '../chunks/Footer_R9lhjvII.mjs';
import { g as getSession } from '../chunks/server_aQEM-WkU.mjs';
import { $ as $$SignIn } from '../chunks/SignOut_BnQi3k_J.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const session = await getSession(Astro2.request);
  if (session) {
    return Astro2.redirect("/admin-dashboard");
  }
  if (Astro2.request.method === "POST") {
    try {
      const form = await Astro2.request.formData();
      const username = form.get("username");
      const password = form.get("password");
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        const data2 = await response.json();
        throw new Error(data2.detail || "Usuario o contrase\xF1a incorrectos.");
      }
      const data = await response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "imageSrc": "./img/logo-letras.png", "imageAlt": "logo de la empresa" })} ${maybeRenderHead()}<main class="login-bg"> <section class="form-container"> <h2>Inicio de Sesión</h2> <form id="loginForm" method="POST" action="/login"> <div class="mb-3"> <label for="username" class="form-label">Correo Electrónico</label> <input type="text" id="username" name="username" class="form-control" required> </div> <div class="mb-3"> <label for="password" class="form-label">Contraseña</label> <input type="password" id="password" name="password" class="form-control" required> </div> <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button> <p id="error" class="text-center mt-3 text-danger"></p> <div class="form-footer text-center mt-3"> <a href="formulario.html" id="toggle-login-link">¿No tienes cuenta? Regístrate</a> </div> <div class="or-divider"> <span>O</span> </div> </form> <div class="d-flex justify-content-between"> ${renderComponent($$result2, "SignIn", $$SignIn, { "class": "btn btn-danger w-100 mx-1", "property": "google", "id": "google" }, { "default": async ($$result3) => renderTemplate`Google` })} ${renderComponent($$result2, "SignIn", $$SignIn, { "class": "btn btn-dark w-100 mx-1", "property": "github", "id": "github" }, { "default": async ($$result3) => renderTemplate`Github` })} <!--
                    <button class="btn btn-primary w-100 mx-1" type="button">Facebook</button>
                --> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/login/index.astro", void 0);

const $$file = "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
