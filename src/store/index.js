import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    getCart(state) {
      return state.cart
    }
  },
  mutations: {
    addToCart(state, payload) {
      let findToCart = _.findIndex(state.cart, (item) => {
        return item.id === payload.id
      })
      console.log(findToCart)
      if (findToCart === -1) {
        state.cart.push({id: payload.id, count: payload.count})
      }
      else {
        state.cart[findToCart].count+=payload.count
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    loadCart(state, payload) {
      state.cart = payload
    }
  },
  actions: {
    getCart({commit}) {
      if (localStorage.getItem('cart')) {
        commit('loadCart', JSON.parse(localStorage.getItem('cart')))
      }
    }
  },
  modules: {
  }
})
