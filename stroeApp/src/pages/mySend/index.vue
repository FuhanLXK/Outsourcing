<template>
  <div class="mySend">
    <ul class="ul_box_div">
      <li v-for="(item ,index) in teachrData" :index="index" :key="index" @click="deTilsEvent(index)">
        <div class="display_box">
          <title>{{item.title}}</title>
          <div class="width_box" @click="ActionEvent(index)">
            <img src="/static/images/gengduo.png" alt="">
          </div>
        </div>
        <p>{{item.desc}}</p>
        <div>
            <p>{{item.content}}</p>
        </div>
      </li>
    </ul>
    <div class="user_bottom_top">
        <p>立即注册，跟读老师成就自己未来明天</p>
        <div class="font_odiv_const">
            <p @click="loginsEvent">登录</p>
            <p @click="logutEvent">注册</p>
        </div>
    </div>
      <!-- <button open-type="share" @click="onShareAppMessage">分享</button> -->
  </div>
</template>

<script>
import { $http } from '@/utils/index'
import store from '@/store.js'

export default {
  data () {
    return {
      teachrData: ''
    }
  },

  components: {},
  methods: {
    ActionEvent (index) {
      let _this = this
      // console.log(index)
      wx.showActionSheet({
        itemList: ['编辑资料'],
        success (res) {
          store.commit('GET_USERDATATEACHER', _this.teachrData[index])
          wx.navigateTo({
            url: '../sendOut/main'
          })
          console.log(store.state.teaderchData.content)
        },
        fail (res) {
          console.log(res.errMsg)
        }
      })
    },
    dataUserTeacrh () {
      let _this = this
      wx.request({
        url: $http() + '/api/doc/list',
        data: {
          teacher_id: store.state.userData.user_id
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res)
          _this.teachrData = res.data.data
          console.log(_this.teachrData)
        }
      })
    },
    deTilsEvent (index) {
      let _this = this
      store.commit('GET_USERDATATEACHER', _this.teachrData[index])
      wx.navigateTo({
        url: '../deTails/main'
      })
    },
    loginsEvent () {
      wx.navigateTo({
        url: '../login/main'
      })
    },
    logutEvent () {
      wx.navigateTo({
        url: '../login/main'
      })
    }
  },
  onShareAppMessage () {
    return {
      title: '参与名师课堂，下个明日之星就是你',
      path: 'pages/mySend/main?data=' + store.state.userData.user_id,
      success: (res) => {
        console.log(res, '111')
      },
      fail: function (res) {
      }
    }
  },
  mounted () {
    this.dataUserTeacrh()
  },
  onShow () {
    wx.showShareMenu({
      withShareTicket: true
    })
    this.dataUserTeacrh()
  },
  computed: {},
  watch: {},
  onLoad (opt) {
    console.log(opt.data)
  }
}
</script>

<style scoped>
.font_odiv_const{
  width: 130rpx;
  font-size: 28rpx;
  display: flex;
  justify-content: space-between;
  position: relative;
  top:14rpx;
}
.user_bottom_top>p{
  font-size: 30rpx;
  padding: 15rpx 35rpx;
}
.user_bottom_top{
  display: flex;
  width: 100%;
  background-color: #FFF;
  position:absolute;
  bottom: 0;
}
.width_box>img{
  width: 100%;
  height: 45rpx;
}
.width_box{
  width: 40rpx;
  height: 45rpx;
}
.display_box{
  display: flex;
  justify-content: space-between;
}
.ul_box_div{
  width: 100%;
  padding-top: 35rpx;
  padding-bottom: 35rpx;
}
.ul_box_div>li>p{
  font-size: 28rpx;
  color:#666;
  margin-top: 15rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ul_box_div>li>div{
  overflow: hidden;
  text-overflow: ellipsis;
}
.ul_box_div>li>div>p{
  font-size: 28rpx;
  margin-top: 15rpx;
  line-height: 45rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:4;
  -webkit-box-orient: vertical;
}
.ul_box_div>li>div>title{
  font-size: 35rpx;
  margin-top: 20rpx;
}
.ul_box_div>li{
  padding: 20rpx;
  width: 690rpx;
  height: auto;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 15rpx;
  margin-bottom: 25rpx;
}
.mySend{
  width: 100%;
  height: 1449rpx;
  overflow: scroll;
  background-color: rgb(255, 186, 86);
}
</style>
