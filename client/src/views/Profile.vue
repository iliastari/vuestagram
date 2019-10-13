<template>
    <div class="container">
        <Userinfo v-if="data" :userinfo="data.userinfo[0]" />
        <UserPosts v-if="data" :userinfo="data.posts" />
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
            try {
                await Posts.userProfilePosts(this.paramName).then(response => (this.data = response.data))
                console.log(this.data)
            } catch (err) {
                this.error = err.response.data.error
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