import Api from '@/server/Api'

export default {
    userFeedPosts(user_id) {
  
        return Api().get('posts/feed/'+ user_id)
        
    },  
    postComment(data) {
  
        return Api().post('posts/comment/', data)
        
    },
    likePost(data) {
  
        return Api().post('posts/like/', data)
        
    }, 
    unlikePost(data) {
  
        return Api().post('posts/unlike/', data)
        
    }, 
    userProfilePosts(username) {
  
        return Api().get('posts/profile/'+ username)
        
    },
    
}

