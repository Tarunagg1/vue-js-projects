import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Vacancies from "../pages/vacancies.vue";

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/vacancies",
    name: 'vacancies',
    component: Vacancies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
