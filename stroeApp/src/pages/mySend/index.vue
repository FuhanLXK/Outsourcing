<template>
  <div class="mySend">
      <button open-type="share" @click="sssss">分享</button>
  </div>
</template>

<script>
// import { $http } from '@/utils/index'
// import store from '@/store.js'

export default {
  data () {
    return {}
  },

  components: {},

  methods: {
    onShareAppMessage () {
      return {
        title: '简直走别拐弯',
        path: '/pages/group/index' + '0123',
        success: (res) => {
          console.log(res, '111')
        },
        fail: function (res) {
        }
      }
    }
  },
  mounted () {},
  onShow () {},
  computed: {},
  watch: {}
}
</script>

<style scoped>
.mySend{
  width: 100%;
  height: 1449rpx;
  background-color: rgb(255, 186, 86);
}
</style>
