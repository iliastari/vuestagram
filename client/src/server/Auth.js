import Api from '@/server/Api'

export default {
    register (userinfo) {
        return Api().post('register', userinfo)
    },
    
    login (userinfo) {
        return Api().post('login', userinfo)
    }
}

