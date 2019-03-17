import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'
import VueLodash from 'vue-lodash'
import store from './stores/store'

import VAnimateCss from 'v-animate-css'
import router from './router'
import VeeValidate from 'vee-validate'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

const options = { name: 'lodash' } // customize the way you want to call it

// Vue.use(Buefy)
Vue.use(VeeValidate);
Vue.use(VAnimateCss);
Vue.use(VueAwesomeSwiper)
Vue.use(VueLodash, options) // options is optional

Vue.config.productionTip = false

Vue.prototype.$axios = Axios //axios globaly defined, can used everywhere in the app without import
Vue.prototype.$_ = VueLodash //lodash globaly defined, can used everywhere in the app without import
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
