import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // https://vite.dev/guide/build.html#relative-base
  base: process.env.NODE_ENV === "development" ? "/" : "/100DaysCSS/",
});
