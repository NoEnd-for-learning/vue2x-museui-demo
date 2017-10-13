import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

/*
* 在公共的actions 中，但它提交mutation时，即commit(types, payload)
* => 触发了products 模块中的mutations，更新库存state.all 下对应的inventory
* => 同时触发了cart 模块中的mutations，更新购物车信息state.added 下对应的{ id, quality }
* */
