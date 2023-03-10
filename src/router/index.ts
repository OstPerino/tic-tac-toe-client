import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthorizationPage from "@/views/PublicPages/AuthorizationPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Authorization",
    component: AuthorizationPage,
    path: "/auth",
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
