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
  {
    path: '',
    component: MainLayout,
    redirect: 'dashboard',
    meta: { title: '', icon: '', display: 'Home' },
    children: [
      {
        path: 'dashboard',
        component: importComponent('dashboard/index'),
        name: 'dashboard',
        meta: { title: '', icon: '', display: 'Home' }
      },
      {
        path: 'order',
        component: importComponent('order/index'),
        name: 'order',
        redirect: '/order/list',
        meta: {
          display: 'Order'
        },
        children: [
          {
            path: 'list',
            component: importComponent('order/order-list'),
            name: 'order-list',
            meta: {
              display: 'List View'
            }
          },
          {
            path: 'item',
            component: importComponent('order/order-item'),
            name: 'order-item',
            meta: {
              display: 'Order Detail'
            }
          }
        ]
      }
    ]
  },
  { path: '*',
    component: MainLayout,
    redirect: '/not-found',
    hidden: true,
    meta: {
      breadcrumb: false
    },
    children: [
      {
        path: '/not-found',
        component: importComponent('error/404/index'),
        name: 'not-found',
        meta: {
          breadcrumb: false
        }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
