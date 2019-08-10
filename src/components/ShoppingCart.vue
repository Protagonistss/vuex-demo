<template>
  <div class="cart">
    <p class="list">清单</p>
    <p v-show="!products.length">请添加产品到购物车</p>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }} - {{ product.price }} - {{ product.quantity}}
      </li>
    </ul>
    <p>合计: {{ total }}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">提交</button>
    </p>
    <p v-show="checkoutStatus">提交11{{ checkoutStatus }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  /**
   * TODO: no code hints let me spell state name error 
   */
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      console.log('unit-test one part', products)
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>

<style>
.cart {
  height: 50px;
  background: #ccc;
}
.cart .list {
  font-size: 25px;
  text-align: center;
}
</style>
