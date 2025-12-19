import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/categories", component: () => import("../views/categoryView.vue") },
  { path: "/products", component: () => import("../views/productView.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

