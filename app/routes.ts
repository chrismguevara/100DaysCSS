import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/day-layout.tsx", [
    route("/day-1", "routes/day-1.tsx"),
    route("/day-2", "routes/day-2/day-2.tsx"),
  ]),
] satisfies RouteConfig;
