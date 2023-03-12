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
  const requires = to.meta.length;

  if (requires) {
    if (!token) {
      next({ path: "/auth" });
    }
  } else {
    localStorage.removeItem('token');
  }

  next();
});

export default router;
