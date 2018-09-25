import axios from 'axios'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 16000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {

  if (store.getters.token) {
    config.headers['Authorization'] = '' // todo getToken()
  }

  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => response,

  (error) => {
    var { status } = error.response || {}
    // api => code 401 as unauthorized or token has expired
    if (status == '401') {
      try {
        store.dispatch('FedLogOutToLogin')
      } catch (exp) {
        console.log(exp)
      }
    } else {
      return Promise.reject(error)
    }
  })

export default service
