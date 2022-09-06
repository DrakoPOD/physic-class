import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

const customElements = ["mjx-container"];

export default defineConfig({
  title: "Guía de física",
  description:
    "Una guía para estudiantes de secundaria para la asignatura de física",
  base: "/physic-class/",
  themeConfig: {
    sidebar: [
      {
        text: "Unidad 1",
        collapsible: true,
        items: [
          { text: "Medidas", link: "/unidad1/01-medidas" },
          { text: "Conversión de unidades", link: "/unidad1/01-conversion" },
        ],
      },
    ],
    nav: [{ text: "Descargas", link: "download" }],
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
