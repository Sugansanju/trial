// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueButton from 'vue-button'
import App from './App'
import router from './router'
import Dropdown from 'hsy-vue-dropdown'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(Dropdown)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
