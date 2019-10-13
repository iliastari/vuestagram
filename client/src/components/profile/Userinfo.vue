<template>
    <div class="userProfile">

        <div class="userAvatar">
            <img class="img" :src="'http://127.0.0.1:3000/images/user/profile/' +  data.profile_picture " alt="profile">
        </div>    
        <div class="userInfo">
            <div class="username">
                    
            {{data.username}}
                

                <button v-if="data.id == userData('id')" class="btn edit">Edit Profile</button>
                <button v-else class="btn follow">Follow</button> 
                
                
               
               <!--               
                    <button>settings</button>
                -->
            </div>
            
            <div class="stats">
                  <span class="posts">
                      <span class="count">50</span> posts
                  </span> 

                  <span class="followers">
                      <span class="count">768</span> followers
                  </span> 
                  
                  <span class="following">
                      <span class="count">128</span> following
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
            'userData'
        ]),    
        
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