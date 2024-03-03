import { namedRoute } from "@/router/INamedRoute";
import type { RouteRecordRaw } from "vue-router";
import ErrorView from "./ErrorView.vue";

const errorPageRouteName = "error";

export const errorRoute = namedRoute(errorPageRouteName);

export const errorRoutes: RouteRecordRaw = {
  path: "/error",
  name: errorPageRouteName,
  component: ErrorView,
};
