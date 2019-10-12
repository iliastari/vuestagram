import Vue from 'vue'
import Router from 'vue-router'

/* VIEWS */
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Feed from './views/Feed.vue'
import Profile from './views/Profile.vue'
import PageNotFound from './views/404.vue'
import store from './store';


Vue.use(Router)



// Needs to logged in before entering the page
const needAuth = async (to, from, next) => {
  if (store.getters.loggedIn) {
    next();
  } else {
    next('/accounts/login');
  }
}

// Not allowed to enter if logged in - Guests Only 
const guest = async (to, from, next) => {
  if (store.getters.loggedIn) {
    next('/feed');
  } else {
    next();
  }
}


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register,
      beforeEnter: guest
    },
    {
      path: '/accounts/login',
      name: 'Login',
      component: Login,
      beforeEnter: guest
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
      beforeEnter: needAuth
    },
    {
      path: '/:username',
      name: 'Profile',
      props: true,
      component: Profile
    },
    {
      path: '*',
      component: PageNotFound 
    }
  ]
})
