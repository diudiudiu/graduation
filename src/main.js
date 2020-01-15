import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.use(VueAxios, axios)
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
