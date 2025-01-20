import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import Budget from "../pages/Budget.vue";
import Reports from "../pages/Reports.vue";
import Settings from "../pages/Settings.vue";
import About from "../pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/budget", component: Budget },
  { path: "/reports", component: Reports },
  { path: "/settings", component: Settings },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;