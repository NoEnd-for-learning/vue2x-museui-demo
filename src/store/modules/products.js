import shop from '../../api/shop'
import * as types from '../mutation-types'

// 初始化
const state = {
  all: []
}

const getters = {
  allProducts: state => state.all
}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
    // 此时更新了库存信息
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
