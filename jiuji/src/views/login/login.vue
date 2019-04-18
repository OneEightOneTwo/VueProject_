<template>
 <div class="jiujiu">   
   <!-- 头部 -->
   <div class="header">
      <div class="header-title ">
          <div class="header-l">
            <a href="">
              <i class="icon icon-tubiaozhizuo-"></i>
              <!-- <span class=""></span> -->
            </a>  
          </div>       
          <div class="header-r ">
            <i class="icon icon-shezhi set"></i><span>设置</span>
          </div>
     </div>
     <div class="header_bottom"></div>
   </div>
   <!-- 登陆和注册 -->
    <div class="r_and_l">
        <div class="reg-top">
          <a href="javascript:;" class="account-img" ><img src="../../assets/usericon.png" alt=""></a>
          <div class="register">
            <a href="javascript:;" @click="routeTo('/register')">登录</a><span>|</span><a href="javascript:;">注册</a>  
          </div>
        </div>
        <div class="reg-bottom">
          <a href="">
            <p>0</p>
            <p>账户余额</p>
          </a>
          <a href="">
            <p>0</p>
            <p>优惠卷</p>
          </a>
          <a href="">
            <p>0</p>
            <p>积分</p>
          </a>
          <a href="">
            <p>0</p>
            <p>九机币</p>
          </a>
        </div>
    </div>
    <div class="box"></div>
   <!-- message -->
   <div class="menu">
        <!-- 我的订单 -->
        <div class="menu-box">
            <div class="menu-title cleafix">
              <h4>我的订单</h4>
              <a href="JavaScript:;">全部订单 <i class="icon icon-icon-arrow-right2"></i></a>
            </div>
            <div class="menu_content">
              <a href=""><img src="../../assets/shop_refuse.png" alt=""><span>代付款</span></a>
              <a href=""><img src="../../assets/shop_car.png" alt=""><span>待收货</span></a>
              <a href=""><img src="../../assets/shop_receive.png" alt=""><span>待评价</span></a>
              <a href=""><img src="../../assets/shop_comment.png" alt=""><span>维修订单</span></a>
            </div>
        </div>
        <!-- 我的信息 -->
        <div class="menu-box">
            <div class="menu-title">
              <h4>我的信息</h4>
            </div>
            <div class="menu_content">
              <a href=""><img src="../../assets/my_activity.png" alt=""><span>我的活动</span></a>
              <a href=""><img src="../../assets/my_shop.png" alt=""><span>收藏商品</span></a>
              <a href=""><img src="../../assets/my_foot.png" alt=""><span>浏览记录</span></a>
              <a href=""><img src="../../assets/my_card.png" alt=""><span>电子保修卡</span></a>
            </div>
        </div>
        <!-- 常用功能 -->
        <div class="menu-box">
            <div class="menu-title">
              <h4>常用功能</h4>
              <a href="JavaScript:;">更多功能<i class="icon icon-icon-arrow-right2"></i></a>
            </div>
            <div class="menu_content">
              <a href=""><img src="../../assets/f_coupon.png" alt=""><span>领卷中心</span></a>
              <a href=""><img src="../../assets/f_julebu.png" alt=""><span>会员俱乐部</span></a>
              <a href=""><img src="../../assets/f_page.png" alt=""><span>发票管理</span></a>
              <a href=""><img src="../../assets/f_protect.png" alt=""><span>保修政策</span></a>
            </div>
        </div>
        <!-- 联系我们 -->
        <div class="menu-box">
            <div class="menu-title">
              <h4>联系我们</h4>
            </div>
            <div class="menu_content">
              <a href=""><img src="../../assets/ct_complaint.png" alt=""><span>我的投诉</span></a>
              <a href=""><img src="../../assets/ct_seek.png" alt=""><span>我的咨询</span></a>
              <a href=""><img src="../../assets/ct_contact.png" alt=""><span>联系客服</span></a>
              <a href=""><img src="../../assets/ct_help.png" alt=""><span>帮助中心</span></a>
            </div>
        </div>
       
     

    </div>
   
 </div>
</template>
<style lang="scss">
.clearfix {
  clear: both;
}
.jiujiu {
  position: relative;
  .header {
    background: url(../../assets/accountTop.jpg);
    // height: 80px;

    .header-title {
      height: 44px;
      color: white;
      line-height: 44px;
      height: 44px;
      // position: fixed;
      .header-l {
        float: left;
        height: 44px;
        
        a{
          display: block;
          height: 44px;
          width: 44px;
          text-align: center;
          i{
            display: block;
            font-size: 20px;
            height: 44px;
            width: 44px;
            color: #fff;
          }
        }
      }
      .header-r {
        float: right;
        .set {
          font-size: 16px;
          margin: 0 5px;
          float: right;
        }
        span {
          font-size: 15px;
        }
      }
    }
    .header_bottom {
        height: 55px;
      }
  }
  //下面的注册登陆
  .r_and_l {
    position: absolute;
    width: 347px;
    top: 50px;
    box-sizing: border-box;
    margin: 10px 14px;
    background: rgb(255, 252, 252);
    box-shadow: 2px blur;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.08);
    .reg-top {
      height: 76px;
      padding: 20px;
      .account-img {
        float: left;
        width: 64px;
        height: 64px;
        // background: #000000;
        border-radius: 32px;
        line-height: 64px;
        text-align: center;
        border: 2px solid #e8e7e5;
        // box-shadow: 5px 5px 5px #888888;

        img {
          width: 60px;
          height: 60px;
          line-height: 60px;
          border-radius: 50%;
          border: 1px solid #fff;
          box-sizing: border-box;
          margin-top: 2px;
        }
      }
      .register {
        float: left;
        height: 66px;
        line-height: 66px;
        vertical-align: center;
        margin-left: 10px;
        a {
          color: #333;
          padding: 5px;
        }
      }
    }
    .reg-bottom {
      padding-bottom: 15px;
      a {
        display: inline-block;
        width: 25%;
        text-align: center;
        color: #333;
        font-size: 13px;
        p {
          margin: 0px;
          margin-top: 8px;
        }
      }
    }
  }
  .box{
    height: 150px;
  }
  .menu{
    .menu-box{
      margin: 14px 15px;
      box-sizing: border-box;
      .menu-title{
        height: 30px;
        line-height: 29px;
        h4{
          font-size: 16px;
          width: 64px;
          margin: 0px;
          float: left;
        }
        a{
          font-size: 12px;
          float: right;
          color:#9c9c9c;
          i{
            font-size: 12px;
          }
          }
      }
      .menu_content{
        width: 100%;
        a{
          width: 25%;
          height: 80px;
          display: inline-block;
          text-align: center;
          img{
            width: 24px;
            height: 24px;
            // margin-bottom: 8px;
          }
          span{
            display: block;
            font-size: 13px;
            color: #333;
          }
        }
      }
    }
  }
 
}
</style>
