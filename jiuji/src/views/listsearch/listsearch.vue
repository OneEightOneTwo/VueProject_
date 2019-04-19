 <template>
 <div class="inputsearch">
   <div>
      <van-search
        placeholder="iphone xs Max"
        shape="round"
        @search="onSearch"
        @cancel="onCancel"
        @click="sousuo"
      ></van-search>
      <div>
        <i slot="icon" class="icon icon-tubiaozhizuo- list-zuo" @click="$router.go(-1)"></i>
      </div>
      <div>
        <span class="icon iconfont icon-gengduo1 list-you"></span>
      </div>
    </div>
 <div>121212</div>
 </div>
 </template>
<script>
export default {
  methods: {
    sousuo () {
      // alert(1212)
      this.$router.push({ path: 'search' })
    }
  }
}
</script>
<style>

</style>
