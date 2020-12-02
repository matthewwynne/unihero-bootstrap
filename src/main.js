import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import LoadScript from 'vue-plugin-load-script';
import VueHead from 'vue-head';
import axios from 'axios';
import firebase from 'firebase/app';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import router from './router';

library.add(faTwitterSquare, faFacebookSquare, faInstagramSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(LoadScript);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// gtag
Vue.use(VueGtag, {
  config: { id: 'UA-184162099-1' },
  appName: 'Unihero',
  pageTrackerScreenviewEnabled: false,
}, router);

// Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDx1Hdt7woVF_oKGDmpDZYenNxj3MLA5lk',
  authDomain: 'unihero-auth.firebaseapp.com',
  databaseURL: 'https://unihero-auth.firebaseio.com',
  projectId: 'unihero-auth',
  storageBucket: 'unihero-auth.appspot.com',
  messagingSenderId: '1003965459964',
  appId: '1:1003965459964:web:d515ead490219972529679',
  measurementId: 'G-9YMT0ZJKRR',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Vue Head
Vue.use(VueHead);

let app;
firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app');
  }
});

// Vue.loadScript('https://static.landbot.io/landbot-3/landbot-3.0.0.js')
//   .then(() => {
//     // Script is loaded, do something
//     const bot = document.createElement('script');
//     bot.innerHTML = 'var myLandbot = new Landbot.Popup'
//       + '({ configUrl: \'https://chats.landbot.io/v3/H-727482-ANXZ2Q61U8GNRRKX/index.json\''
//       + ',});';
//     bot.async = true;
//     document.body.appendChild(bot);
//   })
//   .catch(() => {
//     // Failed to fetch script
//     console.log('failed to load script');
//   });
