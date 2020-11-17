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
    path: '/getStarted',
    name: 'GetStarted',
    component: () => import(/* webpackChunkName: "getsStarted" */ '../views/GetStarted.vue'),
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
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Login.vue'),
    meta: { title: 'unihero - login' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Register.vue'),
    meta: { title: 'unihero - register' },
  },
  {
    path: '/finishsignup',
    name: 'FinishSignUp',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/FinishSignUp.vue'),
    meta: { title: 'unihero - finish sign up' },
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
