<template>
    <div class="posts">
        <article v-for="post in data" :key="post.id" class="post">
            <img :src="publicImageUrl + '/user/posts/' + post.img_url" alt="imagedump">
        </article>  
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['userinfo'],
    data: function() {
        return {
            data: this.userinfo
        }
    },

    watch: {
        '$route.params.username' (to, from) {
            this.data = this.userinfo
        }
    }, 
    computed: {
      ...mapGetters([
          'userData',
          'publicImageUrl'
      ]),
  }
}
</script>

<style scoped lang="scss">
.posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
    margin-top:70px;


    .post {
        width:100%;
        overflow:hidden;
        position: relative;
        cursor:pointer;
      
        &::before {
            content: "";
            display: inline-block;
            width: 1px;
            height: 0;
            padding-bottom: calc(98.66% / (1/1));  
            
    }
        & img {  
            position: absolute; top: 0; left: 0;
            width: 100%;
            height: 100%;
            object-fit:cover;       
        }
    }
    
}

/* MOBILE */
@media only screen and (max-width: 735px)  {
    .posts {
        grid-gap:3px;
    }
}


/*
.posts {
    display: flex;
    flex-wrap: wrap;


    .post {
        background:red;
        border:1px solid #000;
        flex: 1 0 calc(25% - 10px); 
        align-items: flex-start;
        margin:20px;

        & img {      
          width:100%;
          height:100%;
          object-fit:cover;
        }
    }
    
}
*/
</style>