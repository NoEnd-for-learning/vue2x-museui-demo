import shop from '../../api/shop'
import * as types from '../mutation-types'

// 初始化
const state = {
  added: [],
  checkoutStatus: null
}

const getters = {
  checkoutStatus: state => state.checkoutStatus
}

const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added] // 缓存数据
    commit(types.CHECKOUT_REQUEST) // 更新购物车数据及结算状态
    shop.buyProducts( // 调用api 中的方法，提交异步请求
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quality: 1
      })
    } else {
      record.quality++
    }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // 先清空购物车
    state.added = []
    state.checkoutStatus = null // 结账状态
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
