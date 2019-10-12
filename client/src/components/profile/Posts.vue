<template>
    <div class="posts">
        <article class="post">
            <img src="https://www.desibucket.com/wp-content/uploads/2017/05/Fantastic-Nature-Image.jpg" alt="post">
        </article>  
        
        <article class="post">
            <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_48980557.jpg?crop=961,0,1928,2571&wid=600&hei=800&scl=3.21375" alt="post">
        </article>        
        
        <article class="post">
            <img src="https://androidwalls.net/wp-content/uploads/2014/10/London%20Big%20Ben%20Illustration%20Android%20Wallpaper.jpg" alt="post">
        </article>    
    </div>
</template>

<script>

export default {
    props: ['userData'],
    data: function() {
        return {
            data: this.userData
        }
    },
      watch: {
        '$route.params.username' (to, from) {
            this.data = this.userData
        }
    }, 
}
</script>

<style scoped lang="scss">
.posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
    margin-top:70px;


    .post {
        background:red;
        width:100%;
        overflow:hidden;
        position: relative;
        
      
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