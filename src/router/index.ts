// src/router/index.ts
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "category",
    component: () => import("../views/categoryView.vue"),
  },
  {
    path: "/products",
    name: "product",
    component: () => import("../views/productView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
