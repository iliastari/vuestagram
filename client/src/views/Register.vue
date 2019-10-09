<template>
  <div class="login">
    <ImagePhone />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/accounts/Register.vue'
import ImagePhone from '@/components/assets/ImagePhone.vue'

export default {
  name: 'home',
  components: {
    Register,
    ImagePhone
  }
}
</script>

<style scoped>
.login {
  max-width: 935px;
  margin:30px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
@media only screen and (max-width:955px) {
  .login {
     grid-template-columns: repeat(1, 1fr);
  }
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   



\

