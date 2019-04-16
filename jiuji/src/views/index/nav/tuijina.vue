<template>
<div class="tuijian">
  <!-- 轮播图 -->
  <div class="banner">
    <van-swipe :autoplay="3000" :width="345" :height="173">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image">
      </van-swipe-item>
    </van-swipe>
  </div>
  <!-- 口碑 -->
  <div class="koubei"><img src="../../../img/koubei.png.webp" alt=""></div>
  <!-- nav -->
  <div class="navs">
    <a href=""><img src="../../../img/nav1.png.webp" alt=""></a>
    <a href=""><img src="../../../img/nav2.png.webp" alt=""></a>
    <a href=""><img src="../../../img/nav3.png.webp" alt=""></a>
    <a href=""><img src="../../../img/nav4.png.webp" alt=""></a>
  </div>
  <!-- 定时器 -->
  <div class="times">
    <div class="grey-space"></div>
    <div class="times-botton">
      <div class="fl dingshi"></div>
      <div class="fl time-banner">
        <div class="time-banner-content">
          <a href="" class="fl"><div class="banner-item">
            <p class="title">iPhone XR全网通版【白色 64GB 】</p>
            <p class="price">￥5080.00</p>
            <p class="lines">超视网膜显示屏</p>
            <img src="../../../img/nav4.png.webp" alt="">
            </div></a>
          <a href="" class="fl"><div class="banner-item"></div></a>
          <a href="" class="fl"><div class="banner-item"></div></a>
          <a href="" class="fl"><div class="banner-item"></div></a>
        </div>
      </div>
    </div>
  </div>
<!-- 跑马灯 -->
<div class="paomadeng">
  <img src="../../../img/news.png" alt="" class="toutiao" :width: 253px :height: 34px>
  <div class="child-grow">
    <van-swipe :autoplay="3000" vertical>
    <van-swipe-item>112</van-swipe-item>
    <van-swipe-item>212212</van-swipe-item>
    <van-swipe-item>321</van-swipe-item>
    <van-swipe-item>41221</van-swipe-item>
    </van-swipe>
  </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        require('../../../img/banner1.jpg.webp'),
        require('../../../img/banner2.jpg.webp')
      ]
    }
  }
}
</script>

<style lang="scss">
.tuijian{
  // 轮播图样式
  .banner{
    height: 173px;
     background: linear-gradient(#e10f02,#e10f02 70%,#fff 0,#fff);
     padding: 10px 0px;
     .van-swipe{
       width: 345px;
       height: 173px;
       overflow: hidden;
       margin: auto;
       img{
        width: 345px;
       height: 173px;
       border-radius: 8px;
       }
     }
  }
  // 口碑
  .koubei{
    height: 24px;
    img{
      width: 100%;
      height: 24px;
    }
  }
  // 导航
  .navs{
    overflow: hidden;
    height: 75px;
    display:flex;
    justify-content:space-around;
    a{
      width: 75px;
      height: 75px;
      img{
        width: 75px;
        height: 75px;
      }
    }
  }
  // 定时器
  .times{
    .grey-space{
      height: 10px;
      background-color: #f5f5f5;
    }
    .times-botton{
      margin: 15px;
      height: 140px;
      box-shadow: 0 0 10px #e1e1e1;
      border-radius: 5px;
      .dingshi{
        width:92px;
        height:140px;
        background: url(../../../img/time.png)no-repeat;
        background-size: 100%;
      }
      .time-banner{
          overflow-x: auto;
          overflow-y: hidden;
          background: #fff;
          padding: 0 5px;
          border-radius: 0 5px 5px 0;
          line-height: 20px;
          height: 140px;
          width: 203px;
           .time-banner-content{
             width:3200px;
             height: 100%;
             background: #fff;
             a{
               height: 100%;
               .banner-item{
                 width: 100px;
                //  height: 100%;
                  padding: 4px 5px;
                  // background: olive;
                  .title{
                    height: 17px;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    container: banner;
                  }
                  .price{
                    height: 20px;
                    color: #f21c1c;
                    font-size: 16px;
                    text-align: center;
                    line-height: 20px;
                  }
                  .lines{
                    font-size: 12px;
                    height: 16px;
                    color: #9c9c9c;
                    text-align: center;
                    line-height: 16px;
                  }
                  img{
                    display: block;
                    width: 70px;
                    height: 70px;
                    margin: 0px auto;
                  }
               }
             }
           }

      }
    }
  }
  .paomadeng{
    height: 34px;
    margin: .4rem;
    background: #fde9e9;
    border-radius: 50px;
    overflow: hidden;
    .toutiao{
      float: left;
      width: 68px;
      height: 16px;
      margin: 10px 12px;
    }
     .child-grow{
        float: right;
        width: 253px;
        height: 34px;
        background: #e10f02;
      }
  }
}
</style>
