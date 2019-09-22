import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import http from './http';
import './assets/styles/reset.scss';
import './assets/styles/style.scss';
import './assets/styles/iconfont.css';

Vue.use(VueRouter);

const root = document.createElement('div');
document.body.appendChild(root);

Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root);