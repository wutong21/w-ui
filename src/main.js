import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import App from './App.vue';
import router from './router';

import WUI from './packages';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
import './packages/theme/style.scss';
import './assets/main.css';

Vue.use(WUI);
Vue.use(PiniaVuePlugin);
Vue.use(VueHighlightJS);

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app');
