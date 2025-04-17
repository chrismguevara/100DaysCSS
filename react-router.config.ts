import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  basename: import.meta.env.DEV ? "/" : "/100DaysCSS/",
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
} satisfies Config;
