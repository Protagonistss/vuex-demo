import { CART } from '../mutation-types'
const state = {
  checkoutStatus: null,
  items: []
}

const actions = {
  addProductToCart ({ state, commit }, product) {
    commit(CART.SET_CHECKOUT_STATUS, null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit(CART.PUSH_PRODUCT_TO_CART, { id: product.id })
      } else {
        commit(CART.INCREMENT_ITEM_QUANTITY, cartItem)
      }
    }
  }
}

const mutations = {
  [CART.SET_CHECKOUT_STATUS] (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
