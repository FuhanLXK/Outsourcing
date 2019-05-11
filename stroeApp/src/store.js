import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    statuse: true,
    userData: ''
  },
  mutations: {
    GET_LOGIN (state, status) {
      this.state.statuse = status
    },
    GET_LOGINUSERDATA (state, data) {
      this.state.userData = data
      // console.log(this.state.userData, '用户数据')
    }
  }
})
export default store
