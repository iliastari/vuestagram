import Api from '@/server/Api'

export default {
    userFeedPosts(user_id) {
  
        return Api().get('posts/feed/'+ user_id)
        
    }, 
    userProfilePosts(username) {
  
        return Api().get('posts/profile/'+ username)
        
    },
    
}

