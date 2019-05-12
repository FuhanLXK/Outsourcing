<template>
  <div v-if="userData">   
    <div class="smone_box_user">
      <div class="user_box_odiv">

         <div class="suser_display_class">
           <div>
             <img :src="userData.avatar" alt="">
           </div>
           <p class="loginlo_btn_odiv" @click="loutginEvent">退出登录</p>
         </div>

         <div class="font_box_div">
           <h5>{{userData.username}}</h5>
           <p>手机号：{{userData.mobile}}</p>
         </div>

      </div>
      <div class="user_two_div">
        <div class="padding_silod">
          <img class="imgs_big" src="/static/images/xinxi.png" alt="">
          <p>我的消息</p>
        </div>
        <div class="padding_silod_new">
          <img class="imgs_big_new" src="/static/images/dayi.png" alt="">
          <p>我的答疑</p>
        </div>
        <div class="padding_silod_new" @click="modiFication">
          <img class="imgs_big_new" src="/static/images/ziliao.png" alt="">
          <p>我的信息</p>
        </div>
      </div>
    </div>
    <!--学生-->
    <div v-if="statusTeach" class="magrin_auto_user">
        <ul>
          <li>每日签到</li>
          <li>我的资料</li>
        </ul>
    </div>
    <!--老师-->
    <div v-else class="magrin_auto_user">
        <ul>
          <li>我的资料</li>
          <li>发资料</li>
          <li>审批学生</li>
        </ul>
    </div>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import { $http } from '@/utils/index'
import store from '@/store.js'
export default {
  data () {
    return {
      userData: null,
      statusTeach: null /* 判断是否为老师 */
    }
  },

  components: {},

  methods: {
    loutginEvent () {
      wx.request({
        url: $http() + '/api/user/logout',
        data: {
          token: this.userData.token
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res)
          if (res.data.code === 1) {
            store.commit('GET_LOGIN', true)
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
          }
        }
      })
    },
    modiFication () {
      wx.navigateTo({
        url: '../modification/main'
      })
    }
  },

  created () {
    this.modelStatus = store.state.statuse
    // let app = getApp()
  },
  onShow () {
    console.log('1')
    this.statusTeach = this.userData.type === 'student' ? 'true' : false
    console.log(this.statusTeach, '我是' + this.statusTeach)
  },
  mounted () {
    this.userData = store.state.userData
    this.statusTeach = this.userData.type === 'student' ? 'true' : false
    console.log(this.statusTeach, '我是' + this.statusTeach)
  }
}
</script>

<style scoped>
.magrin_auto_user{
  width: 670rpx;
  margin: 0 auto;
  margin-top: 60rpx;
  background-color: #FFF;
  box-shadow: 0.5px 0px 15px 5px #f5f5f5;
}
.magrin_auto_user>ul>li{
  padding: 25rpx;
  font-size: 32rpx;
}
.padding_silod_new{
  margin-top: 13rpx
}
.padding_silod{
  margin-top: 30rpx;
}
.imgs_big_new{
  width:60rpx;
  height: 60rpx;
}
.imgs_big{
  width: 40rpx;
  height: 40rpx;
}
.user_two_div>div{
  width: 33.3%;
  text-align: center;
}
.user_two_div>div>p{
  font-size:28rpx;
}
.user_two_div{
  display:flex;
}
.font_box_div{
  margin-top: 28rpx;
  position: relative;
  left:-20rpx;
}
.font_box_div>p{
  font-size: 25rpx;
}
.font_box_div>h5{
  color:#666;
  margin-bottom: 10rpx;
}
.loginlo_btn_odiv{
  padding: 5rpx;
  width: 100rpx;
  font-size: 25rpx;
  position: relative;
  top:-25rpx;
  border:1px solid #666;
  border-radius: 10rpx;
  text-align: center;
  left:80rpx;
  color:#666;
}
.suser_display_class>div>img{
  width: 100%;
  height: 100%;
}
.suser_display_class>div{
  width: 130rpx;
  overflow: hidden;
  height: 130rpx;
  border-radius: 130rpx;
  border:2px solid #ffba56;
  margin: 0 auto;
  position: relative;
  top:-50rpx;
}
.suser_display_class{
  height: 160rpx;
  width: 40%;
}
.user_box_odiv{
  display:flex;
}
.smone_box_user{
  width: 670rpx;
  height: 320rpx;
  margin: 0 auto;
  border-radius: 20rpx;
  margin-top: 60rpx;
  box-shadow: 0.5px 0px 15px 5px #f5f5f5;
}
</style>
