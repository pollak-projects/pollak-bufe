import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Főoldal",
            component: () => import("../pages/Home.vue")
        },
        {
            path: "/szendvicsek",
            name: "Szendvicsek",
            component: () => import("../pages/Szendvicsek.vue")
        },
        {
            path: "/hot-dogok",
            name: "Hot-dogok",
            component: () => import("../pages/Hot-dogok.vue")
        },
        {
            path: "/hamburgerek",
            name: "Hamburgerek",
            component: () => import("../pages/Hamburgerek.vue")
        },
        {
            path: "/italok",
            name: "Italok",
            component: () => import("../pages/Italok.vue")
        },
        {
            path: "/nasik",
            name: "Nasik",
            component: () => import("../pages/Nasik.vue")
        },
        {
            path: "/extrak",
            name: "Extrák",
            component: () => import("../pages/Extrak.vue")
        },
        {
            path: "/kosar",
            name: "Kosár",
            component: () => import("../pages/Kosar.vue")
        }
    ]
})

export default router;