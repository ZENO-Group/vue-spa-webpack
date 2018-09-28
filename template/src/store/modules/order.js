const app = {
  state: {
    activeOrderId: ''
  },

  mutations: {
    SET_ACTIVE_ORDER_ID: (state, activeOrderId) => {
      state.activeOrderId = activeOrderId
    }
  },

  actions: {
    SaveActiveOrderId ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('SET_ACTIVE_ORDER_ID', payload)
        resolve()
      })
    }
  }
}

export default app
