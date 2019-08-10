import shop from '../../api/shop'
import { PRODUCTS } from '../mutation-types'
/**
 * init state
 */
const state = {
  all: []
}
/**
 * getter
 */
const getters = {}
/**
 * actions commit
 */
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(PRODUCTS.SET_PRODUCTS, products)
    })
  }
}
/**
 * mutation, dispatch
 */
const mutations = {
  [PRODUCTS.SET_PRODUCTS] (state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
