import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/day-layout.tsx", [
    // TODO Convert these to dynamic routes
    route("/days/1", "routes/day-1.tsx"),
    route("/days/2", "routes/day-2/day-2.tsx"),
    route("/days/3", "routes/day-3/day-3.tsx"),
  ]),
] satisfies RouteConfig;
