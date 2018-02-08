import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'

import './common/stylus/index.styl'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 此router为new出来的Router,在App.vue中即可使用
  render: h => h(App)
})