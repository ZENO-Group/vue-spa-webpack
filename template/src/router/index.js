import Vue from 'vue'
import Router from 'vue-router'
const _import = require(ENV_LIST[process.env.NODE_ENV])

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

const ENV_LIST = {
  'development': './import.dev.js',
  'production': './import.prod.js'
}

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
