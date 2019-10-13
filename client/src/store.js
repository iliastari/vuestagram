import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from "secure-ls";
var ls = new SecureLS({encodingType: 'rc4', isCompression: false, encryptionSecret: '1deb0b0b0@#d097cde5cb$$@#587&&**2a'});

Vue.use(Vuex)

export default new Vuex.Store({
    strict:true,
    plugins: [
        createPersistedState({
            storage: {
              getItem: key => ls.get(key),
              setItem: (key, value) => ls.set(key, value),
              removeItem: key => ls.remove(key)
            }
          })
    ],
    state: {
        token: null,
        data: null,
        publicImgUrl: 'http://127.0.0.1:3000/'
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        userData: (state) => (value) => {
               if(value !== "password") 
                return state.data[value]
                else
                return "No passwords"
        },
        publicImageUrl(state) {
            return state.publicImgUrl
        }
    },
    mutations: {
        setToken (state, token) {
            state.token = token
        },

        setUser (state, data) {
            state.data = data
        },
        
        setDestroyToken(state)
        {
            if(state.token) {
                state.token = null,
                state.data = null
            }
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, token) {
            commit('setUser', token)
        },
        destroyToken ({commit}) {
            commit('setDestroyToken')
        }

    }
})