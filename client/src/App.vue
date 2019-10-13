<template>
  <div id="app">
    <Navbar v-if="showNav" />
    <router-view :key="$route.fullPath"/>
  </div>
</template>


<script>
import Navbar from '@/components/header/Navbar.vue'

export default {
   computed: {
     /* Don't show on Login/Register page **/
    showNav() {
      return this.$route.name !== 'Login' && this.$route.name !== 'Register';
    }
  },
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Grand+Hotel&display=swap');

* {
  margin:0;
  padding:0;
  font-family: roboto;
  font-weight:400;
}
a {
  text-decoration: none;
  color:#000;
  
  &:visited {
    color:#000;
  }
}
body {
  background:#fafafa;
  overflow-y: scroll !important;
}
</style>
