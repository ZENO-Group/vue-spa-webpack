import { cloneDeep } from 'lodash'
const app = {
  state: {
    routes: [],
    breadcrumb: true,
    currentRoute: []
  },

  mutations: {
    SET_ROUTES: (state, routes) => {
      state.routes = routes
    },
    SET_CURRENT_ROUTE: (state, currentRoute) => {
      state.currentRoute = currentRoute
      console.log('state.currentRoute', state.currentRoute, currentRoute)
    },
    SET_USE_BREADCRUMB: (state, breadcrumb) => {
      state.breadcrumb = breadcrumb
    }
  },

  actions: {
    // auth manage
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTES', [])
        resolve()
      })
    },
    ChangeBreadCrumb ({ commit }, payload) {
      commit('SET_USE_BREADCRUMB', payload)
    },
    ChangeCurrentRoute ({ commit }, payload) {

      let { matched } = payload

      let copied = []
      matched.forEach(item => {
        copied.push({
          path: item.path,
          meta: item.meta
        })
      })
      console.log('copied', copied)
      commit('SET_CURRENT_ROUTE', copied)
    }
  }
}

export default app
