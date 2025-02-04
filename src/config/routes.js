import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { store_login } from "../config/store";
import { delete_cookie, getCookie, isElectron, parseJwt } from "../lib/common";
import { checkTokenValidity } from "./lekerdezes";
import { getRefreshToken } from "../lib/tokenFinder";

const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/sorszam/:sorszam",
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
  // const accessToken = document.cookie
  //   .split("; ")
  //   .find((row) => row.startsWith("access_token="));

  const accessToken = isElectron()
    ? localStorage.getItem("access_token") ?? null
    : getCookie("access_token");

  const parsedToken = parseJwt(accessToken);

  const refreshToken = getRefreshToken();

  if (
    !accessToken ||
    !refreshToken ||
    accessToken === "" ||
    refreshToken === "" ||
    localStorage.accessToken === "undefined" ||
    localStorage.refreshToken === "undefined"
  ) {
    delete_cookie("access_token");
    delete_cookie("refresh_token");

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  if (accessToken && parsedToken && parsedToken.userGroup !== "ADMIN") {
    alert(
      "Nem vagy adminisztrátor, kérlek jelentkezz be az adminisztrációs felületre!"
    );

    delete_cookie("access_token");
    delete_cookie("refresh_token");

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return;
  }

  if (
    to.name === "Login" &&
    accessToken &&
    parsedToken &&
    parsedToken.userGroup === "ADMIN"
  ) {
    return { name: "Kezdés" };
  }

  if (!accessToken && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
