import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import 'slick-carousel/slick/slick.css';
import './assets/styles/index.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
