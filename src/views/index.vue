<template>
  <div>
    <div class="car-header">
      <p class="car">购物车</p>
      <p class="accout">账号:{{ account }}</p>
    </div>
    <div class="product-subtitle">产品</div>
    <ProductList />
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
import ShoppingCart from '../components/ShoppingCart'
export default {
  data () {
    return {
      account: 'protagonist'
    }
  },
  components: { ProductList, ShoppingCart }
}
</script>

<style>
.car-header {
  height: 80px;
  background: #ccc;
  text-align: center;
  position: relative;
}
.car-header .car {
  font-size: 30px;
  text-align: center;
  font-size: 30px;
}
.car-header .accout {
  position: absolute;
  text-align: center;
  bottom: 0px;
  right: 0px;
}
.product-subtitle {
    margin-top: 20px;
    height: 50px;
    background: #ccc;
    font-size: 25px;
    text-align: center;
}
</style>
