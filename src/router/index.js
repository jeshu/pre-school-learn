import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { authGaurd } from "../auth/authGaurd";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    beforeEnter: authGaurd
  },
  {
    path: "/view/:id",
    name: "viewPage",
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
