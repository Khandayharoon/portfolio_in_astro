import 'cookie';
import 'kleur/colors';
import './chunks/shared_wP79bBFI.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_BDFoqYwt.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_CR2NdMe-.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CT3jP1RJ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/HAROON%20KHANDAY/Desktop/port!/portfolio_in_astro/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/Ahmed%20Adventures%20-%20Custom%20Kashmir%20Tour%20Booking%20Website/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/ahmed adventures - custom kashmir tour booking website","isIndex":false,"type":"page","pattern":"^\\/projects\\/Ahmed Adventures - Custom Kashmir Tour Booking Website\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"Ahmed Adventures - Custom Kashmir Tour Booking Website","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/Ahmed Adventures - Custom Kashmir Tour Booking Website.md","pathname":"/projects/Ahmed Adventures - Custom Kashmir Tour Booking Website","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/Bismillah%20-%20Tour%20and%20Travel/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/bismillah - tour and travel","isIndex":false,"type":"page","pattern":"^\\/projects\\/Bismillah - Tour and Travel\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"Bismillah - Tour and Travel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/Bismillah - Tour and Travel.md","pathname":"/projects/Bismillah - Tour and Travel","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/Full%20Stack%20Todo%20Application%20With%20UI%20UX/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/full stack todo application with ui ux","isIndex":false,"type":"page","pattern":"^\\/projects\\/Full Stack Todo Application With UI UX\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"Full Stack Todo Application With UI UX","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/Full Stack Todo Application With UI UX.md","pathname":"/projects/Full Stack Todo Application With UI UX","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/Real%20Estate%20-%20%20Kashmir%20Real%20Estate%20Website/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/real estate -  kashmir real estate website","isIndex":false,"type":"page","pattern":"^\\/projects\\/Real Estate -  Kashmir Real Estate Website\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"Real Estate -  Kashmir Real Estate Website","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/Real Estate -  Kashmir Real Estate Website.md","pathname":"/projects/Real Estate -  Kashmir Real Estate Website","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/Rejouice%20-%20Dynamic%20and%20Multilingual%20Website/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/rejouice - dynamic and multilingual website","isIndex":false,"type":"page","pattern":"^\\/projects\\/Rejouice - Dynamic and Multilingual Website\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"Rejouice - Dynamic and Multilingual Website","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/Rejouice - Dynamic and Multilingual Website.md","pathname":"/projects/Rejouice - Dynamic and Multilingual Website","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CnkZegKG.js"}],"styles":[{"type":"external","src":"/_astro/Ahmed Adventures - Custom Kashmir Tour Booking Website.D6wbgmBe.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/projects/Ahmed Adventures - Custom Kashmir Tour Booking Website.md",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/projects/Bismillah - Tour and Travel.md",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/projects/Full Stack Todo Application With UI UX.md",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/projects/Real Estate -  Kashmir Real Estate Website.md",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/projects/Rejouice - Dynamic and Multilingual Website.md",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/pages/contact.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-page:src/pages/projects/Ahmed Adventures - Custom Kashmir Tour Booking Website@_@md":"pages/projects/ahmed adventures - custom kashmir tour booking website.astro.mjs","\u0000@astro-page:src/pages/projects/Bismillah - Tour and Travel@_@md":"pages/projects/bismillah - tour and travel.astro.mjs","\u0000@astro-page:src/pages/projects/Full Stack Todo Application With UI UX@_@md":"pages/projects/full stack todo application with ui ux.astro.mjs","\u0000@astro-page:src/pages/projects/Real Estate -  Kashmir Real Estate Website@_@md":"pages/projects/real estate -  kashmir real estate website.astro.mjs","\u0000@astro-page:src/pages/projects/Rejouice - Dynamic and Multilingual Website@_@md":"pages/projects/rejouice - dynamic and multilingual website.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_CaJX0Ckj.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_DZsoJkN-.mjs","C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/components/MouseTail":"_astro/MouseTail.BAPzs5Sx.js","@/components/Navbar":"_astro/Navbar.Bi7jIVpC.js","@astrojs/react/client.js":"_astro/client.BY2mA-CD.js","/astro/hoisted.js?q=0":"_astro/hoisted.CnkZegKG.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Ahmed Adventures - Custom Kashmir Tour Booking Website.D6wbgmBe.css","/favicon.svg","/Haroon-Nissar-Khanday.pdf","/projects/ahmed.png","/projects/bismillah.png","/projects/realestate.png","/projects/rejouice.png","/projects/rr.png","/projects/todo.png","/projects/vartav.png","/_astro/client.BY2mA-CD.js","/_astro/hoisted.CnkZegKG.js","/_astro/index.B52nOzfP.js","/_astro/jsx-runtime.CRkqtJS5.js","/_astro/MouseTail.BAPzs5Sx.js","/_astro/Navbar.Bi7jIVpC.js","/about/index.html","/projects/Ahmed%20Adventures%20-%20Custom%20Kashmir%20Tour%20Booking%20Website/index.html","/projects/Bismillah%20-%20Tour%20and%20Travel/index.html","/projects/Full%20Stack%20Todo%20Application%20With%20UI%20UX/index.html","/projects/Real%20Estate%20-%20%20Kashmir%20Real%20Estate%20Website/index.html","/projects/Rejouice%20-%20Dynamic%20and%20Multilingual%20Website/index.html","/projects/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"YODvJcYXSiI4Nij3PSrQ/Iu2c7f8tlQiA+7IF0gLzu8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
