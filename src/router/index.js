import Vue from 'vue';
import VueRouter from 'vue-router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/getStarted',
    name: 'GetStarted',
    component: () => import(/* webpackChunkName: "getsStarted" */ '../views/GetStarted.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Register.vue'),
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsConditions',
    component: () => import(/* webpackChunkName: "terms" */ '../views/TermsConditions.vue'),
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactUs.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
