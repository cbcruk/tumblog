import Vue from 'vue/dist/vue'
import '@/components'
import './assets/reset.css'

Vue.prototype.$i18n = i18n

Vue.config.productionTip = false

new Vue({
  el: '#app'
})
