import Api from '@/server/Api'

export default {
    getAllPostsFromUser(user_id) {
  
        return Api().get('posts/user/'+ user_id)
        
    },
    
}

