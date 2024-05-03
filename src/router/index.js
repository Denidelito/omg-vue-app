import {createMemoryHistory, createRouter} from 'vue-router';

import HomeView from "../view/HomeView.vue";

const routers = [
    {
        path: '/',
        component: HomeView
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes: routers
});

export default router;