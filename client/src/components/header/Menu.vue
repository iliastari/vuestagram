<template>
    <div class="menu">
        <div class="upload">
             <font-awesome-icon class="icon" :icon="['fas', 'camera']" />
        </div>
        
        <div class="notifications">
            <font-awesome-icon class="icon noti" :icon="['far', 'heart']" />
        </div>
        
        <router-link :to="{ name: 'Profile', params: {username: userData('username')} }" >
            <div class="profile"> 
                <font-awesome-icon class="icon" :icon="['far', 'user']"  />
            </div>
        </router-link>
        
    
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters([
          'userData'
      ])
    }
}
</script>

<style lang="scss">
    .menu {
        margin-right:35px;
        display:flex;

        div {
            display:flex;
            align-items:center;
            justify-content: center;
            width:25px;
            height:25px;
            margin: 10px;
            cursor:pointer;
        }
        .icon {
           font-size:20px;
        }
    }   
</style>