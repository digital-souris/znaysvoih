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
      let product = payload

      let findToCart = _.findIndex(state.cart, (item) => {
        return item.id === payload.id
      })
      if (findToCart === -1) {
        if (!payload.count) {
          product.count = 1
        }
        state.cart.push(product)
      }
      else {
        if (!payload.count) {
          state.cart[findToCart].count++
        }
        else {
          state.cart[findToCart].count+=payload.count
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    changeCountCart(state, payload) {
      const findProduct = _.findIndex(state.cart, (item) => {
        return item.id === payload.id
      })
      if (findProduct !== -1) {
        if (payload.count) {
          state.cart[findProduct].count = payload.count
        }
        else if (payload.type) {
          state.cart[findProduct].count++
        }
        else {
          state.cart[findProduct].count--
        }
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    deleteProductToCart(state, payload) {
      const findProduct = _.findIndex(state.cart, (item) => {
        return item.id === payload.id
      })
      if (findProduct !== -1) {
        state.cart.splice(findProduct, 1)
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }

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
