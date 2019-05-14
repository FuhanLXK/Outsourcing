<template>
  <div class="backgtound_color">
    <h1>积分排行</h1>
    <div class="userBack_color">
      <ul>
        <li v-for="(item ,index) in data" :key="index">
          <div class="display_box_div">
            <div class="user_displya_img">
              <div class="user_ovhieed">
                <img :src="item.user.avatar" alt="">
              </div>
              <div class="font_width">
                <p>{{item.user.username}}</p>
                <p>{{item.user.bio}}</p>
              </div>
            </div>

            <div class="user_box_sodiv">
              <img v-if="index === 0" src="/static/images/jiangbei.png" alt="">
            </div>
          </div>
        </li>
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
      data: null
    }
  },

  components: {},

  methods: {},
  mounted () {},
  onShow () {
    let _this = this
    wx.request({
      url: $http() + '/api/rank/rank',
      data: {
        token: store.state.userData.token
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.code.ranklist)
        _this.data = res.data.code.ranklist
      }
    })
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
.user_box_sodiv{
  width: 100rpx;
  height:100rpx;
  margin-right: 80rpx;
  margin-top: 20rpx;
}
.user_box_sodiv>img{
  width: 100%;
  height: 100%;
}
.font_width>p:nth-child(2){
  width: 100%;
  font-size: 25rpx;
  margin-top: 20rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.font_width>p{
  width: 100%;
  font-size: 35rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.font_width{
  width: 280rpx;
  margin-top: 16rpx;
  margin-left: 25rpx;
}
.user_ovhieed>img{
  width: 100%;
  height: 100%;
}
.user_ovhieed{
  width: 120rpx;
  height: 120rpx;
  border:2px solid rgb(255, 186, 86);
  border-radius: 160rpx;
  overflow: hidden;
}
.user_displya_img{
  display: flex;
}
.display_box_div{
  width: 670rpx;
  display: flex;
  justify-content: space-between;
}
.userBack_color>ul{
  width: 670rpx;
  border-radius: 25rpx;
  overflow: hidden;
}
.userBack_color>ul>li{
  width: 670rpx;
  padding: 30rpx;
  border-bottom:1px solid #F5F5F5;
}
h1{
  position: absolute;
  top:70rpx;
  font-size:55rpx;
  color:#FFF;
  left:275rpx;
}
.backgtound_color{
  height: 1449rpx;
  display: flex;
  align-items: center;
  background-color: rgb(255, 186, 86);
}
.userBack_color{
  width: 670rpx;
  height: 1100rpx;
  margin: 0 auto;
  border-radius: 25rpx;
  background-color: #FFF;
}
</style>
