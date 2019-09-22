import Router from 'vue-router';
import Main from './views/Main.vue';
import Login from './views/Login.vue';
import LabelEdit from './views/LabelEdit.vue';
import LabelList from './views/LabelList.vue';
import ArticleEdit from './views/ArticleEdit.vue';
import ArticleList from './views/ArticleList.vue';
import CategoryEdit from './views/CategoryEdit.vue';
import CategoryList from './views/CategoryList.vue';
import UserEdit from './views/UserEdit.vue';
import UserList from './views/UserList.vue';

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        { path: '/labels/create', component: LabelEdit },
        { path: '/labels/list', component: LabelList },
        { path: '/labels/edit/:id', component: LabelEdit, props: true },
        { path: '/articles/create', component: ArticleEdit },
        { path: '/articles/list', component: ArticleList },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/categories/create', component: CategoryEdit },
        { path: '/categories/list', component: CategoryList },
        { path: '/categories/edit/:id', component: CategoryEdit, props: true },
        { path: '/users/create', component: UserEdit },
        { path: '/users/list', component: UserList },
        { path: '/users/edit/:id', component: UserEdit, props: true },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { isPublic: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    next('/login');
  }
  next();
})

export default router;