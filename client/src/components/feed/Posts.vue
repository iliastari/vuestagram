<template>
  <div class="posts-container">

    <article class="posts">
        <div class="post-top">
            <div class="profile-picture">

            </div>
            <div class="username">
                warrenbuffet
            </div>
        </div>
        <div class="post-image">
            <img src="http://www.nirujahealthtech.com/wp-content/uploads/2019/06/tumor_nht.jpeg" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>

    <article class="posts">
        <div class="post-top">
            <div class="profile-picture">

            </div>
            <div class="username">
                warrenbuffet
            </div>
        </div>
        <div class="post-image">
            <img src="http://www.nirujahealthtech.com/wp-content/uploads/2019/06/tumor_nht.jpeg" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>

    <article class="posts">
        <div class="post-top">
            <div class="profile-picture">

            </div>
            <div class="username">
                warrenbuffet
            </div>
        </div>
        <div class="post-image">
            <img src="http://www.nirujahealthtech.com/wp-content/uploads/2019/06/tumor_nht.jpeg" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>

    <article class="posts">
        <div class="post-top">
            <div class="profile-picture">

            </div>
            <div class="username">
                warrenbuffet
            </div>
        </div>
        <div class="post-image">
            <img src="http://www.nirujahealthtech.com/wp-content/uploads/2019/06/tumor_nht.jpeg" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>

    <article class="posts">
        <div class="post-top">
            <div class="profile-picture">

            </div>
            <div class="username">
                warrenbuffet
            </div>
        </div>
        <div class="post-image">
            <img src="http://www.nirujahealthtech.com/wp-content/uploads/2019/06/tumor_nht.jpeg" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>

    <article class="posts">
        <div class="post-top">
            <div class="profile-picture">

            </div>
            <div class="username">
                warrenbuffet
            </div>
        </div>
        <div class="post-image">
            <img src="http://www.nirujahealthtech.com/wp-content/uploads/2019/06/tumor_nht.jpeg" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>

    <article class="posts">
        <div class="post-top">
            <div class="profile-picture">

            </div>
            <div class="username">
                warrenbuffet
            </div>
        </div>
        <div class="post-image">
            <img src="http://www.nirujahealthtech.com/wp-content/uploads/2019/06/tumor_nht.jpeg" alt="imagedump">
        </div>
        <div class="post-bottom">
            Bottom
        </div>
    </article>

    
  </div>
</template>

<script>
export default {
  name: 'Posts'
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
            background:red;
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
