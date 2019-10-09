<template>
<div>
    <div class="container">
      <div class="register box">
        
        <Logo />
      
        
        <input class="input" type="text" placeholder="Phone number, username, or email">
        <input class="input" type="text" placeholder="Password">
        
        <router-link :to="{name: 'Feed'}"><button class="btn next">Next</button> </router-link>
      
        
        
        
      </div>
    </div>

    <div class="container">
      <div class="login box">
        <small>Don't have an account? <router-link :to="{ name: 'Register' }"> Sign up </router-link></small>
        </div>

    </div>

  </div>
</template>

<script>
import Logo from '@/components/assets/Logo.vue'


export default {
  name: 'Login',
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

.container {
  max-width:350px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  display:flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
  margin:0 auto 10px auto;
}
.box {
  width:100%;
  max-width:280px;
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

</style>
