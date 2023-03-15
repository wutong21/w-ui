import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'button',
      component: () => import('../views/button/index.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/card/index.vue'),
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../views/badge/index.vue'),
    },
  ],
});

export default router;
