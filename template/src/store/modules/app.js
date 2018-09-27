const app = {
  state: {
    routes: []
  },

  mutations: {
    SET_ROUTES: (state, routes) => {
      state.routes = routes
    }
  },

  actions: {
    // auth manage
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTES', [])
        resolve()
      })
    }
  }
}

export default app
