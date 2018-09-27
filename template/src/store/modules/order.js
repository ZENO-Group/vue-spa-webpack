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
      commit('SET_ACTIVE_ORDER_ID', payload)
    }
  }
}

export default app
