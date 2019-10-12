<template>
  <div class="container">

    <!-- Posts -->
        <Posts />

    <!-- Stories -->
        <Sidebar />


    </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/feed/Posts.vue'
import Sidebar from '@/components/feed/Sidebar.vue'

export default {
  name: 'Feed',
  components: {
      Posts,
      Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    max-width:935px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
}

</style>
