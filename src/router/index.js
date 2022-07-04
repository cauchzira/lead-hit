import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AnalyticsView from "@/views/AnalyticsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/auth",
    meta: {
      notUser: true,
      hidden: true,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: HomeView,
    meta: {
      hidden: true,
      notUser: true,
    },
  },
  {
    path: "/analytics",
    name: "analytics",
    component: AnalyticsView,
    meta: {
      auth: true,
    },
  },
  {
    path: "*",
    beforeEnter: (to, from, next) => {
      next("/404");
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = window.localStorage.getItem("leadhit-site-id");
  if (to.path)
    if (to.matched.some((route) => route.meta.auth)) {
      if (!isAuthenticated) {
        return next({ name: "auth" });
      } else {
        return next();
      }
    } else if (to.matched.some((record) => record.meta.notUser)) {
      if (isAuthenticated) {
        return next({ name: "analytics" });
      } else {
        return next();
      }
    }
  next();
});

export default router;
