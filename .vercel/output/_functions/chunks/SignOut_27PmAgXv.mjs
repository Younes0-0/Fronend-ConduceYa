import { c as createComponent, a as createAstro, m as maybeRenderHead, f as renderComponent, F as Fragment, r as renderTemplate, u as unescapeHTML, h as defineScriptVars, g as renderScript, e as renderSlot, s as spreadAttributes } from './astro/server_Ddgsiow-.mjs';
import { a as authConfig, g as getSession } from './server_aQEM-WkU.mjs';

const $$Astro$2 = createAstro();
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Auth;
  const { authConfig: authConfig$1 = authConfig } = Astro2.props;
  let session = await getSession(Astro2.request, authConfig$1);
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [session]))}` })} </div>`;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.8.0/node_modules/auth-astro/src/components/Auth.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignIn;
  const key = Math.random().toString(36).slice(2, 11);
  const { provider, options, authParams, ...attrs } = Astro2.props;
  attrs.class = `signin-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<button", "> ", " </button> ", " <script>(function(){", "\n	document\n		.querySelector(`.signin-${key}`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"], ["", "<button", "> ", " </button> ", " <script>(function(){", "\n	document\n		.querySelector(\\`.signin-\\${key}\\`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.8.0/node_modules/auth-astro/src/components/SignIn.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ provider, options, authParams, key }));
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.8.0/node_modules/auth-astro/src/components/SignIn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$SignOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignOut;
  const key = Math.random().toString(36).slice(2, 11);
  const { params, ...attrs } = Astro2.props;
  attrs.class = `signout-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a || (_a = __template(["", "<button", "> ", " </button> ", " <script>(function(){", "\n	document.querySelector(`.signout-${key}`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"], ["", "<button", "> ", " </button> ", " <script>(function(){", "\n	document.querySelector(\\`.signout-\\${key}\\`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.8.0/node_modules/auth-astro/src/components/SignOut.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ params, key }));
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.8.0/node_modules/auth-astro/src/components/SignOut.astro", void 0);

export { $$SignIn as $, $$SignOut as a };
