<template>
    <div class="container">
        <Userinfo v-if="data" :userinfo="data" />
        <UserPosts v-if="data" :userinfo="data.posts['rows']" />
    </div>
</template>

<script>
import Posts from '@/server/Posts'

import Userinfo from '@/components/profile/Userinfo.vue'
import UserPosts from '@/components/profile/Posts.vue'

export default {
    data() {
        return {
            paramName: this.$route.params.username,
            data: ''
        }
    },
    
    async mounted() {
            this.$Progress.start()
            try {
                await Posts.userProfilePosts(this.paramName).then(response => (this.data = response.data, this.$Progress.finish()))
            } catch (err) {
                this.error = err.response.data.error
                this.$Progress.fail()
            }
    },
    components: {
        Userinfo,
        UserPosts
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