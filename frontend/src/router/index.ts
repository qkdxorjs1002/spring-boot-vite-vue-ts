import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import Bootstrap from '../views/Bootstrap.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import Protected from '../views/Protected.vue'

import store from '../store'

const routes: Array<RouteRecordRaw> = [
    {path: '/', component: Home},
    {path: '/callservice', component: Service},
    {path: '/bootstrap', component: Bootstrap},
    {path: '/user', component: User},
    {path: '/login', component: Login},
    {
        path: '/protected',
        component: Protected,
        meta: {
            requiresAuth: true
        }
    },

    {path: '/:pathMatch(.*)*', redirect: '/'}
]

const router = createRouter({
    // https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: '/login'
            })
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;