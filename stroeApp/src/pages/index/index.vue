<template>
  <div>
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item ,index) in movies" :index="index" :key="index">
              <swiper-item>
                  <image :src="item.url" class="slide-image" mode="aspectFill"/>
              </swiper-item>
          </block>
      </swiper>
      <div class="index_box_button">
          <div class="conter_box_div">
              <div>
                  <span>积分排行</span><br>
                  <span style="font-size:25rpx;">查自己战斗力吧！</span>
              </div>
              <img src="/static/images/paihang.png" alt="">
          </div>
          <div class="conter_box_div">
              <div>
                  <span>资料跟读</span><br>
                  <span style="font-size:25rpx;">名师辅导效率高！</span>
              </div>
              <img src="/static/images/shu.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      movies: [{
        url: '/static/images/timg.jpg'
      }, {
        url: '/static/images/timg.jpg'
      }, {
        url: '/static/images/timg.jpg'
      }]
    }
  },

  components: {},

  methods: {},

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.swiper{
  height: 350rpx;
}
.conter_box_div{
  height: 125rpx;
  display: block;
  padding-top: 30rpx;
  justify-content: space-between;
  padding-right: 10rpx;
}
.conter_box_div>div{
  display: block;
  width: 60%;
  font-size: 30rpx;
  padding-left: 20rpx;
}
.conter_box_div>img{
  width:80rpx;
  height: 80rpx;
}
.body_barfroud{
  background-color: #CCC;
}
.index_box_button{
  width:90%;
  justify-content:space-between;
  display: flex;
  margin: 40rpx auto;
}
.index_box_button>div{
  width: 320rpx;
  display: flex;
  background-color:#F5F5F5;
}
.slide-image{
  width: 100%;
  height: 365rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
