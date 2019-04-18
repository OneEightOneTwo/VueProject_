<template>
    <div class="register">
        <!-- header -->
        <div class="header_reg" >
            <van-row>
            <van-col span="3" :style="con" ><i class="icon icon-tubiaozhizuo-" @click="onClickLeft"></i></van-col>
            <van-col span="18"  v-text="name" :style="style"></van-col>
            <van-col span="3" :style="con" ><i class="icon icon-gengduo2" @click="onClickRight"></i></van-col>
            </van-row>
        </div>
        <!-- 输入栏 -->
        <div class="wrapper">
            <div class="reg">
                <div class="reg_con">
                    <van-icon name="phone" />
                    <input type="text" placeholder="手机号码" v-model="phoneNum">
                </div>   
                <div class="reg_con">
                    <van-icon name="photo" />
                    <input type="text" placeholder="图片验证码" v-model="picNum">
                    <div :style="change" @click="chang_pic" >
                        <img :src="img" > 
                    </div>  
                </div> 
                <div class="reg_con">
                    <van-icon name="lock" />
                    <input type="text" placeholder="短信验证码" v-model="checkNum">
                    <input type="button" value="发送" class="btn">
                </div> 
            </div>    
        </div>
        <!-- 同意 -->
        <div class="agree">
            <span class="check"><van-checkbox v-model="checked" checked-color="red" ></van-checkbox></span>
            <span>我已阅读并同意<a href="javascript:;">《九机网用户协议》</a></span>
        </div>
        <div class="button">
            <van-button  :disabled="bool" >下一步</van-button>
        </div>
        
      
    </div>
</template>
<script>
export default {
  data() {
    return {
      phoneNum: '',
      picNum: '',
      checkNum: '',
      bool:true,
      checked: true,
      name: "用户注册",
      numSize:"10px",
      //   img: require("../../../assets/reg_1.jpg"),
      img: "",
      style: {
        fontSize: "17px",
        textAlign: "center",
        lineHeight: "44px"
      },
      con: {
        lineHeight: "44px",
        textAlign: "center"
      },
      change: {
        display: "inline-block"
      }
    };
  },
  methods: {
    onClickLeft() {
      console.log(666);
    },
    onClickRight() {
      console.log(55);
    },
    chang_pic() {
      var num = Math.random() * 1000;
      this.imgUrl(num);
      this.img =
        "https://m.9ji.com/web/api/verifyImg/v1?w=90&h=30&UUID=e2b9b6a3-0276-4675-9dc4-0e3563b54ccd&v=" +
        num;
    },
    imgUrl(num) {
      this.img =
        "https://m.9ji.com/web/api/verifyImg/v1?w=90&h=30&UUID=e2b9b6a3-0276-4675-9dc4-0e3563b54ccd&v=" +
        num;
    }
  },
    mounted() {
      this.imgUrl(167.53917932581786);
    },
    watch: {
        phoneNum(){
            if(this.phoneNum.length>0 && this.picNum.length>0 && this.checkNum.length>0){
                this.bool = false;
            }else{
                this.bool = true;
            }
        },
        picNum(){
            if(this.phoneNum.length>0 && this.picNum.length>0 && this.checkNum.length>0){
                this.bool = false;
            }else{
                this.bool = true;
            }
        },
        checkNum(){
            if(this.phoneNum.length>0 && this.picNum.length>0 && this.checkNum.length>0){
                this.bool = false;
            }else{
                this.bool = true;
            }
        }
    }
};
</script>


<style lang="scss">
.register {
  .header_reg {
    height: 50px;
        border-bottom: 1px solid #dfdfdf;
  }
  .reg {
    margin: 10px 20px;
    i {
      font-size: 20px;
      margin: 0 5px;
      vertical-align: middle;
    }
    .reg_con {
      height: 50px;
          border-bottom: 1px solid #dfdfdf;
      font-size: 14px;
      input {
        height: 30px;
        border: 0;
        margin: 5px 0;
        outline: none;
        width: 200px;
      }
      img {
        vertical-align: middle;
        width: 72px;
        height: 24px;
      }
      .btn {
        width: 60px;
        height: 30px;
        color: #9c9c9c;
        border-left: 1px solid #dfdfdf;
        background: #fff;
      }
    }
  }
  .agree {
    margin: 20px 0 0 20px;

    .check div {
      float: left;
    }
    span {
      font-size: 14px;
      margin: 0 4px;
      a {
        color: #3caaff;
      }
    }
  }
  .button {
    margin: 20px 20px 0 20px;
  }
}
</style>

