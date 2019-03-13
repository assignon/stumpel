import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import VAnimateCss from 'v-animate-css';
import router from './router'
import VeeValidate from 'vee-validate';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VeeValidate);
Vue.use(VAnimateCss);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
