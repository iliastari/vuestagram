import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faCompass, faUser, faHeart, faSignOutAlt, faCamera  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCompass, faUser, faHeart, faSignOutAlt, faCamera)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
