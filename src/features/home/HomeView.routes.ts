import { namedRoute } from "@/router/INamedRoute";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "./HomeView.vue";

const homePageRouteName = "home";

export const homeRoute = namedRoute(homePageRouteName);

export const homeRoutes: RouteRecordRaw = {
  path: "/",
  name: homePageRouteName,
  component: HomeView,
};
