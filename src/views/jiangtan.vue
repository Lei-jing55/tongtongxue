<template>
  <div>
      <header class="headerones">
      <div style="text-align:left;margin-left:10px;">
        <router-link to="/">
          <img src="../../public/shouye/shouye18.jpg" width="25%"/>
        </router-link>
      </div>
      <div style="margin-top:0px;">名师讲坛</div>
      <div style="text-align:right;margin-right:10px;margin-top:10px;color:#5aabf8;" @click="showShare = true"  >
          <img src="../../public/shouye/gongcheng3.jpg">
      </div>
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
    </header>
     <div style="margin-top:px;">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>            
            <img src="../../public/shouye/jiangtan.jpg" width="100%"/>
          </van-swipe-item>
          <van-swipe-item>            
            <img src="../../public/shouye/jiangtan.jpg" width="100%"/>
          </van-swipe-item>
          <van-swipe-item>            
            <img src="../../public/shouye/jiangtan.jpg" width="100%"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <section>
          <div style="margin-top:10px;">
            <img src="../../public/shouye/jiangtan1.jpg" width="70%">
          </div>
          <div class="zhishi">
              <p>知识胶囊></p>
              <p>3分钟·做一个博学而有趣的人</p>
          </div>
           <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in itemlist" :key="item">
                    <img :src="item.img" width="100%">
                </el-carousel-item>
            </el-carousel>
      </section>
      
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            showShare: false,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],
            itemlist:[
                {
                    img:require('../../public/shouye/jiangtan2.jpg')
                },
                {
                    img:require('../../public/shouye/jiangtan3.jpg')
                },
                {
                    img:require('../../public/shouye/jiangtan4.jpg')
                },
                {
                    img:require('../../public/shouye/jiangtan2.jpg')
                }
            ]
        }
    },
    methods: {
         onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        }
  }

}
</script>

<style scoped>
.headerones img{
  width:25%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* line-height: 100px; */
    text-align: center;
    background-color: #39a9ed;
  }
  .zhishi>P:nth-child(1){
      font-weight: bold;
      height:30px;
      line-height: 30px;
  }
  .zhishi>P:nth-child(2){
      color:#919191;
      font-size:12px;
      line-height: 20px;
  }
  .zhishi{
      margin-top:20px;
      margin-bottom: 20px;
  }
</style>