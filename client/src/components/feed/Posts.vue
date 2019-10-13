<template>
  <div class="posts-container">
   <article v-for="post in posts" :key="post.id" class="posts">
        <div class="post-top">
            <img class="profile-picture" :src="publicImageUrl + 'user/profile/' + getUserInfo(post.user_id, 'profile_picture') " >
            <router-link :to="{ name: 'Profile', params: {username: getUserInfo(post.user_id, 'username') } }" >    
                <div class="username">
                {{ getUserInfo(post.user_id, 'username') }}
                </div>
            </router-link>
        </div>
        <div class="post-image">
            <img :src="publicImageUrl + '/user/posts/' + post.img_url" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>
    
  </div>
</template>

<script>
import Posts from '@/server/Posts'
import Users from '@/server/Users'

import { mapGetters } from 'vuex'

export default {
  name: 'Posts',
  data() {
      return {
          posts: {},
          users: {}
      }
  },
  methods: {
    getUserInfo(value, key) {
        // Pass ID of the user and what column you want to show
        // For example a user with id = 1 and i want his usename
      for (let i = 0; i < this.users.length; i++) {
          if(this.users[i].id == value) 
          return this.users[i][key]
        }
    }
  },
  async mounted () {

     try {
        const res = await Posts.userFeedPosts(this.userData('id'))  
        this.posts = res.data.posts
        this.users = res.data.users


     } catch (err) {
       this.error = err.response.data.error
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.posts-container {
    margin-top:60px;
    margin-right:26px;
    width:614px;
}
.posts {
    margin-bottom:55px;

    .post-top {
        padding: 16px;
        background-color: #fff;
        border: 1px solid #e6e6e6;
        display:flex;

        .profile-picture {
            width:30px;
            height:30px;
            border-radius:50%;
            cursor:pointer;
        }
        .username {
            margin-top:8px;
            margin-left:12px;
            font-size:13px;
            font-weight:600;
            color:#000;
        }
    }

    .post-image  {
       height:auto;

        & img {
            width:100%;
        }
    }

    .post-bottom {
        margin-top:-4px;
        padding: 16px;
        background-color: #fff;
        border: 1px solid #e6e6e6;
        
    }
}

</style>
