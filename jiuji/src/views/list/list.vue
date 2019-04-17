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
        <p>手机通讯</p>
        <p>手机配件</p>
        <p>电脑办公</p>
        <p>平板电脑</p>
        <p>路由器</p>
        <p>智能穿戴</p>
        <p>数码影音</p>
        <p>智能家居</p>
        <p>智能出行</p>
        <p>儿童专区</p>
        <p>娱乐竞技</p>
        <p>智能健康</p>
        <p>二手良品</p>
      </div>
      <div class="main_r">
        <div>
          <a href="javascript:;">
            <img alt>
          </a>
        </div>
        <div class="item">
          <div class="item_t">
            <p>
              热门品牌
              <span>排行榜</span>
            </p>
          </div>
          <div class="item_c">
            <li>
              <a href="javascript:;">
                <img src alt>
                <span>苹果</span>
              </a>
              <a href="javascript:;">
                <img src alt>
                <span>苹果</span>
              </a>
              <a href="javascript:;">
                <img src alt>
                <span>苹果</span>
              </a>
            </li>
          </div>
        </div>
        <div class="item">
          <div class="item_t">
            <p>
              更多品牌
            </p>
          </div>
          <div class="item_c">
            <li>
              <a href="javascript:;">
                <img src alt>
                <span>苹果</span>
              </a>
              <a href="javascript:;">
                <img src alt>
                <span>苹果</span>
              </a>
              <a href="javascript:;">
                <img src alt>
                <span>苹果</span>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 0,
      // Img: "../../img/phone.jpg",
      W: 448,
      H: 149
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
    color: #333;
  }
  p.red {
    color: red;
    background: #fff;
  }
}

.main_r {
  overflow: auto;
  width: 480px;
  height: 1000px;
  margin-left: 50px;
  div {
    a {
      display: block;
      width: 448px;
      margin: 10px auto 0;
      img {
        display: block;
        width: 100%;
        height: 149px;
        border-radius: 4px;
        background-image: url("../../img/phone.jpg");
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: top;
      }
    }
  }

  .item {
    margin: 15px auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
    .item_t {
      padding: 0 10px;
      p {
        height: 30px;
        line-height: 30px;
        display: block;
        span {
          float: right;
        }
      }
    }
    .item_c {
      background-color: #fff;
      a {
        width: 25%;
        margin-left: 30px;
        display: inline-block;
        img {
          width: 80%;
          max-width: 70px;
          display: block;
          margin-bottom: 5px;
          background-image: url("../../img/apple.jpg");
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          height: 70px;
        }
        span{
          width: 24px;
          height: 14px;
          line-height: 14px;
          text-align: center;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
