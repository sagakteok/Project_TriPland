import { createWebHistory, createRouter } from "vue-router";
import MainHome from "./components/MainHome/MainHome.vue";
import TravelPick from "./Pages/TravelPick.vue";

const routes = [
    {
        path: "/",
        component: MainHome,
    },
    {
        path: "/travel-pick",
        component: TravelPick,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;