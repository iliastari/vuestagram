import Api from '@/server/Api'

export default {
    show(data) {
        return Api().post('relationshipdata', data)
    }, 

    follow(data) {
        return Api().post('followuser', data)
    }, 
    
    unfollow(data) {
        return Api().post('unfollowuser', data)
    }, 
    
}

