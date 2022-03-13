import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import * as echarts from 'echarts'

// main.js全局引用echarts
Vue.prototype.$echarts = echarts

// main.js全局引用axios
axios.defaults.baseURL = 'http://localhost:8080/api/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
