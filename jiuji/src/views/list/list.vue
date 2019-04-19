<template>
  <div>
    <div>
      <van-search
        placeholder="iphone xs Max"
        shape="round"
        @search="onSearch"
        @cancel="onCancel"
      ></van-search>
    <div>
      <i slot="icon" class="icon icon-tubiaozhizuo-" @click="$router.replace({path: '/'})"></i>
    </div>
    <div>
      <span class="icon iconfont icon-gengduo1"></span>
    </div>
    </div>
    <div class="main">
      <div class="main_l">
        <van-badge-group :active-key="activeKey" @change="onChange">
          <van-badge title="手机通讯"/>
          <van-badge title="手机配件"/>
          <van-badge title="电脑办公"/>
          <van-badge title="平板电脑"/>
          <van-badge title="路由器"/>
          <van-badge title="智能穿戴"/>
          <van-badge title="数码影音"/>
          <van-badge title="智能家居"/>
          <van-badge title="智能出行"/>
          <van-badge title="儿童专区"/>
          <van-badge title="娱乐竞技"/>
          <van-badge title="智能健康"/>
          <van-badge title="二手良品"/>
        </van-badge-group>
      </div>
      <div class="main_r">
        <div class="phone">
          <div class="cate-ad"><img src="../../img/201904150330220.jpg.webp" alt=""></div>
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
            <p>更多品牌</p>
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
  data () {
    return {
      active: 0,
      activeKey: 0
    }
  },
  methods: {
    onSearch () {
    },
    onCancel () {
    },
    onChange (key) {
      this.activeKey = key
    }
  }
}
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
.main {
  border-top: 1px solid #f5f5f5;
  position: relative;
}
.main_l{
  width: 97.75px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left:0;
  .van-badge{
    height:44px;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
    line-height: 44px;
  }
}
.main_r{
  padding-left: 97.75px;
  width: 100%;
  box-sizing: border-box;
  .cate-ad{
    height: 88px;
    margin: 10px;
    img{
      width:100%;
      height: 100%;
      border-radius: 4px;
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
        margin-left: 5px;
        display: inline-block;
        img {
          width: 80%;
          max-width: 70px;
          display: block;
          background-image: url("../../img/apple.jpg");
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          height: 67px;
        }
        span {
          width: 20px;
          height: 14px;
          line-height: 14px;
          text-align: center;
          font-size: 12px;
          margin-left: 20px;
        }
      }
    }
  }

</style>
