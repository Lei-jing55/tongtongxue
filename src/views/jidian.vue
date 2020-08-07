<template>
  <div class="s-header">
    <header class="headerones">
      <div style="text-align:left;margin-left:10px;">
        <router-link to="/">
          <img src="../../public/shouye/shouye18.jpg" />
        </router-link>
      </div>
      <div style="margin-top:0px;">机电工程</div>
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
    <section>
        <div v-for="(item, index) in items" :key="index" class="flex  gongcheng">
            
            <p><img :src="item.text" alt=""></p>
            <div>
                <p>{{item.text2}}</p>
                <p>{{item.text3}}</p>
            </div>
            <button>
                {{item.text1}}
            </button>
        </div>
    </section>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      items: [],
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
    created() {
    this.$http.get("https://www.fastmock.site/mock/50a7d0f6b3fd6f025d438d893bb86f7d/shuye/api/shouye").then((response) => {
       console.log(response.data.data.jidian)
       this.items = response.data.data.jidian
    })
  }, methods: {
    dian() {
      this.panduan = !this.panduan;
    }, onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  }
};
</script>

<style scoped>
.headerones img{
  width:25%;
}
    .gongcheng{
        /* width:100%; */
        /* height:70px;
        line-height: 70px; */
        border-bottom: 1px solid #e5e5e5;
        padding:5px 0 0px 10px;
        font-size:12px;
        position: relative;
    }
    .gongcheng img{
        height:60px;
    }
    .gongcheng div:nth-child(2)>p{
        margin:10px 0 0 10px;
        text-align: left;
    }
    .gongcheng button{
        position:absolute;
        right:20px;
        border-radius: 5px;
        top:20px;
    background: white;
    color: #5aabf8;
    border: 1px solid #5aabf8;
    width: 80px;
    height: 30px;
}
    
</style>