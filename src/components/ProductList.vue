<template>
  <ul class="productlist">
    <span>productlist</span>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price }}
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      products: 'allProducts' // 来源于store 的modules模块中的products.js, 返回 state.all
    }),
    methods: mapActions([
      'addToCart' // 来源于store下的公共actions
    ]),
    created () { // 实例创建完成的钩子函数(获取到数据, 以便进行渲染)
      this.$store.dispatch('getAllProducts')
      // 派发给modules模块中products.js 的actions,
      // 此时，已经从api 中拿到数据，即products,
      // 并完成赋值 state.all = products
    }
  }
</script>
