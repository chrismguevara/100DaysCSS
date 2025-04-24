import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/days/:day", "routes/days/day-page.tsx"),
] satisfies RouteConfig;
