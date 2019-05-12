<template>
  <div>
      <div class="modiffcation_user">
          <span>头像</span>
          <div class="user_img_box" @click="uploadUserEvent">
              <img :src="userData.avatar" alt="">
          </div>
      </div>
      <div class="modiffcation_user">
          <span>用户名：</span>
          <input type="text" v-model="userData.username">
      </div>
      <div class="modiffcation_user">
          <span>昵称：</span>
          <input type="text" v-model="userData.nickname">
      </div>
      <div class="modiffcation_user">
          <span>个人简介：</span>
          <input type="text" v-model="userData.bio">
      </div>
      <div class="modiffcation_user">
          <span>省：</span>
          <input type="text" v-model="userData.province">
      </div>
      <div class="modiffcation_user">
          <span>市：</span>
          <input type="text" v-model="userData.city">
      </div>
      <div class="modiffcation_user">
          <span>区：</span>
          <input type="text" v-model="userData.area">
      </div>
      <div class="modiffcation_user">
          <span>机构名字：</span>
          <input type="text" v-model="userData.company">
      </div>
      <div class="modiffcation_user">
          <span>职位：</span>
          <input type="text" v-model="userData.jobs">
      </div>
      <div class="modiffcation_user">
          <span>QQ：</span>
          <input type="text" v-model="userData.qq">
      </div>
      <div class="modiffcation_user">
          <span>网址：</span>
          <input type="text" v-model="userData.url">
      </div>
      <div class="modiffcation_user">
          <span>公众号：</span>
          <input type="text" v-model="userData.public">
      </div>
      <div class="modiffcation_user">
          <span>二维码：</span>
          <input type="text" v-model="userData.qrcode">
      </div>
      <div class="modiffcation_user">
          <span>备注：</span>
          <input type="text" v-model="userData.bio">
      </div>
      <div class="btn_auto" @click="userEventUpload">
          <span>保存修改</span>
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
      userData: null
    }
  },

  components: {},

  methods: {
    uploadUserEvent () {
      let _this = this
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          console.log(res)
          _this.userData.avatar = res.tempFilePaths[0]
          wx.uploadFile({
            url: $http() + '/api/common/upload',
            filePath: res.tempFilePaths[0],
            name: 'file',
            formData: {
              token: _this.userData.token
            },
            success: function (res) {
              let data = JSON.parse(res.data)
              _this.userData.avatar = data.data.url
            }
          })
        }
      })
    },
    userEventUpload () {
      let _this = this
      wx.request({
        url: $http() + '/api/user/profile',
        data: {
          avatar: _this.userData.avatar,
          username: _this.userData.username,
          nickname: _this.userData.nickname,
          bio: _this.userData.bio,
          province: _this.userData.province,
          city: _this.userData.city,
          area: _this.userData.area,
          company: _this.userData.company,
          jobs: _this.userData.jobs,
          qq: _this.userData.qq,
          url: _this.userData.avatar,
          public: _this.userData.public,
          qrcode: _this.userData.qrcode,
          token: _this.userData.token
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          wx.switchTab({
            url: '../userConst/main',
            success: function () {
              wx.showToast({
                title: res.data.msg,
                icon: 'success',
                duration: 2000
              })
            }
          })
          store.commit('GET_LOGINUSERDATA', res.data.data.userinfo)
        }
      })
    }
  },
  mounted () {
  },
  onShow () {
    this.userData = store.state.userData

    console.log(this.userData, '数据支持')
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
.btn_auto{
  width: 190rpx;
  text-align: center;
  margin: 0 auto;
  border:1px solid #ffba56;
  padding: 20rpx 25rpx;
  border-radius: 20rpx;
  color:#FFF;
  border-radius: 50rpx;
  background-color: #ffba56;
  margin-top: 60rpx;
  margin-bottom: 30rpx;
}
.user_img_box>img{
  width: 100%;
  height: 100%;
}
.user_img_box{
  width: 160rpx;
  height: 160rpx;
  margin-right: 30rpx;
  border-radius: 160rpx;
  overflow: hidden;
}
.modiffcation_user>input{
  font-size: 30rpx;
  width: 180rpx;
  text-align: right;
  margin-right: 60rpx;
}
.modiffcation_user{
  width: 90%;
  padding: 35rpx;
  padding-left: 40rpx;
  border-bottom:1px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modiffcation_user>span{
  font-size: 35rpx;
}
</style>