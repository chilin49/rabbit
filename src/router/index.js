import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Post from '@/pages/Post';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
