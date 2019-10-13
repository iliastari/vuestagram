<template>
    <div class="container">
        <Userinfo :userData="isUser" />
        <Posts :userData="isUser" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Userinfo from '@/components/profile/Userinfo.vue'
import Posts from '@/components/profile/Posts.vue'

export default {
    data() {
        return {
            paramName: this.$route.params.username,
        }
    },
    computed: {
        ...mapGetters([
            'userData'
        ]),    
          isUser() {
            if(this.$route.params.username == this.userData('username')) {
                /* 
                    Return own userdata
                    - User ID
                    - Username
                    - Full name
                    - Description 
                    - Profile picture
                */

               const data =  {
                   id: this.userData('id'), 
                   username: this.userData('username'), 
                   fullname: this.userData('fullname'), 
                   desc: this.userData('description'),
                   profilepic: this.userData('profile_picture'),

                }

                return data
            } else {
                // return someone else their userdata

                /* 
                    Search userdata based on ID 
                    and find ID through the username param
                */
                  const data =  {
                   id: "9999999", 
                   username: "Username", 
                   fullname: "Fullname", 
                   desc: "Description",
                   profilepic: "",
                   visiting: true
                }
                
                return data
            }
        }
    },
    components: {
        Userinfo,
        Posts
    },
   
}
</script>

<style scoped lang="scss">

.container {
    max-width:935px;
    margin: 0 auto;
    padding-bottom:50px;
    }

</style>