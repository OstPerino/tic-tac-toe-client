import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import authorizationModule from "@/router/authorizationModule";
import userModule from "@/router/userModule";

const routes: Array<RouteRecordRaw> = [
  ...authorizationModule,
  ...userModule,
  // { path: "*", redirect: { path: "/auth" } }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !token) {
    next({ path: "/auth" });
  } else if (!requiresAuth && token) {
    localStorage.removeItem("token");
    next();
  } else {
    next();
  }
});

export default router;
