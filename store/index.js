import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: [{ name: '' }, { lastname: '' }, { email: '' }, { password: '' }, { age: '' }],
    log: false,
    booking: [{ name: '' }, { lastname: '' }, { email: '' }, { checkin: '' }, { checkout: '' }, { sumroom: '' }, { sumperson: '' }, { tel: '' }, { timestamp: '' }, { roomType: '' }],
    roomPrice: [{ rPrice: '' }, { rType: '' }],
    totalPrice: null
  },

  mutations: {
    setUser (state, { payload }) {
      state.currentUser = payload
      state.log = true
    },
    logingOut: (state, { out }) => {
      state.log = false
      state.currentUser = out
    },
    addRoomPrice (state, { room }) {
      state.roomPrice = room
    },
    // this.$store.getters.booking[0].sumroom
    addBooking (state, { book }) {
      state.booking = book
      state.totalPrice = state.roomPrice.rPrice * state.booking.sumroom
    }
  },

  actions: {
    setUser ({ commit }, payload) {
      commit('setUser', { payload })
    },
    logingOut ({ commit }, out) {
      commit('logingOut', { out })
    },
    addRoomPrice ({ commit }, room) {
      commit('addRoomPrice', { room })
    },
    addBooking ({ commit }, book) {
      commit('addBooking', { book })
    }
  },

  getters: {
    currentUser: state => state.currentUser,
    booking: state => state.booking,
    log: state => state.log,
    roomPrice: state => state.roomPrice,
    totalPrice: state => state.totalPrice
  }
})
