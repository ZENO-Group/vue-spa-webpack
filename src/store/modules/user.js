import { loginByUsername, logout, getUserInfo } from '@/api/user'
import { getCookie, setCookie, removeCookie } from '@/utils/cookie'
import Router from '@/router'

const user = {
  state: {
    isLoaded: false,
    userId: '',
    username: '',
    token: '',
    name: '',
    isReset: 0
  },

  mutations: {
    SET_USER_IS_LOADED: (state, isLoaded = false) => {
      state.isLoaded = isLoaded
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_IS_RESET: (state, isReset) => {
      state.isReset = isReset
    }
  },

  actions: {
    LoginByUsername ({ commit }, userInfo) {
      const ERR_MSG = ''
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(Response => {
          var {
            access_token = '',
            msg = ERR_MSG
          } = Response.data || {}
          if (access_token && access_token.length) {
            commit('SET_TOKEN', 'Bearer' + access_token) // token => store
            setToken('Authorization', 'Bearer ' + access_token) // token => cookie
            resolve()
          } else {
            reject(msg || ERR_MSG)
          }
        }).catch(exp => {
          reject(ERR_MSG)
        })
      })
    },
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        const token = state.token
        const ERR_MSG = ''
        getUserInfo().then(Response => {
          const {
            code = '',
            msg = ERR_MSG,
            data = {}
          } = Response.data
          commit('SET_USER_IS_LOADED', true)
          if (code.toString() === '200') {
            const { name, username, userId, isReset } = data
            commit('SET_NAME', name)
            commit('SET_USERID', userId)
            commit('SET_USERNAME', username)
            commit('SET_IS_RESET', isReset || 0)
            resolve(data)
          } else {
            reject(msg || ERR_MSG)
          }
        }).catch(exp => {
          commit('SET_USER_IS_LOADED', true)
          reject(ERR_MSG)
        })
      })
    },
    /* logout => server-side */
    LogOut ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_USER_IS_LOADED', false)
          removeCookie('Authorization')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    /* frontend logout */
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_USER_IS_LOADED', false)
        removeCookie('Authorization')
        resolve()
      })
    },
    /* frontend logout => login page */
    FedLogOutToLogin ({ commit, dispatch }) {
      return new Promise(resolve => {
        dispatch('FedLogOut').then(() => {
          Router.push({ name: 'login' })
          resolve()
        })
      })
    }
  }
}

export default user
