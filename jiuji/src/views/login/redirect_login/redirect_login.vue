<template>
    <!-- 头部 -->
    <div>
        <div class="header">
            <van-row>
            <van-col span="3" :style="con"><i class="icon icon-tubiaozhizuo-" ></i></van-col>
            <van-col span="18"  v-text="name" :style="style"></van-col>
            <van-col span="3" :style="con"><i class="icon icon-gengduo2" ></i></van-col>
            </van-row>
        </div>
        <div>
            <van-tabs>
                <van-tab >
                    <div slot="title">账号密码登陆</div>
                    <div class="login">
                        <van-cell-group>
                            <van-field
                                v-model="username"    
                                left-icon="contact"
                                placeholder="用户名/手机号"       
                                clearable       
                            />
                            <van-field
                                v-model="password"
                                type="password"
                                placeholder="请输入密码"
                                left-icon="lock"
                                clearable               
                            />
                        </van-cell-group>
                    </div>       
                </van-tab>
                 <van-tab>
                    <div slot="title" >短信验证码登陆</div>
                        <div class="login">
                            <van-cell-group>
                                <van-field
                                    v-model="usernames"
                                    left-icon="contact"
                                    placeholder="手机号码"
                                    class="username"
                                    clearable
                                />
                                <van-field
                                v-model ="passwords"
                                    type="password"
                                    placeholder="动态密码"
                                    left-icon="lock"
                                    class="psw"  
                                    clearable 
                                   
                                > <van-button slot="button" size="small" type="primary" >发送验证码</van-button>
                                </van-field>
                               
                            </van-cell-group>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <!-- 三个月免登录 -->
        <div class="login_status" >
           <span v-text="status"></span>
           <div class="login_right" ><van-switch v-model="checked" class="login_rights" size="20px" active-color="#09bb07"/></div>
        </div>
        <!-- 登陆按钮 -->
        <div class="btn">
            <van-button size="large" :style="color" :disabled="bool">登录</van-button>
        </div>
        <!-- loginIn losePassword -->
        <div class="l_lose">
            <a href="javascript:;" class="fl">新用户注册</a>
            <a href="javascript:;" class="fr">忘记密码</a>
        </div>
        <!-- qq登陆 -->
        <div class="login_qq">
            <span>第三方登录</span>
            <a href="javascript:;"><img src="../../../assets/login_qq.png" alt=""></a>
        </div>
        <div>



        </div>
    </div>
    
   
           
     
    
        
</template>



<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      usernames: "",
      passwords: "",
      bool: true,
      name: "登录",
      status: "三个月免登录",
      checked: true,
      color: {
        background: "#dfdfdf",
        color: "#fff"
      },
      style: {
        fontSize: "17px",
        textAlign: "center",
        lineHeight: "44px"
      },
      con: {
        lineHeight: "44px",
        textAlign: "center"
      },
      yuanjin: {
        margin: "0 15px"
      }
    };
  },
  watch: {
    username() {
      if (this.username.length > 0 && this.password.length > 0) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    },
    password() {
      if (this.username.length > 0 && this.password.length > 0) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    },
    usernames() {
      if (this.usernames.length > 0 && this.passwords.length > 0) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    },
    passwords() {
      if (this.usernames.length > 0 && this.passwords.length > 0) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    },
    
  },
 
};
</script>
<style lang="scss" >
.fl {
  float: left;
}
.fr {
  float: right;
}
.header {
  border-bottom: 1px solid #f1f4f8;
}
.checkAccount {
  margin: 15px 10px;
  span {
    font-size: 14px;
  }
}
.login {
  margin: 10px 20px;
  .username {
    border-bottom: 1px solid #dfdfdf;
  }
  .psw {
    border-bottom: 1px solid #dfdfdf;
  }
}
.login_status {
  border-bottom: 1px solid #dfdfdf;
  margin: 10px 20px;
  font-size: 14px;
  height: 40px;
  color: #7b7c7b;
  line-height: 40px;
  .login_right {
    float: right;

    .login_rights {
      vertical-align: middle;
    }
  }
}
// 按钮
.btn {
  margin: 40px 20px 20px 20px;
}
// 忘记密码
.l_lose {
  margin: 20px;
  overflow: hidden;
  a {
    color: #333;
    font-size: 14px;
    display: block;
  }
}
.login_qq {
  margin-top: 70px;
  text-align: center;
  span {
    color: #333;
    font-size: 14px;
    display: block;
  }
  img {
    margin: 15px;
    width: 34px;
    height: 34px;
  }
}
</style>



