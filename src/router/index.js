import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/mana",
      name: "mana",
      component: () => import("../views/ManaView.vue"),
    },
  ],
});

export default router;
