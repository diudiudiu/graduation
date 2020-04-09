import shop from '../../api/shop'
import api from '@/renderer-process/libs/server-request'
import * as mutTypes from '../mutation-types'

const state = {
  items: [],
  checkoutStatus: null,
   /**
   * 登录用户信息
   * @property {string} loginUser.id userid
   * @property {string} loginUser.name real name for user
   * @property {string} loginUser.pictureUrlList picture url for user
   * @property {string} loginUser.type 1 备课、2 授课
   * @property {string} loginUser.token token
   * @property {string} loginUser.email email
   */
  loginUser: null
}

// getters
const getters = {
  loginUserId: state => {
    if (state.loginUser) {
      return state.loginUser.id
    }
    return null
  },
  loginUserInfo: state => {
    if (state.loginUser) {
      return state.loginUser
    }
    return null
  },
  loginUserRealName: state => {
    if (state.loginUser) {
      return state.loginUser.name
    }
    return null
  },
  loginUserAvatarList: state => {
    if (state.loginUser) {
      return state.loginUser.pictureUrlList
    }
    return null
  },
  isLogin: state => state.loginUser !== null,
  loginUserToken: state => {
    if (state.loginUser) {
      return state.loginUser.token
    }
    return null
  },
 
  loginUserEmail: state => {
    if (state.loginUser) {
      return state.loginUser.email
    }
  },
  loginUser: state => state.loginUser,
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  
  logout ({ commit, getters }) {
    if (getters.isLogin) {
      // 退出到登录页  通知互动模块
      let token = getters.loginUserToken
      let userId = getters.loginUserId
      let type = getters.loginUserType === 1 ? '90' : '100'
      api.logout({ token, userId, type })
      commit(mutTypes.LOGOUT)
    }
  },
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  },
}

// mutations
const mutations = {
  [mutTypes.USER_LOGINED] (state, user) {
    state.loginUser = user
    // state.loginUser = _.cloneDeep(user)
  },
  [mutTypes.LOGOUT] (state) {
    state.loginUser = null
  },
  
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}