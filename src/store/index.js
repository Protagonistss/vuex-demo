import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/product'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userInfo: {
      account: 'protagonisths@gmail.com'
    }
  },
  modules: {
    cart,
    products
  }
})
