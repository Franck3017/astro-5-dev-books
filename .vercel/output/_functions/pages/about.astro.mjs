import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D3UM7lpb.mjs';
import { $ as $$Layout } from '../chunks/Layout_jQbGFAbe.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hola About</h1> ` })}`;
}, "C:/Users/Frances/Downloads/prueba3/dev-books/src/pages/about.astro", void 0);

const $$file = "C:/Users/Frances/Downloads/prueba3/dev-books/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
