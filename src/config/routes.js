import { createRouter, createWebHistory } from "vue-router";
import { store_login } from "../config/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Főoldal",
      component: () => import("../pages/Kezdes.vue"),
    },
    {
      path: "/szendvicsek",
      name: "Szendvicsek",
      component: () => import("../pages/Szendvicsek.vue"),
    },
    {
      path: "/hot-dogok",
      name: "Hot-dogok",
      component: () => import("../pages/Hot-dogok.vue"),
    },
    {
      path: "/hamburgerek",
      name: "Hamburgerek",
      component: () => import("../pages/Hamburgerek.vue"),
    },
    {
      path: "/italok",
      name: "Italok",
      component: () => import("../pages/Italok.vue"),
    },
    {
      path: "/nasik",
      name: "Nasik",
      component: () => import("../pages/Nasik.vue"),
    },
    {
      path: "/extrak/:id",
      name: "Extrák",
      component: () => import("../pages/Extrak.vue"),
    },
    {
      path: "/kosar",
      name: "Kosár",
      component: () => import("../pages/Kosar.vue"),
    },
    {
      path: "/kezdes",
      name: "Kezdés",
      component: () => import("../pages/Kezdes.vue"),
    },
    {
      path: "/sorszam",
      name: "Sorszám",
      component: () => import("../pages/Sorszam.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login2.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("access_token="));
  console.log("token", accessToken);
  console.log("is authenticated", !accessToken && to.name !== "Login");

  if (to.name === "Login" && accessToken) {
    return { name: "Kezdés" };
  }

  if (!accessToken && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
