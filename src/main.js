import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import router from 'vue-router'
// import router from './router/index'
import VAnimateCss from 'v-animate-css';
import router from './router'

Vue.use(VAnimateCss);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
