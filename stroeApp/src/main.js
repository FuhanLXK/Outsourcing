import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
