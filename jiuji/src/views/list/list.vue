<template>
  <div>
    <van-search
      v-model="value"
      placeholder="iphone xs Max"
      shape="round"
      @search="onSearch"
      @cancel="onCancel"
    ></van-search>
    <div>
      <i slot="icon" class="icon icon-tubiaozhizuo-"></i>
    </div>
    <div>
      <span class="icon iconfont icon-gengduo1"></span>
    </div>
    <div>
      <div class="main_l">
        <p>手机配件
        </p>
      </div>
      <div class="main_r">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 0
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  },
  watch: {
    active(index) {}
  }

};

</script>

<style lang="scss">
.van-search {
  padding: 15px 10px;
  color: #ccc;
  .van-search__content {
    margin-left: 30px;
    margin-right: 40px;
    background: #f5f5f5;
    .van-cell {
      font-size: 14px;
      font-weight: 600;
      color: #009 !important;
    }
  }
}

.icon-tubiaozhizuo- {
  position: absolute;
  left: 10px;
  top: 13px;
}
.icon-gengduo1 {
  position: absolute;
  right: 15px;
  top: 13px;
}

.van-tabbar {
  height: 55px;
  border: 0px;
}

.main_l {
  float: left;
  background: #ccc;
  p {
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0;
  }
  p.red {
      color: red;
      background: #fff;
    }
}

</style>
