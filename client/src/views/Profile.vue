<template>
    <div class="profile">
        <Userinfo />
        <Posts />
    </div>
</template>

<script>
import Userinfo from '@/components/profile/Userinfo.vue'
import Posts from '@/components/profile/Posts.vue'

export default {
    components: {
        Userinfo,
        Posts
    }
}
</script>

<style lang="scss">

</style>