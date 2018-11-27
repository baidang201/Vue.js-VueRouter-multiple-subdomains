import Vue from 'vue';
import VueRouter from 'vue-router';
import Route2 from '@/components/Route2';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Route2',
      component: Route2,
    },
  ],
});
