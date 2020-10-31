import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: [{ name: '' }, { lastname: '' }, { email: '' }, { password: '' }, { age: '' }],
    log: false,
    booking: [{ name: '' }, { lastname: '' }, { email: '' }, { checkin: '' }, { checkout: '' }, { sumroom: '' }, { sumperson: '' }, { tel: '' }]
  },

  mutations: {
    setUser (state, { payload }) {
      state.currentUser = payload
      state.log = true
    },
    logingOut: (state, { out }) => {
      state.log = false
      state.currentUser = out
    }
  },

  actions: {
    setUser ({ commit }, payload) {
      commit('setUser', { payload })
    },
    logingOut ({ commit }, out) {
      commit('logingOut', { out })
    }
  },

  getters: {
    currentUser: state => state.currentUser,
    log: state => state.log
  }
})
