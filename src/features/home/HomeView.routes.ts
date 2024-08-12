import type { RouteRecordRaw } from "vue-router";
import HomeView from "./HomeView.vue";

export const home = "home";

export const homeRoute: RouteRecordRaw = {
  name: home,
  path: "/",
  component: HomeView,
};
