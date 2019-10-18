<template>
<div>
  <div class="container">
    <div class="register box">

      <Logo />
      
      <h3>Sign up to see photos and videos from your friends.</h3>

      <button class="btn facebook">Log in with Facebook</button>
      
      <div class="orElse">
        <div class="divider"></div>
        <div class="dividerText">OR</div>
        <div class="divider"></div>
      </div>
      

      <form @submit.prevent="register">
        <input class="input" type="email" v-model="email" placeholder="Email">
        <input class="input" type="text" v-model="fullname" placeholder="Full Name">
        <input class="input" type="text" v-model="username" placeholder="Username">
        <input class="input" type="password" v-model="password" placeholder="Password">
        
        <button type="submit" class="btn next">Next</button>
      </form>
       <div class="error" v-html="error" />

       <div class="terms">
         By signing up, you agree to our Terms . Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookies Policy .
  
        </div>
      
    </div>
  </div>
  <div class="container">
 <div class="login box">
  <small>Have an account? <router-link :to="{ name: 'Login' }"> Log in </router-link></small>
    </div>

    </div>

    </div>
</template>

<script>
import Auth from '@/server/Auth'
import Logo from '@/components/assets/Logo.vue'


export default {
  name: 'Register',
  data() {
    return {
      email: '',
      fullname: '',
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
   async register() {
      this.$Progress.start()
     try {
      const response = await Auth.register({
        email: this.email,
        fullname: this.fullname,
        username: this.username,
        password: this.password
      })

      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
       this.$Progress.finish()
      this.$router.push({
        name: 'Feed'
      })

     } catch (err) {
       this.error = err.response.data.error
        this.$Progress.fail()
     }
    }
  },
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2, h3, h4 {
  margin-bottom:10px;
}
a {
  font-weight:600;
  color: #3897f0;
  text-decoration:none;
}
.error {
  color: #ff0000;
  font-size:14px;
}
.container {
  max-width:350px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  display:flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
  margin:10px 0 10px;
}
.box {
  max-width: 280px;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 25px 0 15px;
  align-items:center;
}
.btn {
  width:100%;
  background: #3897f0;
  border:none;
  border:1px solid #3897f0;
  padding:7px;
  color:#fff;  
  font-weight:500;
  border-radius:4px;
  cursor:pointer;
  margin:10px 0 10px 0;
}
.dividerText::before {
  content:"________________";
  color:#e6e6e6;
  margin-right:20px;
    position:relative;
  top:-4px;
}
.dividerText::after {
  content:"________________";
  color:#e6e6e6;
  margin-left:20px;
  position:relative;
  top:-4px;
}
.dividerText {
      color: #999;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px 10px;
    text-transform: uppercase;
}
.input {
 -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #262626;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 14px;
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    border: 1px solid #efefef;
    background: #fafafa;
    line-height: 18px;
    font: 400 13px Arial;
    padding:10px;
    margin:5px 0 5px 0;
}
.input:focus {
  border:1px solid #ccc;
  outline:none;
}
.terms {
  color: #999;
    margin: 10px 20px;
    font-size:15px;
}

/* mobile only */
@media only screen and (max-width:955px) {
  .container {
    margin:0 auto 10px auto;
  }
}
</style>
