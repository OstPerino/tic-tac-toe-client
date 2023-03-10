import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import authorizationModule from "@/router/authorizationModule";

const routes: Array<RouteRecordRaw> = [
    ...authorizationModule,
  // { path: "*", redirect: { path: "/auth" } }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
