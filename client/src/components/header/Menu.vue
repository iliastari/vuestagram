<template>
    <div class="menu">
        <div class="upload">
             <font-awesome-icon class="icon" icon="camera" />
        </div>
        
        <div class="notifications">
            <font-awesome-icon class="icon" icon="heart" />
        </div>
        
        <router-link :to="{ name: 'Profile', params: {username: userData('username')} }" >
            <div class="profile"> 
                <font-awesome-icon class="icon" icon="user" />
            </div>
        </router-link>
        
        <!-- temporary logout button here in menu -->
        <div @click="logout" class="profile">
              <font-awesome-icon class="icon" icon="sign-out-alt" />
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters([
          'userData'
      ])
    },
    methods: {
        logout() {
            this.$store.dispatch('destroyToken')
            this.$router.push({
                name: 'Register'
            })
        }
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