import { createWebHistory, createRouter } from "vue-router";
import MainHome from "./components/MainHome/MainHome.vue";
import TravelPick from "./Pages/TravelPick.vue";
import RoomReservation from "./Pages/RoomReservation.vue";

const routes = [
    {
        path: "/",
        component: MainHome,
    },
    {
        path: "/travel-pick",
        component: TravelPick,
    },
    {
        path: "/Room-reservation",
        component: RoomReservation,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;