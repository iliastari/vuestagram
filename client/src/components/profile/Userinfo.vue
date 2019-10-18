<template>
    <div class="userProfile">
        <div class="userAvatar">
            <img class="img" :src="'http://127.0.0.1:3000/images/user/profile/' +  data.profile_picture " alt="profile">
        </div>    
        <div class="userInfo">
            <div class="username">
                    
            {{data.username}}
                <template v-if="data.id == userData('id')">
                <button class="btn edit">Edit Profile</button>
                 <!-- temporary logout button here in menu -->
                <span @click="logout"  class="logout">
                    <font-awesome-icon class="icon" :icon="['fas', 'cog']" />
                </span>
                </template>
                <button v-else-if="relationship.following == false" @click="followUser()" class="btn follow">Follow</button> 
                <button v-else @click="unfollowUser()" class="btn unfollow">Following</button> 

               <!--               
                    <button>settings</button>
                -->
            </div>
            
            <div class="stats">
                  <span class="posts">
                      <span class="count">{{ postCount }}</span> 
                      {{ postsText }}
                  </span> 

                  <span class="followers">
                      <span class="count">{{followers}}</span> 
                      {{ followersText }}
                  </span> 
                  
                  <span class="following">
                      <span class="count">{{following}}</span> 
                      {{ followingText }}
                  </span>
            </div>

            <div class="fullname">
                  {{data.fullname}}
            </div> 
            
            <div class="desc">
                  {{data.description}}
            </div>
          
        </div>
     
    </div>
</template>

<script>
import Relationship from '@/server/Relationship'
import { mapGetters } from 'vuex'

export default {
    props: ['userinfo'],
    data: function() {
        return {
            data: this.userinfo.userinfo[0],
            postCount: this.userinfo.posts.count,
            following: this.userinfo.following,
            followers: this.userinfo.followers,
            relationship: []
        }
    },
    watch: {
        '$route.params.username' () {
            this.data = this.userinfo
        }
    }, 
    async mounted() {
        if(this.data) {
            try {
            await Relationship.show({
                user_one_id: this.userData('id'),
                user_two_id: this.data.id
            }).then(response => this.relationship = response.data)

   
            } catch (err) {
            this.error = err.response.data.error

            }
        }
    },
    methods: {
        async followUser() {
            if(this.data) {
                try {

                await Relationship.follow({
                    user_one_id: this.userData('id'),
                    user_two_id: this.data.id
                }).then(response => response.data)
                 
                this.followers = this.followers+1
                this.relationship.following  = true

                } catch (err) {
                    this.error = err.response.data.error
                }
            }
           
        },

        async unfollowUser() {
             if(this.data) {
                try {

                await Relationship.unfollow({
                    user_one_id: this.userData('id'),
                    user_two_id: this.data.id
                }).then(response => response.data)
                 
                this.followers = this.followers-1
                this.relationship.following  = false
                
    
                } catch (err) {
                this.error = err.response.data.error

                }
            }
        },
        logout() {
            this.$store.dispatch('destroyToken')
            this.$router.push({
                name: 'Register'
            })
        }
    
    },
    computed: {
        ...mapGetters([
            'userData'
        ]),    
        postsText() {
            return this.postCount == 1 ? "post" : "posts"
        },
        followersText() {
            return this.followers == 1 ? "follower" : "followers"
        },
        followingText() {
            return "following"
        }
        
    },
}
</script>

<style scoped lang="scss">
.userProfile {
    display:grid;
    padding:60px 20px 0;
    div {
        margin-bottom:20px;

        &:nth-child(3),:nth-child(4) {
            margin-bottom:0;
        }
    }
    
}
.userAvatar {
   // background:red;
    grid-column: 0.2 / span 2;
    grid-row: 1;
    display:flex;
    align-items:center;
    justify-content: center;

    .img {
        width:150px;
        height:150px;
        border-radius:50%;
    }
}
.userInfo {
    //background: blue;
    grid-column: 3 / span 3;
    grid-row: 1;
    position:relative;


    .logout {
        position:absolute;
        top:6px;
        margin-left:110px;
        font-size:20px;
        cursor:pointer;
    }

    .username {
        font-size:28px; 
    }
    .fullname {
        font-weight:600;
    }

    .btn {
        position:absolute;
        top:4px;
        margin-left:20px;
        font-weight:600;
        padding:6px;
        border-radius:3px;
        outline:none;
        cursor:pointer;

        &.edit {
            border: 1px solid #dbdbdb;
            background:transparent;
        }
        &.follow {
            border: 1px solid #3897f0;
            background:#3897f0;
            color:#fff;
             padding:5px 20px 5px 20px;
           

        }
        &.unfollow {
            border: 1px solid #dbdbdb;
            background:transparent;
             padding:5px 20px 5px 20px;
           

        }
    }
    .stats {
        /* posts, followers, following number count */
        .count {
            font-weight:600;
        }
    }
}
.stats {
    span {
        margin-left:20px;

        &:first-child {
            margin-left:0px !important;
        }
    }
}
</style>