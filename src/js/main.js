import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import New from './components/nippo/New.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/new', component: New},
];

const router = new VueRouter({
  routes
});

new Vue({router}).$mount('#app');