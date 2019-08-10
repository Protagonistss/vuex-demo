<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <span>{{ product.title }}-{{ product.price }}</span>
      <button @click="addProductToCart(product)">加入购物车</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'product',
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', ['addProductToCart']),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
