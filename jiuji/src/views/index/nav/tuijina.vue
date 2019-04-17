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
    <img src="../../../img/news.png" alt="" class="toutiao">
    <div class="child-grow">
      <van-swipe :autoplay="3000" vertical :show-indicators="false">
      <van-swipe-item>
        <p class="paomadeng-title">华为P30系列新品发布：4000万超感光徕卡四摄！</p>
        <div class="paomadeng-img"><img src="../../../img/banner13.jpg.webp" alt=""></div>
      </van-swipe-item>
      <van-swipe-item>
        <p class="paomadeng-title">华为P30系列新品发布：4000万超感光徕卡四摄！</p>
        <div class="paomadeng-img"><img src="../../../img/banner12.jpg.webp" alt=""></div>
      </van-swipe-item>
      <van-swipe-item>
        <p class="paomadeng-title">华为P30系列新品发布：4000万超感光徕卡四摄！</p>
         <div class="paomadeng-img"><img src="../../../img/banner13.jpg.webp" alt=""></div>
      </van-swipe-item>
      <van-swipe-item>
        <p class="paomadeng-title">华为P30系列新品发布：4000万超感光徕卡四摄！</p>
        <div class="paomadeng-img"><img src="../../../img/banner12.jpg.webp" alt=""></div>
      </van-swipe-item>
      </van-swipe>
    </div>
  </div>
  <!-- 热销链接img -->
  <div class="line-img">
    <div class="link-img-item">
      <a href="###"> <img src="../../../img/linkimg1.png.webp" alt=""></a>
     <div class="items">
        <a href=""> <img src="../../../img/linkimg2.png.webp" alt=""></a>
        <a href=""> <img src="../../../img/linkimg3.png.webp" alt=""></a>
      </div>
    </div>
    <div class="link-img-item">
      <a href="###"> <img src="../../../img/linkimg4.jpg.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg5.jpg.webp" alt=""></a>
    </div>
    <div class="link-img-item link-img-item3">
      <a href="###"> <img src="../../../img/linkimg6.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg7.jpg.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg8.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg9.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/youxuan.jpg.webp" alt=""></a>
      <a href="###"> <img src="../../../img/youxuan1.jpg.webp" alt=""></a>
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
  .koubei{
    height: 24px;
    img{
      width: 100%;
      height: 24px;
    }
  }
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
        background: url(../../../img/time.png) no-repeat;
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
                  padding: 4px 5px;
                  .title{
                    height: 17px;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
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
        .van-swipe{
           height: 34px;
           .van-swipe-item{
              width: 253px;
              height: 34px;
              .paomadeng-title{
                float: left;
                width:185px;
                height: 18px;
                line-height: 18px;
                font-size: 14px;
                margin: 8px 0px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .paomadeng-img{
                float: left;
                width: 68px;
                height: 34px;
                img{
                  // width: 100%;
                  height: 100%;
                }
              }
            }
          }
      }
  }
  //链接图片
  .link-img-item{
    height: 125px;
    background:#e10f02;
    a{
      display: block;
      float: left;
      width: 50%;
      height: 125px;
      background: #ccc;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .items{
      float: left;
      width: 50%;
      height: 125px;
    }
  }
  .link-img-item3{
    height: 185.5px;
    a{
      height: 62.5px;
    }
  }
}
</style>