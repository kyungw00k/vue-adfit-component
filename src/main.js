import Vue from 'vue'
import App from '@/App.vue'
import AdFit from '@/plugin'

Vue.use(AdFit.Banner)

new Vue({
  el: '#app',
  render: h => h(App)
})
