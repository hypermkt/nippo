import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/app.vue';
import New from './components/nippo/new.vue';
import Edit from './components/nippo/edit.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/', component: App },
  { path: '/new', component: New},
  { path: '/:id/edit', name: 'edit', component: Edit},
];

const router = new VueRouter({
  routes
});

new Vue({router}).$mount('#app');