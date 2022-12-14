import Vue from 'vue'
import App from './components/_test.vue'
import vuetify from './plugins/vuetify'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
