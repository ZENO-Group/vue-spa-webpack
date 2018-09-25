import Vue from 'vue'
import Router from 'vue-router'

const env = process.env.NODE_ENV
const ENV_LIST = {
  'development': './import.dev.js',
  'production': './import.prod.js'
}
const _import = require(ENV_LIST[env])

Vue.use(Router)

/* Layout */
import MainLayout from '@/layouts/MainLayout'

export const constantRouterMap = [
  { path: '/login', component: _import('app/login/index'), hidden: true, name: 'login' },
  { path: '/401', component: _import('error/401/index'), hidden: true },
  { path: '/404', component: _import('error/404/index'), hidden: true },
  {
    path: '',
    component: MainLayout,
    redirect: 'dashboard',
    meta: { title: '首页', icon: '' },
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard'
    }]
  },
  { path: '*', redirect: '/404', hidden: true }

]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
