import { createWebHistory, createRouter } from "vue-router";
import MainHome from "./components/MainHome/MainHome.vue";
import TravelPick from "./Pages/TravelPick.vue";
import RoomReservation from "./Pages/RoomReservation.vue";
import Confirm from "./Pages/Confirm.vue";
import Schedule from "./Pages/Schedule.vue"

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
        path: "/room-reservation",
        component: RoomReservation,
    },
    {
        path: "/confirm",
        component: Confirm,
    },
    {
        path: "/schedule",
        component: Schedule,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;