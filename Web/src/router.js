import Router from 'vue-router';
import Home from './views/Home.vue';
import Article from './views/Article.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
      props: true
    }
  ]
})