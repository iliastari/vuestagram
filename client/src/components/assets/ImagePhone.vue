<template>
  <div class="container">
    <div class="phones">

    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagePhone'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
 
  
}
.phones {
  -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    background: url(../../assets/phones.png) no-repeat;
    background-position: 0 0;
    background-size: 454px 618px;
    -webkit-flex-basis: 454px;
    -ms-flex-preferred-size: 454px;
    flex-basis: 454px;
    height: 618px;
    margin-top:100px;
    margin-left: 30px;
    margin-right: -15px;
    z-index:999;
}
@media only screen and (max-width:955px) {
  .container {
    display:none;
  }
}
</style>
