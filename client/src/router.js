import Vue from 'vue'
import Router from 'vue-router'

/* VIEWS */
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Feed from './views/Feed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/accounts/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    }
  ]
})
