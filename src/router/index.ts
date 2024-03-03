import { createRouter, createWebHistory } from "vue-router";
import { homeRoutes } from "@/features/home/HomeView.routes";
import { errorRoutes } from "@/features/error/ErrorView.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoutes, errorRoutes],
});

export default router;
