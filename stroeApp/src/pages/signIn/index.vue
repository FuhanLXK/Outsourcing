<template>
  <div>
      <div class='signInClass_Box'>
          <div class="signInClass_odiv">
              <p v-if="userSing">签到</p>
              <p v-else>已签到</p>
          </div>
          <div class="btn">
             <button @click="SignButon" open-type="getUserInfo" bindgetuserinfo>发起新的签到</button>
          </div>
      </div>
  </div>
</template>

<script>
import { $http } from '@/utils/index'
import store from '@/store.js'

export default {
  data () {
    return {
      userSing: true
    }
  },

  components: {},

  methods: {
    SignButon () {
      console.log(store.state.userData.token)
      wx.request({
        url: $http() + '/api/rank/dosign',
        data: {
          token: store.state.userData.token
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res)
          if (res.data.code === 1) {
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
      this.userSing = false
    }
  },
  mounted () {},
  onShow () {
    let _this = this
    wx.request({
      url: $http() + '/api/rank/dosign',
      data: {
        token: store.state.userData.token
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        if (res.data.code === 1) {
          _this.userSing = false
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        } else {
          _this.userSing = false
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
.btn>button{
  color:#FFF;
  border:2px solid #FFF;
  background-color: #ffba56;
}
.btn{
  position: absolute;
  top:480rpx;
}
.signInClass_Box{
  width: 100%;
  height: 610rpx;
  background-color: #ffba56;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signInClass_odiv{
  font-size: 52rpx;
  color:#ffba56;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260rpx;
  height: 260rpx;
  background-color: #FFF;
  border-radius: 260rpx;
  box-shadow: 0.5px 0px 15px 5px #FFF;
}
</style>
