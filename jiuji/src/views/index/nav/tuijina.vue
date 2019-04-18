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
  <!-- 为你优选 -->
  <div class="headline"> <img src="../../../img/title1.jpg.webp" alt=""></div>
  <div class="youxuan">
    <div class="youxuan-box">
      <div class="youxuan-box-item">
       <img src="../../../img/title1.jpg.webp" alt="" class="youxuan-img">
        <p class="youxuan-zhonglei">触宝 苹果iPhone 6/6s 2.5D钢化膜</p>
        <p class="youxuan-jieshao">高清高透 防刮耐磨</p>
        <p class="youxuan-price">￥5080.00</p>
      </div>
    </div>
  </div>
  <!-- 手机精品 -->
  <div class="headline"><img src="../../../img/title2.webp" alt=""></div>
  <div class="line-img">
    <div class="link-img-item">
      <a href="###"> <img src="../../../img/linkimg1.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg1.png.webp" alt=""></a>
    </div>
    <div class="link-img-item">
      <a href="###"> <img src="../../../img/linkimg4.jpg.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg5.jpg.webp" alt=""></a>
    </div>
    <div class="link-img-item link-img-item3" style="height:125px">
      <a href="###"> <img src="../../../img/linkimg6.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg7.jpg.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg8.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg9.png.webp" alt=""></a>
    </div>
  </div>
  <!-- 办公专家 -->
  <div class="headline"><img src="../../../img/title3.webp" alt=""></div>
  <div class="line-img">
    <div class="link-img-item">
      <a href="###"> <img src="../../../img/linkimg1.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg1.png.webp" alt=""></a>
    </div>
    <div class="link-img-item">
      <a href="###"> <img src="../../../img/linkimg4.jpg.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg5.jpg.webp" alt=""></a>
    </div>
  </div>
    <!-- 智能生活 -->
  <div class="headline"><img src="../../../img/title4.webp" alt=""></div>
  <div class="line-img">
    <div class="link-img-item">
     <div class="items">
       <a href=""> <img src="../../../img/linkimg2.png.webp" alt=""></a>
       <a href=""> <img src="../../../img/linkimg3.png.webp" alt=""></a>
     </div>
       <a href="###"> <img src="../../../img/linkimg1.png.webp" alt=""></a>
    </div>
    <div class="link-img-item link-img-item3" style="height:62.5px">
      <a href="###"> <img src="../../../img/linkimg6.png.webp" alt=""></a>
      <a href="###"> <img src="../../../img/linkimg7.jpg.webp" alt=""></a>
    </div>
  </div>
  <!-- 发现好货 -->
  <div class="headline"><img src="../../../img/title5.webp" alt=""></div>
  <div class="discover">
    <div class="discover-item">
      <img src="../../../img/fx4.jpg" alt="" class="discover-item-img">
      <p class="title1">专属打造 超长续航</p>
      <p class="title2">华为畅享9e 全网通版121211111111111111</p>
      <p class="price">￥719.00</p>
    </div>
    <div class="discover-item"></div>
    <div class="discover-item"></div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        // 轮播图图片
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
  // 所有图片标题共用样式标题 headline
  .headline{
    height: 44px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  // 左右产品展示
  .youxuan{
    width: 100%;
    height: 200px;
    padding: 15px;
    overflow-x: auto;
    overflow-y: hidden;
    .youxuan-box{
      height: 200px;
      .youxuan-box-item{
          width: 140px;
          height: 200px;
          margin-right: 10px;
          padding: 10px;
          box-shadow: 0 0 10px #e1e1e1;
          border-radius: 3px;
          box-sizing: border-box;
      }
    }
  }
  .youxuan-img{
    display: block;
    width: 100%;
    height: 120px;
  }
  .youxuan-zhonglei{
    margin-top: 3px;
    width: 100%;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #333;
  }
  .youxuan-jieshao{
     margin-top: 3px;
    width: 100%;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #9c9c9c;
  }
  .youxuan-price{
    height: 14px;
    font-size: 12px;
    color: #f21c1c;
  }
  .discover{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-content:center;
     padding: 0 12px;
    .discover-item{
      width: 168px;
      height: 246px;
      background: #fff;
      margin-top: 10px;
      padding-bottom: 10px;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
      border-radius: 3px;
      .discover-item-img{
        display: block;
        height:150px;
        width: 150px;
        margin: 10px auto;
      }
      .title1{
        background: #ebf6fe;
        color: #87acd8;
        padding: 5px 15px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
      }
      .title2{
        font-size: 13px;
        color: #333;
        padding: 5px 15px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price{
        color: #f21c1c;
        font-size: 15px;
        padding: 5px 15px;
      }
    }
  }

}
</style>