<template>
    <div class="sidebar">

        <div class="userinfo">

            <img v-if="!userData('profile_picture')" class="profile-picture" src="http://127.0.0.1:3000/images/user/profile/default.jpg" alt="profile">   
            <img v-else class="profile-picture" :src="'http://127.0.0.1:3000/images/user/profile/' + userData('profile_picture') " alt="profile">
            
            <div class="username">
                {{ userData('username') }}
                <div class="description">
                    {{ userData('description') }}
                </div>
            </div>
        </div>

        <!-- 

        [Stories]

        <div class="box stories">
            <div class="story">
                Story
            </div>
            <div class="story">
                Story
            </div>
            <div class="story">
                Story
            </div>

        </div>

        -->

         <div class="box suggestions">
            <div class="title">
                Suggestions For You
            </div>

            <div class="suggestion">
                <div class="people">
                    <div class="profile-picture">

                    </div>
                    <div class="username">
                        BillGates
                    </div>
                     <div class="follow">
                        Follow
                    </div>
                </div>
                  <div class="people">
                    <div class="profile-picture">

                    </div>
                    <div class="username">
                        BillGates
                    </div>
                     <div class="follow">
                        Follow
                    </div>
                </div>
                  <div class="people">
                    <div class="profile-picture">

                    </div>
                    <div class="username">
                        BillGates
                    </div>
                    <div class="follow">
                        Follow
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data() {
      return {
          data: this.userData
      }
  },
  computed: {
      ...mapGetters([
          'userData'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
    width:293px;
    position:sticky;
    margin-top:60px;

    .userinfo {
        display:flex;
        margin-bottom:20px;
        position:sticky;
        top:140px;
        
        .profile-picture {
            width:50px;
            height:50px;
            background:red;
            border-radius:50%;
            cursor:pointer;
        }
        .username {
            margin:10px 0 0 10px;
            font-weight:700;
            font-size:13px;
            
            .description {
                margin-top:2.5px;
                font-size:12px;
                color:#999999;
            }
        }
    }

    .stories {
        position:sticky;
        top:120px;
    }

    .suggestions {
        padding:20px;
        font-size:14px;
        font-weight:bold;
        color:#999999;
        position:sticky;
        top:205px;

        .title {
            font-weight:600;
        }
        
        .people {
            display:flex;
            margin-top:15px;
        
            .profile-picture {
            
                width:30px;
                height:30px;
                background:red;
                border-radius:50%;
                cursor:pointer;
            }
            .username {
                margin-top:8px;
                margin-left:10px;
                font-size:13px;
                font-weight:600;
                color:#000;
            }
            .follow {
                color: #3897f0;
                margin-top:10px;
                margin-left:125px;
                font-size:12px;
                font-weight:600;
                cursor:pointer;
            }
        }
    }

}
.box {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    margin-bottom:25px;
    max-height: 223px;
}

</style>
