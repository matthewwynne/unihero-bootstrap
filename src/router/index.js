import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueGtm from 'vue-gtm';
import VueRouter from 'vue-router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'unihero | home' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'unihero | about' },
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: () => import(/* webpackChunkName: "getStarted" */ '../views/GetStarted.vue'),
    meta: { title: 'unihero | get started' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { requiresAuth: true, title: 'unihero | dashboard' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { title: 'unihero | login' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: { title: 'unihero | register' },
  },
  {
    path: '/finishsignup',
    name: 'FinishSignUp',
    component: () => import(/* webpackChunkName: "finishsignup" */ '../views/FinishSignUp.vue'),
    meta: { title: 'unihero | finish sign up' },
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import(/* webpackChunkName: "terms" */ '../views/TermsOfService.vue'),
    meta: { title: 'unihero | terms of service' },
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contactus" */ '../views/ContactUs.vue'),
    meta: { title: 'unihero | contact us' },
  },
  {
    path: '/collect-results',
    name: 'CollectResults',
    component: () => import(/* webpackChunkName: "collectresults" */ '../views/CollectResults.vue'),
    meta: { title: 'unihero | collect results' },
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

Vue.use(VueGtm, {
  id: 'GTM-KD8SP5J', // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  // queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
  //  gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
  //  gtm_preview:'env-4',
  //  gtm_cookies_win:'x'
  // },
  defer: false, // defaults to false.
  enabled: true, // defaults to true.
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: ['/'], // Don't trigger events for specified router names (case insensitive)
  // (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
});

export default router;
