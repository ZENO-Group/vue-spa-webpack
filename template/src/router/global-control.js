import router from '../router'
import store from '../store'
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start() // start progress bar
  next()
})

router.afterEach((from, to) => {
  store.dispatch('ChangeCurrentRoute', from)
  NProgress.done() // finish progress bar
})
