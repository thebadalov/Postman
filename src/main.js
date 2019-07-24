// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) 
})

import home from '@/pages/Home.vue'
import login from '@/pages/Login.vue'
import signup from '@/pages/Signup.vue'
import blog from '@/pages/Blog.vue'