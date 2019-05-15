<template>
  <div class="teachrConst">
      <div class="teacrdFont_title">
          <div class="display_box_div">
              <p>编辑标题：</p>
              <input type="text" v-model="titile" />
          </div>
          <div class="display_box_div">
              <p>课题表述：</p>
              <input type="text" v-model="desct" />
          </div>
          <div class="display_box_div_no">
              <p>资料内容：</p>
              <textarea maxlength="999999" type="text" v-model="subsBody" />
          </div>
          <div class="btn_uclass_ov">
              <button v-if='stateConst' @click="subitEventBox">发布资料</button>
              <button v-else @click="constEventBox">保存资料</button>
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
      titile: '',
      desct: '',
      subsBody: '',
      stateConst: true
    }
  },

  components: {},

  methods: {
    subitEventBox () {
      let _this = this
      console.log(store.state.userData)
      wx.request({
        url: $http() + '/api/doc/add',
        data: {
          user_id: store.state.userData.user_id,
          token: store.state.userData.token,
          title: _this.titile,
          desc: _this.desct,
          content: _this.subsBody
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res)
          if (res.data.code === 1) {
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
          }
        }
      })
    },
    constEventBox () {
      let _this = this
      console.log(store.state.userData)
      wx.request({
        url: $http() + '/api/doc/edit',
        data: {
          id: store.state.teaderchData.id,
          user_id: store.state.userData.user_id,
          token: store.state.userData.token,
          title: _this.titile,
          desc: _this.desct,
          content: _this.subsBody
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res)
          if (res.data.code === 1) {
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
          }
        }
      })
    }
  },
  mounted () {},
  onShow () {
    this.titile = store.state.teaderchData.title
    this.desct = store.state.teaderchData.desc
    this.subsBody = store.state.teaderchData.content
    console.log(store.state.teaderchData, '当前状态')
    if (store.state.teaderchData !== '') {
      this.stateConst = false
    } else {
      this.stateConst = true
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
.btn_uclass_ov>button{
  width: 200rpx;
  position: relative;
  top:100rpx;
  color:#FFF;
  background-color: rgb(255, 186, 86);
}
.teacrdFont_title{
  width: 670rpx;
  height: 1200rpx;
  background-color: #FFF;
  border-radius: 35rpx;
  margin: 0 auto;
}
.teachrConst{
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 1449.5rpx;
  background-color: rgb(255, 186, 86);
}
.display_box_div_no>p{
  font-size: 35rpx;
}
.display_box_div_no>textarea{
  border:1px solid #f5f5f5;
  border-radius: 20rpx;
  height: 650rpx;
  margin-top: 25rpx;
  overflow: scroll;
  font-size: 25rpx;
  padding: 15rpx;
}
.display_box_div_no{
  height: 650rpx;
  justify-content:cnter;
  padding: 25rpx;
  margin-top: 25rpx;
}
.display_box_div{
  display: flex;
  justify-content:center;
  padding: 25rpx;
  margin-top: 25rpx;
}
.display_box_div>p{
  font-size: 35rpx;
}
.display_box_div>input{
  width: 450rpx;
  font-size: 30rpx;
  border-bottom: 1px solid #f5f5f5;
}
</style>
