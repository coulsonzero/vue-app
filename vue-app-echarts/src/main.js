import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import Echarts from 'echarts'

// main.js全局引用echarts
Vue.prototype.$echarts = Echarts
// Vue.use(Echarts)

// main.js全局引用axios
axios.defaults.baseURL = 'http://localhost:3030/api/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
