<template>
  <div>   
    <div class="user_reactp_box">
      <!-- <img src="" alt=""> -->
    </div>
    
    <div class="user_title_box">
      <p>您还没登陆哦！</p>
      <p>快去登陆让老师带领你走进学习的海洋吧！</p>
    </div>
    
    <div class="user_btn_box">
      <a href="/pages/login/main">学生登录</a>
      <a href="/pages/register/main">老师注册</a>
    </div>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  components: {},

  methods: {},

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.user_btn_box>a{
  margin: 0 auto;
  background-color:rgb(255, 186, 86);
  color:#FFF;
  padding: 20rpx 40rpx;
  border-radius: 20rpx; 
}
.user_btn_box{
  justify-content: space-between;
  width: 100%;
  display: flex;
  margin-top: 60rpx;
}
.user_title_box{
  text-align: center;
  font-size: 35rpx;
  line-height: 70rpx;
  margin-top: 200rpx;
  margin-left: 40rpx;
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
