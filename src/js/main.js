import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Index from './components/nippo/index.vue';
import New from './components/nippo/new.vue';
import Edit from './components/nippo/edit.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index},
  { path: '/new', component: New},
  { path: '/:id/edit', name: 'edit', component: Edit},
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: function(createElement) {
    return createElement(App);
  }
});
