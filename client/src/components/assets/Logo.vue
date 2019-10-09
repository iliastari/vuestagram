<template>
    <div :class="[logoStyle === 'nav' ? logoNav : '', Logo]" >
       
      <router-link :to="{ path: '/'}"> Vuestagram </router-link>
    </div>
</template>
<script>
export default {
    props: ['logoStyle'],
    data: function() {
        return {
            logoNav: 'navbar',
            Logo: 'logo'
        }
    }
}
</script>
<style scoped>

    .logo a {
        font-family: 'Grand Hotel', cursive;
        font-weight:500;
        font-size:50px;
        cursor:pointer;
        color:#000;
        margin:20px 0 15px;
        /* No text select */
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
    }
    .navbar a {
        font-size:35px !important;
      
        margin-left:35px;
    
    }
</style>