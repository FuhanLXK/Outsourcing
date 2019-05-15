import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    statuse: true,
    userData: '',
    teaderchData: null
  },
  mutations: {
    GET_LOGIN (state, status) {
      this.state.statuse = status
    },
    GET_LOGINUSERDATA (state, data) {
      this.state.userData = data
    },
    GET_USERDATATEACHER (state, data) {
      this.state.teaderchData = data
    }
  }
})
export default store
