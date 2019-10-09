import Api from '@/server/Api'

export default {
    register (userinfo) {
        return Api().post('register', userinfo)
    }
}

/* 
    Auth.register({
        email: 'ilias@gmail.com',
        password: 'poep123'
    })
*/