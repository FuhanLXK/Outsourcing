<template>
  <div class="background_color">
      <div class="title_box_div">
          <p>资料题目：{{userDaueTeader.title}}</p>
      </div>
      <div class="title_box_div">
          <p>资料详情：{{userDaueTeader.desc}}</p>
      </div>
      <div class="title_box_div height_two">
          <p>资料内容：{{userDaueTeader.content}}。</p>
      </div>
      <div class="detlist_box_div">
        <p>
          <span>学生作答：</span>
        </p>
      </div>
  </div>
</template>

<script>
// import { $http } from '@/utils/index'
import store from '@/store.js'

export default {
  data () {
    return {
      userDaueTeader: null
    }
  },

  components: {},
  onShow () {
    this.userDaueTeader = store.state.teaderchData
  },
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style scoped>
.detlist_box_div>p>span{
  margin-left: 25rpx;
}
.detlist_box_div>p{
  width:100%;
  font-size: 35rpx;
  color:#666;
  padding-bottom: 25rpx;
  border-bottom: 1px solid #f5f5f5;
}
.detlist_box_div{
  position: relative;
  padding: 20rpx 0rpx;
  width: 680rpx;
  margin: 0 auto;
  height: 600rpx;
  border-radius: 15rpx;
  background-color: #FFF;
}
.height_two{
  line-height: 60rpx;
  height: 750rpx;
  overflow:scroll;
   /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:4;
  -webkit-box-orient: vertical; */
}
.background_color{
  padding-top: 20rpx;
  width: 100%;
  overflow: scroll;
  height: 1449rpx;
  background-color: rgb(255, 186, 86);
}
.title_box_div{
  font-size: 35rpx;
  width: 630rpx;
  padding: 20rpx 35rpx;
  border-radius: 20rpx;
  margin: 0 auto;
  color:#666;
  margin-bottom: 25rpx;
  background-color: #FFF;
}
</style>
