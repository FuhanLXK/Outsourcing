<template>
  <div>
      <div class="user_reactp_box">
      <!-- <img src="" alt=""> -->
      </div>
      <div class="border_ui_box">
          <div class="user_name_input">
              <label for="">账号：</label>
              <input type="text" v-model="userName" />
          </div>
          <div class="user_name_input">
              <label for="">姓名：</label>
              <input type="text" v-model="name" />
          </div>
          <div class="user_name_input">
              <label for="">职位：</label>
              <input type="text" v-model="jobs" />
          </div>
          <div class="user_name_input">
              <label for="">密码：</label>
              <input type="password" v-model="userPassword"/>
          </div>
          <div class="user_name_input">
              <label for="">确认密码：</label>
              <input type="password" v-model="kendsPassword"/>
          </div>
          <div class="user_tree_select">
              <div>
                <input style="text-align:right" type="text" v-model="province">
                <label for="">省</label>
              </div>
              <div>
                <input style="text-align:right" type="text" v-model="city">
                <label for="">市</label>
              </div>
              <div>
                <input style="text-align:right" type="text" v-model="district">
                <label for="">区</label>
              </div>
          </div>
          <div class="user_name_input">
              <label for="">机构名称：</label>
              <input type="" v-model="organization"/>
          </div>
          <div class="user_name_input">
              <label for="">邮箱：</label>
              <input type="" v-model="emilNumber"/>
          </div>
          <div class="user_name_input">
              <label for="">固定电话：</label>
              <input type="" v-model="phone"/>
          </div>
          <div class="user_name_input">
              <label for="">QQ账号：</label>
              <input type="" v-model="qqName"/>
          </div>
          <div class="user_name_input">
              <label for="">网址：</label>
              <input type="" v-model="httpNumber"/>
          </div>
          <div class="user_name_input">
              <label for="">公众号：</label>
              <input type="" v-model="wxNamnger"/>
          </div>
          <div class="user_name_input">
              <label for="">备注：</label>
              <input type="" v-model="textEresn"/>
          </div>
          <div class="user_name_input">
              <label for="">手机号：</label>
              <input type="" v-model="iphone"/>
          </div>
      </div>
      <button href="" class="a_butonn_ds" @click="userLoginAdmin">立即注册</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: null, /* 账号 */
      jobs: null, /* 职位 */
      name: null, /* 姓名 */
      userPassword: null, /* 密码 */
      kendsPassword: null, /* 确认密码 */
      province: null, /* 省 */
      city: null, /* 市 */
      district: null, /* 区 */
      organization: null, /* 机构 */
      emilNumber: null, /* 邮箱 */
      phone: null, /* 固定电话 */
      qqName: null, /* QQ账号 */
      httpNumber: null, /* 网址 */
      wxNamnger: null, /* 公众号 */
      textEresn: null, /* 备注 */
      iphone: null /* 手机号 */
    }
  },

  components: {},

  methods: {
    userLoginAdmin () {
      let _this = this
      wx.request({
        url: 'http://mp.todojs.cn/api/user/register',
        data: {
          username: _this.userName,
          name: _this.name,
          password: _this.userPassword,
          email: _this.emilNumber,
          mobile: _this.iphone,
          // wxid: _this.userpassword,
          // bio: _this.userpassword,
          province: _this.province,
          city: _this.city,
          area: _this.area,
          company: _this.organization,
          jobs: _this.jobs,
          qq: _this.qqName,
          url: _this.httpNumber,
          public: _this.wxNamnger,
          // qrcode: _this.userpassword,
          bio: _this.textEresn
          // teacher_id: _this.userpassword,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
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
          }
          // success: function () {
          //       wx.showToast({
          //         title: res.data.msg,
          //         icon: 'success',
          //         duration: 2000
          //       })
          //     }
          console.log(res)
          // if (res.data.code === 1) {
          //   wx.showToast({
          //     title: '登录成功',
          //     icon: 'success',
          //     duration: 2000
          //   })
          //   setTimeout(() => {
          //     wx.switchTab({
          //       url: '../index/main'
          //     })
          //   }, 2000)
          //   console.log(res)
          // }
        }
      })
    }
  },

  created () {}
}
</script>

<style scoped>
.user_tree_select>div{
  display: flex;
}
.user_tree_select>div>input{
  border-bottom: 1px solid #f5f5f5;
}
.user_tree_select{
  margin-top: 65rpx;
  position:relative;
  top:220rpx;
  display: flex;
}
.a_butonn_ds{
  color:#FFF;
  margin: 0 auto;
  width: 265rpx;
  text-align: center;
  background-color: rgb(255, 186, 86);
  border-radius: 20rpx;
  position: relative;
  top:320rpx;
  margin-bottom: 50rpx;
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
