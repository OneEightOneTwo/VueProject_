<template>
<div class="search">
   <div class="input-serch">
      <van-search
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
  </div>
  <div class="hot">
    <h2 class="remen">热门搜索</h2>
    <div class="leixing">
      <a href="javascript:;">华为 p30</a>
      <a href="javascript:;">华为 p30</a>
      <a href="javascript:;">华为 p30</a>
      <a href="javascript:;">华为 p30</a>
      <a href="javascript:;">华为 p30</a>
      <a href="javascript:;">华为 p30</a>
      <a href="javascript:;">华为 p30</a>
    </div>
  </div>
  <div class="ranking-list">
    <a href="javascript:;" class="ranking-list-item clearfix " style="border-bottom: 1px solid #dfdfdf;">
      <i class="icon icon-sousuo1 fl"></i><span class="fl title">手机热销排行榜</span><span class="fl active">榜单</span><i class=" icon icon-icon-arrow-right2 fr"></i>
    </a>
    <a href="javascript:;" class="ranking-list-item clearfix">
       <i class="icon icon-sousuo1 fl"></i><span class="fl title">OPPO Reno 预订最高享466换新补贴</span><span class="fl active">新品</span><i class="fr icon icon-icon-arrow-right2"></i>
    </a>
  </div>
  <div class="history">
    <div class="clearfix lishi"><span class="fl">搜索历史</span> <a href="javascript:;" class="fr clear"> <i class="icon icon-qingchu2"></i> <span class="zi">清除</span></a></div>
    <div class="history-item clearfix"><a href="">荣耀20i</a><a href="">小米</a></div>
  </div>
</div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
  .hot{
    .remen{
      font-size: 15px;
      padding: 15px 10px 0;
      color: #000;
      font-weight: 500;
      font-size: 14px;
    }
    .leixing{
      padding: 15px 10px 20px;
      height: 28px;
      overflow-y: hidden;
      white-space: nowrap;
      overflow-x: auto;
      a{
        display: inline-block;
        padding: 0 10px;
        border-radius: 12px;
        box-sizing: border-box;
        height: 28px;
        line-height: 26px;
        font-size: 12px;
        margin-right: 10px;
        border: 1px solid #ededed;
        background: #f5f5f5;
      }
    }

  }
  .ranking-list{
    padding: 10px 0px;
    background:#f5f5f5;
    .ranking-list-item{
      display: block;
      padding: 15px 0px;
      background: #fff;
      line-height: 22px;
      .icon-sousuo1{
        font-size: 14px;
        margin-left: 10px;
      }
      .icon-icon-arrow-right2{
        font-size: 14px;
        color:#ccc;
        margin-right: 10px;
      }
      .active{
        padding: 0 5px;
        background: rgba(200,15,30,.1);
        display: inline-block;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        border-radius: 8px;
        color: #f21c1c;
        margin-left: 5px;
        margin-top: 3px;
      }
      .title{
        margin-left:5px;
      }
    }
  }
  .lishi{
    padding: 15px 10px 0;
    color: #000;
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
  }
  .icon-qingchu2:before{
    color: #000;
    font-weight: 500;
    font-size: 15px;
  }
  .zi{
    color: #000;
    font-weight: 500;
    font-size: 15px;
  }
  .history-item{
    padding:10px;
    a{
      float: left;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;
      background-color: #f5f5f5;
      margin: 5px;
      padding: 0 10px;
      font-size: 12px;
      min-width: 30px;
    }
  }
</style>
