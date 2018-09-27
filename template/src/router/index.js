import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import MainLayout from '@/layouts/MainLayout'

const CURRENT_ENV = process.env.NODE_ENV
const ENV_CONFIG = {
  'development': 'import.dev.js',
  'production': 'import.prod.js'
}

const importComponent = require('./' + ENV_CONFIG[CURRENT_ENV])

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: importComponent('app/login/index'), hidden: true, name: 'login' },
  { path: '/401', component: importComponent('error/401/index'), hidden: true },
  { path: '/404', component: importComponent('error/404/index'), hidden: true },
  {
    path: '',
    component: MainLayout,
    redirect: 'dashboard',
    meta: { title: '', icon: '' },
    children: [{
      path: 'dashboard',
      component: importComponent('dashboard/index'),
      name: 'dashboard'
    }]
  },
  { path: '*', redirect: '/404', hidden: true }

]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
