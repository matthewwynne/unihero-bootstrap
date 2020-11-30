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
    meta: { title: 'unihero - home' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'unihero - about' },
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: () => import(/* webpackChunkName: "getStarted" */ '../views/GetStarted.vue'),
    meta: { title: 'unihero - get started' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { requiresAuth: true, title: 'unihero - dashboard' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { title: 'unihero - login' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: { title: 'unihero - register' },
  },
  {
    path: '/finishsignup',
    name: 'FinishSignUp',
    component: () => import(/* webpackChunkName: "finishsignup" */ '../views/FinishSignUp.vue'),
    meta: { title: 'unihero - finish sign up' },
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import(/* webpackChunkName: "terms" */ '../views/TermsOfService.vue'),
    meta: { title: 'unihero - terms of service' },
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contactus" */ '../views/ContactUs.vue'),
    meta: { title: 'unihero - contact us' },
  },
];

const router = new VueRouter({
  mode: 'history',
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
