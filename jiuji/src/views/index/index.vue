<template>
  <div id="index">
    <div class="nav">
       <!-- 搜索栏 -->
    <van-search
      v-model="value"
      placeholder="iphone xs Max"
      shape="round"
      @search="onSearch"
      @cancel="onCancel"
    >
    </van-search>
    <!-- 导航栏 -->
    <van-tabs v-model="active" animated :swipe-threshold="5" title-active-color="#fff" title-inactive-color="#ccc" background="#e10f02" :line-width="0">
        <van-tab title="推荐">
        </van-tab>
        <van-tab title="限时购"></van-tab>
        <van-tab title="以旧换新"></van-tab>
        <van-tab title="手机快修"></van-tab>
        <van-tab title="头条"></van-tab>
    </van-tabs>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      active: 0
    }
  },
  methods: {
    onSearch () {
    },
    onCancel () {
    }
  },
  watch: {
    active (index) {
      switch (index) {
        case 0:
          this.$router.push({ path: '/' })
          break
        case 1:
          this.$router.push({ path: 'tabs1' })
          break
        case 2:
          this.$router.push({ path: 'tabs2' })
          break
        case 3:
          this.$router.push({ path: 'tabs3' })
          break
        case 4:
          this.$router.push({ path: 'tabs4' })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-search{
  padding: 15px 10px;
  background: #e10f02 !important;
  .van-search__content{
   background: rgba(0,0,0,.4);
   .van-cell{
     font-size: 14px;
     font-weight: 600;
     color: #fff !important;
   }
  }
}
</style>

<style>
  .van-hairline--top-bottom::after{
    border: none !important;
  }
</style>
