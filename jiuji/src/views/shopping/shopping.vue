<template>
  <div id="shopping">
    <div class="header">
      <div class="navbar">
        <van-nav-bar
          title="购物车"
          right-text="编辑"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>
      <div class="shopping-number">
        <h2>购物车</h2>
        <p class="number">共有0件商品</p>
        <div class="login">
          <i class="icon icon-tousu"></i>
          <span> 登录后可同步电脑与手机购物车中的商品</span>
          <a href="###">登陆</a>
        </div>
      </div>
    </div>
    <!-- 购物车空提示 -->
    <div class="kong">
      <p class="kong-icon"> <span class="icon icon-gouwuchekong"></span> </p>
      <p class="kong-title1">购物车什么都没有,快去买点什么吧~</p>
      <p class="kong-title2"><a href="###">去逛逛</a></p>
    </div>
    <!-- 热卖推荐 -->
    <div class="rmtj">
      <div class="title-img"><img src="../../img/121212.png" alt=""></div>
      <div class="rmtj-item-box">
        <div class="rmtj-item">
        <img src="../../img/fx4.jpg" alt="" class="discover-item-img">
        <p class="title1">专属打造 超长续航</p>
        <p class="title2">华为畅享9e 全网通版121211111111111111</p>
        <p class="price">￥719.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      alert('1212')
    },
    onClickRight () {
    }
  }
}
</script>

<style lang="scss">
  /* 头部nav */
  .header{
    margin-bottom: 20px;
  }
  .van-nav-bar{
    background: url(../../img/2018091809059840.png) !important;
    background-size: 100%;
    color: #fff;
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0px !important;
  }
  .van-nav-bar__text{
    color: #fff !important;
  }
  .van-ellipsis{
   color: #fff !important;
  }
  /* 数量小计+未登录提示*/
  .shopping-number{
    height: 30px;
    padding: 10px 10px 30px 10px;
    background: url(../../img/2018091809059840.png);
    background-size: 100%;
    position: relative;
    h2{
      font-size: 18px;
      line-height: 20px;
      color: #fff;
    }
    p{
      line-height: 18px;
      opacity: 0.7;
      font-size: 12px;
      color: #fff;
    }
    .login{
      background: #faf2d9;
      color: #f1690b;
      height: 36px;
      margin-left: 14px;
      margin-right: 14px;
      border-radius: 4px;
      line-height: 36px;
      font-size: 12px;
      text-align: center;
      i{
        vertical-align: middle;
        font-size: 13px;
        color: #f21c1c;
      }
      span{
        color: #f1690b;
        vertical-align: middle;
      }
      a{
        display: inline-block;
        color: #fff;
        height: 20px;
        width:36px;
        border-radius: 22px;
        margin-left: 10px;
        background-color: #f21c1c;
        vertical-align: middle;
        line-height: 20px;
      }
    }
  }
  // 购物车空提示
  .kong{
    margin: 30px 14px 14px 20px;
    padding: 25px 0;
    background: #fff;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
    p{
      text-align: center;
    }
    .kong-icon{
      color: #eee;
      span{
        font-size: 48px;
      }
    }
    .kong-title1{
      color: #9c9c9c;
      font-size: 12px;
      margin: 20px 0px;
    }
    .kong-title2{
      a{
        display: inline-block;
        width: 80px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        border: 1px solid #9c9c9c;
        border-radius: 28px;
      }

    }
  }
  // 热卖推荐
  .rmtj{
    padding: 11px;
    .title-img{
      height: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
