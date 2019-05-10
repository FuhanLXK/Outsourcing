<template>
  <div>
      <div class="user_reactp_box">
      <!-- <img src="" alt=""> -->
      </div>
      <div class="border_ui_box">
          <div class="user_name_input">
              <label for="">用户名：</label>
              <input type="text" v-model="username" />
          </div>
          <div class="user_name_input">
              <label for="">密码：</label>
              <input type="password" v-model="userpassword"/>
          </div>
      </div>
      <button href="" class="a_butonn_ds" @click="userLoginAdmin">立即登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      userpassword: null
    }
  },

  components: {},

  methods: {
    userLoginAdmin () {
      let _this = this
      wx.request({
        url: 'http://mp.todojs.cn/api/user/login',
        data: {
          account: _this.username,
          password: _this.userpassword
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (res.data.code === 1) {
            wx.switchTab({
              url: '../index/main',
              success: function () {
                wx.showToast({
                  title: res.data.msg,
                  icon: 'success',
                  duration: 2000
                })
              }
            })
            console.log(res)
          } else {
            console.log(res)
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  },

  created () {}
}
</script>

<style scoped>
.a_butonn_ds{
  color:#FFF;
  margin: 0 auto;
  width: 265rpx;
  text-align: center;
  background-color: rgb(255, 186, 86);
  border-radius: 20rpx;
  position: relative;
  top:350rpx;
}
.border_ui_box{
  width: 70%;
  margin: 0 auto;
}
.user_name_input>label{
  width:150rpx;
}
.user_name_input>input{
  border-bottom:1px solid #f5f5f5;
  height: 60rpx;
}
.user_name_input{
  margin-top: 40rpx;
  position:relative;
  top:230rpx;
}
.user_reactp_box{
  border-radius: 200rpx;
  width: 160rpx;
  height: 160rpx;
  margin: 0 auto;
  background-color: #f5f5f5;
  position: relative;
  top:160rpx;
}
</style>
