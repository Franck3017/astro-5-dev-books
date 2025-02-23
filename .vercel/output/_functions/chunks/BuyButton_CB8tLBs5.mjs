import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_D3UM7lpb.mjs';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "es";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? SPAIN;
  const storeCountry = country === SPAIN ? "spain" : "usa";
  const countryName = country === SPAIN ? "Espa\xF1a" : "Estados Unidos";
  const { buy } = Astro2.props;
  const buyLink = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(buyLink, "href")} class="flex gap-1 justify-between w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl text-center transition-all shadow-lg hover:shadow-xl">
Comprar en Amazon ${countryName} <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path> </svg> </a>`;
}, "C:/Users/Frances/Downloads/prueba3/dev-books/src/components/BuyButton.astro", void 0);

const $$file = "C:/Users/Frances/Downloads/prueba3/dev-books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
