import Vue from 'vue';
import VueRouter from 'vue-router';
import Route1 from '@/components/Route1';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Route1',
      component: Route1,
    },
  ],
});
