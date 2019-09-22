import Vue from 'vue';
import App from './App.vue';
import router from './router'
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import http from './http';

Vue.use(ElementUI);
Vue.use(VueRouter);

const root = document.createElement('div');
document.body.appendChild(root);

Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.mixin({
  methods: {
    getAuthHeaders () {
      return {
        Authorization: `Bearer ${localStorage.token}`
      }
    }
  }
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root);