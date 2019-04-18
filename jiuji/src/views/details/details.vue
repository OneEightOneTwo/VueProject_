<template>
   <div class="details">
    
            <div class="header">
            <van-row>
                <van-col span="3" :style="header_l"><van-icon name="arrow-left"  :style="con"/></van-col>
                    <div :style="header" class="headerThree" >
                        <a href="javascript:;" v-for="(item,index) in comment" 
                        v-text="item.name" :start="index" :start2="startIndex" @click="check(index)" 
                        :class="{'bottom_border': startIndex == index}"></a>
                        
                        <!-- <a href="javascript:;">评论</a>
                        <a href="javascript:;">详情</a> -->
                    </div>
                    
                <van-col span="3" :style="header_r"><van-icon name="ellipsis" :style="con" /></van-col>
            </van-row>
            </div>
            <!-- 轮播图 -->
            <div class="screenPic" :style="sPricture">
              <van-swipe @change="onChange">
                <div>
                  <van-swipe-item><img src="https://img2.ch999img.com/pic/product/440x440/20190327003931245.jpg.webp" alt=""></van-swipe-item>
                  <!-- <van-swipe-item><img src="https://img2.ch999img.com/pic/product/440x440/20190327003932213.jpg.webp" alt=""></van-swipe-item>
                  <van-swipe-item><img src="https://img2.ch999img.com/pic/product/440x440/20190327003933213.jpg.webp" alt=""></van-swipe-item>
                  <van-swipe-item><img src="https://img2.ch999img.com/pic/product/440x440/20190410182904201.jpg.webp" alt=""></van-swipe-item>
                  <van-swipe-item><img src="https://img2.ch999img.com/pic/product/440x440/20190410182905167.jpg.webp" alt=""></van-swipe-item> -->
                </div>
                <div v-for="(item,index) in cell" v-text="item.name" :style="screen_three" @click="swipeTo(index)"> 
                </div>
                <div class="custom-indicator" slot="indicator" :style="screen_three" >
                    {{ current + 1 }}/5 
               </div>
              </van-swipe>
              
                <!-- <div class="custom-indicator" slot="indicator" class="photo">
                   
                  </div>
                  <div class="custom-indicator" slot="indicator" class="nowPai">
                   
                  </div> -->
            </div>
   </div>
</template>
<style lang="scss">
.headerThree {
  width: 75%;
  text-align: center;
  a {
    display: inline-block;
    text-align: center;
    width: 32px;
    height: 48px;
    margin: 0 11px;
    line-height: 48px;
  }
  .bottom_border {
    border-bottom: 2px solid #ccc;
  }
}

.screenPic {
  text-align: center;
  img {
    width: 349px;
    height: 349px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      swiperData: [{https://img2.ch999img.com/pic/product/440x440/20190327003931245.jpg.webp},
      {https://img2.ch999img.com/pic/product/440x440/20190327003932213.jpg.webp},
      {https://img2.ch999img.com/pic/product/440x440/20190327003933213.jpg.webp},
      {https://img2.ch999img.com/pic/product/440x440/20190410182904201.jpg.webp},
      {https://img2.ch999img.com/pic/product/440x440/20190410182905167.jpg.webp},
      ],
      comment: [{ name: "商品" }, { name: "评论" }, { name: "详情" }],
      //轮播图
      cell: [{ name: "视频" }, { name: "图片" }, { name: "实拍" }],
      screen_three: {
        width: "52.5px",
        height: " 22px",
        borderRadius: "28px",
        backgroundColor: "hsla(0,0%,100%,.4)",
        border: " 0.5px solid #dfdfdf",
        display: "inline-block",
        fontSize: "10px",
        lineHeight: "22px"
      },
      sPricture: {
        width: "375px",
        height: "349px",
        width: "100%"
      },
      startIndex: 0,
      current: 0,
      name: "登陆",
      header: {
        display: "inline-block"
      },
      header_l: {
        float: "left"
      },
      header_r: {
        float: "right"
      },
      con: {
        lineHeight: "48px",
        textAlign: "center",
        display: "inline-block",
        width: "46px",
        height: "48px",
        fontSize: "20px",
        fontWeight: "bold"
      },
      style: {
        fontSize: "17px",
        textAlign: "center",
        lineHeight: "44px"
      }
    };
  },
  methods: {
    // onClickDisabled(index, title) {
    //   this.$toast(title + "已被禁用");
    // },
    check(index) {
      console.log(index);
      this.startIndex = index;
      if (this.startIndex == index) {
      }
    },
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

