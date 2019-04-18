<template>
  <div>
    <router-view/>
    <div class="home">
      <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item>
        <span>首页</span>
        <i slot="icon" class="icon icon-shouye1"></i>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>分类</span>
        <i slot="icon" class="icon icon-fenlei3"></i>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>消息</span>
        <i slot="icon" class="icon icon-xiaoxi"></i>
      </van-tabbar-item>
      <van-tabbar-item info="5">
        <span>购物车</span>
        <i slot="icon" class="icon icon-gouwuchekong"></i>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <i slot="icon" class="icon icon-iconfuzhi"></i>
      </van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  watch: {
    active (index) {
      switch (index) {
        case 0:
          this.$router.push({ path: '/' })
          break
        case 1:
          this.$router.push('list')
          break
        case 2:
          this.$router.push('message')
          break
        case 3:
          this.$router.push('shopping')
          break
        case 4:
          this.$router.push('login')
          break
      }
    }
  }
}
</script>

<style lang="scss">
.van-tabbar{
  height: 55px;
  border: 0px;
}
</style>
