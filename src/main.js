import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes'

import VueRouter from 'vue-router'
Vue.use (VueRouter);

import store from './store'


Vue.config.productionTip = false

export const bus=new Vue ();

const router=new VueRouter ({
	routes: Routes,
	mode: 'history'
})


new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
