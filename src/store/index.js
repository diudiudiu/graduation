import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  // plugins: plugins,
  modules: {
    login
  }
  // mutations,
  // actions
})
