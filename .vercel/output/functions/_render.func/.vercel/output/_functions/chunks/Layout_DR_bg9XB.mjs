import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as createAstro, g as renderHead, a as renderComponent } from './astro/server_BDFoqYwt.mjs';
import 'kleur/colors';
/* empty css                                                                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import { GiStrikingBalls } from 'react-icons/gi';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function CursorTrailCanvas(props) {
  const refCanvas = useRef(null);
  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: props.color
    });
    renderTrailCursor();
    return () => {
      cleanUp();
    };
  }, [props.color]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: refCanvas,
      className: "pointer-events-none fixed inset-0 z-10 h-full w-full hidden opacity-0 md:block md:opacity-100 ",
      style: props.style
    }
  );
}
function cursorTrail(props) {
  const colorRaw = getComputedStyle(document.documentElement).getPropertyValue(
    "--accent"
  );
  const accentColor = `hsla(${colorRaw ? colorRaw.split(" ").join(",") : "0, 0%, 0%"}, 0.35)`;
  const { ref, color } = props;
  const ctx = ref.current?.getContext("2d");
  const AnimationFeature = {
    friction: 0.5,
    trails: 20,
    size: 40,
    dampening: 0.2,
    tension: 0.98
  };
  const cursorPosition = {
    x: 0,
    y: 0
  };
  let running = true;
  class NewNode {
    x;
    y;
    vy;
    vx;
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }
  }
  class Line {
    spring;
    friction;
    nodes;
    constructor(e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.05;
      this.friction = AnimationFeature.friction + 0.01 * Math.random() - 5e-3;
      const cursorPosition2 = e.cursorPosition ?? { x: 0, y: 0 };
      this.nodes = [];
      for (let i = 0; i < AnimationFeature.size; i++) {
        const t = new NewNode();
        t.x = cursorPosition2.x;
        t.y = cursorPosition2.y;
        this.nodes.push(t);
      }
    }
    update() {
      let e = this.spring;
      let t = this.nodes[0];
      t.vx += (cursorPosition.x - t.x) * e;
      t.vy += (cursorPosition.y - t.y) * e;
      for (let i = 0, a = this.nodes.length; i < a; i++) {
        t = this.nodes[i];
        if (i > 0) {
          const n = this.nodes[i - 1];
          t.vx += (n.x - t.x) * e;
          t.vy += (n.y - t.y) * e;
          t.vx += n.vx * AnimationFeature.dampening;
          t.vy += n.vy * AnimationFeature.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= AnimationFeature.tension;
      }
    }
    draw() {
      let e, t;
      let n = this.nodes[0].x;
      let i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
        const e2 = this.nodes[a];
        const t2 = this.nodes[a + 1];
        n = 0.5 * (e2.x + t2.x);
        i = 0.5 * (e2.y + t2.y);
        ctx.quadraticCurveTo(e2.x, e2.y, n, i);
      }
      e = this.nodes[this.nodes.length - 2];
      t = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    }
  }
  function renderAnimation() {
    if (running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = color || accentColor;
      ctx.lineWidth = 1;
      for (let x, t = 0; t < AnimationFeature.trails; t++) {
        if (newLines[t] !== void 0) {
          x = newLines[t];
          x.update();
          x.draw();
        }
      }
      window.requestAnimationFrame(renderAnimation);
    }
  }
  let newLines = [];
  function move(event) {
    !(event instanceof MouseEvent) ? (cursorPosition.x = event.touches[0].pageX, cursorPosition.y = event.touches[0].pageY) : (cursorPosition.x = event.clientX, cursorPosition.y = event.clientY);
    event.preventDefault();
  }
  function createLine(event) {
    event.touches.length === 1 && (cursorPosition.x = event.touches[0].pageX, cursorPosition.y = event.touches[0].pageY);
  }
  function onMouseMove(e) {
    function populateLines() {
      newLines = [];
      for (let i = 0; i < AnimationFeature.trails; i++) {
        newLines.push(
          new Line({
            spring: 0.45 + i / AnimationFeature.trails * 0.025
          })
        );
      }
    }
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchstart", onMouseMove);
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", createLine);
    document.addEventListener("touchstart", createLine);
    move(e);
    populateLines();
    renderAnimation();
  }
  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }
  function stopAnimation() {
    running = false;
  }
  function startAnimation() {
    if (!running) {
      running = true;
      renderAnimation();
    }
  }
  function renderTrailCursor() {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchstart", onMouseMove);
    window.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", startAnimation);
    window.addEventListener("blur", stopAnimation);
    resizeCanvas();
  }
  function cleanUp() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchmove", createLine);
    document.removeEventListener("touchstart", createLine);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchstart", onMouseMove);
    window.removeEventListener("orientationchange", resizeCanvas);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("focus", startAnimation);
    window.removeEventListener("blur", stopAnimation);
  }
  return { cleanUp, renderTrailCursor, stopAnimation, startAnimation };
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
    { label: "Contacts", href: "/contact" },
    { label: "Resume", href: "/Haroon-Nissar-Khanday.pdf" }
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled, isOpen:", !isOpen);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-5 flex justify-between items-center text-center text-xl z-20 sticky top-0 bg-black border  shadow-2xl shadow-green-500/5 rounded-b-3xl text-white mx-5 md:mx-32", children: [
    /* @__PURE__ */ jsx("div", { className: "hover:text-green-800 font-semibold", children: /* @__PURE__ */ jsx("a", { className: "text-white hover:text-green-800 ", href: "/", children: "HAROON" }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-7", children: /* @__PURE__ */ jsx("ul", { className: "flex gap-7", children: navItems.map((item, key) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: item.href,
        className: "text-white hover:text-green-800 sm:text-sm md:text-md",
        children: item.label
      }
    ) }, key)) }) }),
    /* @__PURE__ */ jsx("button", { className: "md:hidden cursor-pointer", onClick: toggleMenu, children: /* @__PURE__ */ jsx(GiStrikingBalls, { style: { width: "30px", height: "30px" } }) }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-10 w-ful p-4 shadow-lg z-20 md:hidden bg-zinc-900", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: navItems.map((item, key) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: item.href,
        className: "hover:text-green-800 sm:text-sm md:text-md text-white",
        children: item.label
      }
    ) }, key)) }) })
  ] });
}

const $$Astro$2 = createAstro();
const $$Wrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Wrapper;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("max-w-7xl mx-auto", className), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/components/Wrapper.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<p class="text-center py-5 text-muted-foreground">
made with Astro 🍁 By &copy; Haroon Nissar Haroon Nissar
</p>`;
}, "C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="dark"> ${renderComponent($$result, "MouseTail", CursorTrailCanvas, { "client:load": true, "color": "green", "client:component-hydration": "load", "client:component-path": "C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/components/MouseTail", "client:component-export": "default" })} ${renderComponent($$result, "Wrapper", $$Wrapper, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Navbar", "client:component-export": "default" })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} </body></html>`;
}, "C:/Users/HAROON KHANDAY/Desktop/port!/portfolio_in_astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Wrapper as a, cn as c };
