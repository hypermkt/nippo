import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App }
];

const router = new VueRouter({
  routes
});

new Vue({router}).$mount('#app');