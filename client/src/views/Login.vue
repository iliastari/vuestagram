<template>
  <div class="login">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/accounts/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>

<style scoped>
.login {
  max-width: 935px;
  margin:30px auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   



\

