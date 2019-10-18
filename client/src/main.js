import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueProgressBar from 'vue-progressbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import {  faBell, faHeart, faUser, faEdit, faSun } from '@fortawesome/free-regular-svg-icons'
import {  faCog, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBell , faHeart, faUser, faEdit, faSun, faCog, faCamera)
Vue.component('font-awesome-icon', FontAwesomeIcon)
const options = {
  color: 'rgba(190,81,184,1)',
  failedColor: '#ff3f34',
  thickness: '2.1px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
