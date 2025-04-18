import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/day-layout.tsx", [
  route("/day-1", "routes/day-1.tsx"),
  ])
] satisfies RouteConfig;
