import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_Ddgsiow-.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle, buttonText, buttonLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero text-center" data-astro-cid-ht7ig5q2> <div class="container" data-astro-cid-ht7ig5q2> <h1 data-astro-cid-ht7ig5q2>${title}</h1> <p class="lead" data-astro-cid-ht7ig5q2>${subtitle}</p> ${buttonLink && buttonText && renderTemplate`<a${addAttribute(buttonLink, "href")} class="btn btn-primary btn-lg" data-astro-cid-ht7ig5q2>${buttonText}</a>`} </div> </section> `;
}, "C:/Users/almer/OneDrive/Escritorio/Autoescuela/Fronend/src/components/permisos/Hero.astro", void 0);

export { $$Hero as $ };
