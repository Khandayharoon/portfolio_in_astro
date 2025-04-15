import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BDFoqYwt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DR_bg9XB.mjs';
import { T as Title } from '../chunks/Title_ChBPCm92.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto p-6"> ${renderComponent($$result2, "Title", Title, {}, { "default": ($$result3) => renderTemplate`Get in Touch` })} <p class="text-lg my-4">
If you have any questions, comments, or just want to say hi, feel
            free to reach out!
</p> <form class="space-y-4"> <div> <label for="name" class="block text-lg mb-2">Name</label> <input type="text" id="name" name="name" required class="w-full p-2 border border-gray-300 rounded text-black"> </div> <div> <label for="email" class="block text-lg mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full p-2 border border-gray-300 rounded text-black"> </div> <div> <label for="message" class="block text-lg mb-2">Message</label> <textarea id="message" name="msg" rows="4" required class="w-full p-2 border border-gray-300 rounded text-black"></textarea> </div> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-1">Send Message</button> </form> <div class="mt-8"> <h2 class="text-2xl font-semibold mb-2">Connect with Me</h2> <p class="text-lg mb-2">
You can also reach out via my social media:
</p> <ul class="space-y-2"> <li> <a href="mailto:khandayharoon@gmail.com" class="hover:text-blue-500">Email: khandayharoon@gmail.com</a> </li> <li> <a href="https://github.com/Khandayharoon" class="hover:text-blue-500">GitHub</a> </li> <li> <a href="https://www.linkedin.com/in/haroon-nissar-4870a6284/" class="hover:text-blue-500">LinkedIn</a> </li> <li> <a href="tel:+4915510832282" class="hover:text-blue-500">+49 15510832282</a> </li> </ul> </div> </div> ` })} `;
}, "C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/contact.astro", void 0);

const $$file = "C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
