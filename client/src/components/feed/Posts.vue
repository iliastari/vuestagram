<template>
  <div class="posts-container">
   <article v-for="(post, index) in posts" :key="post.id" class="posts">
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
            <div class="top-bar">
                <div class="left">
                 
                <!-- Red heart -->
                <svg v-if="userLiked(post.id, userData('id'))"@click="unlikePost(post.id, userData('id'))" class="heart liked" viewBox="0 -28 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m471.38 44.578c-26.504-28.746-62.871-44.578-102.41-44.578-29.555 0-56.621 9.3438-80.449 27.77-12.023 9.3008-22.918 20.68-32.523 33.961-9.6016-13.277-20.5-24.66-32.527-33.961-23.824-18.426-50.891-27.77-80.445-27.77-39.539 0-75.91 15.832-102.41 44.578-26.188 28.41-40.613 67.223-40.613 109.29 0 43.301 16.137 82.938 50.781 124.74 30.992 37.395 75.535 75.355 127.12 119.31 17.613 15.012 37.578 32.027 58.309 50.152 5.4766 4.7969 12.504 7.4375 19.793 7.4375 7.2852 0 14.316-2.6406 19.785-7.4297 20.73-18.129 40.707-35.152 58.328-50.172 51.574-43.949 96.117-81.906 127.11-119.3 34.645-41.801 50.777-81.438 50.777-124.74 0-42.066-14.426-80.879-40.617-109.29z"/>
                </svg>

                <!-- Outline heart -->
                 <svg v-else @click="likePost(post.id, userData('id'), index)" class="heart" viewBox="0 -28 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m256 455.52c-7.2891 0-14.316-2.6406-19.793-7.4375-20.684-18.086-40.625-35.082-58.219-50.074l-0.089843-0.078125c-51.582-43.957-96.125-81.918-127.12-119.31-34.645-41.805-50.781-81.441-50.781-124.74 0-42.07 14.426-80.883 40.617-109.29 26.504-28.746 62.871-44.578 102.41-44.578 29.555 0 56.621 9.3438 80.445 27.77 12.023 9.3008 22.922 20.684 32.523 33.961 9.6055-13.277 20.5-24.66 32.527-33.961 23.824-18.426 50.891-27.77 80.445-27.77 39.539 0 75.91 15.832 102.41 44.578 26.191 28.41 40.613 67.223 40.613 109.29 0 43.301-16.133 82.938-50.777 124.74-30.992 37.398-75.531 75.355-127.11 119.31-17.625 15.016-37.598 32.039-58.328 50.168-5.4727 4.7891-12.504 7.4297-19.789 7.4297zm-112.97-425.52c-31.066 0-59.605 12.398-80.367 34.914-21.07 22.855-32.676 54.449-32.676 88.965 0 36.418 13.535 68.988 43.883 105.61 29.332 35.395 72.961 72.574 123.48 115.62l0.09375 0.078126c17.66 15.051 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.47-115.62 30.344-36.617 43.879-69.188 43.879-105.61 0-34.516-11.605-66.109-32.676-88.965-20.758-22.516-49.301-34.914-80.363-34.914-22.758 0-43.652 7.2344-62.102 21.5-16.441 12.719-27.895 28.797-34.609 40.047-3.4531 5.7852-9.5312 9.2383-16.262 9.2383s-12.809-3.4531-16.262-9.2383c-6.7109-11.25-18.164-27.328-34.609-40.047-18.449-14.266-39.344-21.5-62.098-21.5z"/>
                </svg>

              

                    
                <!-- comment icon 
                <svg class="comment" enable-background="new 0 0 60 60" version="1.1" viewBox="0 0 60 60" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="m55.232 43.104c3.122-4.359 4.768-9.399 4.768-14.604 0-14.888-13.458-27-30-27s-30 12.112-30 27 13.458 27 30 27c4.262 0 8.378-0.79 12.244-2.348 6.805 3.927 16.212 5.282 16.618 5.338 0.046 7e-3 0.093 0.01 0.139 0.01 0.375 0 0.725-0.211 0.895-0.554 0.192-0.385 0.116-0.849-0.188-1.153-2.301-2.3-3.885-7.153-4.476-13.689zm-12.392 8.078c-2.11-1.302-4.467-2.814-5.017-3.249-0.296-0.432-0.88-0.563-1.337-0.29-0.299 0.179-0.489 0.512-0.492 0.861-3e-3 0.589 6e-3 0.77 4.081 3.316-3.21 1.11-6.588 1.68-10.075 1.68-15.439 0-28-11.215-28-25s12.561-25 28-25 28 11.215 28 25c0 4.897-1.591 9.643-4.601 13.724-0.144 0.195-0.212 0.436-0.191 0.677 0.35 4.174 1.238 9.49 3.44 13.16-3.334-0.678-9.343-2.183-13.808-4.879z"/></svg>
   
                
                <svg class="share" id="Capa_1" enable-background="new 0 0 551.13 551.13" viewBox="0 0 551.13 551.13" xmlns="http://www.w3.org/2000/svg"><path d="m465.016 172.228h-51.668v34.446h34.446v310.011h-344.457v-310.011h34.446v-34.446h-51.669c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223z"/><path d="m258.342 65.931v244.08h34.446v-244.08l73.937 73.937 24.354-24.354-115.514-115.514-115.514 115.514 24.354 24.354z"/></svg>
                -->
                </div>
                <div class="right">
                    Right
                </div>
            </div>
            <div class="likes">
               <span class="number">{{ filterLikesByPosts(post.id) }}</span> likes
            </div>
            <div class="description">
                <router-link :to="{ name: 'Profile', params: {username: getUserInfo(post.user_id, 'username') } }" >    
                    <span class="username"> {{ getUserInfo(post.user_id, 'username') }}</span>  
                </router-link>
                {{ post.post_desc }}
            </div>
            <div class="comments">
                <div v-for="(comment, index) in filterCommentsByPosts(post.id)" :key="index" class="comment">
                    <router-link :to="{ name: 'Profile', params: {username: getUserInfo(comment.user_id, 'username') } }" >    
                    <span class="username">{{ getUserInfo(comment.user_id, 'username') }} </span>
                    </router-link>

                    <span class="text">{{comment.comment}}</span>
                </div>
            </div>
            <div class="date">2 HOURS AGO</div>

                    <form @submit.prevent="postComment(write_comment[post.id], post.id, userData('id'))">
            <div class="bottom-bar">
                <div class="write-comment">
                    <input type="text" v-model="write_comment[post.id]" placeholder="Add a comment...">
                    <button type="submit" :disabled="!write_comment[post.id]" class="submit">Post</button>
                
                </div>
            </div>
            </form>

            
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
          users: {},
          likes: [],
          comments: [],
          write_comment: [],
          postLikes: []
      }
  },
  methods: {
   /* checkLiked(post_id, user_id, index) {
        const likes = this.likes[index]
        const p = post_id
        let posts = []

        if(likes) {
            posts.push(likes)
        } 

        console.log(posts)
        if(posts.id == p) {
            console.log(true)
        }

        //return likes[i].post_id == post_id
    },*/
    async getPostLikes(post_id) {
        try {
            await Posts.getPostLikes(post_id).then(allPostLikes => {
                this.postLikes.push(allPostLikes.data['postLikes'].count)
            })

        } catch(err) {
            error = err
        }

    },
    getUserInfo(value, key) {
        // Pass ID of the user and what column you want to show
        // For example a user with id = 1 and i want his usename
      for (let i = 0; i < this.users.length; i++) {
          if(this.users[i].id == value) 
          return this.users[i][key]
        }
    },
    userLiked(post_id, user_id) {
           const likes = this.likes
                for(let i = 0; i < likes.length; i++) {
                    if(likes[i].post_id == post_id && likes[i].user_id == user_id) {
                       return true
                    }
                }        
    },
    async postComment(comment, post_id, user_id) {
        if(this.comments) {
                try {

                await Posts.postComment({
                    post_id: post_id,
                    user_id: user_id,
                    comment: comment
                }).then(response => response.data)
                 
                this.comments.push({post_id: post_id, user_id: user_id, comment: comment})
                this.write_comment = []

                } catch (err) {
                    this.error = err.response.data.error
                }
        }
       
    },
    async likePost(post_id, user_id, index) {
        try {
            await Posts.likePost({
                post_id: post_id,
                user_id: user_id
            }).then()

            this.likes.push({
                post_id: post_id,
                user_id: user_id
            })
            
            this.postLikes.push({
                post_id: post_id,
                user_id: user_id
            })

        } catch(err) {
            this.error = "error"
        }
    },

    async unlikePost(post_id, user_id) {
        try {
            await Posts.unlikePost({
                post_id: post_id,
                user_id: user_id
            }).then(
                this.likes = this.likes.filter(likes => parseInt(likes.post_id)!== post_id)

                )

                function removeLike(like) {
                    if(like.post_id == post_id && like.user_id == user_id) {
                        return false
                    }  else {
                        return true
                    }
                }

                this.postLikes = this.postLikes.filter(removeLike)
            console.log(test)
                
        

           
        } catch(err) {
            this.error = "error"
        }
    },
    filterCommentsByPosts(id) {
       return this.comments.filter(comment => comment.post_id == id)
    },
    filterLikesByPosts(id) {
       return this.postLikes.filter(like => like.post_id == id).length
    }
  },
  beforeCreate() {
       this.$Progress.start()
  },
  async mounted () {

     try {
        const res = await Posts.userFeedPosts(this.userData('id'))  

        this.posts = res.data.posts
        this.users = res.data.users
        this.comments = res.data.comments
        this.postLikes = res.data.postLikes
        this.likes = res.data.likeByUser
        this.$Progress.finish()


     } catch (err) {
       this.error = err.response.data.error
        this.$Progress.fail()
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
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
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
        background-color: #fff;
        border: 1px solid #e6e6e6;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        padding: 0 16px 0 16px;
        font-size:14px;
        
        .top-bar {
            display:flex;
            justify-content: space-between;
            align-items: center;
            height:40px;
            //background:#ccc;
            margin-top:4px;

            .heart{
                width:25px;
                cursor:pointer;

                &.liked {
                    fill: #ee5253;
                }
                
            }
            .comment, .share{
                width:25px;
                margin-left:13px;
                cursor:pointer;
            }

            
        }

        .description {

            .username {
                font-weight:600;
            }
        }
        .likes {
            margin-bottom:10px;
            .number {
                font-weight:600;
            }
        }
        .comments {
            margin-top:5px;
            .comment {

                .username {
                    font-weight:600;
                }
            }
        }
        .date {
            margin:5px 0 15px 0;
            font-size:10px;
            color:#999999;
        }
        .write-comment {
            display:flex;
            padding:16px 0;
            border-top:1px solid #efefef;
            margin-left:-16px;
            margin-right:-16px;
            color:#262626;
            height:25px;
            input {
                border:none;
                width:100%;
                outline:none;
                padding-left:16px;
            }
            .submit {
                color: #3897f0;
                font-weight:600;
                border:none;
                background:transparent;
                cursor:pointer;
                outline:none;
                padding-right:16px;

                &[disabled] {
                    opacity:0.3;
                    pointer-events: none;
                }
            }
        }
    }
}

</style>
