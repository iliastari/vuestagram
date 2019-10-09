<template>
    <div class="navbar">
        <div class="nav-container">
            <!-- maybe add porp to Logo :icon="yes" to show icon next to it -->
            <Logo logo-style="nav"/>

            <Search />

            <Menu />
        </div>

    </div>
</template>

<script>
import Logo from '@/components/assets/Logo.vue'
import Search from '@/components/header/Search.vue'
import Menu from '@/components/header/Menu.vue'


export default {
    components: {
        Logo,
        Search,
        Menu
    }
    
}
</script>

<style scoped lang="scss">
    .navbar {
        display:flex;
        align-items:center;
        background-color: #fff;
        border-bottom: 1px solid rgba(0,0,0,.0975);
        position:sticky;
        top:0;
        z-index: 1;
        -webkit-transition: height .2s ease-in-out;
        transition: height .2s ease-in-out;
        height: 77px;
        max-height:77px;
    }
    .nav-container {
         display:flex;
        align-items:center;
        justify-content: space-between;
        width:100%;
        max-width:1028px;
        margin:0 auto;
    }

   
</style>