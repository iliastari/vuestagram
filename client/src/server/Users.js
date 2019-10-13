import Api from '@/server/Api'

export default {
    user (userinfo) {
        return Api().get('users', userinfo)
    }
}

