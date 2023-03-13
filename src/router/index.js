import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/button",
      name: "button",
      component: () => import("../views/button/index.vue"),
    },
    {
      path: "/card",
      name: "card",
      component: () => import("../views/card/index.vue"),
    },
  ],
});

export default router;
