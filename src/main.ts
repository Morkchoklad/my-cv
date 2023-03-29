import { createApp } from 'vue';
import App from './App.vue';

import {createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import School from "./views/School.vue";
import Work from "./views/Work.vue";
import Portfolio from "./views/Portfolio.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {   
            path: '/school',
            component: School
        },
        {
            path: '/work',
            component: Work
        },
        {
            path: '/portfolio',
            component: Portfolio,
        }
    ]

})

createApp(App).use(router).mount('#app')
