import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 默认主题
import qs from 'qs'
import './utils/rem.js'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 20000
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
