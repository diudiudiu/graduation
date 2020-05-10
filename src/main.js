import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store/store'

Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.use(VueAxios, axios)
import 'element-ui/lib/theme-chalk/index.css';

import router from "./router/router"  

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
