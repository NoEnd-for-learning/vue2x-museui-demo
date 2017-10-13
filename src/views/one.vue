<template>
  <div class="app">
    <h3>my-cart</h3>
    <hr>
    <span>产品列表</span>
    <product-list></product-list>
    <hr>
    <span>购物车列表</span>
    <cart></cart>
  </div>
</template>

<script>
  import ProductList from '../components/ProductList.vue'
  import Cart from '../components/Cart.vue'
  export default {
    components: { ProductList, Cart }
  }
</script>

<style>
  .app {
    margin-top: 112px;
  }
</style>
